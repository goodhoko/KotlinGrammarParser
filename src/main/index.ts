import * as cheerio from 'cheerio'
import { readFileSync, readdirSync } from 'fs'
import { GrammarNode, Literal } from './Grammar'

const html = readFileSync('./grammar.html')
const $ = cheerio.load(html)

const start = $(`#IntegerLiteral`)
console.log(handleNode(start).allPossibleValues())

function handleNode(node: Cheerio): GrammarNode {
    switch (node.attr('class')) {
        case 'grammar-declaration-name':
            return handleGrammarDeclaration(node)
        default:
            throw Error('TODO')
    }
}

function handleGrammarDeclaration(node: Cheerio): GrammarNode {
    const children = node
            .parents('.grammar-item')
            .children('.grammar-description')
            .children()
            .filter((_: Number, element: CheerioElement) => $(element).text().trim() !== '');

    
    return new Literal(children.text())
}

// const nonEmpty =  //