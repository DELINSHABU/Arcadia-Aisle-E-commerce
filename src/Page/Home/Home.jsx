import Banner from "./Banner"
import PopularItems from "./PopularItems"

function Home() {
  return (
    <div className=" bg-orange-100">
      <Banner></Banner>
      <PopularItems></PopularItems>
    </div>
  )
}

export default Home