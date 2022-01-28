import * as React from 'react';

import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@mui/styles';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme();

function AppFrame() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <h1>Something</h1>
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default AppFrame;
