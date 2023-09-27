import React from 'react'

const Blog = (props) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.getMonth() + 1; // Months are zero-based (0 = January)
  const day = currentDate.getDate();
  const monthName = monthNames[monthNumber];

  return (
    <div className='flex flex-col gap-4 items-start'>

      <div className='text-[12px] text-gray-500'>
        {`${monthNames[monthNumber]} ${day},${year}`}
      </div>
      <div className=''>{props.title}</div>
      <div className='text-xs opacity-50 mb-4'>{props.desc}</div>
      <button className='p-2 bg-light text-[10px] rounded-sm text-gray-800 mb-4 '>#{props.tag}</button>
      <hr className='w-full' />
    </div>
  )
}

export default Blog