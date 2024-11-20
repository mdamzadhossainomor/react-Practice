import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });

  const updateName = (e) => {
    setUser({ ...user, name: e.target.value }); // Keep age, update name
  };

  const updateAge = (e) => {
    setUser({ ...user, age: Number(e.target.value) }); // Keep name, update age
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={updateName}
      />
      <input
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={updateAge}
      />
      <p>
        User: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

export default UserProfile;
