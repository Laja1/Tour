
import Accordion from "../../components/shared/Accordion"

const Faq = () => {
  return (
    <div className="items-center  px-5 justify-center flex-col flex">
          <p className="text-[#FB6D6B] text-sm">FAQ</p>
          <p className="poppins-semibold text-white  text-lg lg:text-3xl">Any questions about Tour?</p>
          <p className="text-white text-[10px] pb-5 lg:text-sm">Understand how Tour works, change the way you plan your trips forever</p>
      <div className='lg:w-[700px] w-[350px] md:w-[700px] space-y-5'>  

<Accordion label="What is Tour?" labelDescription='Tour is a central hub for all your tourism and travel needs, enabling users to discover, book, and enjoy local events, venues, accommodations, and car hire services. With personalized recommendations based on user preferences, recent activities, and trending events, Tour helps uncover hidden gems and vibrant culture. '/>
              <Accordion label='Can I book accommodations or get car services through Tour?' labelDescription='hello' />
   <Accordion label='How does Tour help event planners?' labelDescription='hello'/>
              
   <Accordion label='How does Tour ensure the accuracy of its information?' labelDescription='hello'/>

      </div></div>
  )
}

export default Faq

