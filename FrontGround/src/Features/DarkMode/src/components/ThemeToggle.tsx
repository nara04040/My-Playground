import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ margin: "20px", padding: "10px 20px" }}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeToggle;
