import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

function WorksFour({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen flex items-center justify-center px-28 '>
      <div className=''>
        <img src='/assets/works/covest-lg.png' alt='' className='w-5/5' />
      </div>
      <div className='w-full'>
        <div className='text-4xl'>
          Insurance <span className='font-bold'>blockchain dApp</span>
        </div>
        <div className='works-example-desc font-thin text-left'>
          Prototype project aims for p2p insurance.
        </div>
        <div className='font-bold text-left mt-2'>
          STACKS : FASTIFY - MORALIS
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
    </div>
  );
}

export default WorksFour;
