import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(28, 28, 30, 0.5),
    0px 4px 10px rgba(255, 255, 255, 0.1);
`;

export const TitleCells = styled.tr`
  background-color: rgb(54, 136, 230);
  text-transform: uppercase;
  color: #ffffff;
  height: 50px;
  font-size: 14px;
  border-collapse: collapse;
`;

export const Cells = styled.tr`
  height: 50px;
  font-weight: 500;
  text-align: center;
  color: grey;
  background: rgb(231, 231, 231);
  border-collapse: collapse;
  :nth-of-type(odd) {
    background-color: #ffffff;
  }
`;
