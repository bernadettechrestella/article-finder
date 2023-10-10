import React, { useState } from 'react'
import { BsFillFilterSquareFill } from 'react-icons/bs';

const SearchFilter = () => {
  const [popUp, setPopUp] = useState(false)

  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  return (
    <div>
      <BsFillFilterSquareFill size={35} className='cursor-pointer' onClick={togglePopUp}/>

      {popUp &&
      <div className='absolute z-50 w-full left-0 laptop:bottom-7 bottom-5'>
        <div className='bg-black text-white rounded-t-3xl p-5'>
          <p className='text-center font-semibold text-xl border-b-2 border-gray-300 mb-5'>Filter</p>
          <div className='flex justify-between mb-2'>
            <p className='my-auto'>Date Start</p>
            <input type="date" className='rounded-xl p-1 text-black'/>
          </div>
          <div className='flex justify-between'>
            <p className='my-auto'>Date End</p>
            <input type="date" className='rounded-xl p-1 text-black'/>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default SearchFilter