import React from 'react'
import { FaLinkedin, FaGithubSquare, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-2 w-max-[900px] border-t border-gray-300 text-center'>
        <p className='my-5 text-blue-500 text-5xl'>Thank you for Looking!</p>
        <div className='inline-flex text-blue-500 gap-5 text-6xl'>
            <a href="https://www.linkedin.com/">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/gabeharvey">
                <FaGithubSquare/>
            </a>
            <a href="https://www.facebook.com/">
                <FaFacebook/>
            </a>
            <a href="https://www.instagram.com/">
                <FaInstagram/>
            </a> 
        </div>
    </div>
  )
}

export default Footer