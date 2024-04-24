import { Theme, ThemeOptions } from "@/types/types";
import React from "react";

interface ThemeOptionProps {
  themeOption: ThemeOptions;
  setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>;
}

function ThemeOption({ themeOption, setTheme }: ThemeOptionProps) {
  const handleClick = (e: any) => {
    const target = e.target as HTMLElement;
    if (target.id) {
      setTheme(target.id as Theme);
    }
  };

  return (
    <div className="w-1/2 h-36 cursor-pointer relative">
      {themeOption.component}
      <div
        id={themeOption.id}
        onClick={handleClick}
        className="absolute top-0 left-0 size-full hover:bg-slate-200 hover:bg-opacity-80"
      ></div>
    </div>
  );
}

export default ThemeOption;
