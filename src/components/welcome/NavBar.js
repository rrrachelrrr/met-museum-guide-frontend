import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ProfilePage from '../search-page/ProfilePage.js'

class NavBar extends Component {

// componentDidMount(){
//   fetch('http://localhost:3000/current_user', {
//     headers: { Authorization:  localStorage.token } } )
//     .then(resp => resp.json())
//     .then(data => this.setState({
//       name: data.name
//     }))
// }
  render(){
    // console.log(this.props)
    return (
      <div className="NavBar">
        {
          this.props.name ?
          <>
          <label>Welcome<Link to={'/profile'} > {this.props.name} </Link></label>
          </>
           : (`Welcome, Art Lover!`)
        }
      </div>
  );}
}
//
// <Link to '/profile' onClick={handlePage}

export default NavBar;
