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

fetchArt = () => {
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.metID}`)
  .then(res=>res.json())
  .then(artData => {
    this.setState({
      img_url: artData.primaryImageSmall
    })
  })
}

componentDidMount(){
  this.fetchArt()
}

componentDidUpdate(prevProps){
  // console.log(prevProps)
  if(this.props.metID !== prevProps.metID){
    this.fetchArt()
    }
}
  render(){
    // console.log(this.state)
    return (
      <div className="Painting">
        <img src={this.state.img_url} />
      </div>
  );}
}

export default Painting;
