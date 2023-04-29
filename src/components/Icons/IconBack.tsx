import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const Styled = {
  Button,
};

const IconBack = ({ onClick }: { onClick: () => void }) => {
  return (
    <Styled.Button onClick={onClick} type="button">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 20L7 12L15 4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Styled.Button>
  );
};

export default IconBack;
