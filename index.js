const express  = require("express")

const app = express()

app.get("/getData", ()=>{

      res.json("hi hello")
      
}) 

app.listen(3000, ()=>{

       console.log("server created oport on 3000");
       
})