import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing'
import { servicesObjOne, servicesObjTwo } from './Data';

function Services() {
  return (
    <div>
      <Pricing />
      <HeroSection {...servicesObjOne} /> 
      <HeroSection {...servicesObjTwo} /> 
    </div>
  )
}

export default Services