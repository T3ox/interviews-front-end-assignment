import React, { useCallback, useMemo } from "react";
import CustomButton from "../../atoms/Button/CustomButton";
import "./styles.scss";
import Props from "./types";

const Pagination: React.FC<Props> = ({ data, recipesPerPage, currentPage, onPageChange }) => {
    const numberOfPages = useMemo(() => Math.ceil(data.length / recipesPerPage), [data, recipesPerPage]);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === numberOfPages;

    const handlePageChange = useCallback(
        (newPage: number) => {
            const newLast: number = newPage * recipesPerPage;
            const newFirst: number = newLast - recipesPerPage;
            onPageChange(newPage, newFirst, newLast);
            window.scrollTo(0, 0);
        },
        [onPageChange, recipesPerPage]
    );

    return (
        <div className="pagination-container">
            <div className="pagination d-flex justify-content-center align-items-center pb-3">
                <CustomButton
                    text={"Prev Page"}
                    handle={() => handlePageChange(currentPage - 1)}
                    disabled={isFirstPage}
                />
                {currentPage + "/" + numberOfPages}
                <CustomButton
                    text={"Next Page"}
                    handle={() => handlePageChange(currentPage + 1)}
                    disabled={isLastPage}
                />
            </div>
        </div>
    );
};

export default Pagination;
