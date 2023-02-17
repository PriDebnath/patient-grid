import React from 'react'
import callReceiver from "../../images/call-receiver.svg"


const PersonUi = (props) => {
  const { imgSrc, contractNumber, callCount, lastCalled}=props
  return (
    <div className='flex items-center shadow-xl rounded-lg p-2 my-4  min-w-[600px]'>

      <div className="flex w-8/12 pr-28 items-center justify-between">
      <img src={imgSrc} className />
      <p className='text-brand-gray-text pr-8'>{contractNumber}</p>
      <div className="bg-brand-skyblue flex rounded-3xl px-4 py-0 text-white"><img className='block' src={callReceiver} alt="call receiver icon"/><span className="p-2">{callCount}</span></div>

</div>
      <div className="w-4/12">
              <p className='text-brand-gray-text'>{lastCalled}</p>

      </div>
    </div>
  )
}

export default PersonUi