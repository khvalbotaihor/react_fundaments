import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
            {pagesArray.map(p => {
                return(
                    <span
                        onClick={() => changePage(p)}
                        className={page === p ? 'page page_current' : 'page' }
                        key={p}>{p}
                    </span>
                )
            })}
        </div>
    );
};

export default Pagination;
