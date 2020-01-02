import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../assets/pokeball.png'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => this.setState({ posts: data.slice(0, 10) }))
  }

  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Link to={`/${post.id}`}>
            <div className='post card' key={post.id}>
              <img src={Pokeball} alt='A pokeball icon' />
              <div className='card-content'>
                <span className='card-title red-text'>{post.title}</span>
                <p>{post.body}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
      <div className='center'>No posts yet!</div>
    )
    return (
      <div className='container home'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home
