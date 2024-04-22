import React from 'react'
import projOneImg from '../assets/project1.png'
import projTwoImg from '../assets/project2.png'
import projThreeImg from '../assets/project3.png'
import projFourImg from '../assets/project4.png'
import projFiveImg from '../assets/project5.png'
import projSixImg from '../assets/project6.png'
import fortuneAwardOne from '../assets/fortune500awardOne.png'
import fortuneAwardTwo from '../assets/fortune500awardTwo.png'

const Work = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto' id='portfolio'>
      <div className='mx-auto px-4 md:px-8'>
          <div className='mb-4 flex items-center justify-between'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl lg:text-3xl text-white'>My <span>Portfolio</span></h2>
              <p className='text-blue-500'>Included are 2 Fortune 500 company technology implementation awards and various coding projects of mine.</p>
            </div>
          </div>
         <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <a href='https://stark-castle-84556-b858ceaf5d7f.herokuapp.com/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projOneImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='https://gabeharvey.github.io/beat-tap/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projTwoImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='https://gabeharvey.github.io/weather-dashboard/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projThreeImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='https://arcane-brook-36149-6bb081aaa15e.herokuapp.com/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projFourImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='https://text-editor-huva.onrender.com/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projFiveImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='https://gabeharvey.github.io/student-coding-quiz/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projSixImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={fortuneAwardOne} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' className='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={fortuneAwardTwo} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
         </div>
      </div>
    </div>
  )
}

export default Work