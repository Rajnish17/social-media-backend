const express=require("express");
const app =express();
app.use(express.json());



const userRoutes =require("./routes/user.routes");

app.use(userRoutes);




app.get("/",(req,res)=>{
    res.send("server is up and running");
})





module.exports =app;