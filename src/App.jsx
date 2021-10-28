import React from 'react';
//import { InputDemo } from './pages/index';
import { ThemeProvider } from '@mui/material/styles';
// import { ChildrenDemo } from './pages/index'
import { Trainee } from './pages/index'
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Trainee />
    </div>
    </ThemeProvider>
  );
}

export default App;
