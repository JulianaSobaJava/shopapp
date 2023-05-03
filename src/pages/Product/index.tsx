import {productImages, useState, Icon} from "../../utils/exports";
import "./Product.scss"

export default function Product() {

  const [seletedMainProductImage, setSelectedMainProductImage] = useState(0);
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={productImages[0]} alt="" onClick={()=>setSelectedMainProductImage(0)}/>
          <img src={productImages[1]} alt="" onClick={()=>setSelectedMainProductImage(1)}/>
        </div>
        <div className="mainImage">
        <img src={productImages[seletedMainProductImage]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus culpa sint, debitis ullam quod dolore qui. Iusto molestias soluta, consequuntur quae ut tenetur optio temporibus qui, enim esse alias sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque impedit, laudantium. </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev =>( prev === 1 ? 1 : prev - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add"><Icon.AddShoppingCart/>ADD TO CART</button>
        <div className="links">
          <div className="item">
            <Icon.FavoriteBorder/> ADD TO WISH LIST
          </div>
          <div className="item">
            <Icon.Balance/> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr/>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
