import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, ${p => p.theme.bgGradientStart} 0%, ${p => p.theme.bgGradientStop} 100%);
  color: ${p => p.theme.textColor};
`;

export const Container = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;
