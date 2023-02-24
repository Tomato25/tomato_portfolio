import React from 'react'

export default function Roles() {
  return (
    <div className="flex flex-col min-h-full  justify-around min-w-full  text-white text-9xl">
    <div className="flex justify-end items-start w-full h-1/2 pt-24">
      <h3 className="text-5xl vertical-rl py-6">designer</h3>
      <h1>Web</h1>
    </div>
    <div className="flex justify-center items-start w-full h-1/2">
      <h1 className="whitespace-nowrap">Full-</h1>
      <h3 className="py-3 vertical-rl">stack</h3>
      <h3 className="text-5xl self-center pt-28">
        developer
      </h3>
    </div>
    </div>
  )
}
