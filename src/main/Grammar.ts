

interface GrammarNode {
    allPossibleValues(): Array<String>
}

class Literal implements GrammarNode {
    value: String
    constructor(value: String) {
        this.value = value
    }

    allPossibleValues() {
        return [this.value]
    }
}

class Conjunction implements GrammarNode {
    children: GrammarNode[]
    constructor(...children: GrammarNode[]) {
        this.children = children
    }

    allPossibleValues() {
        const possibleSequences = cartesian(...this.children.map(child => child.allPossibleValues()))
        return possibleSequences.map(sequence => sequence.join(''))
    }
}

class Disjunction implements GrammarNode {
    children: GrammarNode[]
    constructor(...children: GrammarNode[]) {
        this.children = children
    }

    allPossibleValues() {
        return this.children.reduce((allValues: String[], child) => allValues.concat(child.allPossibleValues()), [])
    }
}

class Optional implements GrammarNode {
    value: GrammarNode
    constructor(value: GrammarNode) {
        this.value = value
    }

    allPossibleValues() {
        return ['', ...this.value.allPossibleValues()]
    }
}

// Taken from https://stackoverflow.com/a/42873141/5698865
function cartesian(...arr: String[][]): String[][] {
    return arr.reduce((a: String[][], b) =>
    a.map(x => b.map(y => x.concat(y)))
    .reduce((a, b) => a.concat(b), []), [[]]);
}

export { GrammarNode, Literal, Conjunction, Disjunction, Optional, cartesian }
