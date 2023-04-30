import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px 16px 0 16px;
  background-color: #212126;
  border-radius: 6px;
`;

export const ItemBox = styled.li`
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  color: #fff;
`;

export const TitleInfoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  width: 100%;
`;

export const PercentText = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #fff;
`;

export const Text = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
`;

export const SubText = styled.h5`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
`;

export const SubTotalText = styled.h5`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #84848b;
`;

export const Bar = styled.div`
  position: relative;

  width: 312px;
  height: 8px;

  background-color: #3a3a3f;
  border-radius: 6px;
  overflow: hidden;
`;

export const Progress = styled.div<{ progress: string }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: ${({ progress }) => `${progress}%`};
  border-radius: 6px;
  background-color: #fff;
`;
