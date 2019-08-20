import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Painting extends Component {

  state = {
    artist: "",
    title: "",
    img_url: "",
    date: "",
    department: "",
    isHighlight: false,
    buttonLiked: false,
  }

  // searchTerm: this.props.searchTerm,
  // metID: this.props.metID

  saveArtToCollection = () => {
    this.setState({buttonLiked: true});
    const favArt = {
      user_id: this.props.user_id,
      api_id: this.props.metID,
      keyword: this.props.searchTerm,
      is_highlight: this.state.isHighlight,
      img_url: this.state.img_url,
      title: this.state.title,
      artist: this.state.artist,
      date: this.state.date,
      collection: this.state.department
    };

    fetch("http://localhost:3000/fav_arts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(favArt)
    })
    .then(res => res.json())
    .then(data => console.log(data))

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
    // console.log(favArt)
    const buttonText = this.state.buttonLiked ? "Saved!" : "Save"
    // console.log(this.state)
    return (
      <div className="Painting">
      <Card.Content>
      <button onClick={this.saveArtToCollection}>{buttonText}</button>
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
