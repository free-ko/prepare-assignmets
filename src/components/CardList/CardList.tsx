import React from 'react';

import styled from '@emotion/styled';

import { CardItem } from '~/components/CardItem';
import { mockDataList } from './mockData';

const Wrapper = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;

  width: 100%;
`;

const Styled = {
  Wrapper,
};

const CardList = () => {
  return (
    <Styled.Wrapper>
      {mockDataList.map(({ id, grade, name, company, imgURL, isSaved }) => (
        <CardItem
          key={id}
          name={name}
          grade={grade}
          company={company}
          imgURL={imgURL}
          isSaved={isSaved}
        />
      ))}
    </Styled.Wrapper>
  );
};

export default CardList;
