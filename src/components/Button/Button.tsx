import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.button<{ $isClicked: boolean }>`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 22px;

  padding: 8px 14px;
  border-radius: 29px;
  border: ${({ $isClicked }) => ($isClicked ? 'none' : 'solid 1px #3A3A3F')};
  color: ${({ $isClicked }) => ($isClicked ? '#121212' : '#84848B')};
  background-color: ${({ $isClicked }) => ($isClicked ? '#fff' : 'transparent')};
`;

const Styled = {
  Wrapper,
};

type Props = {
  name: string;
  isClicked: boolean;
  handleClick: () => void;
};

const Button = ({ name, isClicked, handleClick }: Props) => {
  return (
    <Styled.Wrapper $isClicked={isClicked} onClick={handleClick}>
      {name}
    </Styled.Wrapper>
  );
};

export default Button;
