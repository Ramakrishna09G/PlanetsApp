// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {name, imageUrl, description} = eachPlanetDetails

  return (
    <div className="item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="item-image" />
      <h1 className="sub-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
