const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT;

//use the application off of express.
const app = express();

//middleWare for post and pull
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allow app to use public folder.
app.use(express.static(__dirname+"/public"));

//Get Methods
app.get("/notes", (req,res)=>{
    res.sendFile(__dirname+"/public/notes.html");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.get("/api/notes", (req,res)=>{
    res.sendFile(__dirname+"/db/db.json");
});


app.listen(PORT);

console.log(`server at http://localhost:${PORT}  ...`);