import React from 'react'
// import Blog
import Blog from './Blog'

const Blogs = ({ blogs }) => {
  return (
    <div className='m-4 mt-6 gap-2 lg:mx-80'>
      <div className='text-[24px] my-4'>Recent Blogs</div>
      <div className='flex flex-col gap-6'>
        {blogs.map((blog) => (
          <Blog title={blog.title} key={blog._id} desc={blog.desc} body={blog.body} tag={blog.tag} />
        ))}
      </div>
    </div>
  )
}

export default Blogs