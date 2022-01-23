import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksThree({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen px-28'>
      <div className='flex justify-center pt-20'>
        <div className=''>
          <img src='/assets/works/me-lg.png' alt='' className='w-4/6 ml-28' />
        </div>
        <div className='wh-full'>
          <div className='text-4xl pt-20'>
            <span className='font-bold'>Internal Staffs </span>App
          </div>
          <div className='works-example-desc font-thin text-left'>
            This app allows user to create event on calendar, make blog posts, book meeting rooms etc.
          </div>
          <div className='font-bold text-left mt-2'>
            STACKS : NextJS - NestJS - MySQL
          </div>
          {/* <div className='mt-5'>
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
          </div> */}
          <div className=''>
            <img src='/assets/works/me-calendar.png' alt='' className='w-2/4' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksThree;
