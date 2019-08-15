import React from 'react';
import './App.css';

// import PaintingCollection from './components/search-page/PaintingCollection.js'
import Search from './components/search-page/Search.js'
import ProfilePage from './components/search-page/ProfilePage.js'
import Signup from './components/welcome/Signup.js'
import Login from './components/welcome/Login.js'
import Welcome from './components/welcome/Welcome.js'
import NavBar from './components/welcome/NavBar.js'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  state = {
    name: "",
    username: "",
    user_id: ""
  }

  clearName = () => {
    this.setState({
      name: "",
      username: "",
      user_id: ""
    })
  }


  componentDidMount(){
    if(localStorage.token){
    fetch('http://localhost:3000/current_user', {
      headers: { Authorization:  localStorage.token } } )
      .then(resp => resp.json())
      .then(data => this.setState({
        name: data.name,
        username: data.username,
        user_id: data.id
      })
    )}
  }

  render(){
    // console.log(this.state)
    return(
    <div>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/paintings"
          render={(routerProps)=>
            <>
            <NavBar
              {...routerProps}
              username={this.state.username}
              name={this.state.name}
              user_id={this.state.user_id}
              clearName={this.clearName}/>
            <Search
              {...routerProps}
              username={this.state.username}
              name={this.state.name}
              user_id={this.state.user_id} />
            </> }
        />
        <Route path="/profile"
        render={(routerProps)=>
          <>
          <ProfilePage
            {...routerProps}
            username={this.state.username}
            name={this.state.name}
            user_id={this.state.user_id}/>
          </> }
        />
        <Route exact path="/" component={Welcome} />
      </Switch>

    </div>)
      }
      // <div className="App">
      //   <h1>FIND SOME KEWL PAINTINGS</h1>
      //   < Search />
      //   < PaintingCollection />
      // </div>
  }

export default App;
