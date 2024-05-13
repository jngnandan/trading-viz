'use client'
// pages/login.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Header from '../header';

function Login() {
  const router = useRouter();

  // Assume isLoggedIn is a state variable indicating whether the user is logged in or not
  const isLoggedIn = true; // Replace with your actual authentication logic

  useEffect(() => {
    // If user is already logged in, redirect to the portfolio page
    if (isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]); // Re-run effect when isLoggedIn changes or when router changes

  // router.push('/login', { scroll: false })

  return (
    <div>
      <Header />
      <div className='flex flex-row justify-center items-center h-screen'>
        <p>Login</p>
      </div>
    </div>
  );
}

export default Login;
