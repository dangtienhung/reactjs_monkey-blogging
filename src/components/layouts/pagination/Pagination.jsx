import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  .pagination {
    &-list {
      display: flex;
      align-items: center;
      gap: 0 10px;
    }
    &-pre,
    &-item,
    &-next {
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      &:focus,
      &:hover {
        border-radius: 8px;
        color: white;
        background-color: ${(props) => props.theme.secondary};
      }
    }
    &-item.is-current {
      border-radius: 8px;
      color: white;
      background-color: ${(props) => props.theme.secondary};
    }
  }
`;

const Pagination = () => {
  return (
    <PaginationStyles>
      <span className="pagination-pre">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </span>
      <ul className="pagination-list">
        <li className="pagination-item">1</li>
        <li className="pagination-item is-current">2</li>
        <li className="pagination-item">...</li>
        <li className="pagination-item">3</li>
        <li className="pagination-item">4</li>
        <li className="pagination-item">5</li>
        <li className="pagination-item">6</li>
      </ul>
      <span className="pagination-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </PaginationStyles>
  );
};

export default Pagination;
