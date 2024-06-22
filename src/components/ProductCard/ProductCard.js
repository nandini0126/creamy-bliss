import "./ProductCard.css"
import { theme } from "../../data"
import { Link } from "react-router-dom"

function ProductCard({id,name,img,price}) {
  return (
    <Link className="prod-card" style={{backgroundColor: theme.cardBackgroud}} to={`/productview/${id}`}>
      <img src={img} alt="img" className="prod-img"/>
      <span className="prod-name" style={{color: theme.text}}>{name}</span>
      <span className="prod-price" style={{color: theme.text}}> Price: {price}</span>
      <button className="btn-buy-now">Buy Now</button>
    </Link>
  )
}

export default ProductCard