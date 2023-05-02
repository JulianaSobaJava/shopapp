import { Link } from "../../utils/exports";

export default function Card({item}:any) {
  return (
    <Link to={`/product/${item.id}`} className="card">Card</Link>
  )
}
