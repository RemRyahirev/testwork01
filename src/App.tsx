import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './themes/default';

import HomePage from './pages/home';

import { Page, Container } from './shared.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Container>
          <HomePage />
        </Container>
      </Page>
    </ThemeProvider>
  );
}

export default App;
