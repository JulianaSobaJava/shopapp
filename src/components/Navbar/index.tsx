import {Icon} from "../../utils/exports" 

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="left">
        <div className="item">
          <img src="./image/en.jpg" alt="Flag image" className="image_flag" />
          <Icon.KeyboardArrowDown/>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
      </div>
     
    </div>
  )
}
