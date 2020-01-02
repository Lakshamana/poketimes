import React from 'react'
import { connect } from 'react-redux'

class Post extends React.Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <br />
        <div className='center'>
          <button className='btn grey' onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    )
    return <div className='container'>{post}</div>
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  const { id } = ownProps.match.params
  const post = posts.find(p => p.id === +id)
  return {
    post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: 'deletePost', id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
