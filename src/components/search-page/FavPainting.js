import React, { Component } from 'react';

class FavPainting extends Component {

  deleteOneArt = () => {
    console.log(this.props)
  }
  render(){
    return (
      <div className="one-art-please">
      <button onClick={this.deleteOneArt}>Remove From Collection</button>
      <img src={this.props.art.img_url} />
      <p>{this.props.art.title} </p>
      <p>{this.props.art.artist}</p>
      <p>{this.props.art.department}</p>
      </div>
    )
  }
}


export default FavPainting;
