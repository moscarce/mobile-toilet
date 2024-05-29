import EventGallery from "../components/EventGallery/EventGallery"
import Hero from "../components/Hero/Hero"
import OurServices from "../components/OurServices/OurServices"
import OurStory from "../components/OurStory/OurStory"

const Home = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <OurServices />
      <EventGallery />
    </div>
  )
}

export default Home