import React from 'react'

export default function Placeholder({ text }) {
  return (
    <div className='bg-yellow-500 text-white flex justify-center items-center h-full'>
      <h1 className="text-8xl">{text}</h1>
    </div>
  )
}
