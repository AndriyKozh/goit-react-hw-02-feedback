import styled from 'styled-components';

export const FeetbackBlock = styled.div`
  border: 1px solid #000;
  height: 1000px;
  width: 100%;
  padding: 20px;
`;

export const FeetbackTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const FeetbackStatisticTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;
export const FeetbackBtn = styled.button`
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  margin-right: 10px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  cursor: pointer;

  &:active {
    background-color: #0000ff;
    color: #fff;
  }
`;
