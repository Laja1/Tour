import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assetsLinks } from "../../assets/assetsLinks";
function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    // lazyLoad: true,
    waitForAnimate: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container w-[340px] lg:max-w-[1200px]  md:w-[700px] mx-auto ">
      <Slider {...settings}>
        
        <div className="relative flex items-center justify-center text-center ">
              <div className="absolute pt-5 lg:pt-20  text-white  w-full">
       <p className="space-y-4"> <p className="mx-auto text-xl lg:text-[45px] tracking-[-0.2rem] poppins-bold font-bold">Discover&nbsp;  Your</p><p className="mx-auto text-xl lg:text-[45px] tracking-[-0.2rem] poppins-bold font-bold">Next&nbsp; Adventure!</p></p>
        <p className="mx-auto mt-2 text-sm lg:text-lg tracking-tighter text-primaryRegular">Get event recommendations that match your interests<br />and recent activities. A personalized<br />Adventure just for you.</p>
      </div>
      <img src={assetsLinks.sliderImage1} alt="Adventure" className="h-auto w-full  mx-auto" />
    
    </div>   
    <div className="relative flex items-center justify-center text-center ">
          <div className="absolute pt-5 lg:pt-20  text-white  w-full">
       <p className="space-y-4"> <p className="mx-auto text-xl lg:text-[45px] tracking-[-0.2rem] poppins-bold font-bold">Never&nbsp; Miss</p><p className="mx-auto text-xl lg:text-[45px] tracking-[-0.2rem] poppins-bold font-bold">A&nbsp; Beat!</p></p>
            
   
        <p className="mx-auto mt-2 text-sm lg:text-lg tracking-tighter text-primaryRegular">Get real-time alerts that keep you in the loop, so <br />you&apos;re always where the action is. Say goodbye to <br />FOMO, your next adventure is just a ping away.</p>
      </div>
      <img src={assetsLinks.sliderImage2} alt="Adventure" className="h-auto w-full  mx-auto" />
    
    </div> 
    <div className="relative flex items-center justify-center text-center ">
          <div className="absolute pt-5 lg:pt-20  text-white  w-full">
          <p className="space-y-4"> <p className="mx-auto text-xl lg:text-[45px] tracking-[-0.2rem] poppins-bold font-bold">Your&nbsp; Perfect</p><p className="mx-auto text-xl lg:text-[45px] tracking-[-0.2rem] poppins-bold font-bold">Stay&nbsp; Awaits</p></p>        
        <p className="mx-auto mt-2 text-sm lg:text-lg tracking-tighter  text-primaryRegular">Discover your perfect stay with our handpicked <br />selection of top-tier apartments. Each one is carefully <br />vetted for quality, comfort, and style, ensuring you <br />enjoy the best experience possible. </p>
      </div>
      <img src={assetsLinks.sliderImage3} alt="Adventure" className="h-auto w-full  mx-auto" />
    
    </div> 
       
      </Slider>
    </div>
  );
}

export default MultipleItems;
