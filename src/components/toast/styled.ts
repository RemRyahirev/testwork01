import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.toast.bgColor};
  color: ${p => p.theme.toast.textColor};
`;

export const Image = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  &::after {
    position: absolute;
    height: 20px;
    width: 20px;
    top: 7.5px;
    left: 7.5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }

  &.live {
    background: linear-gradient(180deg, ${p => p.theme.toast.live.gradientStart} 0%, ${p => p.theme.toast.live.gradientEnd} 100%);
    &::after {
      content: '💥';
    }  
  }

  &.dead {
    background: linear-gradient(180deg, ${p => p.theme.toast.dead.gradientStart} 0%, ${p => p.theme.toast.dead.gradientEnd} 100%);
    &::after {
      content: '💀';
    }  
  }

  &.life {
    background: linear-gradient(180deg, ${p => p.theme.toast.life.gradientStart} 0%, ${p => p.theme.toast.life.gradientEnd} 100%);
    &::after {
      content: '🐣';
    }  
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
`;

export const Heading = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.0015em;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0025em;
`;
