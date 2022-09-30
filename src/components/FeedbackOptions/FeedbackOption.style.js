import styled from 'styled-components';

export const FeetbackBtn = styled.button`
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  margin-right: 10px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #00ffff;
    color: #fff;
  }

  &:active {
    background-color: #0000ff;
    color: #fff;
  }
`;

export const FeetbackBtnBlock = styled.div`
  padding: 40px 0 40px 0;
`;
