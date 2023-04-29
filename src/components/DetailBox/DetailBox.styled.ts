import styled from '@emotion/styled';

export const BoxWrapper = styled.li<{ isGrade: boolean }>`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 131px;
  height: 108px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({ isGrade }) => (isGrade ? '#FFC410' : '#212126')};
`;

export const BoxTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.h1<{ isGrade: boolean }>`
  font-size: ${({ isGrade }) => (isGrade ? '40px' : '30px')};
  line-height: ${({ isGrade }) => (isGrade ? '58px' : '44px')};
  font-weight: 700;
  color: #fff;
`;

export const BoxSubTitle = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #84848b;
`;

export const BoxAddText = styled.h3`
  position: absolute;
  top: 16px;
  right: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #6bbf00;
`;

export const BoxText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
`;
