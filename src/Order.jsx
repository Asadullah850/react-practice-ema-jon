import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { removeFromDb } from './utilities/fakedb';

const Order = () => {
    const saveCarts = useLoaderData();
    // console.log(carts);
    const [carts, setCarts] = useState(saveCarts);
    const removeCart =(id)=>{
        const remainig = carts.filter(pd => pd.id !== id);
        setCarts(remainig);
        removeFromDb(id);
    }
    return (
        <div className='my-container flex max-sm:flex-col-reverse'>
            <div className="card-Container lg:w-3/4 bg-violet-100 p-2 lg:p-10">
                {
                    carts.map(product => <ReviewItem key={product.id} products={product} removeCart={removeCart}></ReviewItem>)
                }
            </div>
            <div className="cartPreview lg:w-1/4 card-container h-[500px] bg-[#ff99004d] text-center">
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Order;