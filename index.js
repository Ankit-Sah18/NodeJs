const express= require("express");
const node="mm"

const app= express();
app.use(express.json());
const port = 8081;
const connection = "mongodb+srv://test:test@cluster0.wfuqbtw.mongodb.net/test";
  app.get("/",async(req,res)=>{

    // mongodb = mongodb+srv://test:<password>@cluster0.wfuqbtw.mongodb.net/test

        res.send("this is node js...");
  })
app.listen(port, async()=>{

    try{

        await connection;

           console.log("server connected");
    }
    catch(error){
        console.log("connection failed");
    }

    console.log(`listing to port ${port} `);
})