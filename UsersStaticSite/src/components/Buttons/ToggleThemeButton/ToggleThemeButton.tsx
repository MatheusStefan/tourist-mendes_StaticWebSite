import React from 'react';
import { useTheme } from "../../../hooks/useTheme";
import { motion } from "framer-motion";

interface ToggleThemeButtonProps {
  width: number;
  height: number;
}

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({ width, height }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 30
  };

  return (
    <button
      className={`
        flex 
        ${isDarkMode ? "justify-end bg-black-200" : "justify-start bg-white-100"} 
        items-center 
        rounded-full 
        px-2
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
      onClick={toggleTheme}
      aria-label='Toggle Theme'
    >
      <motion.div
        layout
        transition={spring}
        className="w-3 h-3 rounded-full bg-blue-100"
      />
    </button>
  );
};

export default ToggleThemeButton;