import React from 'react';
import HeroSection from '../../HeroSection';
import { signUpObjOne, signUpObjTwo } from './Data';

function SignUp() {
  return (
    <div>
      <HeroSection {...signUpObjOne} />
      <HeroSection {...signUpObjTwo} />
    </div>
  )
}

export default SignUp;