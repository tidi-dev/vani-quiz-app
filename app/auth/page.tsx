'use client';

import { useState } from 'react';
import AuthForm from '../components/AuthForm';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleToggle = () => {
    setIsSignup((prev) => !prev);
  };

  const handleSubmit = (data: { mobile: string; password: string; fullName?: string }) => {
    console.log(data); // Here you can perform your signup/signin logic
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-vani'>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
        </div>
        <AuthForm onSubmit={handleSubmit} isSignup={isSignup} />
        <div className='flex items-center justify-center'>
          <button
            onClick={handleToggle}
            className='mt-4 bg-transparent hover:bg-vani hover:text-white font-semibold py-2 px-4 border border-gray-600 rounded transition ease-in-out duration-300'
          >
            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
