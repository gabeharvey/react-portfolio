import React from 'react'

const Experience = () => {
  return (
    <div className='py-10 bg-lightgray'>
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>
            <div className='max-w-[500px] mx-auto'>
                <div className='mb-2'>
                    <div className='bg-white p-4 rounded-3xl'>
                        <p>Harvey Timber</p>
                        <p className='text-blue-500'>(2017 - Present)</p>
                        <p className='text-blue-600'>Managing timber harvesting, planting, and thinning while streamlining prospective customer needs. Constructed and actively maintaining React application utilizing Chakra UI and MERN stack principles to facilitate current and future business requirements.</p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div className='bg-white p-4 rounded-3xl'>
                        <p>USAA</p>
                        <p className='text-blue-500'>(2008 - 2017)</p>
                        <p className='text-blue-600'>Worked in New Member Solutions and Quality Assurance. Regularly audited approximately 400 employees work in New Member Solutions in San Antonio and Phoenix offices.</p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div className='bg-white p-4 rounded-3xl'>
                        <p>International Bank of Commerce</p>
                        <p className='text-blue-500'>(2007 - 2008)</p>
                        <p className='text-blue-600'>Served as Sales Representative issuing various financial products.</p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div className='bg-white p-4 rounded-3xl'>
                        <p>Patagonia Natural Products</p>
                        <p className='text-blue-500'>(2006 - 2007)</p>
                        <p className='text-blue-600'>Worked in Buenos Aires, Argentina office analyzing purchasing trends and establishing new markets and customers for company.</p>
                    </div>
                </div>
            </div>
        <div className='h-[50px] w-[2px] bg-lightgray relative my-1 mx-auto'></div>
    </div>
  )
}

export default Experience