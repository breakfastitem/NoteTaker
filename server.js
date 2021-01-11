const express = require("express");

const PORT = process.env.PORT;

//use the application off of express.
const app = express();

//middleWare for post and pull
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT);

console.log(`server at http://localhost:${PORT}  ...`);