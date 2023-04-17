import React, { useContext } from 'react';
import { AuthContext } from './Previous/AuthPrevious';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import Loading from "../../public/loading-rounded2.json";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <>
        <Lottie className='h-96 w-96 mx-auto' animationData={Loading} loop={true} />
        </>
     
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>;
};

export default PrivetRoute;