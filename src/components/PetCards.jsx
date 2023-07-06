import React from "react";
import PetCard from "./PetCard";
function PetCards() {
    const products = [{ id: 1, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 2, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 3, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 4, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 5, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 6, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 7, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }, { id: 8, imageSrc: "https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg", imageAlt: "petPic", name: "Arnav", price: "Cocker", color: "Preet Vihar" }];
    return (
        <div>
            <div className="bg-lund">

                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => {
                            return (
                                <div>
                                    <PetCard img={product.imageSrc} name={product.name} breed={product.price} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCards;