import React from 'react';

import { IconSave } from '~/components/Icons';
import { GRADE_COLORS } from '~/constants';
import { Product } from '~/types';

import * as Styled from './CardItem.styled';

const CardItem = ({ grade, imgURL, company, name, isSaved }: Product) => {
  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Styled.GradeWrapper gradeColor={GRADE_COLORS[grade]}>
          <Styled.GradeTitle>{grade}</Styled.GradeTitle>
        </Styled.GradeWrapper>
        <Styled.Image alt="card-image" src={imgURL} />
      </Styled.ImageWrapper>

      <Styled.InfoWrapper>
        <Styled.InfoTextWrapper>
          <Styled.Title>{company}</Styled.Title>
          <Styled.Text>{name}</Styled.Text>
        </Styled.InfoTextWrapper>

        <Styled.IconWrapper>
          <IconSave isSaved={isSaved} />
        </Styled.IconWrapper>
      </Styled.InfoWrapper>
    </Styled.Wrapper>
  );
};

export default CardItem;
