import React from 'react';
import styled from 'styled-components';
import {sortAndDeduplicateDiagnostics} from 'typescript';

interface Props {
  title?: string;
  description?: string;
  number?: string;
}

export const Topic = ({title, description, number}: Props) => {
  return (
    <Styled.Container>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TweetsNumber>{number}</Styled.TweetsNumber>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 70px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    padding-left: 10px;
  `,
  Description: styled.div`
    display: flex;
    color: grey;
    font-size: 14px;
  `,
  Title: styled.div`
    display: flex;
    color: white;
    font-size: 16px;
  `,
  TweetsNumber: styled.div`
    display: flex;
    color: grey;
    font-size: 12px;
  `,
};
