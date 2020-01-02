import React from 'react'
import axios from 'axios'

class Post extends React.Component {
  state = {
    post: undefined
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(({ data }) => this.setState({ post: data }))
  }

  render() {
    const post = this.state.post ? (
      <div className='post'>
        <h4 className='center'>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div class='progress'>
        <div class='indeterminate'></div>
      </div>
    )
    return <div className='container'>{post}</div>
  }
}

export default Post
