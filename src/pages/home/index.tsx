import React, { useCallback, useEffect, useRef, useState } from 'react';

import { ToastType, TToast } from '../../types';
import Toast from '../../components/toast';
import Button from '../../components/button';

import { Header, ToastContainer, Wrapper } from './styled';

const CREATION_TYPES = [ToastType.live, ToastType.dead];

const HomePage = () => {
  const [toasts, setToasts] = useState([] as TToast[]);
  const [lastId, setLastId] = useState(0);

  const create = useCallback(() => {
    const type = CREATION_TYPES[Math.ceil(Math.random() * CREATION_TYPES.length) - 1];
    let newToasts = toasts.slice();
    let newLastId = lastId;

    newToasts.push({
      id: ++newLastId,
      type,
    });

    if (type === ToastType.live) {
      const last = toasts.slice(-1)?.[0];

      if (last?.type === ToastType.live) {
        newToasts.push({
          id: ++newLastId,
          type: ToastType.life,
        });
      }
    } else {
      const last = toasts.slice(-2);

      if (last.length === 2 && last[0].type === ToastType.dead && last[1].type === ToastType.dead) {
        newToasts = newToasts.filter(toast => toast.type !== ToastType.life);
      }
    }

    setToasts(newToasts);
    setLastId(newLastId);
  }, [lastId, toasts]);

  const scrollContainer = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!scrollContainer?.current) {
      return;
    }

    scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
  }, [scrollContainer, toasts]);

  return (
    <Wrapper>
      <Header>Клеточное наполнение</Header>

      <ToastContainer ref={scrollContainer}>
        {toasts.map(toast => (
          <Toast key={toast.id} type={toast.type} />
        ))}
      </ToastContainer>

      <Button onClick={create}>
        сотворить
      </Button>
    </Wrapper>
  );
};

export default HomePage;
