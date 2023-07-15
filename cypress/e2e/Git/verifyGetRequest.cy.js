describe('Pharmacy Revamp', () => 
{
    
    let authToken, server = 'buch.healthwire.pk';

    const getEndpoints = 
    [
        '/admin/pharmacy/items/card_data.json',
        '/admin/pharmacy/audit_logs/dashboard_activies',
        '/admin/pharmacy/items',
        '/admin/pharmacy/items/top_selling_items',
        '/admin/pharmacy/items/pharmacy_item_card',
        '/admin/pharmacy/items/pharmacy_items',
        '/admin/pharmacy/stock_returns/get_stock_returns',
        '/admin/pharmacy/item_classifications/categories',
        '/admin/pharmacy/manufacturers/pharmacy_manufacturers',
        '/admin/pharmacy/pharmacy_racks/get_practice/only.json',
        '/admin/pharmacy/inventory_suppliers/total_suppliers',
        '/admin/pharmacy/item_classifications/total_classifications',
        '/admin/pharmacy/manufacturers/total_manufacturers',
        '/admin/pharmacy/pharmacy_racks/racks',
        '/admin/pharmacy/pharmacy_racks',
        '/admin/pharmacy/items/total_items',
        '/admin/pharmacy/inventory_suppliers/supplier_search',
        '/admin/pharmacy/item_classifications/fetch_item_classifications',
        '/admin/pharmacy/manufacturers/manufacturer_search',
        '/admin/pharmacy/items/fetch_items',
        '/admin/pharmacy/stores/fetch_stores.json',
        '/admin/pharmacy/items/fetch_pharmacy_items',
        '/admin/pharmacy/items/fetch_pharma_drug_items',
        '/admin/pharmacy/stocks/fetch_stocks',
        '/admin/pharmacy/consume_stocks/search_by_item',
        '/admin/pharmacy/transfer_stocks/fetch_transfer_stocks',
        '/admin/pharmacy/orders/get_purchase_orders',
        '/admin/pharmacy/orders/fetch_purchase_orders',
        '/admin/pharmacy/purchase_requisitions/pharmacy_requisitions',
        '/admin/pharmacy/purchase_requisitions',
        '/admin/pharmacy/purchase_requisitions/fetch_requisitions',
        '/admin/pharmacy/purchase_requisitions/fetch_departments',
        '/admin/pharmacy/audit_logs/getAuditData',
        '/admin/pharmacy/missed_sales/get_missed_sales',
        '/admin/pharmacy/missed_sales/get_missed_sale_ids',
        '/admin/pharmacy/stock_returns/get_stock_returns',
        '/admin/pharmacy/stock_returns',
        '/admin/pharmacy/consume_stocks/get_consume_stock',
        '/admin/pharmacy/consume_stocks',
        '/admin/pharmacy/transfer_stocks/get_transfer_stock',
        '/admin/pharmacy/transfer_stocks/new',
        '/admin/pharmacy/transfer_stocks/fetch_items',
        '/admin/pharmacy/items/fetch_pharmacy_items',
        '/admin/pharmacy/items/fetch_pharma_drug_items',
        '/admin/pharmacy/stocks/fetch_stocks',
        '/admin/pharmacy/consume_stocks/search_by_item',
        '/admin/pharmacy/transfer_stocks/fetch_transfer_stocks',
        '/admin/pharmacy/orders/get_purchase_orders',
        '/admin/pharmacy/orders/fetch_purchase_orders',
        '/admin/pharmacy/audit_logs/getAuditData',
        '/admin/pharmacy/missed_sales/get_missed_sales',
        '/admin/pharmacy/missed_sales/get_missed_sale_ids',
        '/admin/pharmacy/stock_returns/get_stock_returns',
        '/admin/pharmacy/stock_returns',
        '/admin/pharmacy/consume_stocks/get_consume_stock',
        '/admin/pharmacy/consume_stocks',
        '/admin/pharmacy/adjustments',
        '/admin/pharmacy/adjustments/new',
        '/admin/pharmacy/adjustments/get_adjustments'
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