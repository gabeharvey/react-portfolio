import React from 'react'
import aboutMePic from '../assets/about-me.jpg'
const About = () => {
  return (
    <div className='py-10 text-black bg-lightgray h-auto'>
        <div className='flex sm:flex-row flex-col items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='max-w-[600px] min-w-[300px] h-full'>
                    <img src={aboutMePic} alt='' className='bg-white-600 rounded-xl h-[250px] w-full' />
                </div>
            </div>
            <div>
                <div className='p-3'>
                    <div className='text-blue-400 my-3'>
                        <h3 className='text-2xl font-semibold mb-5'><span>Gabe is a Full Stack Web Developer that has a Bachelor's Degree in International Business and a Bachelor's Degree in Spanish. Gabe earned his Bachelor's Degrees from Mississippi State University in 2007</span></h3>
                    </div>
                </div>
                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-white p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-blue'>6<span>+</span></h3>
                        <p><span className='md:text-base text-xs'>Apps</span></p>
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-blue'>9<span>+</span></h3>
                        <p><span className='md:text-base text-xs'>Years Exp</span></p>
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-blue'>2</h3>
                        <p><span className='md:text-base text-xs'>Fortune500 Projects Approved</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About