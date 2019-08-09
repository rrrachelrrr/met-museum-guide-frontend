import React from 'react';
import PaintingCollection from './components/search-page/PaintingCollection.js'
import Search from './components/search-page/Search.js'
import ProfilePage from './components/search-page/ProfilePage.js'
import Signup from './components/welcome/Signup.js'
import Login from './components/welcome/Login.js'
import Welcome from './components/welcome/Welcome.js'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  state = {
    username: ''

  }

  render(){
    return(
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/paintings"
        render={(routerProps)=> <Search
        {...routerProps} />}
        />
        <Route path="/profile" component={ProfilePage} />
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
