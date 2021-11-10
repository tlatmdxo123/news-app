import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { PageContainer } from './pages/Container';
import Main from './pages/Main';
import dotenv from 'dotenv'
import {jsx,ThemeProvider,Global} from '@emotion/react'
import {theme} from './styles/theme'
import {reset} from './styles/reset'

dotenv.config();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset}/>
      <Router>
        <PageContainer className="App">
            <Switch>
              <Route path='/' exact>
                <Main/>
              </Route>
            </Switch>
        </PageContainer>
      </Router>
    </ThemeProvider>
    
    
  );
}

export default App;
