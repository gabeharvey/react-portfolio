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
    <div class='py-6 max-w-[1200px] mx-auto'>
      <div class='mx-auto px-4 md:px-8'>
          <div class='mb-4 flex items-center justify-between'>
            <div class='flex flex-col gap-4'>
              <h2 class='text-2xl lg:text-3xl text-blue'>My <span>Portfolio</span></h2>
              <p class='text-gray-500'>Included are 2 Fortune 500 company technology implementation awards and various coding projects of mine.</p>
            </div>
          </div>
         <div class='grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={fortuneAwardOne} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={fortuneAwardTwo} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projOneImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projTwoImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projThreeImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projFourImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projFiveImg} loading='lazy' alt='' className='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
            <a href='/' class='group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg md:h-75'><img src={projSixImg} loading='lazy' alt='' class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' />
              <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-45'></div>
            </a>
         </div>
      </div>
    </div>
  )
}

export default Work