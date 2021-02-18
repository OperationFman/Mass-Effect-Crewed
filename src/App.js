import React from 'react';
import './App.css';
import AuthenticationButton from "./components/authentication-button";
import Profile from "./components/show-name-test";
import Header from "./components/header";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  
  if (isAuthenticated == false) {
    return (
      <React.Fragment>
        <Header />
        <AuthenticationButton />
      </React.Fragment>
  )};
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Profile />
        <AuthenticationButton />
      </header>
    </div>
  );
}

export default App;
