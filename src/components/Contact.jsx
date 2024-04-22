import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[60vh] items-center mt-1' id='contact'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-6 mr-2 bg-gray-500 rounded-xl flex flex-col justify-around ml-2 mb-2'>
                    <h1 className='text-4xl sm:text-5xl text-white'>Contact <span>Me</span></h1>
                    <p className='text-normal text-lg font-bold text-white mt-2'>Connect with Me ✅<br/>LinkedIn <br/>Facebook <br/>Instagram <br/>Email✉️</p>
                    <div className='flex items-center mt-2 text-white-400'>
                        {/* <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
                            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'></path>
                        </svg> */}
                        <div className='ml-4 tracking-wide font-semibold w-40 text-white'>
                            <p></p>
                        </div>
                    </div>
                </div>
                <form action='https://getform.io/f/pagxvomb' method='post' className='p-6 flex flex-col justify-center max-w-[700px]'>
                    <div className='flex flex-col'>
                        <input type='name' name='name' id='name' placeholder='Full Name' className='w-90 mt-2 py-2 px-3 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type='email' name='email' id='email' placeholder='Email' className='w-90 mt-2 py-2 px-3 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type='message' name='message' id='message' placeholder='Message Body' className='w-90 mt-2 py-2 px-3 rounded-lg' />
                    </div>
                    <button type='submit' className='bg-primary-color text-white py-2 px-6 rounded-lg mt-2'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact