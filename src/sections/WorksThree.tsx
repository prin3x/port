import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksThree({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen  px-10 lg:px-28'>
      <div className='flex justify-center lg:pt-20 items-center flex-col-reverse lg:flex-row'>
        <div className='flex'>
        <img src='/assets/works/me-calendar.png' alt='' className='lg:w-2/4 w-3/6 lg:hidden' />
          <img src='/assets/works/me-lg.png' alt='' className='lg:w-4/6 lg:ml-28 w-3/6 mx-auto' />
        </div>
        <div className='wh-full lg:block flex justify-center flex-col items-center'>
          <div className='text-4xl pt-20'>
            <span className='font-bold'>Internal Management </span>App
          </div>
          <div className='works-example-desc font-thin text-left'>
            This app allows user to create event on calendar, make blog posts,
            book meeting rooms etc.
          </div>
          <div className='font-bold text-left mt-2'>
            STACKS : NextJS - NestJS - MySQL
          </div>
          <div className=''>
            <img src='/assets/works/me-calendar.png' alt='' className='lg:w-3/4 mx-auto w-3/6 hidden lg:block' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksThree;
