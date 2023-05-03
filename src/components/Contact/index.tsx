import "./Contact.scss"
import { Icon} from "../../utils/exports";

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be in Touch With us:</span>
        <div className="email">
          <input type="text"  placeholder="Enter your email..."/>
          <button>Join Us</button>
        </div>
        <div className="icons">
        <Icon.Facebook/>
        <Icon.Instagram/>
        <Icon.Twitter/>
        <Icon.Google/>
        <Icon.Pinterest/>
        </div>
      </div>
    </div>
  )
}
