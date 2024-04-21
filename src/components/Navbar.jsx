import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center'>
        <h1 className='w-full text-4xl font-bold primary-color ml-2'>Gabe Harvey</h1>
        <ul className='hidden md:flex'>
            <li className='p-3'>About Me</li>
            <li className='p-3'>Portfolio</li>
            <li className='p-3'>Contact</li>
            <li className='p-3'>Resume</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
        </div>
    </div>
  )
}

export default Navbar