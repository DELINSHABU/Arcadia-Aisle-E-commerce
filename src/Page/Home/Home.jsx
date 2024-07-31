import Articles from "./Articles"
import Banner from "./Banner"
import FAQSection from "./FAQSection"
import PopularCategories from "./PopularCategories"
import PopularItems from "./PopularItems"

function Home() {
  return (
    <div className=" bg-orange-100">
      <Banner></Banner>
      <PopularItems></PopularItems>
      <PopularCategories></PopularCategories>
      <Articles></Articles>
      <FAQSection></FAQSection>
    </div>
  )
}

export default Home