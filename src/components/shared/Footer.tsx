import { assetsLinks } from "../../assets/assetsLinks"
import { IoMdArrowUp } from "../../assets/react_icons"
const Footer = () => {

  const scrollToTop = () => {
    const duration = 1000; // Duration of the scroll in milliseconds
    const start = window.pageYOffset;
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutQuad = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      
      window.scrollTo(0, start - start * easeInOutQuad);
      
      if (elapsedTime < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div className="py-20  md:w-[800px] w-[350px]  lg:w-[1000px] items-center justify-center flex flex-col">
      <img src={assetsLinks.footer} className='mx-auto md:w-[500px] w-[300px]  lg:w-[700px]' />
    <div  className="absolute cursor-pointer lg:flex hidden  right-0 mt-[220px] mr-[180px]"> <div className="border size-10 rounded-full  items-center justify-center flex" onClick={scrollToTop}><IoMdArrowUp size={25}/></div> </div>
          <div className=' border-[0.26px] border-[#ffffff50] w-full' />
          <p className="text-xs text-white pt-10">©2024 Tour. All rights reserved.<span className="text-xs text-[#FB6D6B]"> Privacy Terms of Service</span></p>
    </div>
  )
}

export default Footer
