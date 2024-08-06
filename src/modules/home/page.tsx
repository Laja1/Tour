import { useEffect } from 'react';
import { assetsLinks } from "../../assets/assetsLinks";
import { Button } from "../../components/shared/Button";
import Nav from "../../components/shared/Nav";
import MultipleItems from "../../components/shared/Slider";
import Faq from "./Faq";
import Footer from '../../components/shared/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS with a duration of 2000ms for animations
  }, []);

    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = Math.random() * 3 + 2 + 's';
      star.style.opacity = Math.random();
      document.getElementById('background').appendChild(star);
      setTimeout(() => {
          star.remove();
      }, 5000); 
  }
  setInterval(createStar, 500); 

    return (
      
      <div
        className="min-h-screen w-full" id="background"
        style={{ 
          backgroundImage: 'url(/images/tourImage.jpg)', 
          backgroundSize: 'cover',
          // backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
         
        }}
      >
        <div className="min-h-screen">
                {/* Your content goes here */}
                <div id="" className="pt-14 pb-10"><a href='#joinWaitlist'><Nav /></a></div>
          <div className="mx-auto pt-5 items-center flex flex-col">
          <p className="poppins-bold text-center  font-bold text-5xl  lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#828282] to-[#82828200]"
          >
            Every Trip
          </p>
                <p className="font-bold   text-5xl lg:text-6xl text-center poppins-bold  text-white">Tells a Story.</p>
                    <p className="visby-regular text-center py-5  text-sm text-primaryRegular  text-white max-w-xl ">
                        Explore with ease. Tour connects you to adventures.
                        <br />Plan, discover, book all in one place.  
              <br />Your travel starts with Tour. </p>
            <div className='py-3 relative items-center justify-center flex-col lg:space-y-0 md:space-y-0 space-y-3 lg:flex-row flex glow-effect rounded-full pt-1 pb-1'>
            <input placeholder="Your best email" className="border-1 border-[#ffffff50] text-primaryRegular pl-4 placeholder:text-[#8D90A5] placeholder:text-sm bg-black border  w-[350px] lg:w-[600px] rounded-full py-3 "/>
              <div className='absolute hidden lg:flex right-0 pr-1.5'>
                <Button label='Join waitlist' className='text-black bg-white  transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105' /></div>
                <div className='flex lg:hidden'>
                <Button label='Join waitlist' className='text-black w-[350px] bg-white'/>
              </div>

            </div>
                    <div className="lg:p-14 p-8 ">
                        <img src={assetsLinks.phones} className="w-[850px]  h-auto"/>
                    </div>
                    <div className="lg:py-20 py-10   lg:pt-40">
                        <MultipleItems />
                    </div>
                    <div className="text-center lg:pt-36 py-20 ">
                    <div className="dashboard flex flex-col items-center" data-aos="flip-down" data-aos-duration="2000">
                        <p className="text-3xl font-bold mx-auto text-center poppins-bold text-white  text-whtie ">The Event <br />Planner’s Dream.</p>
                        <p className="visby-semibold text-sm mx-aut0 pb-10 text-white">Gain insights and analytics on event attendance and <br />engagements. Plan better, grow bigger, and ensure <br />your events are always a hit.</p>
                        <img src={assetsLinks.dashboard} className="w-[750px] h-auto" />
                    </div>
                    </div>
            
              <Faq />
              <Footer />  
                </div>
            </div>
      </div>
    );
  };
  
  export default Home;