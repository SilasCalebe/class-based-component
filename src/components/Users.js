import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  //state sempre será um objeto em class based component
  constructor(){
    super();
    this.state = {
      showUsers: true,
      more: 'teste' //this won't be lost
    }
  }


  toggleUsersHandler(){
    this.setState((curState) => { //this will not overwrite, it will merge
      return { showUsers: !curState.showUsers }
    })
  }

  render(){
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );


    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );   
  }
}

export default Users;
