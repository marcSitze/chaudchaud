import React from 'react'

const FooterItem = ({ title, divst}: { title:string, divst: string[]}) => {
  return (
    <div className='my-2 text-center sm:text-left w-full sm:w-1/2 md:w-1/4 text-white flex flex-col items-center'>
      <div>
      <h3 className='mx-0 px-0 text-base font-bold mb-2'>{title}</h3>
        <div className='text-sm my-1'>Category</div>
        <div className='text-sm my-1'>Promo</div>
        <div className='text-sm my-1'>Women Product</div>
        <div className='text-sm my-1'>Men Product</div>
      </div>
    </div>
  )
}

export default FooterItem