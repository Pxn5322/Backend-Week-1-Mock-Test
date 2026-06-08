### Manage Books with SQL and Express

#### Task:

Write an Express.js application that allows users to add and retrieve books using SQL.


#### Instructions:

1. **Create a Books Table using NeonConsole:**

   - Columns:
     - id - primary key, auto-increment
     - title - string
     - author - string
     - year_published - integer

2. **POST /books: Add a New Book**

   - Implement a route that accepts a JSON body with:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "year_published": 1925
    }
      ```
   - Validate the inputs:
     - title and author are required strings
     - year_published is a required integer

   - Insert the book into the SQL table
   - Respond with the newly added book in JSON format
   - Handle errors (e.g., invalid input) and return an appropriate error message

3. **GET /books: Retrieve All Books**
   - Implement a route that fetches all books from the SQL table
   - Return the results as JSON
   - Example response:
     ```json
     [
       {
         "id": 1,
         "title": "1984",
         "author": "George Orwell",
         "year_published": 1949
       },
       {
         "id": 2,
         "title": "Animal Farm",
         "author": "George Orwell",
         "year_published": 1945
       }
     ]
     ```

4. **Error Handling:**
   - If the POST request body is invalid, return a 400 status with a JSON error message
   - Ensure SQL errors are caught and returned as JSON
 


5. **Expected Interactions:**

   - **POST /books:**

     - Add a new book with valid inputs
     - Example request:
       ```json
       {
         "title": "Brave New World",
         "author": "Aldous Huxley",
         "year_published": 1932
       }
       ```
     - Response:
       ```json
       {
         "id": 3,
         "title": "Brave New World",
         "author": "Aldous Huxley",
         "year_published": 1932
       }
       ```

   - **GET /books:**
     - Retrieve all books
     - Response should include all books added so far in the table

6. **Reference:**
   - Creating an Express application: https://expressjs.com/en/5x/api.html
     
   - Express Routing: https://www.w3schools.com/nodejs/nodejs_express.asp#BasicRouting 

   - PostgreSQL with Node.js: Connection: https://neon.com/docs/guides/express (node-postgres)
	
   - PostgreSQL with Node.js: Query: https://marmelab.com/postgres-queries/pool.html 

   - PostgreSQL CREATE Table: https://www.w3schools.com/postgresql/postgresql_create_table.php 

   - PostgreSQL SELECT: https://www.w3schools.com/postgresql/postgresql_select.php 

   - PostgreSQL INSERT: https://www.w3schools.com/postgresql/postgresql_insert_into.php 

  

