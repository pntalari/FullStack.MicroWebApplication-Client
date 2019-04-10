import * as React from "react";
import {LinkContainer} from "react-router-bootstrap";


export default class Users extends React.Component{
  state = {
    users:[],
    loading:true
  };

  componentDidMount = async () => {
    fetch( "http://localhost:8080/users")
      .then(response => response.json())
      .then(data => this.setState({users: data, loading: false}));
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }
    return getListItems(this.state.users);
  }
}

function getListItems(users) {
  return users.map(user => {
    return (
      <div key = {user.id}>
        <LinkContainer to={ "user/" + user.id }>
          <li key = {user.id}>{ user.name }</li>
        </LinkContainer>
      </div>
    )
  });
}
