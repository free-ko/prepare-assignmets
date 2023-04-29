import React, { useState } from 'react';
import styled from '@emotion/styled';

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: start;

  width: 100%;
`;

const Button = styled.button<{ $isClicked: boolean }>`
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
  ButtonsWrapper,
  Button,
};

type ButtonType = 'all' | 'bookmark';
type ButtonName = '전체' | '찜한 샐러드';
type Button = {
  type: ButtonType;
  name: ButtonName;
};

const ButtonList: Button[] = [
  {
    type: 'all',
    name: '전체',
  },
  {
    type: 'bookmark',
    name: '찜한 샐러드',
  },
];

const Buttons = () => {
  const [clickButtonName, setClickButtonName] = useState<string>('all');

  const handleClick = (type: ButtonType) => {
    setClickButtonName(type);
  };

  return (
    <Styled.ButtonsWrapper>
      {ButtonList.map(({ type, name }) => (
        <Styled.Button
          key={type}
          $isClicked={type === clickButtonName}
          onClick={() => handleClick(type)}
        >
          {name}
        </Styled.Button>
      ))}
    </Styled.ButtonsWrapper>
  );
};

export default Buttons;
