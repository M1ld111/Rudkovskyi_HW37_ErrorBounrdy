import { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [image, setImage]=useState({
    asset: logo
  }) 

  useEffect(() => {
    setTimeout(() => {
      setImage(null)
    }, 3000);
  }, [])

  return <div className="App">
    <ErrorBoundary>
      <Header image={image}/>
    </ErrorBoundary>
  </div>;
}

function Header(props) {
  return (
    <header className="App-header">
      <img src={props.image.asset} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default App;
