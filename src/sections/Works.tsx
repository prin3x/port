import { Button } from '@mui/material';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface Props {}

function Works({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen '>
      <div className='relative flex w-full'>
        <div className='relative z-10  w-full'>
          <div className='lg:text-9xl font-semibold color-grey absolute lg:left-14  text-3xl left-5'>
            WORKS
          </div>
          <div className='absolute lg:top-20 lg:left-32 lg:w-full w-64 md:w-84 left-4 md:left-14 top-10'>
            <div className='text-md font-regular text-sm block'>
              I love building thing from scratch, as most of past projects are
              required to build both frontend, backend and CMS.
            </div>
            <div className='lg:text-4xl font-normal works-title-desc  text-xl mt-2'>
              <span className='font-bold'>These</span>{' '}
              <span className='color-grey-2'>
                projects are some of example apps of which I built from
              </span>{' '}
              <span className='font-bold'>various stacks.</span>
            </div>
          </div>
        </div>
        <div className='relative w-full'>
          <img
            src='/assets/works/tri-group.png'
            alt=''
            className='absolute lg:top-0  left-0 -mt-20 -ml-28 top-64 w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
