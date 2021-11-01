import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Login } from './pages/index'
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Login />
    </div>
    </ThemeProvider>
  );
}

export default App;
