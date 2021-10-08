import React from 'react';

const calculatePercentage = (value, min, max) => {
  return ((value - min) * 100) / (max - min)
}

class Box extends React.Component {
  render() {
    const percentage = calculatePercentage(this.props.value, this.props.min, this.props.max)

    return (
      <div
        className="box col-sm-3 col-6"
        style={{ background: `linear-gradient(90deg, rgba(52,255,200,1) ${percentage || 0}%, rgba(255,163,99,1) 100%)` }}
      >
        <span
          style={{ fontSize: 100, color: this.props.color }} class="material-icons"
        >
          {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>
        {this.props.icon !== 'local_drink' &&
          <input
            type="range"
            value={this.props.value}
            onChange={(e) => {
              this.props.onChange(e)
            }}
            min={this.props.min}
            max={this.props.max}
            step={this.props.icon === 'directions_walk' ? 1000 : 1}
          />
        }
      </div>
    )
  }
};

export default Box;
