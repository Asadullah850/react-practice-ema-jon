import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect( ()=>{
        const storedCart = getShoppingCart();
        const saveCart = []
        for (const id in storedCart) {
           const addedProduct = product.find(p => p.id === id);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
           }
        }
        setCart(saveCart)
    },[product])

    const handleAddToCart = (product) =>{
        // const newCart = [...cart,product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart =[...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }

        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 grid-flow-row auto-rows-max ">
            <div className="product-container col-span-3 my-4 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        product.map((product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart} removeDb={product.id}></Product>))
                    }
                </div>
            </div>
            <div className="card-container bg-[#FF99004D] text-center">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;