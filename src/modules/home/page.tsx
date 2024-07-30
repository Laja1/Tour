import { assetsLinks } from "../../assets/assetsLinks";
import { Button } from "../../components/shared/Button";
import Nav from "../../components/shared/Nav";
import MultipleItems from "../../components/shared/Slider";
import Faq from "./Faq";
import Footer from '../../components/shared/Footer'
const Home = () => {
    return (
      <div
        className="min-h-screen w-screen"
        style={{ 
          backgroundImage: 'url(/images/tourImage.jpg)', 
          backgroundSize: 'cover',
          // backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
         
        }}
      >
        <div className="min-h-screen ">
                {/* Your content goes here */}
                <div className="pt-10"><Nav /></div>
          <div className="mx-auto pt-5 items-center flex flex-col">
          <p
  className="poppins-bold text-center font-bold text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#828282] to-[#82828200]"
>
  Every Trip
</p>
                <p className="font-bold md:text-4xl text-3xl lg:text-6xl text-center  poppins-bold  text-white">Tells a Story.</p>
                    <p className="text-center lg:text-sm text-xs text-primaryRegular  text-white max-w-xl pt-3">
                        Explore with ease. Tour connects you to adventures.
                        <br />Plan, discover, book all in one place.  
              <br />Your travel starts with Tour. </p>
            <div className='py-5 relative items-center justify-center flex-col lg:space-y-0 md:space-y-0 space-y-3 lg:flex-row flex'>
            <input placeholder="Your best email" className="border-1 text-primaryRegular pl-4 placeholder:text-[#8D90A5] placeholder:text-sm bg-black border  w-[350px] lg:w-[700px] rounded-full py-3"/>
              <div className='absolute hidden lg:flex right-0 pr-1.5'>
                <Button label='Join waitlist' className='text-black bg-white ' /></div>
           <div className=' flex lg:hidden '><Button label='Join waitlist' className='text-black w-[350px] bg-white '/></div>
          
            </div>
                    <div className="pb-20">
                        <img src={assetsLinks.phones} className="w-[850px]  h-auto"/>
                    </div>
                    <div className="p-20">
                        <MultipleItems />
                    </div>
                    <div className="text-center lg:pt-52 pt-20">
                        <p className="text-3xl font-bold mx-auto text-center poppins-bold text-white  text-whtie ">The Event <br />Planner’s Dream.</p>
                        <p className="text-sm mx-auto text-white">Gain insights and analytics on event attendance and <br />engagements. Plan better, grow bigger, and ensure <br />your events are always a hit.</p>
                        <img src={assetsLinks.dashboard} className="w-[750px] h-auto" />
            </div>
            
              <Faq />
              <Footer />  
                </div>
                
            </div>
            
      </div>
    );
  };
  
  export default Home;