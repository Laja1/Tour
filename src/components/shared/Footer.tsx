import { assetsLinks } from "../../assets/assetsLinks"
import { IoMdArrowUp } from "../../assets/react_icons"
const Footer = () => {
  return (
    <div className="py-20  md:w-[800px] w-[350px]  lg:w-[1000px] items-center justify-center flex flex-col">
      <img src={assetsLinks.footer} className='mx-auto md:w-[500px] w-[300px]  lg:w-[700px]' />
    <div  className="absolute lg:flex hidden  right-0 mt-[220px] mr-[180px]"> <a href='#joinWaitlist'><div className="border size-10 rounded-full  items-center justify-center flex"><IoMdArrowUp size={25}/></div></a> </div>
          <div className=' border-[0.26px] border-[#ffffff50] w-full' />
          <p className="text-xs text-white pt-10">©2024 Tour. All rights reserved.<span className="text-xs text-[#FB6D6B]"> Privacy Terms of Service</span></p>
    </div>
  )
}

export default Footer
