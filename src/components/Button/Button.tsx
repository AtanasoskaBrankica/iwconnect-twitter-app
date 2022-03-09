import React, {useState} from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  name?: string;
  textColor?: string;
  onClick?: () => void;
}
const Button = ({
  name,
  onClick,
  backgroundColor,
  textColor = 'grey',
}: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: 25,
        padding: '12px 30px',
        width: '190px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10px',
        marginTop: '20px',
        fontWeight: 'bold',
      }}
    >
      {name}
    </div>
  );
};

export default Button;
