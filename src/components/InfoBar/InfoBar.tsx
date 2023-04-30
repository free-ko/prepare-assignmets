import React from 'react';

import { GapUpDownBy } from '~/styles';

import * as Styled from './InfoBar.styled';

type Info = {
  title?: string;
  target: string;
  total: string;
};

type Props = Info[];
const InfoBar = ({ data }: { data: Props }) => {
  const getPercent = (target: string, total: string) => {
    const regex = /\D/g;
    const targetNumber = parseInt(target.replace(regex, ''), 10);
    const totalNumber = parseInt(total.replace(regex, ''), 10);

    return Math.round((targetNumber / totalNumber) * 100);
  };

  return (
    <Styled.Wrapper>
      {data.map(({ title, target, total }, index) => {
        const percent = getPercent(target, total);

        return (
          <React.Fragment key={index}>
            {title ? (
              <Styled.ItemBox style={{ marginBottom: '20px' }}>
                <Styled.TitleWrapper>
                  <Styled.Text>{title}</Styled.Text>

                  <Styled.PercentText>{`${percent}%`}</Styled.PercentText>
                </Styled.TitleWrapper>

                <GapUpDownBy $height={15} />

                <Styled.Bar>
                  <Styled.Progress progress={percent.toString()} />
                  <p>{percent}</p>
                </Styled.Bar>

                <GapUpDownBy $height={4} />

                <Styled.TitleInfoWrapper>
                  <Styled.SubText>{target}</Styled.SubText>
                  <Styled.SubTotalText>{` / ${total}`}</Styled.SubTotalText>
                </Styled.TitleInfoWrapper>
              </Styled.ItemBox>
            ) : (
              <Styled.ItemBox>
                <Styled.TitleWrapper>
                  <Styled.TitleInfoWrapper>
                    <Styled.Title>{target}</Styled.Title>
                    <Styled.SubTotalText>{` / ${total}`}</Styled.SubTotalText>
                  </Styled.TitleInfoWrapper>

                  <Styled.PercentText>{`${percent}%`}</Styled.PercentText>
                </Styled.TitleWrapper>

                <GapUpDownBy $height={15} />

                <Styled.Bar>
                  <Styled.Progress progress={percent.toString()} />
                  <p>{percent}</p>
                </Styled.Bar>
              </Styled.ItemBox>
            )}
          </React.Fragment>
        );
      })}
    </Styled.Wrapper>
  );
};

export default InfoBar;
