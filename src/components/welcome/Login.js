import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    // console.log(this.state)
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        this.props.history.push("/paintings")
      }
    })
  }

    render(){
      return (
        <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}/>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange} />
        <input type="submit" />
        </form>
    );
  }
}

export default Login;
