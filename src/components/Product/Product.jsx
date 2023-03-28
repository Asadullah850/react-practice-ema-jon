import React from 'react';

const Product = (props) => {

    // console.log(props);
    const {img,name, price,  ratings, seller} = props.product;
    const handleAddToCart =props.handleAddToCart
  
    return (
        <div>
            {/* card */}
            <div className="card w-full shadow-2xl h-[450px]">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body m-0 p-0">
                    <h2 className="text-lg font-semibold ">{name}</h2>
                    <p className="text-lg font-semibold my-1">Price: ${price}</p>
                    <p className="text-sm">Manufacturer: {seller}</p>
                    <p className="text-sm mt-1">Ratings: {ratings}</p>
                </div>
                <button onClick={()=>handleAddToCart( props.product)} className="btn btn-primary w-full mt-10">
                    Buy Now 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                </button>
            </div>
        </div>
    );
};

export default Product;