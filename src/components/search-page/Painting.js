import React, { Component } from 'react';

class Painting extends Component {

  state = {
    artist: "",
    title: "",
    img_url: "",
    date: ""
  }
  // artist: artistAlphaSort,
  // img_url: primaryImage,
  // date: objectDate

  componentDidMount(){
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.metID}`)
    .then(res=>res.json())
    .then(artData => {
      this.setState({
        img_url: artData.primaryImageSmall
      })
    })
  }

  render(){
    return (
      <div className="Painting">
        <img src={this.state.img_url} />
      </div>
  );}
}

export default Painting;
