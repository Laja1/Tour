import * as React from 'react';
import CustomAccordion from "../../components/shared/Acc";

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="items-center  px-5 justify-center flex-col flex">
      <p className="text-[#FB6D6B] text-sm">FAQ</p>
      <p className="poppins-semibold text-white  text-lg lg:text-3xl">Any questions about Tour?</p>
      <p className="visby-regular text-white text-[11px] pb-5 lg:text-sm">
        Understand how Tour works, change the way you plan your trips forever
      </p>
      <div className='lg:w-[700px] w-[350px] md:w-[700px] space-y-5'>
        <CustomAccordion
          expanded={expanded}
          handleChange={handleChange}
          panel="panel1"
          label="What is Tour?"
          labelDescription="Tour is a central hub for all your tourism and travel needs, enabling users to discover, book, and enjoy local events, venues, accommodations, and car hire services. With personalized recommendations based on user preferences, recent activities, and trending events, Tour helps uncover hidden gems and vibrant culture."
        />
        <CustomAccordion
          expanded={expanded}
          handleChange={handleChange}
          panel="panel2"
          label="Can I book accommodations or get car services through Tour?"
          labelDescription="Tour aims to provide event planners with detailed analysis and accurate data on event attendance and engagement, aiding in future planning and monitoring growth."
        />
        <CustomAccordion
          expanded={expanded}
          handleChange={handleChange}
          panel="panel3"
          label="How does Tour help event planners?"
          labelDescription="Yes, Tour looks to provide accurate information on local accommodations and car hire services, allowing for easy and convenient travels and for users to book their stays and rides conveniently, through the app."
        />
        <CustomAccordion
          expanded={expanded}
          handleChange={handleChange}
          panel="panel4"
          label="How does Tour ensure the accuracy of its information?"
          labelDescription="Tour is committed to providing reliable and up-to-date information by continuously updating its database and verifying details from trusted sources."
        />
      </div>
    </div>
  );
};

export default Faq;
