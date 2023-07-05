import React from "react";
function PetCards() {
    const products = [{id:1,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:2,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:3,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:4,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:5,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:6,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:7,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"},{id:8,imageSrc:"https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg",imageAlt:"petPic",name:"Arnav",price:"Cocker",color:"Preet Vihar"}];
    return (
        <div>
            <div className="bg-lund">
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCards;