import React from 'react'
import proPic from '../assets/profile-pic.png'
import {TypeAnimation} from 'react-type-animation'
import {AiFillLinkedin,AiFillGithub,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'

const Hero = () => {
  return (
    <div>
        <div className='max-w-[1200px] h-[70vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
            <div className='text-7xl'>
                Pro
            </div>
            <div className='my-auto'>
                <img className='w-[250px] sm:w-[400px] mx-auto h-auto rounded-lg' src={proPic} alt="My Profile Pic"/>
            </div>
        </div>
    </div>
  )
}

export default Hero