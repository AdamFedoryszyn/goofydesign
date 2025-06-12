import React from 'react'
import Image from 'next/image'
import cat from '@/public/cat.png'

export default function Hero() {
  return (
    <div className='flex h-screen bg-indigo-400 overflow-hidden'>
      <h1 className='p-12 pl-32 font-bold text-2xl text-amber-200'>
        Goofy
      </h1>
      <div className='border-2 border-white/30 border-b-0 border-r-0 border-t-0 h-screen w-screen flex justify-between'>
        <div>
          <nav className='absolute'>
            <ul>
              <div className='flex pt-12'>
                <div className='h-12 w-12 bg-black'></div>
              <li className= "pl-1 text-amber-200 font-bold">
                Explore
              </li>
              </div>
               <div className='flex'>
                <div className='h-12 w-12 bg-black'></div>
              <li className='pl-1 pt-3 text-amber-200 font-bold'>
                Templates
              </li>
              </div>
              <div className='flex'>
                <div className='h-12 w-12 bg-black'></div>
                <li className='pl-1 pt-3 text-amber-200 font-bold flex'>
                Components
              </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className= 'bg-gradient-to-t from-green-500 to-green-300 w-8/11 h-full rounded-xl mt-8 mr-40 flex justify-between'>
          <div className='w-7/10 h-full bg-white mt-6 -ml-6 rounded-xl'>
            <Image src={cat} alt='volcano' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '400px' }} className='rounded-t-xl fit'></Image>
          </div>
          <div className='flex flex-col items-end ml-6 mr-4 mt-4 space-y-4'>
            <div className='bg-gradient-to-br from-red-400 to-orange-300 w-80 h-44 rounded-lg flex'>
              <div className='absolute h-20 w-80 p-2 text-white text-center'>
                <p>Join now to access customizable <span className="font-bold">templates</span>, create stunning <span className="font-bold">designs</span>, and share your work with a creative <span className="font-bold">community</span></p>
              </div>
              <button className='bg-blue-500 h-12 w-48 rounded-3xl text-white ml-28 mt-28 relative'>
                <span className="absolute top-0 right-0 p-2 pr-4">Sign up</span>
              </button>
            </div>
            <div className='bg-white rounded-lg h-88 w-95 mr-4'>
              <h1 className='text-black text-xl font-bold p-2 pl-4'>Check these out</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}