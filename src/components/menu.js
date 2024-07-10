import React from 'react'
import Button from './button'
const Menu = () => {
  return (
    <div>
      <div className='myContainer flex justify-between items-center lg:py-6 !pt-3 !pb-0'>
        <div className='flex justify-between items-center gap-3'>
          <div>
            <img src="/img/icons/logo.svg" alt="" />
          </div>
          <div className='text-xs lg:text-2xl text-blue-dark font-bold'>Opportunity-Loan</div>
        </div>
        <div>
          <Button text="Get Start" />
        </div>
      </div>
    </div>
  )
}

export default Menu