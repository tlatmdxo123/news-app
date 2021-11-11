import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {jsx,ThemeProvider,Global} from '@emotion/react'
import {theme} from './styles/theme'
import {reset} from './styles/reset'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={reset}/>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
