import React from 'react';
import HeroSection from '../../HeroSection';
import { productsObjOne, productsObjTwo } from './Data';

function Products() {
  return (
    <div>
      <HeroSection {...productsObjOne} />
      <HeroSection {...productsObjTwo} />  
    </div>
  )
}

export default Products