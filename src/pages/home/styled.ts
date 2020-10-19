import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 32px);
  padding: 16px;
`;

export const Header = styled.h1`
  flex: 0;
  margin: 0;
  padding: 32px 0;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.0015em;
`;

export const ToastContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  max-width: 328px;
  margin-bottom: 32px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: ${p => p.theme.button.primaryColor} transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.button.primaryColor};
    border-radius: 6px;
  }
`;
