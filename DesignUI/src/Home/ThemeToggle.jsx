import React from "react";

function ThemeToggle() {
  return (
    <div className="flex flex-col px-5 pt-3 whitespace-nowrap rounded-2xl border border-solid border-orange-100 border-opacity-10">
      <div className="flex gap-5">
        <button className="text-orange-100">Dark</button>
        <button className="text-orange-100 text-opacity-50">Light</button>
      </div>
      <div className="flex z-10 shrink-0 shine-border mt-2 w-4 h-[2px]  bg-orange-100 bg-opacity-20" />
    </div>
  );
}

export default ThemeToggle;