/// <reference types="cypress-downloadfile"/>
it('file uploaddemo',function()
{
 cy.visit('https://trytestingthis.netlify.app/')
 cy.get('#myfile').attachFile('example.json')

})
it('file download test',function()
{

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg','MyCustomAgentName')

})
