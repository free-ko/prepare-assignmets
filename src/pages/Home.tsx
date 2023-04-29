import React from 'react';
import styled from '@emotion/styled';

import { Button } from '~/components/Button';
import { GapUpDownBy } from '~/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  padding: 0 16px;
  background-color: #121212;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: start;

  width: 100%;
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
  ButtonsWrapper,
  Title,
};

const HomePage = () => {
  return (
    <Styled.Wrapper>
      <GapUpDownBy $height={11} />
      <Styled.Title>영양소 비율 랭킹</Styled.Title>
      <GapUpDownBy $height={27} />
      <Styled.ButtonsWrapper>
        <Button
          name="전체"
          isClicked
          handleClick={() => {
            console.log('button click');
          }}
        />

        <Button
          name="찜한 샐러드"
          isClicked={false}
          handleClick={() => {
            console.log('button click');
          }}
        />
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};
export default HomePage;
