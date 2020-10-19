import React from 'react';

import { ToastType } from '../../types';

import { Wrapper, Image, Description, Heading, Text } from './styled';

type Props = {
  type: ToastType;
};

const Toast = ({ type }: Props) => {
  let heading;
  let text;

  switch (type) {
    case ToastType.live:
      heading = 'Живая';
      text = 'и шевелится!';
      break;
    case ToastType.dead:
      heading = 'Мёртвая';
      text = 'или прикидывается';
      break;
    case ToastType.life:
      heading = 'Жизнь';
      text = 'Ку-ку!';
      break;
  }

  return (
    <Wrapper>
      <Image className={type} />

      <Description>
        <Heading>
          {heading}
        </Heading>
        <Text>
          {text}
        </Text>
      </Description>
    </Wrapper>
  );
};

export default Toast;
