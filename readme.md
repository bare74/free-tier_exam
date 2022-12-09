<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>

# DATABASE OF RECIPIES

## Description

_This is a database for storing and retriving food Recipies. With several endpoints See documentation under_

## HTTP Methods

- _GET - Requests retrieve resource information_
- _POST - The server creates a new entry in a database_
- _PUT - Update the resource_
- _PATCH - Update singel resource_
- _DEL - Delete the resource_

## FREE TIER

|       Name       | Request type |              Endpoint               |                                                            Body                                                            |
| :--------------: | :----------: | :---------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|       Get        |    `GET`     |    http://localhost:8080/recipes    |                                  { name:"string", ingredients:"string", steps:"number" }                                   |
|   Get Recipes    |    `GET`     |   http://localhost:8080/recipes/?   |                          { name:"string", ingredients:"string"}[{entry:"string, type:"string" }]                           |
|  Get All steps   |    `GET`     | http://localhost:8080/recipes/?/all | { name:"string"},{ingredients:"string"},[{entry:"string, type:"string" }]{steps:"string"}[{stepsId:number, text:"string"}] |
| Get single steps |    `GET`     |  http://localhost:8080/recipes/?/?  |                                   { steps:"string"}[ {stepsId: number, text:"string" }]                                    |

## PREMIUM TIER

|       Name       | Request type |               Endpoint                |                                    Body                                     |
| :--------------: | :----------: | :-----------------------------------: | :-------------------------------------------------------------------------: |
|       Get        |    `GET`     | http://localhost:8080/premium/recipes | { name:"string", category:"string", ingredients:"string", steps:"number" }  |
|    Get Search    |    `GET`     |    http://localhost:8080/search/??    |          { search:"string" }[{results:"string", "/string/number"}]          |
| Get Ingredients  |    `GET`     |   http://localhost:8080/ingredients   | { result:"string"},{ingredients:"string"},[{entry:"string, type:"string" }] |
| Get single steps |    `GET`     |   http://localhost:8080/recipes/?/?   |            { steps:"string"}[ {stepsId: number, text:"string" }]            |

## ADMIN TIER

|      Name      | Request type |            Endpoint             |                                                            Body                                                            |
| :------------: | :----------: | :-----------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|      Add       |    `POST`    | http://localhost:8080/admin/add | { name:"string"},{ingredients:"string"},[{entry:"string, type:"string" }]{steps:"string"}[{stepsId:number, text:"string"}] |
|     Update     |   `PATCH`    | http://localhost:8080/recipe/?  |                                                        {any: "any"}                                                        |
| Replace recipe |    `PUT`     | http://localhost:8080/recipe/?  | { name:"string"},{ingredients:"string"},[{entry:"string, type:"string" }]{steps:"string"}[{stepsId:number, text:"string"}] |
| Delete recipe  |    `DEL`     | http://localhost:8080/recipes/? |                                                                                                                            |

## Auth autetication inspired by

- _https://github.com/WebDevSimplified/nodejs-user-permissions/tree/master/before_

## Setup/Installation Requirements

- _Mkdir «foldername»_
- _touch .gitignore_
- _www.gitignore.io_
- _touch server.js_
- _touch data.js_
- _touch database.js_
- _touch basicAuth.js_
- _git init_
- _npm init_
- _npm install_
- _npm install body-parser_
- _npm install express_
- _npm install sqlite3_
- _npm install nodemon_
- _npm install cookie-parse_
- _npm install path_
- _npm install router_

- _npm init - is a convenient way of scaffolding your package json you may need to run it everytime you are starting a new project_

- _npm install - installs your dependencies in node modules folder. You may need to run this everytime you manually add a dependency to your package_

- _Morgan - This is a great tool that logs the requests along with some other information depending upon its configuration and the preset used. It proves to be very helpful while debugging and also if you want to create Log files_

- _Body-parser - Responsible for parsing the incoming request bodies in a middleware before you handle it, that usually helps when you need to know more than just the URL being hit_

- _Express - It is used to build a single page, multipage, and hybrid web application helps us complete these transactions by helpfully augmenting the built in Request and Response objects that the Node. js core http module provides when a request is received by your server_

- _sqlite3 - is a relational database. The details related to a database is stored in a file. Copying a database from one machine to another is just a file with no complex commands or anything_

- _nodemon - is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected_

- _In the package.json file you can change the "scripts" to : {"start": "node app.js"} then you can run nodemon in the server and the server is up and running_

## Contact Information

_Bjørn A. Nielsen_
