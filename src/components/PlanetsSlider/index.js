// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem/index'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="planets-app-bg-container">
        <h1 className="main-heading">PLANETS</h1>
        <div className="slider-container" data-testid="planets">
          <Slider {...settings}>
            {planetsList.map(eachPlanet => (
              <PlanetItem eachPlanetDetails={eachPlanet} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider
