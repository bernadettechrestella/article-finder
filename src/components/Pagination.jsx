import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Pagination = (props) => {
  const { hits, updatePage } = props;

  const jumlahPage = Math.ceil(hits/10); //total semua halaman
  const [nomorPage, setNomorPage] = useState(1); //nomor halaman di tampilan

  const handlePageClick = (pageNumber) => { //pageNumber adalah nomor halaman yang diklik
    setNomorPage(pageNumber);
    updatePage(pageNumber - 1)
  };

  const renderPageNumbers = () => {
    const maxPageNumbers = 10;
    const pageNumbers = [];

    if (jumlahPage <= maxPageNumbers) {
      for (let i = 1; i <= jumlahPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`${nomorPage === i ? 'bg-black text-white px-1 rounded-md text-lg' : ''}`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      const middlePage = Math.floor(maxPageNumbers / 2); // 5
      const startPage = Math.max(1, nomorPage - middlePage); // 1
      const endPage = Math.min(jumlahPage, startPage + maxPageNumbers - 1); // 10

      if (startPage > 1) {
        pageNumbers.push(
          <button key="prev-dots" onClick={() => handlePageClick(startPage - 1)}>
            ...
          </button>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`${nomorPage === i ? 'bg-black text-white px-1 rounded-md text-lg' : ''}`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < jumlahPage) {
        pageNumbers.push(
          <button key="next-dots" onClick={() => handlePageClick(endPage + 1)}>
            ...
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      {jumlahPage > 1 && (
        <div className='flex gap-3 justify-center py-3'>
          {nomorPage > 1 && (
            <IoIosArrowDropleft size={25} onClick={() => handlePageClick(nomorPage - 1)} className='cursor-pointer'/>
          )}
          {renderPageNumbers()}
          {nomorPage < jumlahPage && (
            <IoIosArrowDropright size={25} onClick={() => handlePageClick(nomorPage + 1)} className='cursor-pointer'/>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;