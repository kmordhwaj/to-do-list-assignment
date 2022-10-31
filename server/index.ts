const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


const tasksRoute = require('./routes/Tasks.ts');
const categoriesRoute = require('./routes/Categories.ts');
const usersRoute = require('./routes/Users.ts');
const authJwt = require("./helpers/Jwt.ts");
const errorHandler = require("./helpers/ErrorHandler.ts");

// starting the server
const app = express();

app.use(cors());
app.options('*', cors());

//initializing dotenv
dotenv.config();
// using data from dotenv
const mongourl = process.env.MONGO_URL;
const api = process.env.API_URL;

//middlewares
app.use(bodyParser.json()); // to parse json data
app.use(morgan('tiny'));  //to display our http requests
app.use(authJwt);

app.use(errorHandler);

app.use(`${api}/tasks`, tasksRoute); //routers
app.use(`${api}/categories`, categoriesRoute); //routers
app.use(`${api}/users`, usersRoute); //routers

// starting mongodb server and connecting
mongoose.connect(mongourl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'logicalloop'
}).then(() => {
    console.log('connected to databse');
}).catch((error) => {
    console.log(error);
});

//listning on server
app.listen(3300, ()=> {
    console.log('our server is running now at http://localhost:3300 port');
});