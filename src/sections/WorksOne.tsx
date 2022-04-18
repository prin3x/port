import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksOne({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen sm:py-36 xs:py-10'>
      <div className='works-example-title w-full text-center flex justify-center flex-col items-center'>
        <div className='md:text-8xl text-3xl'>
          Member <span className='font-bold'>Console</span>
        </div>
        <div className='font-thin text-center text-md md:text-2xl'>
          This app delivered full management of sending sms.
        </div>
        <div className='font-bold text-center text-2xl md:text-4xl'>
          STACKS : NextJS - NestJS - MySQL
        </div>
        <div className='font-regular text-left text-sm'>
          ROLE : Frontend / Backend Engineer
        </div>
        <div className='mt-5'>
          <a
            href='https://www.thaibulksms.com/'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              variant='contained'
              style={{
                backgroundColor: '#000',
                fontWeight: '100',
                textTransform: 'capitalize',
                width: '150px',
              }}
            >
              Explore
            </Button>
          </a>
        </div>
      </div>
      <div className='ex-one-image-container'>
        <img
          src='/assets/works/tbs-group.png'
          alt=''
          className='w-3/5 mx-auto'
        />
      </div>
    </div>
  );
}

export default WorksOne;
