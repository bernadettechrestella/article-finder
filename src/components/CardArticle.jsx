import React from 'react'

const CardArticle = (props) => {
  const {headline, author, pub_date, abstract, web_url} = props;
  const dateTime = new Date(pub_date)
  const formattedDateTime = dateTime.toLocaleString()

  const detailArticle = () => {
    window.scrollTo(0, 0)
    window.open(web_url)
  }
  
  return (
    <div>
      <div className='border-2 border-black rounded-2xl mx-5 my-3 p-4'>
        <p className='laptop:text-2xl tablet:text-xl text-lg font-bold cursor-pointer' onClick={() => detailArticle()}>{headline}</p>
        <div className={`flex justify-between ${abstract === '' ? '' : 'border-b-2 border-gray-300'} my-2`}>
          <p className='font-semibold text-gray-500'>{author}</p>
          <p className='font-semibold text-gray-500'>{formattedDateTime}</p>
        </div>
        <p className='text-justify'>{abstract}</p>
      </div>
    </div>
  )
}

export default CardArticle