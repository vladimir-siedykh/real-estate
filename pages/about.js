import AboutMission from "../components/AboutMission"
import Heading from "../components/Heading"
import History from "../components/History"


const AboutPage = () => {
  return (
    <>
      <Heading
        title='About'
        subtitle='We are Real Estate Bali, your go-to for finding your dream home. Our goal is to make buying a home easy and stress-free. Our experts are ready to help you every step of the way.'
      />
      <AboutMission />
      <History />
    </>
  );
}

export default AboutPage