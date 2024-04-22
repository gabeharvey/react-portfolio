import React from 'react'
import { FaLinkedin, FaGithubSquare, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div class='mt-10 w-max-[900px] border-t border-gray-300 text-center'>
        <p class='my-5 text-blue-500 text-5xl'>Thank you for Looking!</p>
        <div class='inline-flex text-blue-500 gap-5 text-6xl'>
            <FaLinkedin/>
            <FaGithubSquare/>
            <FaFacebook/>
            <FaInstagram/>
        </div>
    </div>
  )
}

export default Footer