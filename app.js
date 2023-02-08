import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";

dotenv.config();


//connection to the DB
conn();

const app = express();

//ejs template engine
app.set("view engine", 'ejs');



//static files middleware
app.use(express.static('public'));


const port = process.env.PORT;


app.get("/", (req, res)=>{
    res.render('index');
});
app.get("/about", (req, res)=>{
    res.render('about');
});



app.listen(port, ()=>{
    console.log(`application running on port: ${port}`);
});