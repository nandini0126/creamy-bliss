import "./ProductView.css"
import { products,theme } from "../../data"
import { useParams } from "react-router-dom"

function ProductView() {
    const { id } = useParams()

    const selectedprod = products.find((obj) => obj.id === id)
    return (
        <div className="prod-view-container" style={{color: theme.text}}>
            <img src={selectedprod.img} alt="img" className="prod-view-img"/>
            <div className="prod-view-description">
                <h1 className="prod-view-name">{selectedprod.name}</h1>
                <p className="prod-view-desc">{selectedprod.description}</p>
                <span className="prod-view-price">Price: {selectedprod.price}</span>
                <div>
                    <h3 className="ingre">Ingredients</h3>
                    <span className="prod-view-ingre">{selectedprod.ingredients}</span>
                </div>
                <button className="btn-buy-noww" style={{backgroundColor: theme.text}}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductView