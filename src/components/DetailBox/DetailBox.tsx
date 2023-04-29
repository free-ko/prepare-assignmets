import React from 'react';

import * as Styled from './DetailBox.styled';

type DetailBoxProps = {
  grade?: string;
  ratio?: string;
  addRatio?: string;
  ratioText?: string;
  text?: string;
};

const DetailBox = ({ grade, ratio, ratioText, addRatio, text }: DetailBoxProps) => {
  const isGrade = !!grade;

  return (
    <Styled.BoxWrapper isGrade={isGrade}>
      {isGrade ? (
        <Styled.BoxTitleContainer>
          <Styled.BoxTitle isGrade={isGrade}>{grade}</Styled.BoxTitle>
          <Styled.BoxText>{text}</Styled.BoxText>
        </Styled.BoxTitleContainer>
      ) : (
        <Styled.BoxTitleContainer>
          <Styled.BoxTitleWrapper>
            <Styled.BoxTitle isGrade={isGrade}>{ratio}</Styled.BoxTitle>
            <Styled.BoxSubTitle>{ratioText}</Styled.BoxSubTitle>
          </Styled.BoxTitleWrapper>
          <Styled.BoxText>{text}</Styled.BoxText>
        </Styled.BoxTitleContainer>
      )}
      {addRatio && <Styled.BoxAddText>{addRatio}</Styled.BoxAddText>}
    </Styled.BoxWrapper>
  );
};

export default DetailBox;
