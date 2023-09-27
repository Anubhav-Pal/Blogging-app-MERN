import React from 'react'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import { useState, useEffect } from 'react'

const App = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const GetAllBlogs = async () => {
      const response = await fetch('http://localhost:3000/')
      const data = await response.json();
      setBlogs(data);
    }
    GetAllBlogs();
  }, [])

  // console.log(blogs);
  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs} />

    </div>

  )
}

export default App