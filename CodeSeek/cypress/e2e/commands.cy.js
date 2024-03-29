Cypress.Commands.add('bypassCloudflare', () => {
    cy.intercept('**/*', (req) => {
        if (req.url.includes('cloudflare')) {
            req.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36';
        }
    });
});