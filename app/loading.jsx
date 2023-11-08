import React from 'react'
import './loading.css'

export default function Loading() {
  return (
    <div className='w-full h-screen flexCenter bg-gray-800'>
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  )
}