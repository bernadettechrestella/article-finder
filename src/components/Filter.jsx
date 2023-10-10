import React, { useState } from 'react'
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Filter = (props) => {
  const {onFilterChange} = props
  const [popUp, setPopUp] = useState(false)
  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  const [beginDate, setBeginDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleFilterChange = () => {
    if (endDate === '') {
      setEndDate(Date())
    }
    const formattedBeginDate = beginDate.replace(/-/g, '');
    const formattedEndDate = endDate.replace(/-/g, '');
    const filterData = {
      beginDate: formattedBeginDate,
      endDate: formattedEndDate,
    }
    onFilterChange(filterData)
  }

  const handleFilterClear = () => {
    setBeginDate('')
    setEndDate('')
    onFilterChange({
      beginDate: '',
      endDate: '',
    })
  }

  return (
    <div>
      <BsFillFilterSquareFill size={35} className='cursor-pointer' onClick={togglePopUp}/>

      {popUp &&
      <div className='absolute z-50 w-full left-0 laptop:bottom-7 bottom-5'>
        <div className='bg-black text-white rounded-t-3xl p-5'>
          <div className='flex justify-between border-b-2 border-gray-300 mb-5 pb-3'>
            <p className='text-center font-semibold text-xl'>Filter</p>
            <AiOutlineCloseCircle className='text-white cursor-pointer' size={30} onClick={() => togglePopUp()}/>
          </div>
          <div className='grid tablet:grid-cols-2 gap-5'>
            <div className='flex justify-between'>
              <p className='my-auto'>Date Start</p>
              <input type="date" className='rounded-xl p-1 text-black cursor-pointer' onChange={(e) => setBeginDate(e.target.value)} value={beginDate}/>
            </div>
            <div className='flex justify-between'>
              <p className='my-auto'>Date End</p>
              <input type="date" className='rounded-xl p-1 text-black cursor-pointer' onChange={(e) => setEndDate(e.target.value)} value={endDate}/>
            </div>
          </div>
          <div className='flex gap-3'>
          <button className='text-center font-semibold text-lg w-full mt-5 bg-gray-400 text-white rounded-xl'
            onClick={() => handleFilterClear()}>Clear</button>
          <button className='text-center font-semibold text-lg w-full mt-5 bg-white text-black rounded-xl'
            onClick={() => {handleFilterChange(); togglePopUp()}}>Apply</button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Filter