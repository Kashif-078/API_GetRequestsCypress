# API_GetRequestsCypress
This code represents a test suite written using Cypress, a JavaScript end-to-end testing framework, to verify the functionality and responses of different GET requests made to the API endpoints.

The code starts by defining an array getEndpoints that contains a list of API endpoints to be tested. To ensure uniqueness, the array is transformed into uniqueEndpoints using a Set.

Before running the tests, a before hook is executed. Inside this hook, a POST request is sent to authenticate with the application by providing the email and password. Upon successful authentication, the authentication token is extracted from the response and stored in the authToken variable for subsequent requests.

The test suite consists of a single test case, "Get Requests," which focuses on testing the GET requests to the API endpoints. It follows these steps:

Iterates through a list of unique endpoints to be tested.
Sends a GET request to each endpoint by concatenating the server URL and the endpoint.
Includes the authentication token in the request headers for authorization.
Verifies that the response status is 200 (indicating a successful request) and that the response body is not null.
Logs the response body to the console for reference.

This code can be used as a starting point to perform API testing. It provides a basic structure to test GET requests, and additional test cases can be added to cover other HTTP methods such as POST, PUT, and DELETE. The code can be integrated into a continuous integration pipeline or executed manually to ensure the API endpoints are functioning correctly.
