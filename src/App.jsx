import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Trainee, Login, TextFieldDemo, ChildrenDemo, InputDemo } from './pages/index';
import { theme } from './theme';
import { NoMatch } from './pages/NoMatch';
import { AuthRoute, PrivateRoute } from './routes';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import { Route } from  'react-router-dom';

// function Home() {
//   return <h2>Home</h2>;
// }


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>

          {/* <Route path="/">
            <Home />
          </Route> */}

            <AuthRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Trainee} />
            <PrivateRoute exact path='/text-field-demo' component={TextFieldDemo} />
            <PrivateRoute exact path='/input-demo' component={InputDemo} />
            <PrivateRoute exact path='/children-demo' component={ChildrenDemo} />
            <PrivateRoute exact path='*' component={NoMatch} />  
          </Switch>  
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
