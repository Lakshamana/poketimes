const initState = {
  posts: []
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer

// axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(({ data }) => this.setState({ posts: data.slice(0, 10) }))
