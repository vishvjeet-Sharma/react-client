import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Trainee, Login, TextFieldDemo, ChildrenDemo, InputDemo } from './pages/index';
import { theme } from './theme';
import { NoMatch } from './pages/NoMatch';
import { AuthRoute, PrivateRoute } from './routes';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Redirect } from  'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Redirect to='/login' />
            </Route>
            <AuthRoute exact path='/login' component={Login} />
            <PrivateRoute path='/trainee' component={Trainee} />
            <PrivateRoute exact path='/text-field-demo' component={TextFieldDemo} />
            <PrivateRoute exact path='/input-demo' component={InputDemo} />
            <PrivateRoute exact path='/children-demo' component={ChildrenDemo} />
            <PrivateRoute component={NoMatch} />
            <Route exact path="/">
              <Redirect to="/trainee" />
            </Route>  
          </Switch>  
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;


