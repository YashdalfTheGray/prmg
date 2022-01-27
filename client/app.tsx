import * as React from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme();

function AppFrame() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <h1>Something</h1>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default AppFrame;
