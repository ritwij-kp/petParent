import React from "react";
import Navbar from "./Navbar";
import PetCards from "./PetCards";
import '../styles/App.css';
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <PetCards />
      <Footer />
    </div>
  );
}

export default App;
