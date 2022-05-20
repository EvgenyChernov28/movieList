import React, { useState } from "react";
import cx from "classnames";

import styles from "./styles.module.css";

const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {

  const pageCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pageCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onPageChange((portionNumber - 1) * portionSize);
          }}
        >
          Пред.
        </button>
      )}
      {pages
        .filter(
          (element) => element >= leftPortionPageNumber && element <= rightPortionPageNumber
        )
        .map((element) => {
          return (
            <span
              key={element}
              className={cx(
                styles.pagination,
                currentPage === element && styles.selectedPage
              )}
              onClick={() => {
                onPageChange(element);
              }}
            >
              {element}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChange(portionNumber * portionSize + 1);
          }}
        >
          След.
        </button>
      )}
    </div>
  );
};

export default Pagination;
