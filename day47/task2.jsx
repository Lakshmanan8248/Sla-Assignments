import React from "react";

function PremiumButton() {
  const isPremiumUser = true; // change to false to hide button

  return (
    <div>
      <h2>Welcome User</h2>

      {isPremiumUser && (
        <button>Access Premium Features</button>
      )}
    </div>
  );
}

export default PremiumButton;
