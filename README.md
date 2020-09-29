
# Node.js SQL to REST - MySQL / POSTGRES / SQLITE


## Included Modules

- Morgan Logger
- Multer Upload Handler
- Bodypaser
- Jwt
- Cors
- Express
- Next.js
- Sequlize
- Helmet
- Webpack
- .env

## Files And Folders

- server-config.json -> CORS, HELMET, JWT and some other options
- /public -> assets
- /log -> morgan server logs
- /src/bin -> basic server modules
- /src/includes -> express middelware
- /src/routes/ -> express routes
- /src/pages/-> next.js paghes
- /src/pages/api -> next.jss api routes
- /data -> sql example data
- /docker -> mysql / postgres docker config
- /config -> sequlize db setup
- /migrations -> sequlise cli migrations
- /seeders -> sequlise cli seeders

## Use

1. yarn run install
2. npx sequelize-cli db:migrate
3. npx sequelize-cli db:seed --seed 20200602234904-demo-user
4. yarn run dev
5. visit http://localhost/api/db/users

```
With default configuration you will get an express server serving some api routes from sqlite.
You can customize this in diffrent ways like the following.
```

### Sequlize
```
Sequlize unfiys all SQL dialects. You can use excat the same syntax for every dialect. 
```
1. open /src/config/config.js
2. setup your environments annd database connection here
3. create a new database model here /src/sequlize/Models 
4. create your queryss for the new model here /src/sequlize/querys

### Docker
```
If you want to use MySQL or Postgres instad of sqlite the doocker folder has everything you need.
Don´t forget to change the /src/config/config.js to make sequlize use the connection.
```

### Server
```
You can just switch to Next.js by editing the server-config.json.
Change "server": "express" to   "server": "next" eveything else is already setup.
```

### Scripts

- yarn run install
- yarn run start -> prod mode
- yarn run dev -> dev mode 
- yarn run build -> next build
- yarn run format -> format files with prettier


## Routes
```
We have some default routes for you. They work in Express and Next.js.
```
- GET http://localhost/api/ -> api / server status
```
curl --location --request GET 'http://localhost/api/'
```
- GET http://localhost/api/db/users/ -> list all users
```
curl --location --request GET 'http://localhost/api/db/users/'
```
- GET http://localhost/api/db/users/:id -> find user by id
```
curl --location --request GET 'http://localhost/api/db/users/10'
```
- GET http://localhost/api/db/users/search/:email -> search user by email
```
curl --location --request GET 'http://localhost/api/db/users/search/dis.parturient@sapien.org'
```

- POST http://localhost/api/db/users/:email -> create new user if not exists form-data with the following fields is expected "email,first,last"
```
curl --location --request POST 'http://localhost/api/db/users/user@example.com' \
--form 'email=user@example.com' \
--form 'firstname=firstname' \
--form 'lastname=lastname'
```
- DELETE http://localhost/api/db/users/:email -> delete user 
```
curl --location --request DELETE 'http://localhost/api/db/users/user@example.com'
```

- UPDATE http://localhost/api/db/users/:email -> update user form-data with the following fields is expected "email,first,last"
```
curl --location --request PATCH 'http://localhost/api/db/users/user@example.com' \
--form 'email=user@example.com' \
--form 'firstname=new name' \
--form 'lastname=new last name'
```
