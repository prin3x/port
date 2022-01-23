import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function About({}: Props): ReactElement {
  return (
    <div className='flex justify-center h-screen main-bg'>
      <div className='relative h-screen flex flex-col max-w-4xl items-center	justify-center reveal-text '>
        <div className='flex items-center	justify-center'>
          <div className='font-semibold extra-xl-text color-grey reveal-text '>
            <span className='lg:text-9xl text-3xl'>ABOUT</span>
          </div>
          <div className='lg:text-5xl text-xl font-thin h-full flex items-center ml-3'>
            <div className='mt-5'>
              <div className='content-writer reveal-text-6s '>
                <span className='font-bold'>Full-Stack </span> developer
              </div>
              <div className='hand-writing lg:text-6xl  text-2xl mt-2 tracking-wider xl2-text reveal-text-4s'>
                Sarut Thrikham
              </div>
            </div>
          </div>
        </div>
        <div className='text-md font-thin text-center mobile: mt-5 text-sm'>
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
