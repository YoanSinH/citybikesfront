import React from 'react'

const Pagination = ({dataPerPage, totalData}) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination-container'>
            <div className='pagination'>
                {pageNumbers.map(number => {
                    return(
                        <a key={number} className='page'>
                            {number}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Pagination;