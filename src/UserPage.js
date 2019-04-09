import * as React from "react";
import App from "./App";
import Media from "react-bootstrap/Media";

export default class UserPage extends React.Component{
  state = {
    posts:[],
    loading:true
  };

  componentDidMount = async () => {
    await this.getUser();
  };

  componentWillReceiveProps = async () => {
    await this.getUser();
  };

  async getUser() {
    const { id } = await this.props.match.params;
    fetch(App.SITE_URL + "users/" + id +"/posts")
      .then(response => response.json())
      .then(data => this.setState({posts: data, loading:false}));
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading, please wait</h1>;
    }
    return this.state.posts.map(post => {
      return <ListItem key = {post.postID} post={post}/>
    });
    }
}

export const ListItem = ({post}) => {
  return (
    <Media.Body key = {post.postID}>
      <h5 style={{fontSize: "22px"}}>{ post.postTitle }</h5>
      <p>{ post.postContent}</p>
      <p>{"By:" + post.creator.name}</p>
      <p>{"Created:" + post.createdDate}</p>
    </Media.Body>
  )
};
