import React from 'react'
import s from './Pagination.module.css'

const Pagination = ({ getCurrentPage, totalPages, currentPage }) => {
    const onTogglePage = num => {
        getCurrentPage(num)
    }

    return (
        <main className={`${s.users_wrapper} ${s.page_wrapper}`}>
            {totalPages && (
                <div className={s.pagination}>
                    {+currentPage === 2 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {1}
                        </div>
                    )}

                    {+currentPage === 3 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {1}
                        </div>
                    )}
                    {+currentPage === 3 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {2}
                        </div>
                    )}

                    {+currentPage > 3 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {currentPage - 3}
                        </div>
                    )}
                    {+currentPage > 3 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {currentPage - 2}
                        </div>
                    )}
                    {+currentPage > 3 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {currentPage - 1}
                        </div>
                    )}

                    <div
                        onClick={e => onTogglePage(e.target.innerHTML)}
                        className={`${s.pagination_item} ${s.active}`}
                    >
                        {currentPage}
                    </div>

                    <div
                        onClick={e => onTogglePage(e.target.innerHTML)}
                        className={s.pagination_item}
                    >
                        {+currentPage + 1}
                    </div>
                    <div
                        onClick={e => onTogglePage(e.target.innerHTML)}
                        className={s.pagination_item}
                    >
                        {+currentPage + 2}
                    </div>
                    <div
                        onClick={e => onTogglePage(e.target.innerHTML)}
                        className={s.pagination_item}
                    >
                        {+currentPage + 3}
                    </div>

                    {+currentPage <= 3 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {+currentPage + 4}
                        </div>
                    )}
                    {+currentPage <= 2 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {+currentPage + 5}
                        </div>
                    )}
                    {+currentPage <= 1 && (
                        <div
                            onClick={e => onTogglePage(e.target.innerHTML)}
                            className={s.pagination_item}
                        >
                            {+currentPage + 6}
                        </div>
                    )}
                </div>
            )}
        </main>
    )
}

export default Pagination
