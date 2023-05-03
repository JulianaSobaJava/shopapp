import {Icon} from "../../utils/exports";
import "./Cart.scss"

export default function CartModal() {

  const data =[
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt",
      oldPrice: 15,
      price: 12,
      desc:"Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Jacket",
      oldPrice: 20,
      price: 12,
      desc:"Lorem ipsum dolor sit amet."
    },
  ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item =>(
        <div className="item" key={item.id}>
          <div className="itemContent">
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          </div>
          <Icon.DeleteOutline className="delete"/>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className="button">Proceed to checkout</button>
      <button className="reset"><Icon.RemoveShoppingCart/> Reset Cart</button>
    </div>
  )
}
