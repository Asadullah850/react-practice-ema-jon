import React from 'react';
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <div className=' bg-[#1C2B35] text-white'>
            <div className=" flex flex-row justify-around w-[1280px] px-10 py-4">
                <div className="">
                    <a><img src={logo} alt="" srcset="" /></a>
                </div>
                <div className="flex justify-evenly gap-4 px-2">
                   <a href="">Order</a>
                   <a href="">Order Review</a>
                   <a href="">Manage Inventory</a>
                   <a href="">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;