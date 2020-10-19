import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: ${p => p.theme.button.primaryColor};
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.button.textColor};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.0125em;
  cursor: pointer;
  
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
