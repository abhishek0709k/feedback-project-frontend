import { useState, useEffect } from "react";
import "./Switch.css"
export function Switch({ checked = false, onCheckedChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked); // Sync external changes
  }, [checked]);

  const handleToggle = () => {
    setIsChecked((prev) => {
      const newChecked = !prev;
      onCheckedChange(newChecked);
      return newChecked;
    });
  };

  return (
    <button
      onClick={handleToggle}
      className={`switch-button ${isChecked ? "switch-on" : "switch-off"}`}
    >
      <span className="switch-thumb" />
    </button>
  );
}
