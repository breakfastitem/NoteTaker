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

//Post Methods
app.post("/api/notes", (req,res)=>{

    const note = {
        title:req.body.title,
        text:req.body.text
    };

    if(note.title==undefined||note.text==undefined){
        res.sendStatus(400);
    }

    fs.readFile(__dirname+"/db/db.json",(err,data)=>{
        if(err) return err;

        let notesObject = JSON.parse(data);

        notesObject.push(note);

        fs.writeFile(__dirname+"/db/db.json",JSON.stringify(notesObject),(err)=>{
            if(err) return err;

            res.sendStatus(200);
        });
    });
    
});


app.listen(PORT);

console.log(`server at http://localhost:${PORT}  ...`);