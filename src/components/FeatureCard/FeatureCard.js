import "./FeatureCard.css"
import { features , theme} from "../../data"

function FeatureCard({title, img}) {
  return (
    <>
    <div>
        <div className="fea-card" style={{backgroundColor: theme.cardBackgroud}}>
            <img src={img}  className="fea-img" />
            <span className="fea">{title}</span>
        </div>
    </div>
    
    </>
  )
}

export default FeatureCard
