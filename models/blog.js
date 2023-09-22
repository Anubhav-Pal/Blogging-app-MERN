import { mongoose, Schema, model } from "mongoose";


const blogSchema = new Schema({
    title: String,
    desc: String,
    body: String,
    tag: String
})

const Blog = new model('Blog', blogSchema)

export default Blog

