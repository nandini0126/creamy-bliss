import "./Home.css"
import { features, products, theme } from "../../data"
import { Link } from "react-router-dom"
import Homeimg from "./home.png"
import FeatureCard from "../../components/FeatureCard/FeatureCard"

function Home() {
  return (
    <>
      <div className="navbar" style={{ backgroundColor: theme.backgroud }}>
        <img src="data:image/png;base64,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"
          alt="logo" className="logo" />
        <span style={{ color: theme.text }} className="name">Creamy-Bliss</span>
        <Link to={'/home'} style={{ color: theme.text }} className="nav-link">Home</Link>
        <Link to={'/products'} style={{ color: theme.text }} className="nav-txt">Products</Link>
      </div>

      <div className="head">
        <div className="head-desc">
          <h1 style={{ color: theme.text }} className="tagline">Scoops & Smiles Where happiness Melts</h1>
          <p className="tagline-para">Discover a world of frozen delights at chill haven creamery indulge in creamy scoops, rich flavours and create sweet memories with every visit.</p>
          <button className="btn-buy" style={{ backgroundColor: theme.btnBackground }}>Buy Now</button>
        </div>
        <img src={Homeimg} alt="img" className="head-img" />
      </div>

      <div>
        <h2 style={{ color: theme.text}} className="speciality">Our Speciality</h2>
        <div className="feature-container">
          {
            features.map((obj, i) => {
              const {
                title,
                img
              } = obj

              return (
                <FeatureCard
                  title={title}
                  img={img}
                />
              )
            })
          }
        </div>
      </div>

      
      
      
    </>
  )
}

export default Home