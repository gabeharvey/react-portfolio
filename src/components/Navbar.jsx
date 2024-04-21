import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=''>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
        </div>
    </div>
  )
}

export default Navbar