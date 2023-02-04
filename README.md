# RS-Network-server
Back-end for RS-Network project

## Registration
Create a new RS-Network user

 * **URL:**
   ```bash
    /users
    ```
 * **Method:**
   ```bash
    POST
    ```
 * **URL params:**
  
   Not provided
 * **Query params:**
  
   Not provided
 * **Request body:**

  ```json
  {
    "name": "testName",
    "email": "testEmail@example.com",
    "password": "testPassword",
  }
  ```
 * **Success response:**
  
  Status code: 201

  Content:
  ```json
    {
      "name": "testName",
      "email": "testEmail@example.com",
      "image": "",
      "age": 0,
      "location": "",
      "followers": [],
      "password": "$2b$08$wKbU0VMu5zC0OIGCOu7uieovf3fTK5TdRZVbgQVxPNJ3q3IzpQzUq",
      "about": "",
      "_id": "63de4a6dc8fb48d8b972bb16",
      "__v": 0
  }
  ```
 * **Error response:**
  1. If email already exists in database:

  Status code: 400

  Content:
  ```json
   {
    "name": "Request error",
    "message": "Email is already taken!"
   }
  ```
   1. In case server errors:

  Status code: 500

  Content: string error message

