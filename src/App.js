import logo from './logo.svg';
import './App.css';
import AuthenticationButton from "./components/authentication-button";
import Profile from "./components/show-name-test";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  
  if (isAuthenticated == false) {
    return (
    <AuthenticationButton />
  )};
  return (
    <div className="App">
      <header className="App-header">
        <AuthenticationButton />
        <Profile />
      </header>
    </div>
  );
}

export default App;
