import React from 'react';

import { IconSave } from '~/components/Icons';
import { GRADE_COLORS } from '~/constants';

import { Product } from '~/types';
import * as Styled from './CardItem.styled';

const CardItem = (item: Product) => {
  const { id, grade, imgURL, company, name, isSaved } = item;
  return (
    <li>
      <Styled.LinkWrapper to={`/detail/${id}`} state={item}>
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
      </Styled.LinkWrapper>
    </li>
  );
};

export default CardItem;
