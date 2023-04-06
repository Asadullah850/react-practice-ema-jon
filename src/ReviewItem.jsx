import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const ReviewItem = ({products, removeCart}) => {
    const {name, price, quantity, img, shipping,id} = products
    // console.log(name, price, quantity, img, shipping);
    return (
        <div className=' border-[1px] border-slate-600 m-1 p-2 flex rounded-lg max-sm:flex-col-reverse'>
            <div className="mx-2">
                <img className='w-16 h-16' src={img} alt="" srcset="" />
            </div>
            <div className="ml-2">
                <p className=' font-semibold'>{name}</p>
                <div className=" flex gap-4">
                    <p>Price:$ <span className=' text-orange-400 font-semibold'>{price}</span></p>
                    <p>Shipping: <span className=' text-orange-400 font-semibold'>{shipping}</span></p>
                    <p>Quantity <span className=' text-orange-400 font-semibold'>{quantity}</span></p>
                </div>
            </div>
            <div onClick={()=>removeCart(id)} className=" bg-[#e6b7b7] ml-auto p-1 rounded-full cursor-pointer">
                <TrashIcon className=' w-10 h-10 pt-2 text-[#ea4848]'></TrashIcon>
            </div>
        </div>
    );
};

export default ReviewItem;