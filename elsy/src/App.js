import React from "react";
import Box from './components/Box'
import './style/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  componentDidMount() {
    this.calculateWater()
  }

  onHearthChange = (e) => {
    this.setState({ heart: e.target.value })
    this.calculateWater()
  }

  onStepsChange = (e) => {
    this.setState({ steps: e.target.value })
    this.calculateWater()
  }

  onTemperatureChange = (e) => {
    this.setState({ temperature: e.target.value })
    this.calculateWater()
  }

  calculateWater = () => {
    let waterAmount = 1.5

    if(this.state.temperature > 20) {
      waterAmount += 0.02 * (this.state.temperature - 20)
    }

    if(this.state.heart > 120) {
      waterAmount += 0.0008 * (this.state.heart - 120)
    }

    if(this.state.steps > 10000) {
      waterAmount += 0.00002 * (this.state.steps - 10000)
    }

    // round
    waterAmount = Math.round(waterAmount * 100) / 100
    this.setState({ water: waterAmount })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
          />

          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            onChange={this.onStepsChange}
            min={stepsMin}
            max={stepsMax}
          />

          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            onChange={this.onHearthChange}
            min={heartMin}
            max={heartMax}
          />

          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            onChange={this.onTemperatureChange}
            min={tempMin}
            max={tempMax}
          />
        </div>
      </div>
    );
  }
}

export default App;