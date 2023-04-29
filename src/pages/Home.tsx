import React from 'react';
import styled from '@emotion/styled';

import { Button } from '~/components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: #121212;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #fff;
`;

const Styled = {
  Wrapper,
  Title,
};

const HomePage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>영양소 비율 랭킹</Styled.Title>
      <Button
        name="찜한 샐러드"
        isClicked
        handleClick={() => {
          console.log('button click');
        }}
      />
    </Styled.Wrapper>
  );
};
export default HomePage;
