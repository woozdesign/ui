import React from 'react';
import styles from './Pagination.module.scss';
import IconButton from '../IconButton';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import { PaginationProps } from './Pagination.props';
import { extractMarginProps, withBreakpoints } from '@/utils';

const Pagination: React.FC<PaginationProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { totalRecords, recordsPerPage, onPageChanged, showPageCount = 5, variant = 'solid', currentPage, color, radius, size = 'medium', highContrast } = otherMarginProps;

  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const generatePagesToShow = () => {
    const pages: number[] = [];

    // Add the beginning and end pages
    pages.push(1);
    pages.push(totalPages);

    let startPage: number;
    let endPage: number;

    if (currentPage <= Math.ceil(showPageCount / 2)) {
      startPage = 1;
      endPage = startPage + showPageCount - 1;
    } else if (currentPage >= totalPages - Math.floor(showPageCount / 2)) {
      endPage = totalPages;
      startPage = endPage - showPageCount + 1;
    } else {
      startPage = currentPage - Math.floor((showPageCount - 1) / 2);
      endPage = currentPage + Math.floor(showPageCount / 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    pages.sort((a, b) => a - b); // Ensure pages are sorted in ascending order

    return pages;
  };

  const pagesToShow = generatePagesToShow();

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChanged(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChanged(currentPage + 1);
    }
  };

  return (
    <div data-accent-color={color} data-radius={radius} className={styles.pagination}>
      <a className={classNames(styles.pageItem, styles[`pageItem--${variant}`], withBreakpoints(size, 'wd-pagination-item', styles))} onClick={handlePreviousClick}>
        <Icon type={'ChevronLeft'} />
      </a>

      {pagesToShow.map((page, index) => {
        const pageClasses = classNames(
          styles.pageItem,
          styles[`pageItem--${variant}`],
          { [styles['active']]: currentPage === page, [styles['highContrast']]: highContrast },
          withBreakpoints(size, 'wd-pagination-item', styles),
        );
        return (
          <React.Fragment key={page}>
            {index > 0 && pagesToShow[index - 1] !== page - 1 && <span>...</span>}
            <a className={pageClasses} onClick={() => onPageChanged(page)}>
              {page}
            </a>
          </React.Fragment>
        );
      })}

      <a className={classNames(styles.pageItem, styles[`pageItem--${variant}`], withBreakpoints(size, 'wd-pagination-item', styles))} onClick={handleNextClick}>
        <Icon type={'ChevronRight'} />
      </a>
    </div>
  );
};

export default Pagination;
