import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Painting extends Component {

  state = {
    artist: "",
    title: "",
    img_url: "",
    date: "",
    department: "",
    isHighlight: false
  }
  // artist: artistAlphaSort,
  // img_url: primaryImage,
  // date: objectDate

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

handleFavoriteClick = () => {
  console.log(this.state)
}
  render(){
    // console.log(this.state)
    return (
      <div className="Painting">
      <Card.Content>
        <div onClick={this.handleFavoriteClick}>❤️</div>
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
//
// <Card.Content>
//   <Card.Header>Matthew</Card.Header>
//   <Card.Meta>
//     <span className='date'>Joined in 2015</span>
//   </Card.Meta>
//   <Card.Description>
//     Matthew is a musician living in Nashville.
//   </Card.Description>
// </Card.Content>
// <Card.Content extra>
//   <a>
//     <Icon name='user' />
//     22 Friends
//   </a>
// </Card.Content>

export default Painting;
