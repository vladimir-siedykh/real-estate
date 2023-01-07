import AboutMission from "../components/AboutMission"
import Heading from "../components/Heading"
import History from "../components/History"


const AboutPage = () => {
  return (
    <>
      <Heading title='About' subtitle='This is the about page' />
      <AboutMission />
      <History />
    </>
  )
}

export default AboutPage