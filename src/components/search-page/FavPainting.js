import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';


class FavPainting extends Component {

  // deleteOneArt = () => {
  //   fetch(`http://localhost:3000/fav_arts/${this.props.art.id}`, {
  //     method: 'DELETE',
  //     headers: { Authorization: localStorage.token }
  //   })
  //   .then(console.log)
  // }

  render(){
    return (
      <div className="one-art-please">
      <Card.Content>
      <button onClick={() => this.props.deleteOneArt(this.props.art.id)}>Remove From Collection</button>
      <Image src={this.props.art.img_url} />
      <p>{this.props.art.title} </p>
      <p>{this.props.art.artist}</p>
      <p>{this.props.art.department}</p>
      </Card.Content>
      </div>
    )
  }
}


export default FavPainting;
