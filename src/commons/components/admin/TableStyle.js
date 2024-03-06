import styled from 'styled-components';

export const TableCols = styled.table`
  width: 100%;
  border-spacing: 0;
  th {
    width: 150px;
    background: #f8f8f8;
    text-align: left;
    border-right: 1px solid #d5d5d5;
  }

  td {
    background: #fff;
  }

  th,
  td {
    border-bottom: 1px solid #d5d5d5;
    padding: 8px 10px;
  }

  tr:first-of-type {
    th,
    td {
      border-top: 1px solid #d5d5d5;
    }
  }
`;
