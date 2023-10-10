import React, { useState } from 'react'
import { useGetArticle } from '../hooks/useGetArticle'
import CardArticle from '../components/CardArticle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Filter from '../components/Filter';

const HomePage = () => {
    const {article} = useGetArticle();

    // console.log(article[0])

    const [searchTitle, setSearchTitle] = useState('');

  return (
    <div>
        <Navbar/>
        <div className='py-14 h-screen overflow-auto'>
            <div className='grid grid-cols-7 mx-5 gap-3'>
                <div className='border-2 border-black rounded-2xl p-2 col-span-6 w-full'>
                    <input type="text" placeholder='Search Article by Word'
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className='w-full'/>
                </div>
                <div className='col-span-1 justify-self-end my-auto'>
                    <Filter />
                </div>
            </div>
            <div className='mt-5'>
                {article.length > 0 && article.filter((value) => {
                    if (searchTitle === '') {
                        return value
                    } else if (value.headline.main.toLowerCase().includes(searchTitle.toLowerCase()) || value.abstract.toLowerCase().includes(searchTitle.toLowerCase())) {
                        return value
                    }
                }).map((data) => {
                    return (
                    <div className=''>
                        <CardArticle
                            key={data._id}
                            headline={data.headline.main}
                            pub_date={data.pub_date}
                            author={data.byline.original}
                            abstract={data.abstract}
                            web_url={data.web_url}/>
                    </div>
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage