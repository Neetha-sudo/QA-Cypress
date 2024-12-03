it('Read File using fixture',function(){
cy.fixture('example.json').then((data)=>{
    cy.log(data.name)
    cy.log(data.body)
    //cy.writeFile()
})
})

it('read file usong readFiile',function()
{
    cy.readFile('./cypress/fixtures/example.json').then((dataread)=>
    {
        cy.log(dataread.email)
    })
    cy.readFile('./myfile.txt').then((datareadding)=>
    {
    cy.log(datareadding)
    })

})
it('write file',function()
{
    cy.writeFile('myfile.txt','Hello, I am Neetha')
})


