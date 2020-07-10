import React from 'react';
import Navigation from './components/Navigation';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navigation/>
        <h1 className="container">Hola mundo</h1>
    </AuthContextProvider>
  );
}

export default App;
