require("dotenv").config();
const app =require("./app");
const connectdb =require("./db")
const port =process.env.PORT || 8000





app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    connectdb();
})