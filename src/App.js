import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

import GlobalStyles from "./styles/GlobalStyles";

// Componentes
// import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router history={history}>         
      <Routes />
      <GlobalStyles />    
      <ToastContainer />
    </Router>       
  );
}

export default App;
