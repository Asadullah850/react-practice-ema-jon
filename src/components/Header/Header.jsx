import React from 'react';
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-[#1C2B35] text-white w-screen'>
            <div className=" flex flex-row justify-around px-10 py-4">
                <div className="">
                    <a><img src={logo} alt="" srcset="" /></a>
                </div>
                <div className="flex justify-evenly gap-4 px-2">
                   <Link to="/">Home</Link>
                   <Link to="inventory">Inventory</Link>
                   <Link to="orders">Order</Link>
                   <Link to="login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;