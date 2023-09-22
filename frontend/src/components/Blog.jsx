import React from 'react'

const Blog = () => {

  // const date = new Date().getDate();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based (0 = January)
  const day = currentDate.getDate();
  // console.log(`${year}-${month}-${day}`);

  // console.log(date)
  return (
    <div className='m-4 mt-6 flex flex-col gap-2'>
      <div className=' text-[12px]   text-gray-500'>
        {`${day} ${month} ${year}`}
      </div>

      <div className=''>Bad Design vs. Good Design: 5 Examples We can Learn From</div>
      <div className='text-xs opacity-50 mb-4'>Bad Design vs. Good Design: 5 Examples We can Learn From</div>
      <div className='p-2 bg-slate-400 text-xs rounded-md'>Tag</div>
      <hr />

    </div>
  )
}

export default Blog