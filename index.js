import express from "express";
import ConnectToDB from "./config/ConnectToDB.js";

const app = express();

//Connection to the database
ConnectToDB();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
