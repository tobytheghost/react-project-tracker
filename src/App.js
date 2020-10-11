import React from "react";

//App
import { Header, Footer } from "./components";
import Routes from "./Routes";
import { Login } from "./views";

//Styles
import "./App.scss";

function App() {
  const user = true; //Todo

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Routes />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
