const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const models = require("./model/index");

// setting up server
const app = express();
const server = http.createServer(app);

// allow Cross-Origin-Resource-Sharing
app.use(cors());

const middlewares = [bodyParser.urlencoded(), bodyParser.json()];
app.use(middlewares);


// #region mongoose configuration
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://test:abcd1234@ds013991.mlab.com:13991/todo-sample1?retryWrites=false", { useFindAndModify: false });

models.initializeModels();
// #endregion

const Todo = mongoose.model('Todo');


// ROUTES/APIs

app.get("/api/test", (req, res) => {
  res.send("Success!");
});

// post is used for getting data
app.get("/api/todos", async (req, res) => {

  const result = await Todo.find({ });

  res.send(result);
});

// post is used for inserting data
app.post("/api/todos", async (req, res) => {

  const { name } = req.body; //ES6 destructuring

  const result = await new Todo({ name: name, completed: false });

  const dbResponse = await result.save(); //saves data to DB

  res.send(dbResponse);
});




const PORT = 5000;
server.listen(PORT);