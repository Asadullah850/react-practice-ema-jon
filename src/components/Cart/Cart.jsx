import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    // console.log(cart);
    let defaultPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product,quantity = product.quantity || 1;
        defaultPrice = defaultPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };
    let totalText = (defaultPrice * (7/100)).toFixed(2);
    let grandTotal = defaultPrice + totalShipping + totalText;

    return (
        <div>
            <h1 className="text-center text-lg font-semibold">Order Summary</h1>
            <hr className="my-4 border-4 border-stone-700" />
            <p className='font-semibold text-start my-4 px-4'>Selected Items: {quantity}</p>
            <p className='font-semibold text-start px-4'>Total Price:$ {defaultPrice}</p>
            <p className='font-semibold text-start my-4 px-4'>Total Shipping Charge:$ <span>{totalShipping}</span></p>
            <p className='font-semibold text-start px-4'>Tax: $ <span>{totalText}</span></p>
            <hr className="my-4 border-2 border-stone-700" />
            <p className='font-semibold text-start px-4'>Grand Total: $ {grandTotal}</p>
            <div className=" mt-20">
                <button className="btn bg-[#FF3030]">Clear Cart 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
                <Link to= '/orders'>
                    <button className="my-2 btn bg-[#FF9900]">Review Order
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;