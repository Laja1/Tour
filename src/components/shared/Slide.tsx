import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assetsLinks } from "../../assets/assetsLinks";

const CustomPrevArrow = ({ onClick }) => (
  <div className="absolute -translate-y-1/2 top-1/2 pr-20">
    <div className="transform bg-gray-800 rounded-full p-2 cursor-pointer z-10" onClick={onClick}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8L10 12L14 16" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);


const CustomNextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 cursor-pointer z-10" onClick={onClick}>
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16L14 12L10 8" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);



function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    waitForAnimate: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative slider-container w-[340px] max-w-xl md:w-[700px] mx-auto">
      <Slider {...settings}>
        <div className="relative flex items-center justify-center text-center">
          <div className="absolute pt-5 lg:pt-20 text-white w-full">
            <p className="mx-auto text-lg lg:text-2xl font-bold">Discover Your<br />Next Adventure!</p>
            <p className="visby-semibold mx-auto mt-2 text-sm text-primaryRegular">Get event recommendations that match your interests<br />and recent activities. A personalized<br />Adventure just for you.</p>
          </div>
          <img src={assetsLinks.sliderImage1} alt="Adventure" className="h-auto w-full mx-auto" />
        </div>
        <div className="relative flex items-center justify-center text-center">
          <div className="absolute pt-5 lg:pt-20 text-white w-full">
            <p className="mx-auto text-lg lg:text-2xl font-bold">Never Miss<br />A Beat!</p>
            <p className="visby-semibold mx-auto mt-2 text-sm text-primaryRegular">Get real-time alerts that keep you in the loop, so<br />you're always where the action is. Say goodbye to<br />FOMO, your next adventure is just a ping away.</p>
          </div>
          <img src={assetsLinks.sliderImage2} alt="Adventure" className="h-auto w-full mx-auto" />
        </div>
        <div className="relative flex items-center justify-center text-center">
          <div className="absolute pt-5 lg:pt-20 text-white w-full">
            <p className="mx-auto text-lg lg:text-2xl font-bold">Your Perfect<br />Stay Awaits</p>
            <p className="visby-semibold mx-auto mt-2 text-sm text-primaryRegular">Discover your perfect stay with our handpicked<br />selection of top-tier apartments. Each one is carefully<br />vetted for quality, comfort, and style, ensuring you<br />enjoy the best experience possible.</p>
          </div>
          <img src={assetsLinks.sliderImage3} alt="Adventure" className="h-auto w-full mx-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
