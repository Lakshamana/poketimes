import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Pokeball from '../assets/pokeball.png'

class Home extends Component {
  render() {
    console.log(this.props)
    const { posts } = this.props
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

// state.props
const mapStateToProps = ({ posts }) => ({
  posts
})

const connector = connect(mapStateToProps)
export default connector(Home)
