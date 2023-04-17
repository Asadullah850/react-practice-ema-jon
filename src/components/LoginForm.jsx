import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import google from "../../public/google.json";
import { AuthContext } from './Previous/AuthPrevious';
import { useLocation, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

function LoginForm() {

  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const {singUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email,';pass', password);
    
    singUser(email, password)
    .then(result =>{
      const logeduser = result.user;
      form.reset('');
      navigate(from, { replace: true})
      
    })
    .catch(error => {
      console.log(error);
      setError(error.message)
    })

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form onSubmit={handleLogIn} className="mt-8 space-y-6" >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input type="email" name="email" id="" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input type={show ? "text" : "password"} name='password'  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"  />
            </div>
            <div className=" ml-[90%] mt-10">
            <p onClick={()=>setShow(!show)}>
              <small className=' cursor-pointer '>
                {
                  show ? <span><EyeSlashIcon className="h-6 w-6 text-blue-500"></EyeSlashIcon></span> : <span><EyeIcon className="h-6 w-6 text-blue-500"></EyeIcon></span>
                }
              </small>
            </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
           
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            
          </div>
          <p className="text-center text-blue-900 my-2">{error}</p>
          <div className="flex justify-center">
            <Lottie className='h-8 w-8 cursor-pointer' animationData={google} loop={true} />
            <p className='max-sm:hidden'>
              Login with google
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginForm;
