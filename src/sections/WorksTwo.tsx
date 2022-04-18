import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksTwo({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen sm:py-36 xs:py-10 px-10 md:px-24'>
      <div className=' relative'>
        <div className='works-example-title works-three h-full md:pl-36 md:block flex justify-center flex-col items-center'>
          <div className='text-4xl pt-20 md:text-7xl'>
            <span className='font-bold'>Points Collection</span> Charity Website
          </div>
          <div className='works-example-desc font-thin text-left md:text-xl'>
            This app requires user to upload good deed images in order to get
            points and spend on donation.
          </div>
          <div className='font-bold text-left mt-2 md:text-3xl'>
            STACKS : ReactJS - ExpressJS - MongoDB
          </div>
          <div className='font-regular text-left text-sm'>
            ROLE : Frontend / Backend Engineer
          </div>
          <div className='mt-5'>
            <a
              href='https://www.xn--e3cpp0ab5ca1c9d6d6d.com/'
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
        <div className='md:ml-32 md:-mt-10 mt-4'>
          <img
            src='/assets/works/sasom-group.png'
            alt=''
            className='md:w-4/5 xs:w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default WorksTwo;
