import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  icon: JSX.Element;
}

export const NavLink = ({icon, text}: Props) => {
  return (
    <Styled.Container>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
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
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
    height: 50px;
    padding-top: 19px;
    padding-left: 20px;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    flex: 4;
    height: 50px;
    font-size: 17px;
    font-weight: bold;
  `,
};
