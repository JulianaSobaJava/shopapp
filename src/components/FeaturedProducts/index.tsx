import {data, Card} from "../../utils/exports";
import "./FeaturedProducts.scss";


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
