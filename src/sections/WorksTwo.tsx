import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksTwo({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen px-12 lg:px-24'>
      <div className=' relative'>
        <div className='works-example-title works-three h-full lg:pl-36 lg:block flex justify-center flex-col items-center'>
          <div className='text-4xl pt-20'>
            <span className='font-bold'>Points Collection</span> Charity App
          </div>
          <div className='works-example-desc font-thin text-left'>
            This app requires user to upload good deed images in order to get
            points and spend on donation.
          </div>
          <div className='font-bold text-left mt-2'>
            STACKS : ReactJS - ExpressJS - MongoDB
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
        <div className='lg:ml-32 lg:-mt-10 mt-4'>
          <img
            src='/assets/works/sasom-group.png'
            alt=''
            className='lg:w-4/5 xs:w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default WorksTwo;
