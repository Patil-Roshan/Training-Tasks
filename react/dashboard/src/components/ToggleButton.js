import React, { useState } from "react";
import {Switch} from "@mui/material";
const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function ToggleButton() {
  const [toggle, setToggle] = useState("OFF");
  const handleClick = () => {
    if (toggle === "ON") {
      setToggle("OFF");
    } else {
      setToggle("ON")
    }
  };

  return (
      <div>
        <Switch {...label}  size="small" onClick={handleClick}/>{toggle}
      </div>
  )
}
