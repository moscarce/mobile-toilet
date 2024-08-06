import EventGallery from "../components/EventGallery/EventGallery"
// import Hero from "../components/Hero/Hero"
import OurServices from "../components/OurServices/OurServices"
import OurStory from "../components/OurStory/OurStory"
import Quote from "../components/Quote/Quote"
import Service from "../components/Service/Service"

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <OurStory />
      <OurServices />
      <EventGallery />
      <Quote />
      <Service />
    </div>
  )
}

export default Home