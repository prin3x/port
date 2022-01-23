import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksTwo({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen px-24'>
      <div className=' relative'>
        <div className='works-example-title works-three h-full pl-36'>
          <div className='text-4xl pt-20'>
            <span className='font-bold'>Points Collection</span> Charity App
          </div>
          <div className='works-example-desc font-thin text-left'>
            This app requires user to upload good deed images in order to get points and spend on donation.
          </div>
          <div className='font-bold text-left mt-2'>
            STACKS : ReactJS - ExpressJS - MongoDB
          </div>
          <div className='mt-5'>
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
          </div>
        </div>
        <div className='ml-32 -mt-10'>
          <img src='/assets/works/sasom-group.png' alt='' className='w-4/5' />
        </div>
      </div>
    </div>
  );
}

export default WorksTwo;
