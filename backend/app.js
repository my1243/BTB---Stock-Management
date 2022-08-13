const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");


const User = require("./models/reg");
const Favourite = require("./models/fav");
const Todo = require("./models/todo");
app.use(express.json());
app.use(require("./routers/auth"));


app.get('/', (req, res) => {
    res.send("hello hiya");
});

app.listen(port , () => {
    console.log(`server is running at ${port}`);
})
