import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  icon?: JSX.Element;
}

export const TitleTopic = ({title, icon}: Props) => {
  return (
    <Styled.Container>
      <Styled.TitleWrapper>{title}</Styled.TitleWrapper>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    margin-bottom: 10px;
    color: white;
  `,
  TitleWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    flex: 4;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
    height: 50px;
    padding-top: 20px;
  `,
};
