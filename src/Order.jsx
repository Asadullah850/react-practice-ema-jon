import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { deleteShoppingCart, removeFromDb } from './utilities/fakedb';

const Order = () => {
    const saveCarts = useLoaderData();
    // console.log(carts);
    const [carts, setCarts] = useState(saveCarts);
    const removeCart = (id) => {
        const remainig = carts.filter(pd => pd.id !== id);
        setCarts(remainig);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCarts([]);
        deleteShoppingCart();
    }
    return (
        <div className='my-container flex max-sm:flex-col-reverse'>
            <div className="card-Container lg:w-3/4 bg-violet-100 p-2 lg:p-10">
                {
                    carts.map(product => <ReviewItem key={product.id} products={product} removeCart={removeCart}></ReviewItem>)
                }
            </div>
            <div className="cartPreview lg:w-1/4 card-container h-[500px] bg-[#ff99004d] text-center">
                <Cart cart={carts} clearCart={clearCart}>
                    <>
                        <Link to='/checkout'>
                            <button className="my-2 btn bg-[#FF9900]">Checkout
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </Link>
                    </>
                </Cart>
            </div>
        </div>
    );
};

export default Order;