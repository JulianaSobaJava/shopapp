import {dataImage, Icon, useState} from "../../utils/exports";
import "./Slider.scss"

export default function Slider() {

  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlide=()=>{
    setCurrentSlider(currentSlider=== 0 ? 2 : (prev)=> prev - 1);
  
  }
  const nextSlide=()=>{
    setCurrentSlider(currentSlider=== 2 ? 0 : (prev)=> prev + 1)
  }
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlider*100}vw)`}}>
        <img src={dataImage[0]} alt="" className="image_banner" />
        <img src={dataImage[1]} alt="" className="image_banner" />
        <img src={dataImage[2]} alt="" className="image_banner" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <Icon.WestOutlined/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <Icon.EastOutlined/>
        </div>
      </div>
    </div>
  )
}
