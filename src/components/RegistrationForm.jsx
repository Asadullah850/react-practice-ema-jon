import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import google from "../../public/google.json";
import { Link } from 'react-router-dom';
import { AuthContext } from './Previous/AuthPrevious';


function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext);
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    setError('');
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPassword.value;
    if (password !== confirmPass) {
      setError('password not equal')
      return 
    }
    if (password.length < 6) {
      // return alert('must required up 6 letter')
      setError('must required up 6 letter')
      return
    }
    console.log(email,';pass', password,'conf', confirmPass);
 
    createUser(email, password)
    .then(result => {
      const logedUser = result.user;
      console.log(logedUser);
    })
    .catch(error => {
      setError(error.message)
    })
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input type="password" name='password' className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <label className="sr-only">Confirm Password</label>
              <input name="confirmPassword" type="password" autoComplete="confirm-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="confirm-Password" />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"></svg></span>Click Hear</button>
          </div>
          <p className="text-center text-blue-900">{error}</p>
          <div className="text-center text-blue-600">
            <Link to="/login">
              <p>Already have an Account</p>
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-600">By clicking the Sign up button, you agree to our <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.</p>
          </div>
          <div className="flex justify-center">
            <Lottie className='h-8 w-8 cursor-pointer' animationData={google} loop={true} />
            <p className='max-sm:hidden'>
              Login with google
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
