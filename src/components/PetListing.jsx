import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PetListingHeading from "./PetListingHeading";
import CardCarousel from "./CardCarousel";
function PetListing(){
    return(
        <div>
            <Navbar />
            <div className="bg-lund">
                <PetListingHeading />
                <CardCarousel />
                <Footer />
            </div>
            
        </div>
    )
}

export default PetListing;