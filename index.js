import express from "express";
import ConnectToDB from "./config/ConnectToDB.js";
import Blog from "./models/blog.js";
import 'dotenv/config.js'
import cors from 'cors'

const app = express();

// MiddleWare
app.use(express.json());
app.use(cors())


//Connection to the database
ConnectToDB();


// To get all the blogs
app.get('/', async (req, res) => {
    try {
        const AllBlogs = await Blog.find();
        res.json(AllBlogs);
    } catch (error) {
        console.log("Coudnt get all the blogs");
    }
})

//To create a blog
app.post('/', async (req, res) => {
    const { title, desc, body, tag } = req.body;
    try {
        await Blog.create({ title, desc, body, tag });
    } catch (error) {
        console.log("Couldnt create the blog: ", error);
    }
    res.json({ "Blog": "Is created" })
})

//To update a blog
app.put('/blogs/:id', async (req, res) => {
    const { title, desc, body, tag } = req.body;
    try {
        await Blog.findByIdAndUpdate(req.params.id, { title, desc, body, tag });
    } catch (error) {
        console.log("Couldnt Update the blog: ", error);
    }
    res.json({ "Blog": "Is updated" })
})

//To delete a blog
app.delete('/blogs/:id', async (req, res) => {
    const { title, desc, body, tag } = req.body;
    try {
        const deletedBlog = await Blog.findByIdAndRemove(req.params.id);
        if (!deletedBlog) {
            res.status(404).json({ error: "Blog not found." })
        }
    } catch (error) {
        console.log("Couldnt delete the blog: ", error);
    }
    res.json({ "Blog": "Is deleted" })
})


// Listening on port 
app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
});
