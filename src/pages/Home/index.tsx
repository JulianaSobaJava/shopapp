import {Categories, FeaturedProducts, Slider} from "../../utils/exports";
import "./home.scss"

export default function Home() {
  return (
 <div className="home">
  <Slider/>
  <FeaturedProducts type="featured"/>
  <Categories/>
  <FeaturedProducts type="trending"/>
 </div>
  )
}
