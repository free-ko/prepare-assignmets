import React from 'react';

import { IconSave } from '~/components/Icons';
import { GRADE_COLORS } from '~/constants';

import * as Styled from './CardItem.styled';

const CardItem = () => {
  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Styled.GradeWrapper gradeColor={GRADE_COLORS['A+']}>
          <Styled.GradeTitle>A+</Styled.GradeTitle>
        </Styled.GradeWrapper>
        <Styled.Image alt="card-image" src="https://picsum.photos/200" />
      </Styled.ImageWrapper>

      <Styled.InfoWrapper>
        <Styled.InfoTextWrapper>
          <Styled.Title>포켓샐러드</Styled.Title>
          <Styled.Text>밥보다 샐러드 닭가슴살햄슬라이스&스모크드치즈</Styled.Text>
        </Styled.InfoTextWrapper>

        <Styled.IconWrapper>
          <IconSave isSaved />
        </Styled.IconWrapper>
      </Styled.InfoWrapper>
    </Styled.Wrapper>
  );
};

export default CardItem;
