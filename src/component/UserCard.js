import React from 'react';

class UserCard extends React.PureComponent {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default UserCard;