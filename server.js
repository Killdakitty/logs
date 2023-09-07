const express= require('express')
const jsxEngine = require("jsx-view-engine");
const connectDB= require('./utils/connectDB')
require("dotenv").config();
const Log= require("./models/Log")
const methodOverride= require("method-override")



//*Variables
const app=express()
const PORT= 3000


//*App Config
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine())


//*Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride("_method"))

app.get('/',(req,res)=>{
    res.render('new')
})

//*======View Routes==========================//
/**
 * *Index
 */
app.get("/logs", async (req,res)=>{
    try{
        const logs= await Log.find({});
        res.render("Index", {logs})
    }catch(e){
        console.log(e);
    }
})
/**
//  * *New
//  */
app.get("/logs/new",(req,res)=>{
    res.render("New")
})

/***
 * *Show
 */
app.get('/logs/:id',async(req,res)=>{
    const{id}= req.params;
    try{
        const log= await Log.findById(id, req.body, {new: true,
        })

        res.render("Show", {log})
    }catch(e){
        console.log(e);
    }
  
})


//*====API ROUTES ( NOT RETURNING VIEWS)==========*/
//*Create
app.post('/api/logs', async(req,res)=>{
    const createdLogs= await Log.create(req.body)
    res.redirect("/logs")
})








//*Listening and connecting to DB
connectDB();
app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`);
    })