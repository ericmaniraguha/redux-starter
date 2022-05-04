import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile Page: </h1>
      <p>Your name :{user.name} </p>
      <p>Your Age :{user.age} </p>
      <p>Your Email :{user.email}</p>
    </div>
  );
}

export default Profile;
