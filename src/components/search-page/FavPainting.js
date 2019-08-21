import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';


class FavPainting extends Component {

  state = {
    tag: "",
    allTags: []
  }

  resetTag = () => {
    this.setState({tag: ''})
  }

  addTag = (e) => {
    e.preventDefault()
    let tag = {tag: this.state.tag, art_id: this.props.art.id}
    // console.log(tag)
    fetch("http://localhost:3000/tag", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: localStorage.token
      },
      body: JSON.stringify(tag)
    })
    .then(res => res.json())
    .then(data => { console.log("new tag", data)
      this.state.allTags ?   this.setState({allTags: [...this.state.allTags, this.state.tag]}) :
        this.setState({allTags: this.state.tag})
    })
    // this.props.addTags(this.state.tag)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

   refreshPage = () => {
    window.location.reload();
  }



  componentDidMount(){
    fetch(`http://localhost:3000/mytags/${this.props.art.id}`, {
      headers: { Authorization: localStorage.token }
    })
    .then(res=>res.json())
    .then(tagData => {
      this.setState({allTags: tagData})
    })
  }

  render(){
    // console.log("allTags", this.state.allTags)
    const tags = this.state.allTags ? this.state.allTags.map(tag => {
      return <button
          className="art-tag"
          value={tag} onClick={this.props.filterByTag}>
          {tag}
        </button>
    }) : console.log("hi")
    return (
      <div className="one-art-please">
      <Card.Content>
      <button onClick={() => this.props.deleteOneArt(this.props.art.id)}>Remove From Collection</button>
      <Image src={this.props.art.img_url} />
      <p>{this.props.art.title} </p>
      <p>{this.props.art.artist}</p>
      <p>{this.props.art.date}</p>
      <p>{this.props.art.department}</p>
      {tags}
      <button onClick={this.refreshPage}>Reset Search</button>
      <form onSubmit={this.addTag}>
        <input
          type="text"
          name="tag"
          value={this.state.tag}
          placeholder="add a tag"
          onChange={this.handleChange} />
        <input
          type="submit" />
      </form>
      </Card.Content>
      </div>
    )
  }
}


export default FavPainting;
