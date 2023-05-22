import React, { useState } from 'react';
import style from './Pagination.module.scss';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

function Pagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const renderItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end).map((item,index) => (
      <div className={style.item} key={index}>
        {index}
      </div>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={style.i === currentPage ? 'active' : null}>
          <a href="/" onClick={e => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={style.pagination}>
      {/* <div className={style.items}>{renderItems()}</div> */}
      <ul className={style.page_numbers}>
      <li  className={style.prev_next}><FaArrowLeft/></li>
      {renderPageNumbers()}
      <li  className={style.prev_next}><FaArrowRight/></li>
      </ul>

    </div>
  );
}

export default Pagination;