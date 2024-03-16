import  Express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import campModel from "./Models/Hospital_and_camps.js";

const app = Express();
app.use(cors())
app.use(Express.json())

mongoose.connect("mongodb+srv://kriyasatali04:z0eYQcWu787f7qUA@cluster0.c6itwe7.mongodb.net/B ?retryWrites=true&w=majority").then(() =>{
    console.log("Connected")
    app.listen(3001 , () => {
        console.log('listening on http://localhost:3001')
    })
})
.catch(() =>{
    console.log("Failed");
})

app.get("/get", (req, res) => {
    campModel.find()
    .then(users => {
        res.send(users)
        console.log(users.code)
     })
    .catch(err => res.json(err))
})




// z0eYQcWu787f7qUA