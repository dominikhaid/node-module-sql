# SQL (sqlite / mysql / postgres)

## Discription

---

This module is developed to extend our base server. It can be easily installed with the Plugin script from the base module. For detailed Information please see [@base-server](https://github.com/dominikhaid/node-base-server.git)

### Module Features

- Add support for sql dialects sqlite, mysql and postgres
- Add ready to use docker-compose for mysql annd mysqladmin
- Add ready to use docker-compose for postgres annd pgadmin4
- Add sample data, functions and routes



### Setup

---

> git clone https://github.com/dominikhaid/node-base-server.git my-app
> 
> cd my-app
> 
> npm run plguin p=https://github.com/dominikhaid/node-module-sql.git
> 
> npx sequelize-cli db:migrate
> 
> npx sequelize-cli db:seed --seed 20200602234904-demo-user
> 
> npm run dev
> 
> visit http://localhost/api/db/users

**NOTE:**  all endpoinnts are documented in ./src/http




### Sequlize
```
Sequlize unfiys all SQL dialects. You can use excat the same syntax for every dialect. 
```
- ./src/config/sql-config.json




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
