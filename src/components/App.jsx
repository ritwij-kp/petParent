import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PetCards from "./PetCards";
import PetListing from "./PetListing";
import Fade from "react-reveal/Fade"
import '../styles/App.css';
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<><Fade top distance="10%" duration="1500"><Navbar /></Fade>
            <Hero />
            <Fade top distance="10%" duration="1500">
            <PetCards />
            <Footer /></Fade></>} />
          <Route path='/pet-listing' element={<><Fade top distance="10%" duration="1500"><PetListing /></Fade></>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
