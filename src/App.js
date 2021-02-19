import React from 'react';
import './App.css';
import AuthenticationButton from "./components/authentication-button";
import KingContent from "./components/king";
import Header from "./components/header";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  
  if (isAuthenticated == false) {
    return (
        <header className="App-header">
          <Header />
          <AuthenticationButton />
        </header>
  )};
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <KingContent />
        <AuthenticationButton />
      </header>
    </div>
  );
}

export default App;
