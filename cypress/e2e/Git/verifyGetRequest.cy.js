describe('Pharmacy Revamp', () => 
{
    
    let authToken, 
    server = 'sample.server.pk';   // Replace this server value with your actual server value

    const getEndpoints = 
    [
        //Place your URLS here
    ]

    // To filter out unique entries
    const uniqueEndpoints = [...new Set(getEndpoints)]; 

    before(() => 
    {
        cy.log(getEndpoints.length + 'ActualArray')
        cy.log(uniqueEndpoints.length + 'Unique')
        cy.request({
        method: 'POST',
        url: 'https://buch.healthwire.pk/a/login',
        body: 
        {
          email: 'place your email address here',
          password: 'place your password here'
        }
        }).then((response) => 
        {
            expect(response.status).to.eq(200);
            authToken = response.body.auth_token;
        });
  
        Cypress.on('uncaught:exception', (err, runnable) =>
        {
            // Returning false here prevents Cypress from failing the test
            return false;
        })
    })
  
    context('To Test All Api\'s', () => 
    {
        it('Get Requests', () => 
        {
            uniqueEndpoints.forEach((endpoint) => 
            {
                cy.request({
                    method: 'GET',
                    url: `${server}${endpoint}`,
                    headers: 
                    {
                        Authorization: `Bearer ${authToken}`
                    }
                }).then((response) => 
                {
                    expect(response.status).to.equal(200);
                    expect(response.body).not.to.be.null;
                    console.log(response.body);
                })
            })     
        })
    })
})
