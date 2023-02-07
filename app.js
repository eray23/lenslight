import express from "express"

const app = express();

//ejs template engine
app.set("view engine", 'ejs');



//static files middleware
app.use(express.static('public'));


const port = 3000;


app.get("/", (req, res)=>{
    res.render('index');
});
app.get("/about", (req, res)=>{
    res.render('about');
});



app.listen(port, ()=>{
    console.log(`application running on port: ${port}`);
});