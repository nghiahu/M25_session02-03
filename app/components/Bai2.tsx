import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function () {
  return (
    <>
    <div>Input Lable</div>
    <div className='relative'>
    <FontAwesomeIcon icon={faStopwatch} className='h-4 absolute top-2 left-2'/>
    <select name="" id="" className='border rounded-md border-black w-72 h-8 pl-4'></select>
    </div>
    <div className='border border-black mt-1 w-72 rounded-md'>
        <div className='flex gap-52 pl-2 mt-3'>
            <div>Lable</div>
            <input type="checkbox" />
        </div>
        <div className='flex gap-52 pl-2 mt-3'>
            <div>Lable</div>
            <input type="checkbox" />
        </div>
        <div className='flex gap-52 pl-2 mt-3'>
            <div>Lable</div>
            <input type="checkbox" />
        </div>
        <div className='flex gap-52 pl-2 mt-3'>
            <div>Lable</div>
            <input type="checkbox" />
        </div>

        <div className='flex mt-4 justify-around pb-3'>
            <button className='border border-gray-500 rounded-md px-11 py-1'>Clear</button>
            <button className='rounded-md px-11 py-1 bg-blue-400 text-white'>Apply</button>
        </div>
    </div>
    </>
  )
}
