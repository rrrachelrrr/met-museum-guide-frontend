import React, { Component } from 'react';

class Signup extends Component {
  state = {
    name: '',
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignup = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
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
        this.props.history.push("/login")
      }
    })
  }

  render(){
    return (
      <div className="Signup">
        <span>Sign up dude</span>
        <form onSubmit={this.handleSignup}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange} />
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange} />
        <input type="submit" />
        </form>
      </div>
  );}
}

export default Signup;
