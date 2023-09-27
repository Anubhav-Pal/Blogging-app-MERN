import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-2'>
      <div>
        <h1 className='text-xl leading-9'>Solace</h1>
      </div>
      <div className='flex gap-4 '>
        <h1>Home</h1>
        <h1>Create Blog</h1>2
        {/* <Link to='/create-blog'>Create Blog</Link> */}
        <h1>About</h1>
      </div>


    </div>
  )
}

export default Navbar