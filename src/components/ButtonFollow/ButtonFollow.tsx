import React from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  textColor: string;
  name: string;
}

export const ButtonFollow = ({backgroundColor, textColor, name}: Props) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: '90px',
        height: '40px',
        borderRadius: '20px',
        paddingLeft: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        fontWeight: 'bold',
      }}
    >
      {name}
    </div>
  );
};
