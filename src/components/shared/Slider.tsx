import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assetsLinks } from "../../assets/assetsLinks";
function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container w-[340px] max-w-xl md:w-[700px] mx-auto ">
      <Slider {...settings}>
        
        <div className="relative flex items-center justify-center text-center ">
              <div className="absolute pt-5 lg:pt-20  text-white  w-full">
        <p className="mx-auto text-lg lg:text-2xl poppins-bold font-bold">Discover Your<br />Next Adventure!</p>
        <p className="mx-auto mt-2 text-sm text-primaryRegular">Get event recommendations that match your interests<br />and recent activities. A personalized<br />Adventure just for you.</p>
      </div>
      <img src={assetsLinks.sliderImage1} alt="Adventure" className="h-auto w-full  mx-auto" />
    
    </div>   
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
       
      </Slider>
    </div>
  );
}

export default MultipleItems;
