import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkWrapper = styled(Link)`
  display: flex;
  gap: 12px;

  width: 100%;
  height: 96px;

  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  position: relative;

  flex-shrink: 0;

  width: 129px;
  height: 96px;

  border-radius: 10px;
`;

export const GradeWrapper = styled.div<{ gradeColor: string }>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 33px;
  height: 96px;

  border-radius: 10px 0 0 10px;
  ${({ gradeColor }) => `background-color: ${gradeColor}`};
`;

export const GradeTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  color: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 202px;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  gap: 1px;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  color: #84848b;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;

  color: #fff;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
