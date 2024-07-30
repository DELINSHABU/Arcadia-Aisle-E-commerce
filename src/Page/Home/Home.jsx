import Banner from "./Banner"
import PopularCategories from "./PopularCategories"
import PopularItems from "./PopularItems"

function Home() {
  return (
    <div className=" bg-orange-100">
      <Banner></Banner>
      <PopularItems></PopularItems>
      <PopularCategories></PopularCategories>
    </div>
  )
}

export default Home