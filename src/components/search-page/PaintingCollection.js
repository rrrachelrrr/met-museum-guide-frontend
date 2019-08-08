import React, { Component } from 'react';
import Painting from './Painting.js'

class PaintingCollection extends Component {

  render(){
    return (
      <div className="PaintingCollection">
        <h1>paintings live here 🎨</h1>
        < Painting />
        < Painting />
        < Painting />
        < Painting />
        < Painting />
        < Painting />
        < Painting />
        < Painting />
      </div>
  );}
}

export default PaintingCollection;
