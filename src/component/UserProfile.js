import React from 'react';
import UserCard  from './UserCard';

class UserProfile extends React.Component {
  state = {
    user: { name: 'Alice', age: 30 }
  };

  // Dummy function to simulate updates
  updateUser = () => {
    this.setState({ user: { ...this.state.user } });
  };

  render() {
    return (
      <div>
        <UserCard name={this.state.user.name} age={this.state.user.age} />
        <button onClick={this.updateUser}>Update User</button>
      </div>
    );
  }
}

export default UserProfile;