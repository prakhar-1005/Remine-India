import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#2eb331]'>
      <nav className='flex flex-row justify-around items-center align-middle h-[100px] shadow-md'>
        <h1 className='text-[white] font-[700] text-[30px]'>Remine India</h1>      
        <ul className='flex flex-row gap-[48px] text-[white]'>
            <li className=' font-[500] text-[20px] cursor-pointer'>About Us</li>
            <li className=' font-[500] text-[20px] cursor-pointer'>Recycling Servies</li>
            <li className=' font-[500] text-[20px] cursor-pointer'>Products</li>
            <li className=' font-[500] text-[20px] cursor-pointer'>Contact</li>
            <li className=' font-[500] text-[20px] cursor-pointer'>Login / Signup</li>
        </ul>
      </nav>
    </div>
  )
}
// 03C988
export default Navbar
