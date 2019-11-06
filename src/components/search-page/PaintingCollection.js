import React, { Component } from 'react';
import Painting from './Painting.js';

class PaintingCollection extends Component {

  render(){
    // console.log("painting collection:", this.props)
      const allPaintings = this.props.paintings.map(paintingID => {
        return <Painting metID={paintingID}
        key={paintingID} keyword={this.props.keyword}
        user_id={this.props.user_id}/>
      })
      return (
        <div className="PaintingCollection">
          {allPaintings}
        </div>
    )
  }
}

export default PaintingCollection;
