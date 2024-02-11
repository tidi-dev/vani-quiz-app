'use client';

import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, setAuth, setError } from '../../redux/features/authSlice';
import { login, signup } from '../../services/auth.service';
import AuthForm from '../components/AuthForm';
const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const error = useSelector(selectError);
  const handleToggle = () => {
    setIsSignup((prev) => !prev);
    dispatch(setError(null));
  };

  const handleSubmit = async ({
    fullName,
    phoneNumber,
    password,
  }: {
    phoneNumber: string;
    password: string;
    fullName: string;
  }) => {
    try {
      const response = isSignup ? await signup(fullName, phoneNumber, password) : await login(phoneNumber, password);
      dispatch(setAuth(response));
      router.push('/quiz');
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-vani'>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
        </div>
        <p className='text-red-500'>{error}</p>
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
