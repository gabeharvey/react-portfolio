import React from 'react'

const Contact = () => {
  return (
    <div class='flex justify-center my-5 h-full sm:h-[60vh] items-center' id='contact'>
        <div class='max-w-[1200px] mx-auto'>
            <div class='grid grid-cols-1 md:grid-cols-2'>
                <div class='p-6 mr-2 bg-gray-500 rounded-xl flex flex-col justify-around ml-2 mb-2'>
                    <h1 class='text-4xl sm:text-5xl text-white'>Contact <span>Me</span></h1>
                    <p class='text-normal text-lg font-bold text-white mt-2'>Connect with Me ✅<br/>LinkedIn <br/>Facebook <br/>Instagram <br/>Email✉️</p>
                    <div class='flex items-center mt-2 text-white-400'>
                        <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
                            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'></path>
                        </svg>
                        <div class='ml-4 tracking-wide font-semibold w-40 text-white'>
                            <p></p>
                        </div>
                    </div>
                </div>
                <form action='' method='post' class='p-6 flex flex-col justify-center max-w-[700px]'>
                    <div class='flex flex-col'>
                        <input type='name' name='name' id='name' placeholder='Full Name' class='w-90 mt-2 py-2 px-3 rounded-lg' />
                    </div>
                    <div class='flex flex-col'>
                        <input type='email' name='email' id='email' placeholder='Email' class='w-90 mt-2 py-2 px-3 rounded-lg' />
                    </div>
                    <div class='flex flex-col'>
                        <input type='message' name='message' id='message' placeholder='Message Body' class='w-90 mt-2 py-2 px-3 rounded-lg' />
                    </div>
                    <button type='submit' class='bg-primary-color text-white py-2 px-6 rounded-lg mt-2'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact