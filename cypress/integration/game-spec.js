import { simpsonsQuoteTest, simpsonsQuoteTest1 } from './simpsonsQuoteData';

describe('Gameplay flow', ()=> {
    it('Should be able to go through a game of Who Said It? and add a point to Woohoo!', () => {
        cy.intercept('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes', simpsonsQuoteTest)
        cy.visit('http://localhost:3000/home')
        cy.get('.quote-button').click()
            .get('div')
                .should('have.class', 'character-name')
            .get('p')
                .contains("It's Homer Simpson!")
            .get('img')
                .should('have.class', 'simpsons-character')
            .get('p')
                .should('have.class', 'guess')
                .contains('Is this who you guessed?')
            .get('button')
                .should('have.class', 'woohoo-button')
                .contains('Woohoo!')
            .get('button')
                .should('have.class', 'doh-button')
                .contains("D'oh!")
        cy.get('.woohoo-button').click()
        cy.visit('http://localhost:3000/woohoo')
            .get('div')
                .should('have.class', 'woohoo-heading')
            .get('h3')
                .contains('Woohoo!')
            .get('h3')
                .contains('+1')
            .get('button')
                .should('have.class', 'play-again-container')
                .contains('Play again!')
        cy.get('button').click()
            .get('h2')
                .contains('Woohoo: 1')
    })
    it('Should be able to go through a game of Who Said It? and add a point to Woohoo!', () => {
        cy.intercept('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes', simpsonsQuoteTest1)
        cy.visit('http://localhost:3000/home')
        cy.get('.quote-button').click()
            .get('div')
                .should('have.class', 'character-name')
            .get('p')
                .contains("It's Chief Wiggum!")
        cy.get('.doh-button').click()
        cy.visit('http://localhost:3000/doh')
            .get('div')
                .should('have.class', 'doh-heading')
            .get('h3')
                .contains("D'oh!")
            .get('h3')
                .contains('+1')
        cy.get('button').click()
            .get('h2')
                .contains("D'oh: 1")
    })
})