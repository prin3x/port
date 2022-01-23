import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function Works({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen '>
      <div className='relative flex'>
        <div className='relative z-10  w-full'>
          <div className='text-9xl font-semibold color-grey absolute left-14'>
            WORKS
          </div>
          <div className='absolute top-20 left-32 w-full'>
            <div className='text-md font-thin'>
              I started as a freelancer, and became the full time software engineer.
            </div>
            <div className='text-4xl font-normal works-title-desc'>
              <span className='font-bold'>These</span>{' '}
              <span className='color-grey-2'>
                projects is built from
              </span>{' '}
              <span className='font-bold'>different stacks</span>
            </div>
            <Button
              variant='contained'
              style={{
                backgroundColor: '#000',
                fontWeight: '100',
                textTransform: 'capitalize',
                width: '150px',
                marginTop: '2rem',
              }}
            >
              Explore
            </Button>
          </div>
        </div>
        <div className='relative w-full'>
          <img
            src='/assets/works/tri-group.png'
            alt=''
            className='absolute top-0  left-0 -mt-20 -ml-28'
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
