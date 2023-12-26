/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import Button from '../button';
import { Link } from 'react-router-dom';

const ProductCard = forwardRef(({ className, index, product, showButton }, ref) => {

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center gap-20 p-14 lg:p-20 rounded-[50px]
      ${product?.background} 
      ${className ?? '' }`}>
      <div className='lg:w-3/5'>
        <header className={`mb-10 ${index > 0? 'text-white' : 'text-brown'}`}>
          <h2 className={`font-sat 

          lg:text-[24px] mb-[20px]`}>
            {product?.name}
          </h2>
          <h1 className='text-3xl lg:text-6xl font-bold'>
            {product?.subtitle}
          </h1>
        </header>
        <p className={`text-xl lg:text-2xl ${index > 0? 'text-white' : 'text-brown'}`}>
          {product?.description}
        </p>
        <div>
           <Link to='/waitlist'>
              <Button className='w-[247px] border-[#DEB78C] bg-[#6F5B46] text-creos mt-10'>
                Join our waitlist
              </Button>
            </Link>
        </div>
      </div>

      <div className='hidden lg:block'>
        <img
          src='/images/product-card-img-1.svg'
          alt='Product Card'
          draggable={false}
          className=''
        />
      </div>
    </div>
  );
});

export default ProductCard;
