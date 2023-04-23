import React from 'react'
import battery from '../images/battery-removebg-preview.png' 
const BodyContent = () => {
  return (
    <div className=" mt-20">
        <h1 className='text-[60px] font-extrabold text-[#2eb331] text-center underline decoration-8 decoration-[#2eb331] mb-32 mt-28'>Welcome</h1>
        <div className=''>
            <div>
                <span className='text-[22px]'>
                    <div className='flex justify-around align-top items-start '>   
                        <p className='w-[600px] h-[600px] font-semibold text-[26px] flex text-left align-middle justify-center pt-20'>
                            Welcome to the official site of Remine India Private Limited, your trusted partner in sustainable electronics recycling and lithium-ion battery disposal. We specialize in environmentally-friendly solutions for disposing of electronic waste and recovering valuable materials, all while reducing the impact on the planet.
                        </p> 

                        <img className='h-[520px] w-[550px] shadow-2xl rounded-2xl' src="https://wallpapercave.com/wp/wp4538147.jpg" alt="" />
                    </div>
                    
                    <div className='flex justify-around align-top items-start mt-32'>   
                        <img className='h-[490px] w-[590px] shadow-2xl rounded-2xl' src="https://png.pngtree.com/background/20220725/original/pngtree-battery-recycling-background-with-electronic-waste-symbols-isometric-vector-illustration-picture-image_1772459.jpg" alt="" />
                        <p className='w-[600px] h-[600px] font-semibold text-[23px] flex text-right align-middle justify-center pt-11'>
                        At Remine India, we're passionate about protecting the environment and preserving the planet for future generations. As one of the leading electronics recycling companies, we're committed to providing sustainable solutions for disposing of electronic waste and recovering valuable materials.
                        Our services are designed to make the process of recycling e-waste and li-batteries as easy and hassle-free as possible for our customers. We offer a range of collection and disposal options to suit your needs, including drop-off locations, mail-in programs, and on-site pick-up services.
                        </p> 

                    </div>

                    <br />

                    <div className='flex justify-around align-top items-start mt-32'>   
                        <p className='w-[600px] h-[600px] font-semibold text-[23px] flex text-left align-middle justify-center pt-11'>
                        When you choose Remine India for your electronics recycling needs, you can be confident that your waste is being handled responsibly and safely. We adhere to strict environmental regulations and standards, ensuring that all hazardous materials are handled and disposed of in a way that minimizes the impact on the environment.
                        In addition to our recycling services, we also offer a range of products made from recycled materials, including refurbished electronics and recycled batteries. By choosing these products, you're not only reducing waste but also supporting a more sustainable future.
                        </p> 
                        <img className='h-[490px] w-[590px] shadow-2xl rounded-2xl' src="https://cdn.vox-cdn.com/thumbor/7Dpjt39AWHy_XE4F1xfmp_A6Lxk=/0x0:4000x3000/1400x1050/filters:focal(2000x1500:2001x1501)/cdn.vox-cdn.com/uploads/chorus_asset/file/19753614/IMG_0483.jpg" alt="" />
                    </div>
                    

                    <div className='flex justify-center align-middle items-center text-center mt-10 border-dotted border-4 pt-8 rounded-3xl border-[#2eb331] w-[1000px] m-auto'>
                        <p className='w-[900px] pt-10 font-semibold items-center h-[300px] text-[28px]'>"At Remine India, we believe that sustainability is everyone's responsibility. That's why we work with businesses and individuals to help them reduce their impact on the environment and implement sustainable practices in their daily lives."</p>
                    </div>
                    <br />
                </span>
            </div>

        </div>
    </div>
  )
}

export default BodyContent
