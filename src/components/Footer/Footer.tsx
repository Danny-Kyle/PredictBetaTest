import React from 'react'
import { Separator } from '../ui/separator'

const Footer = () => {
  return (
    <main>
    <div className='bg-gray-200 text-black py-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col md:flex-row justify-center'>
            <span className='text-3xl font-bold tracking-tight'>Predict Beta</span>
            <Separator orientation='vertical' />
            <span>HallaBet</span>
          </div>
            <span className='tracking-tight flex gap-4'>
              <span>About</span>
              <span>Contact</span>
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
            </span>
        </div>
    </div>
    <div className='bg-slate-900 p-5'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
      <span className='text-white'>&copy; 2024 - PredictBeta. All Rights reserved | (18+) Predict Responsibly</span>
      <span className='text-red-600'>Powered by Hallabet</span>
      <span></span>
      </div>
    </div>
    </main>
  )
}

export default Footer