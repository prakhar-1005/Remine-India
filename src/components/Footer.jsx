import React from 'react'
import {BsInstagram,BsLinkedin} from 'react-icons/bs'
import {AiOutlineFacebook,AiOutlineYoutube} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <div>
        <div className='text-center h-[400px] text-white bg-[#2eb331]'>
            <p className='text-[25px] pt-8 underline decoration-2 decoration-white'>Contact us today to learn more about our electronics recycling services and how we can help you make a difference</p>
        
            <div className='flex justify-around align-middle items-center'>
                <div className='flex flex-col text-[19px] p-16'>
                    <p className='mt-4 cursor-pointer'>Contact</p> 
                    <p className='mt-4 cursor-pointer'>About Us</p>
                    <p className='mt-4 cursor-pointer'>Projects</p>
                    <p className='mt-4 cursor-pointer'>Accomplishments</p>
                </div>
                <div className='flex gap-9 pr-20 items-center'>
                    <BsInstagram className='text-[30px] cursor-pointer'/>
                    <AiOutlineFacebook className='text-[30px] cursor-pointer'/>
                    <FiTwitter className='text-[30px] cursor-pointer'/>
                    <BsLinkedin className='text-[30px] cursor-pointer'/>
                    <AiOutlineYoutube className='text-[40px] cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
