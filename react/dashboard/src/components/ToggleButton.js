import React, { useState } from "react";

export default function ToggleButton() {
  const [toggle, settoggle] = useState("OFF");
  const handleClick = () => {
    if (toggle === "ON") {
      settoggle("OFF");
    } else {
      settoggle("ON")
    }
  };

  return (
    <div className="form-check form-switch">
      <input onClick={handleClick}
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      {toggle}
    </div>
  )
}
