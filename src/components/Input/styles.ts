import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;


  display: flex;
  align-items: center;

  color: ${props => props.isFocused || props.isFilled ? '#ff9000' : '#666360'};
  border-color: ${props => props.isFocused ? '#ff9000' : 'transparent'};
  background: #232129;
  
  & + div {
    margin-top: 8px;
  } 

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4EDE8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;