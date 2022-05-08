/// <reference types="cypress" />

describe('Assertivas', () => {

    before(() => {
        cy.visit("http://demo.automationtesting.in/");
        cy.get("#email").should("be.visible");
        cy.get("#email").type("teste@gmail.com");
        cy.get("#enterimg").click();
        cy.get("h2").should("have.text", "Register");
    });

    it('Preenchimento com sucesso', () => {
        cy.get("input[placeholder*='First Name']").type("Dayane");
        cy.get("input[placeholder*='Last Name']").type("Freitas");
        cy.get("textarea[ng-model='Adress']").type("Meu Endereco Aqui");
        cy.get("input[type='email']").type("teste@gmail.com");
        //Validar formato do numero de telefone 
        //formato americano = +16175551212
        cy.get("input[type='tel']").type("+16175551212");
        cy.get("input[value='FeMale']").click();
        cy.get("input[type='checkbox']").check("Cricket");
        cy.get("input[type='checkbox']").check("Hockey");
        cy.get('#msdd').click();
        cy.get('li').contains('Portuguese').click();
        cy.get('div').contains('Languages').click();
        cy.get("select[id = 'Skills']").select('APIs');
        //cy.get("select[id = 'countries']").select('');
        cy.get("span[role='combobox']").click();
        cy.get("input[type='search']").type("Japan");
        cy.get("#select2-country-results").contains("Japan").click();
        cy.get("#submitbtn").click();

    });

    it('Validar formato do número de telefone', () => {
        cy.get("input[type='tel']").type("");
    });
    
});