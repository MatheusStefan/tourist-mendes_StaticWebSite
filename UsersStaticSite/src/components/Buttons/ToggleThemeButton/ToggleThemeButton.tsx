import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ToggleThemeButtonProps {
  width: number;
  height: number;
}

function ToggleThemeButton({ width, height }: ToggleThemeButtonProps): React.ReactNode {
  //this state gonna change to color switch theme with Context
  const [isToggled, setIsToggled] = useState(false);

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  }

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };


  return (
    <button
      className={`flex ${isToggled ? "justify-end" : "justify-start"} items-center ${isToggled ? "bg-black-100" : "bg-white-100"} rounded-xl px-2`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      onClick={handleToggle}
      aria-label='TrocarTema'
    >
      <motion.div
        layout
        transition={spring}
        className={`bg-blue-100 w-3 h-3 rounded-xl`}
      />
    </button>
  );
}

export default ToggleThemeButton;
