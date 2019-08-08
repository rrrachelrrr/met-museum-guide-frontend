import React from 'react';
import './App.css';
import PaintingCollection from './components/search-page/PaintingCollection.js'
import Search from './components/search-page/Search.js'
import Signup from './components/welcome/Signup.js'
import Login from './components/welcome/Login.js'

class App extends React.Component {
  state = {
    page: 'login'

  }
  render(){
      switch(this.state.page){
        case 'login':
          return <Login />
        case 'signup':
          return <Signup />
        case 'paintings':
          return <Search />
        default:
          return <Login />
      }
      // <div className="App">
      //   <h1>FIND SOME KEWL PAINTINGS</h1>
      //   < Search />
      //   < PaintingCollection />
      // </div>

  }
}

export default App;
