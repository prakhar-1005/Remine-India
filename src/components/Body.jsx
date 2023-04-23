import React from 'react'
import './body.css'
import BodyContent from './BodyContent'
import Footer from './Footer'
// import background from './images/backgound.jpg'
const Body = () => {
  return (
    <>
    <div className='back h-[90vh] shadow-2xl bg-cover bg-no-repeat flex justify-center items-center text-center'>
        <div className='backdrop-blur-md bg-white/30 p-6 shadow-2xl rounded-3xl'>
            <div className='h-[320px] w-[1000px] bg-opacity-0 pt-5 '>
                <span style={{'-webkit-text-stroke': '1px #2eb331'}} className='text-[white] font-bold text-[59px]  pt-2'>Join us in our mission to create a cleaner future for generations to come...</span>
            </div>
        </div>
    </div>
    <BodyContent/>
    <Footer/>
    </>
  )
}

export default Body
