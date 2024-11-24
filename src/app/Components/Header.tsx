import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-blue-900 h-24 w-full flex justify-between items-center'>
      <div className='mt-20 ml-6'>
        <Image 
        src='/logo.9ff76f62.png'
        width={100}
        height={100}
        alt='logo'
        />
         
      </div>
      <h1 className='text-center text-2xl font-extrabold text-[#b9d8f3] '>Tuition Free Education Program on Latest Technologies</h1>
      <div className=' text-white w-4/12 '>
        <ul className='flex justify-around'>
            <li>Home</li>
            <li>Apply</li>
            <li>Jobs</li>
            <li>Results</li>
            <li>Courses</li>
        </ul>
      </div>
    </div>
  )
}

export default Header




