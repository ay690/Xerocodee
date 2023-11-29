import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from "../assets";

const Companies = () => {
  return (
      <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[800px] m-auto max-w-[600px] px-4 md:px-0">
        <div className='grid md:grid-cols-4 grid-cols-4 gap-[50px]'>
        <img src={companyLogo1} alt="Company logo 1" className='h-8'/>
        <img src={companyLogo2} alt="Company logo 2" className='h-8' />
        <img src={companyLogo3} alt="Company logo 3" className='h-8' />
        <img src={companyLogo4} alt="Company logo 4" className='h-8' />

        <img src={companyLogo1} alt="Company logo 1" className='h-8' />
        <img src={companyLogo2} alt="Company logo 2" className='h-8' />
        <img src={companyLogo3} alt="Company logo 3" className='h-8' />
        <img src={companyLogo4} alt="Company logo 4" className='h-8' />
        </div>
      </div>
    </div>
  )
}

export default Companies
