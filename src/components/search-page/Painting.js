import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Painting extends Component {

  state = {
    searchTerm: this.props.searchTerm,
    artist: "",
    title: "",
    img_url: "",
    date: "",
    department: "",
    isHighlight: false,
    buttonLiked: false,
  }
  // artist: artistAlphaSort,
  // img_url: primaryImage,
  // date: objectDate

handleButtonClick = () => {
  this.setState({buttonLiked: true})
  console.log(this.state)
}

fetchArt = () => {
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.metID}`)
  .then(res=>res.json())
  .then(artData => {
    // console.log(artData)
    this.setState({
      artist: artData.artistDisplayName,
      title: artData.title,
      isHighlight: artData.isHighlight,
      img_url: artData.primaryImageSmall,
      date: artData.objectDate,
      department: artData.department
    })
  })
}

componentDidMount(){
  this.fetchArt()
}

componentDidUpdate(prevProps){
  if(this.props.metID !== prevProps.metID){
    this.fetchArt()
    }
}

  render(){
    const buttonText = this.state.buttonLiked ? "Saved!" : "Save"
    // console.log(this.state)
    return (
      <div className="Painting">
      <Card.Content>
      <button onClick={this.handleButtonClick}>{buttonText}</button>
        <Image src={this.state.img_url} alt={this.state.title}/>
        <Card.Header>
         <strong>{this.state.title}</strong>
        </Card.Header>
        <Card.Description>
        <h4> {this.state.artist} </h4>
        <p> {this.state.date} </p>
        <p> {this.state.department} </p>
        </Card.Description>
      </Card.Content>
      </div>
  );}
}


export default Painting;
