import React from "react";
import Navbar from "./Navbar";
import PetCards from "./PetCards";
import PetListing from "./PetListing";
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
          <Route exact path='/' element={<><Navbar />
            <PetCards />
            <Footer /></>} />
          <Route path='/pet-listing' element={<><PetListing /></>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
