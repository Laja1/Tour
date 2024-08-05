import { assetsLinks } from "../../assets/assetsLinks"
import { scrollToTop } from "../../utils/constants"
import { Button } from "./Button"

const Nav = () => {
  return (
    <div className="items-center flex justify-center    mx-auto text-white">
    <div className="fixed lg:fixed z-30 lg:w-[850px] md:[700px] w-[365px]">
      <div className="border border-[#ffffff25] bg-transparent backdrop-filter backdrop-blur-lg items-center flex justify-between border-1 p-2 rounded-[32px]">
              <div className="flex">
                  <img src={assetsLinks.logo} className="w-46 lg:h-10 h-6"/>
                 
              </div> 
              <div>
              <img src={assetsLinks.middleLogo} className="w-42 lg:h-10 h-6"/>
              </div>
              <div onClick={scrollToTop}> 
             <Button label="Join Waitlist"  className="bg-white lg:w-full text-sm w-24 rounded-3xl text-black"/>
              </div>
      </div></div>
    </div>
  )
}

export default Nav
