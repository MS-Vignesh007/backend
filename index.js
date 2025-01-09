const express  = require("express")

const app = express()

app.get("/getData", ()=>{

      console.log("hi hello every one");
      
}) 

app.listen(3000, ()=>{

       console.log("server created oport on 3000");
       
})