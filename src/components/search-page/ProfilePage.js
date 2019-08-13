import React, { Component } from 'react';
import FavPainting from './FavPainting.js';

class ProfilePage extends Component {

  state = {
    art: []
  }

  filterArt = (data) => {
     data.filter(art => art.user_id === this.props.user_id)
    }

  componentDidMount(){
    // fetch(`http://localhost:3000/users/${this.props.user_id}`, {
    //   headers: { Authorization: localStorage.token }
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))

    fetch("http://localhost:3000/fav_arts", {
      headers: { Authorization: localStorage.token }
    })
    .then(res => res.json())
    .then(data => this.setState({art: data}))
  }


  render(){
    const filteredArt = this.state.art.filter(art => art.user_id === this.props.user_id)
    console.log(filteredArt)

    return (
      <div className="ProfilePage">
        <span>Hi {this.props.name} it's all yr stuff</span>
        <div>

        </div>
      </div>
  );}
}

export default ProfilePage;


//   render(){
//     console.log("painting collection:", this.props)
//       const allPaintings = this.props.paintings.map(paintingID => {
//         return <Painting metID={paintingID}
//         key={paintingID} searchTerm={this.props.searchTerm}
//         user_id={this.props.user_id}/>
//       })
//       return (
//         <div className="PaintingCollection">
//           {allPaintings}
//         </div>
//     )
//   }
// }
