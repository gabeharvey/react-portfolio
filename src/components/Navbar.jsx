import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto h-30 px-4 text-l'>
        <h1 className='text-3xl font-bold primary-color ml-4'>Gabe Harvey</h1>
        <ul className='hidden md:flex'>
            <li className='p-2'>About Me</li>
            <li className='p-2'>Portfolio</li>
            <li className='p-2'>Contact</li>
            <li className='p-2'>Resume</li>
        </ul>
    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
    </div>
    <div className={nav ? 'text-white-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#0c0c0c] ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold primary-color ml-4'>Gabe Harvey</h1>
        <ul className='p-8 text-2xl'>
            <li className='p-2'>About Me</li>
            <li className='p-2'>Portfolio</li>
            <li className='p-2'>Contact</li>
            <li className='p-2'>Resume</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar