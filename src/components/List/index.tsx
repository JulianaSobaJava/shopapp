import {data, Card} from "../../utils/exports";
import "./List.scss"



interface ListProperties {
  idCategory: number;
   sort?: null | string;
    maxPrice:number;
}
export default function List({idCategory,sort, maxPrice}: ListProperties) {

  console.log(idCategory, sort, maxPrice);
  return (
    <div className="list"> 
      {data?.map((item) => (
      <Card item={item} key={item.id} />
    ))}</div>
  )
}
