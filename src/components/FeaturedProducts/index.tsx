import Card from "../Card";
import "./FeaturedProducts.scss";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    oldPrice: 19,
    price: 12,
    isNew: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Hat",
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    oldPrice: 19,
    price: 12,
    isNew: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Hat",
    oldPrice: 19,
    price: 12,
  },
];
export default function FeaturedProducts({ type }: any) {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          pariatur expedita cum, dicta modi repellat saepe a quos numquam earum
          illo dolor amet! Ut voluptatibus ad nostrum similique vel consequatur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magni,
          facere accusantium, repudiandae ad id sed, perspiciatis quisquam
          dolores cum dolorem doloribus ut repellat a ipsam consequuntur?
          Impedit, nostrum recusandae!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
