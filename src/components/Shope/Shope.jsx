import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shope = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch( 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data)
        )
    },[]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
        
    }

    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 grid-flow-row auto-rows-max ">
            <div className="product-container col-span-3 my-4 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        product.map((product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>))
                    }
                </div>
            </div>
            <div className="card-container bg-[#FF99004D] text-center">
                <h1 className="text-center text-lg font-semibold">Order Summary</h1>
                <p className='font-semibold"'>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shope;