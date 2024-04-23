import React from 'react';

export default function ErrorMsg({ children }) {
  return (
    <div className='flex mx-auto border border-red-500  h-[75px] w-[80%] justify-center items-center text-red-500 text-sm'>
      {children}
    </div>
  );
}
