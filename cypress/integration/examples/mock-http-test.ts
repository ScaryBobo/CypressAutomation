/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
    let testData: any
    before(() => {
        cy.fixture('example').then(function(val: any){

            testData = val;

        }) 
    })
 
    it('My FirstTest case',function() {
    
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.log(">>>> testData" + JSON.stringify(testData.name));
    
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
    
        req.continue((res)=>
        {
        // expect(res.statusCode).to.equal(403)
        })
    }
    ).as("dummyUrl")
    
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@dummyUrl')
    })
    it('Second test case', () => {
        cy.visit('www.google.com');
        cy.get('img[alt="Google"]').should('be.visible');
    })
 
})