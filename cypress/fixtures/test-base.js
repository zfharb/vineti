var baseURL = 'https://www.demoblaze.com';

export function visitBaseURL() {
    cy.visit(baseURL, { timeout: 20000 });

};