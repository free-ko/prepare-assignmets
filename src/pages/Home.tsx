import React from 'react';
import styled from '@emotion/styled';

import { Buttons } from '~/components/Buttons';

import { GapUpDownBy } from '~/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  padding: 0 16px;
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
      <GapUpDownBy $height={11} />
      <Styled.Title>영양소 비율 랭킹</Styled.Title>
      <GapUpDownBy $height={27} />
      <Buttons />
    </Styled.Wrapper>
  );
};
export default HomePage;
