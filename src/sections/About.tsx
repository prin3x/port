import React, { ReactElement } from 'react';

interface Props {}

function About({}: Props): ReactElement {
  return (
    <div className='flex justify-center h-screen main-bg'>
      <div className='relative h-screen flex flex-col max-w-4xl items-center	justify-center reveal-text '>
        <div className='flex items-center	justify-center'>
          <div className='font-semibold extra-xl-text color-grey reveal-text '>
            <span className='sm:text-8xl xs:text-3xl'>ABOUT</span>
          </div>
          <div className='md:text-5xl xs:text-4xl text-xl font-thin h-full flex items-center ml-3'>
            <div className='mt-5'>
              <div className='content-writer reveal-text-6s  xs:text-md md:text-5xl '>
                <span className='font-bold'>Software </span>Engineer
              </div>
              <div className='hand-writing xs:text-5xl md:text-5xl  text-2xl mt-2 tracking-wider xl2-text reveal-text-4s'>
                Sarut Thrikham
              </div>
            </div>
          </div>
        </div>
        <div className='text-md font-thin text-center mobile: mt-5 text-sm xs:text-3xl'>
          Please scroll down to view my works
        </div>
        <div className='mt-10 arrow down down-1'></div>
        <div className='mt-1 arrow down down-2'></div>
        <div className='mt-1 arrow down down-3'></div>
      </div>
    </div>
  );
}

export default About;
