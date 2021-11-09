import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { PageContainer } from './pages/Container';
import Main from './pages/Main';
import dotenv from 'dotenv'

dotenv.config();

function App() {
  return (
    <Router>
        <PageContainer className="App">
            <Switch>
              <Route path='/' exact>
                <Main/>
              </Route>
            </Switch>
        </PageContainer>
    </Router>
    
  );
}

export default App;
