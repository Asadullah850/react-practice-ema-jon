import React, { useContext } from 'react';
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Previous/AuthPrevious';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
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
                    {
                        user ?
                            <>
                                <Link className='' onClick={handelLogOut}>LogOut</Link>
                                <span>{user.email}</span>
                            </>
                            : <>
                                <Link to="registration">Registration</Link>
                                <Link to="login">Login</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;