import React from 'react';

const UserCardFunc = React.memo(function UserCard({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
});

export default UserCardFunc;