import React from 'react'

export default function EmojisItem({emoji}) {
   const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(emoji.symbol)
   }

  return (
    <>
      <div className='p-5' onClick={handleCopyToClipboard}>
      <span className='bg-yellow-500  w-[50%] rounded-md p-5 flex justify-center m-auto font-bold' >{emoji.symbol} {emoji.title}</span>
      {/* <span>{emoji.title}</span> */}
      {/* <span>{emoji.keywords}</span> */}
    </div>
    </>
  )
}
