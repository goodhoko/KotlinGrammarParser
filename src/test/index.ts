const test = require('baretest')('tests')
import { deepEqual,  } from 'assert'
import { cartesian, Conjunction, Disjunction, Optional, Literal } from "../main/Grammar";

test('cartesian', function() {
    deepEqual(JSON.stringify(cartesian(['a', 'b'], ['c', 'd'])), JSON.stringify([['a','c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]))
})

test('basic conjunction', () => {
    const s = new Conjunction(new Literal('a'), new Literal('b'))
    deepEqual(s.allPossibleValues(), ['ab'])
})

test('basic disjunction', () => {
    const s = new Disjunction(new Literal('a'), new Literal('b'))
    deepEqual(s.allPossibleValues(), ['a', 'b'])
})

test('conjunction with disjunction', () => {
    const s = new Conjunction(new Literal('a'), new Disjunction(new Literal('b'), new Literal('c')))
    deepEqual(s.allPossibleValues(), ['ab', 'ac',])
})

test('optional', () => {
    const s = new Optional(new Literal('a'))
    deepEqual(s.allPossibleValues(), ['', 'a',])
})

test.run()
