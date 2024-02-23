import React from "react";
import "./App.css";

import { Header, Service, About, Work, Contact, Footer } from "./containers";

const App = () => {
  return (
    <div>
      <Header />
      <Service />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
