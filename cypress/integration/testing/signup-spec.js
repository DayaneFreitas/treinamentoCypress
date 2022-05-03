/// <reference types="cypress" />

describe("Página inicial", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Acesso a página com formulário", () => {
    cy.get("#email").type("teste@gmail.com");
    cy.get("#enterimg").click();
    cy.get("h2").should("have.text", "Register");
  });
});
