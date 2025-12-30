import React from "react";

function UserStatus() {
  const isLoggedIn = true; // change to false to test

  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Guest"}</h2>
    </div>
  );
}

export default UserStatus;
