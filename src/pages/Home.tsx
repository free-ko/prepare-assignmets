import React from 'react';
import styled from '@emotion/styled';

import { Buttons } from '~/components/Buttons';
import { CardItem } from '~/components/CardItem';

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
  font-size: 16px;
  font-weight: 700;
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
      <GapUpDownBy $height={55} />
      <Styled.Title>영양소 비율 랭킹</Styled.Title>
      <GapUpDownBy $height={27} />
      <Buttons />
      <GapUpDownBy $height={24} />
      <CardItem />
    </Styled.Wrapper>
  );
};
export default HomePage;
