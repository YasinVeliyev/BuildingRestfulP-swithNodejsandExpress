const express=require("express")
require("dotenv").config()

app=express()
app.get("/",(req,res)=>{
    res.send(`Node and express server running on port ${PORT}`)
})
const PORT = process.env.PORT||3000


app.listen(PORT,()=>{
    console.log(`Your running on port ${PORT}`)
})
