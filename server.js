import express from "express";
import mongo from "mongo";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/loginpage/auth.html");
});
app.get("/Signup",(req,res)=>{
    res.sendFile(__dirname+"/loginpage/signup.html");
});
app.get("/forgotpassword",(req,res)=>{
    res.sendFile(__dirname+"/loginpage/forgotpassword.html")
})
app.post("/submit",(req,res)=>{
    console.log(req.body);
})
app.post("/send",(req,res)=>{
    console.log(req.body);
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
