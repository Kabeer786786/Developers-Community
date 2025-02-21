/* eslint-disable react/prop-types */
import React from 'react'

export default function BenefitCard( { image, title, subtitle}) {
  return (
    <div className="flex flex-col w-full items-center justify-center m-auto hover:scale-110 transition-scale duration-300 hover:bg-gray-100 rounded-xl p-4 ">
      <div className="">
        <img src={image} alt="Printer GIF" className="w-32 h-32 rounded-lg " />
      </div>
      <div className="pt-4">
        <h1 className="font-semibold text-center text-xl">{title}</h1>
        <p className="text-base  pt-1.5">{subtitle}</p>
      </div>
      <button className="bg-indigo-400 hover:bg-indigo-500 p-1.5 pl-6 pr-6 rounded-full mt-6">
        <a className='text-white font-semibold'>Read More</a>
      </button>
    </div>
  )
}
