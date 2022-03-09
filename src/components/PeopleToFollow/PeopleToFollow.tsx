import React from 'react';
import styled from 'styled-components';
import {sortAndDeduplicateDiagnostics} from 'typescript';
import {ButtonFollow} from '../ButtonFollow/ButtonFollow';

interface Props {
  image: string;
  name?: string;
  username?: string;
}

export const PeopleToFollow = ({image, name, username}: Props) => {
  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <img
          src={image}
          style={{
            borderRadius: '50px',
            paddingLeft: '10px',
          }}
        ></img>
        <Styled.AccountWrapper>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Username>{username}</Styled.Username>
        </Styled.AccountWrapper>
      </Styled.TextWrapper>
      <Styled.ButtonWrapper>
        <ButtonFollow backgroundColor="white" textColor="black" name="Follow" />
      </Styled.ButtonWrapper>
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
    margin-bottom: 20px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex: 4;
    height: 50px;
  `,
  ImageWrapper: styled.img`
    display: flex;
    height: 50px;
    flex: 1;
  `,
  AccountWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    flex: 2;
    padding-left: 10px;
  `,
  Name: styled.div`
    display: flex;
    font-weight: bold;
  `,
  Username: styled.div`
    display: flex;
    font-size: 13px;
    color: grey;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    flex: 3;
    height: 50px;
    font-size: 17px;
    font-weight: bold;
  `,
};
