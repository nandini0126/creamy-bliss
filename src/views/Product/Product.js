import "./Product.css"
import { products,theme } from "../../data"
import ProductCard from "../../components/ProductCard/ProductCard"

function Product() {
  return (
    <>
    <h1 className="prod-title" style={{color: theme.text}}>Products</h1>
        <div className="prod-container">
          {
            products.map((obj, i) => {
              const {
                id,
                name,
                img,
                price
              } = obj

              return (
                <ProductCard
                  id={id}
                  name={name}
                  img={img}
                  price={price}
                />
              )
            })
          }
        </div>
    </>
  )
}

export default Product