import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import { DetailBox } from '~/components/DetailBox';
import { DETAIL_MOCK_DATA } from '~/components/DetailBox/mockData';
import { IconBack, IconSave } from '~/components/Icons';
import { InfoBar } from '~/components/InfoBar';
import { KCAL_LIST, NUTRIENT_LIST } from '~/components/InfoBar/mockData';
import { GapUpDownBy } from '~/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 16px;
  background-color: #121212;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 44px;
`;

const ImageBox = styled.div<{ imgURL: string }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-end;

  width: 311px;
  height: 343px;

  padding: 0 16px;

  background: ${({ imgURL }) =>
    `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%), url(${imgURL}) no-repeat`};
  background-size: cover;

  border-radius: 10px;
`;

const ImageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  color: #fff;
`;

const Title = styled.h1`
  width: 100%;

  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #fff;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const ImageText = styled(Text)`
  color: #fff;
`;

const BoldImageText = styled(Text)`
  font-weight: 700;
  color: #fff;
`;

const DesText = styled(Text)`
  width: 100%;
  color: #84848b;
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3a3a3f;
`;

const BoxList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 17px;
`;

const Styled = {
  Wrapper,
  NavWrapper,
  ImageBox,
  ImageTitle,
  Title,
  TextWrapper,
  Text,
  ImageText,
  BoldImageText,
  DesText,
  Bar,
  BoxList,
};

const DetailPage = () => {
  const navigate = useNavigate();
  const {
    state: { isSaved, imgURL, name, company },
  } = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Styled.Wrapper>
      <GapUpDownBy $height={55} />

      <Styled.NavWrapper>
        <IconBack onClick={handleGoBack} />
        <IconSave isSaved={isSaved} />
      </Styled.NavWrapper>

      <GapUpDownBy $height={16} />

      <Styled.ImageBox imgURL={imgURL}>
        <Styled.ImageTitle>{name}</Styled.ImageTitle>

        <GapUpDownBy $height={2} />

        <Styled.TextWrapper>
          <Styled.ImageText>{company}</Styled.ImageText>
          <Styled.BoldImageText>9,000원</Styled.BoldImageText>
        </Styled.TextWrapper>

        <GapUpDownBy $height={15} />
      </Styled.ImageBox>

      <GapUpDownBy $height={40} />

      <Styled.Title>영양소 비율</Styled.Title>
      <GapUpDownBy $height={7} />
      <Styled.Bar />
      <GapUpDownBy $height={8} />

      <Styled.DesText>
        전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방3 비율을 기준으로 A~C까지의 등급으로
        표기하였습니다.
      </Styled.DesText>

      <GapUpDownBy $height={14} />

      <Styled.BoxList>
        {DETAIL_MOCK_DATA.map(({ grade, ratio, ratioText, addRatio, text }) => (
          <DetailBox
            key={text}
            grade={grade}
            ratio={ratio}
            ratioText={ratioText}
            addRatio={addRatio}
            text={text}
          />
        ))}
      </Styled.BoxList>

      <GapUpDownBy $height={40} />

      <Styled.Title>칼로리 정보</Styled.Title>
      <GapUpDownBy $height={7} />
      <Styled.Bar />
      <GapUpDownBy $height={8} />

      <Styled.DesText>하루 2000칼로리의 식단을 기준으로 합니다.</Styled.DesText>
      <GapUpDownBy $height={15} />
      <InfoBar data={KCAL_LIST} />

      <GapUpDownBy $height={40} />

      <Styled.Title>영양소 정보</Styled.Title>
      <GapUpDownBy $height={7} />
      <Styled.Bar />
      <GapUpDownBy $height={8} />

      <Styled.DesText>백분율은 하루 2000칼로리의 식단을 기준으로 합니다.</Styled.DesText>
      <GapUpDownBy $height={15} />
      <InfoBar data={NUTRIENT_LIST} />
    </Styled.Wrapper>
  );
};

export default DetailPage;
