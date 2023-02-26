# RS-Network-server
Backend for RS-Network project (*all actual code located in develop branch*).

## About
Server is is temporarily deployed to [Railway app](https://rs-network-production.up.railway.app/).

If the remote server is not available, you can start it locally by following the instructions below:
1. Clone this repository.
2. Get .env file [here](https://drive.google.com/file/d/1uynDL4xHU8_IwAM5CJUuublueECooi3i/view?usp=sharing) and place it to root folder.
3. Run npm install.
4. Run npm start.

## Tech stack
Sever is running on Node.js and Express.

In addition, the main libraries used are:
- Cors - to set up cross-origin policy;
- Jsonwebtoken - for generating unique user authorization tokens;
- bcrypt - for encrypting user passwords;
- Mongoose - for server communication with MongoDB;
- Socket.io - for organizing the work of webSocket both on the server and on the client.

## Public API
### Please, do not use postman for editing or deleting existing entities!
<details> <summary>GET method endpoints:</summary>

**Get all registered users (include deleted ones):**
   ```bash
    /users
  ```
---------------------

**Get single user:**
   ```bash
    /users/:id
  ```
*where :id - unique user id*

---------------------

**Get user with validation permissons:**
   ```bash
    /permission
  ```
*authorization header with valid JWT required*

---------------------

**Get all user posts:**
   ```bash
    /user-posts/:userId
  ```
*where :userId - unique user id*

---------------------

**Get all thred posts (user and user's followings posts):**
   ```bash
    /thread-posts/:userId
  ```
*where :userId - unique user id*

---------------------

**Get single post:**
   ```bash
    /posts/:id
  ```
*where :id - unique post id*

---------------------

**Get single comment:**
   ```bash
    /comment/:id
  ```
*where :id - unique comment id*

---------------------

**Get all post comments:**
   ```bash
    /comments/:postId
  ```
*where :postId - unique post id*

---------------------

**Get all user's followers:**
   ```bash
    /following/:userId
  ```
*where :userId - unique user id*

---------------------

**Get all user's conversations:**
   ```bash
    /dialogs/:userId
  ```
*where :userId - unique user id*

---------------------

**Get all user's messages in conversation:**
   ```bash
    /messages/:dialogId
  ```
*where :dialogId - unique conversation id*

</details>

<details> <summary>POST method endpoints:</summary>

**Create new user:**
   ```bash
    /users
  ```
 Body:
 
```js
    {
      name: string,
      email: string,
      password: string,
      repeatedPassword: string,
    }
```
---------------------

**Log in:**
   ```bash
    /login
  ```
 Body:
 
```js
    {
      email: string,
      password: string,
    }
```
---------------------

**Create new post:**
   ```bash
    /posts
  ```
 Body:
 
```js
    {
      userId: string,
      date: number,
      description?: string,
      imageUrl?: string,
    }
```
---------------------

**Upload image:**
   ```bash
    /image-upload
  ```
 Body:
 
```js
    FormData {
      image: file
    }
```
---------------------

**Like post:**
   ```bash
    /likes/:postId
  ```
*where :postId - unique post id*

Body:
 
```js
    {
      userId: string,
    }
```
---------------------

**Create comment:**
   ```bash
    /comment
  ```
  
Body:
 
```js
    {
      postId: string,
      userId: string,
      date: number,
      description: string,
    }
```
---------------------

**Create conversation:**
   ```bash
    /dialogs
  ```
  
Body:
 
```js
    {
      members: [string, string],
    }
```

*where members - array of two users id*

---------------------

**Create message:**
   ```bash
    /messages
  ```
  
Body:
 
```js
    {
      dialogId: string,
      sender: string,
      text: string,
    }
```

</details>

<details> <summary>PATCH method endpoints:</summary>

**Update user:**
   ```bash
    /users/:id
  ```
*where :id - unique user id*

 Body:
 
```js
    {
      name?: string,
      email?: string,
      location?: string,
      image?: string,
      age?: number,
      followers?: sting[],
      about?: string
    }
```
*where followers - array of user's id*

---------------------

**Update post:**
   ```bash
    /posts/:id
  ```
*where :id - unique post id*

 Body:
 
```js
    {
      description?: string,
      imageUrl?: string,
      likes?: string[],
      comments?: string[],
    }
```
*where likes - array of user's id*

*where comments - array of comment's id*

---------------------

**Update comment:**
   ```bash
    /comment/:id
  ```
*where :id - unique comment id*

 Body:
 
```js
    {
      description: string,
    }
```

</details>

<details> <summary>DELETE method endpoints:</summary>

**Delete user entity from database:**
   ```bash
    /users/:id
  ```
*where :id - unique user id*

---------------------

**Delete user profile:**
   ```bash
    /users/remove/:id
  ```
*where :id - unique user id*

---------------------

**Delete post:**
   ```bash
    /posts/:id
  ```
*where :id - unique post id*

---------------------

**Delete comment:**
   ```bash
    /comment/:id
  ```
*where :id - unique comment id*

</details>

