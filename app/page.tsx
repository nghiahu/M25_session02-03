import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Bai2 from './components/Bai2'
import FormLogin from './components/form/FormLogin'
import Popup from './components/bai5/Popup'
import Bai6 from './components/bai6/Bai6'
import Bai7 from './components/bai7/Bai7'

export default function page() {
  return (
    <>
    <div className='p-2'>
      <div>Bài 1</div>
      <label htmlFor="">Lable</label>
      <div className='relative'>
        <input className='border-zinc-900 p-2 absolute placeholder-black border rounded-md' type="text" placeholder='placeholder'/>
        <FontAwesomeIcon className='h-4 absolute top-3 left-48' icon={faEye} />
      </div>
        <div className='mt-12 text-gray-600'>Helper Text</div>
      </div>

      <div className='p-2'>
        <div>Bài 2</div>
          <Bai2></Bai2>
      </div>

      <div className='p-2'>
        <div>Bài 3 , 4</div>
        <FormLogin></FormLogin>
      </div>
      <div className='p-2'>
        <Popup></Popup>
      </div>

      <div className='p-2'>
        <Bai6></Bai6>
      </div>
      <div className='p-2'>
        <Bai7></Bai7>
      </div>
    </>
  )
}
