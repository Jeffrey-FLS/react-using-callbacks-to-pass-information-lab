import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  state = {
    colorPallette: "fff"
  };


  pickColor = (event) => {
    this .setState({
      colorPallette: event.target.style.backgroundColor
    });

    // console.log(this.state.colorPallette);
  };

  // cellColorChange = () => {
  //
  // }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorPallette={this.state.colorPallette}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector pickColor={this.pickColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}