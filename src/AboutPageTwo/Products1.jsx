import React from 'react'
import Page1 from '../assets/AboutPageTwoImg/page1.svg'

const Products1 = () => {
  return (
    <div className='max-[100%] w-[90%] mx-auto'>
       <div className='max-[100%] w-[90%] mx-auto flex justify-between mt-[50px]'>
      <h1 className='w-[705px] text-3xl'>A brand built on the love of craftmanship,
      quality and outstanding customer service</h1>
      <button className='bg-gray-100 w-[192px] h-[56px] text-l'>View our products</button>
    </div>

    <div className='flex justify-between pt-[120px]'>
      <div className='bg-purple-950 w-[634px] h-[478px] pl-[40px] pt-[20px] '>
        <div className='flex  flex-col gap-[30px]'>
        <h2 className='text-3xl text-white '>It started with a small idea</h2>
        <p className='text-white w-[495px] pb-[160px] '>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
        </div>  
        <button className='bg-gray-400 w-[192px] h-[56px] text-l text-white '>View collection</button>
      </div>

      <div>
        <img src={Page1} alt="" />
      </div>
    </div>
    </div>
   
  )
}

export default Products1
