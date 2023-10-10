import React from 'react'

const Navbar = () => {
  return (
    <div className='text-center bg-black text-white flex justify-between h-10 px-5 absolute z-10 w-full shadow-lg'>
        <p className='laptop:text-3xl tablet:text-2xl text-lg font-bold my-auto'>Article Finder</p>
        <p className='text-gray-300 my-auto text-xs tablet:text-base'>Discover the World of Articles</p>
    </div>
  )
}

export default Navbar