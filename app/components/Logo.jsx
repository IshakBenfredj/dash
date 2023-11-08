import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link 
     href={'/dashboard'}
     className="text-white whitespace-nowrap font-bold tracking-widest p-3 text-center md:text-xl text-base rounded-md block mb-7"
    >
        <span className='text-primary'>&lt;</span>
        IshakBenfredj
        <span className='text-primary'> /&gt;</span>
    </Link>
  )
}


