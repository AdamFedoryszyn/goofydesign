import React from 'react'

export default function Hero() {
  return (
    <div className='flex h-screen bg-indigo-400 overflow-hidden'>
      <h1 className='p-12 pl-32 font-bold text-2xl text-amber-200'>
        Goofy
      </h1>
      <div className='border border-gray-50 border-b-0 border-r-0 border-t-0 h-screen w-screen flex justify-between'>
        <div>
          <nav className='absolute'>
            <ul>
              <li className='pl-8 pt-14 text-amber-200 font-bold'>
                Explore
              </li>
              <li className='pl-8 pt-3 text-amber-200 font-bold'>
                Templates
              </li>
              <li className='pl-8 pt-3 text-amber-200 font-bold'>
                Components
              </li>
            </ul>
          </nav>
        </div>
        <div className= 'bg-green-400 w-8/10 h-full rounded-xl mt-8 mr-40 flex justify-between'>
          <div className='w-7/10 h-full bg-white mt-6 -ml-6 rounded-xl'>
          </div>
          <div className='flex flex-col items-end ml-6 mr-4 mt-4 space-y-4'>
            <div className='bg-gradient-to-tr from-yellow-500 to-orange-600 w-80 h-40 rounded-lg'></div>
            <div className='bg-white rounded-lg h-88 w-95 mr-4'></div>
          </div>
        </div>
      </div>

    </div>
  )
}
