import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Pagination = (props) => {
  const { hits } = props;

  const [page, setPage] = useState(1);
  const [jumlahPage, setJumlahPage] = useState(1);

  useEffect(() => {
    setJumlahPage(Math.ceil(hits / 10));
  }, [hits]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const maxPageNumbers = 10;
    const pageNumbers = [];

    if (jumlahPage <= maxPageNumbers) {
      for (let i = 1; i <= jumlahPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={page === i ? 'active' : ''}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      const middlePage = Math.floor(maxPageNumbers / 2);
      const startPage = Math.max(1, page - middlePage);
      const endPage = Math.min(jumlahPage, startPage + maxPageNumbers - 1);

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
            className={page === i ? 'active' : ''}
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
        <div className='flex gap-3 justify-center'>
          {page > 1 && (
            <IoIosArrowDropleft size={25} onClick={() => handlePageClick(page - 1)}/>
          )}
          {renderPageNumbers()}
          {page < jumlahPage && (
            <IoIosArrowDropright size={25} onClick={() => handlePageClick(page + 1)}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;