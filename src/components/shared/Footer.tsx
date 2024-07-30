import { assetsLinks } from "../../assets/assetsLinks"
const Footer = () => {
  return (
    <div className="py-20 max-w-[650px] md:w-[700px] w-[350px]  lg:w-[1000px] items-center justify-center flex flex-col">
      <img src={assetsLinks.footer} className='mx-auto w-full'/>
          <div className=' border-[0.26px] border-white w-full' />
          <p className="text-xs text-white pt-10">©2024 Tour. All rights reserved.<span className="text-xs text-[#FB6D6B]"> Privacy Terms of Service</span></p>
    </div>
  )
}

export default Footer
