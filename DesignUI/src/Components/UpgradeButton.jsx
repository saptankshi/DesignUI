import React from 'react';

function UpgradeButton() {
  return (
    <div className="flex flex-col shine-shadow border-none button px-4 pt-3 rounded-full bg-zinc-900 bg-opacity-90">
      <span class="button-background"></span>
      <div class="button-text">Upgrade</div>
      <div className="flex z-0 shrink-0 self-center bg-[#fff] w-10 h-[1px] mt-6 bg-blur  rounded-full bg-orange-100 bg" />

    </div>
    
  );
}

export default UpgradeButton;