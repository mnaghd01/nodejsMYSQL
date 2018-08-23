//load app with express
const express = require('express')
const app = express()

app.get("/",(req,res) => {

    console.log("Starting the GET command")
    res.send("Hello it's me, I've been California dreaming")
app.get("/users", (req,res) => {
    const user1 = {firstName: "Mehdi", lastName: "Naghdi Tam"}
    const user2 = {firstName: "Mana", lastName: "Koochool"}
    console.log("json sending users")
    res.json([user1, user2])
})


})
//LocalHost
app.listen(3003,()=>{
    console.log("Hey Mehdi")
})