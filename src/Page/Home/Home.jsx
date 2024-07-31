import Articles from "./Articles"
import Banner from "./Banner"
import FAQSection from "./FAQSection"
import PopularCategories from "./PopularCategories"
import PopularItems from "./PopularItems"
import Services from "./Services"
import ShoppingEvent from "./ShoppingEvent"
import TopBrands from "./TopBrands"

function Home() {
  return (
    <div className=" bg-orange-100">
      <Banner></Banner>
      <PopularItems></PopularItems>
      <PopularCategories></PopularCategories>
      <Articles></Articles>
      <ShoppingEvent></ShoppingEvent>
      <FAQSection></FAQSection>
      <TopBrands></TopBrands>
      <Services></Services>
    </div>
  )
}

export default Home