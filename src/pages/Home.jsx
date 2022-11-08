import HomeSwiper from "../components/swiper/HomeSwiper"
import Contact from "./Contact"
import Navbar from "../components/Navbar"
import Modalities from "./Modalities"


const Home = () => {
  return (

    <div>
      <main className="xs:px-2 md:px-0 bg-[#222222]">
        <Navbar/>
        <HomeSwiper />
        <Modalities/>
        <Contact />

      </main>

    </div >
  )
}

export default Home