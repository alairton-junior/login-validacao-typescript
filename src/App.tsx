import React from 'react';

import Login from './pages/Login'
import RouteElement from './routes'

import { GlobalStyle } from './styles/global'

export default function App() {
  return (
      <>
        <GlobalStyle/>
        <RouteElement/>
      </>
  );
}

