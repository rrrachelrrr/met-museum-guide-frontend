import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ProfilePage from '../search-page/ProfilePage.js'

class NavBar extends Component {

  handleLogout = () => {
    localStorage.clear()
    this.props.clearName()
  }

  render(){
    console.log(this.props)
    return (
      <div className="NavBar">
        {
          this.props.name ?
          <>
          <label>Welcome<Link to={'/profile'} > {this.props.name} </Link></label>
          </>
           : (`Welcome, Art Lover!`)
        }
        <label><Link to={'/login'} onClick={this.handleLogout}> Log Out </Link></label>
      </div>
  );}

  // componentDidUpdate(prevProps){
  //   if (prevProps.name !== this.props.name){
  //
  //   }
  // }
}

export default NavBar;
