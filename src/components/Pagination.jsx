import React from 'react'

const Pagination = ({ totalItens, itensPerPage, setCurrentPage, currentPage }) => {
    console.log('Pagination rendered');

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <button 
                    key={index} 
                    onClick={() => setCurrentPage(page)} 
                    className={page === currentPage ? 'active' : ''}>
                    {page}
                    </button>;
                })
            }
        </div>
    )

}

export default Pagination;