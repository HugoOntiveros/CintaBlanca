import React from 'react';
import Navigation from './components/Navigation';
import AuthContextProvider from './contexts/AuthContext';
import NavBrand from './components/NavBrand';

function App() {
  return (
    <AuthContextProvider>
      <Navigation />
      <div className="container">
      <h1>Hello World!</h1>
      <NavBrand/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
