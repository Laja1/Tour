import { assetsLinks } from "../../assets/assetsLinks"
import { Button } from "./Button"

const Nav = () => {
  return (
    <div className="lg:w-[1050px] md:[800px] w-[355px]  mx-auto text-white">
          <div className="border border-white items-center flex justify-between border-1 p-2 rounded-[32px]">
              <div className="flex space-x-2">
                  <img src={assetsLinks.logo} className="w-42 h-10"/>
                  <p className="font-bold ">Tour</p>
              </div> 
              <div>
              <img src={assetsLinks.middleLogo} className="w-42 h-10"/>
              </div>
              <div>
             <Button label="Join Waitlist" className="bg-white lg:w-full text-sm w-24 rounded-3xl text-black"/>
              </div>
      </div>
    </div>
  )
}

export default Nav
