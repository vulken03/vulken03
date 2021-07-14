const express = require("express");
const bodyParser = require("body-parser");
const path=require('path');

require("dotenv").config();

require("./models/user_registration")

//global.__basedir = __dirname;

const api=require("./router");


const app = express();


app.use(express.json());

//app.use(express.static('public'));

app.use('/uploads',express.static('uploads'));

app.use('/posts',express.static('posts'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1",api);

app.set('view engine','ejs');

app.set('views ',path.resolve(__dirname)+'/views')

//app.use(middlewares.notFound);

//app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});