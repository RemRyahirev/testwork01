import React from 'react';

import { Button as ButtonStyled } from './styled';

type Props = {
  onClick: () => void,
  children: React.ReactNode | React.ReactNodeArray,
};

const Button = ({ onClick, children }: Props) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
