import React, { useState } from 'react';
import Input from './Input';

interface AuthFormProps {
  onSubmit: (data: { mobile: string; password: string; fullName?: string }) => void;
  isSignup: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isSignup }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ mobile, password, fullName });
  };
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {isSignup && (
        <Input id='fullName' label='Full Name' type='text' value={fullName} onChange={setFullName} required />
      )}
      <Input id='mobile' label='Mobile' type='text' value={mobile} onChange={setMobile} required />

      <Input id='password' label='Password' type='password' value={password} onChange={setPassword} required />

      <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-vani hover:text-white border-vani hover:bg-vani'
      >
        {isSignup ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
};

export default AuthForm;
