import React, { useState } from 'react';
import UserCardFunc from './UserCardFunc';

function UserProfileFunc () {
  const [user, setUser] = useState({ name: 'Alice', age: 30 });

  const updateUser = () => {
    setUser({ ...user });
  };

  return (
    <div>
      <UserCardFunc name={user.name} age={user.age} />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserProfileFunc;