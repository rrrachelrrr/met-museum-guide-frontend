import React, { Component } from 'react';
import Painting from './Painting.js'

class PaintingCollection extends Component {

  // renderPaintings = () => {
  //   })
  //     // paintingID =>
  //     // fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${paintingID}`)
  //     // .then(res=>res.json())
  //     // .then(console.log)
  //   )
  // }

  render(){
    // console.log("painting collection:", this.props.paintings)
      const allPaintings = this.props.paintings.map(paintingID => {
        return <Painting metID={paintingID}/>
      })
      return (
        <div className="PaintingCollection">
          <h1>paintings live here 🎨</h1>
          {allPaintings}
        </div>
    )
  }
}

export default PaintingCollection;
