import { ReactElement } from 'react';

interface Props {}

function Works({}: Props): ReactElement {
  return (
    <div className='main-bg h-screen'>
      <div className='relative flex md:flex-row xs:flex-col w-full xs:px-5 md:px-0'>
        <div className='z-10  w-full '>
          <div className='md:absolute md:text-9xl font-semibold color-grey  md:left-14  text-7xl left-5'>
            WORKS
          </div>
          <div className='md:absolute md:top-20 xs:top-28 md:left-32 md:w-96 left-4 md:left-14 md:w-1/2'>
            <div className='text-lg font-regular text-sm block'>
              I love building thing from scratch, as most of past projects are
              required to build both frontend, backend and CMS.
            </div>
            <div className='md:text-4xl font-normal works-title-desc  text-xl mt-6'>
              <span className='font-bold'>These</span>{' '}
              <span className='color-grey-2'>
                projects are some of example apps of which I built from
              </span>{' '}
              <span className='font-bold'>various stacks.</span>
            </div>
          </div>
        </div>
          <img
            src='/assets/works/tri-group.png'
            alt=''
            className='md:w-full xs:w-3/4'
          />
      </div>
    </div>
  );
}

export default Works;
