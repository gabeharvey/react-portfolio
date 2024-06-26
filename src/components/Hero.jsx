import React from 'react'
import proPic from '../assets/profile-pic.png'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div>
        <div className='max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        <div className='bg-white-300 flex-col my-auto mx-auto'>
            <p className='md:text-3xl sm:text-3xl text-xl font-bold text-white-200'>Hello! My name is Gabe Harvey and I am a ...</p>
            <h1 className='md:text-4xl sm:text-5xl text-3xl font-bold md:py-6'><TypeAnimation sequence={['Full Stack Web Developer',1000,'Designer',1000,'Business Consultant',1000]}wrapper='span' speed={45} repeat={Infinity}/></h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-4xl text-xl font-bold text-white-500'>With 2 Bachelor's Degrees from Mississippi State University.</p>
            </div>
        </div>
            <div className='text-7xl'>
            </div>
            <div className='my-auto'>
                <img className='w-[250px] sm:w-[400px] mx-auto h-auto rounded-lg' src={proPic} alt="My Profile Pic"/>
            </div>
        </div>
    </div>
  )
}

export default Hero