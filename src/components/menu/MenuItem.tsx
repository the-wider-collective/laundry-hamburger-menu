
import React from "react";

interface MenuItemProps {
  icon: string;
  text: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[15px] text-white text-xl max-md:text-lg max-sm:text-base cursor-pointer hover:opacity-90 transition-opacity py-3">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className={`ti ti-${icon}`} aria-hidden="true" />
        </div>
        <div className="w-1.5 h-1.5 bg-[#FFB800] rounded-[50%]" />
        <div>{text}</div>
      </div>
      <div className="h-[1px] bg-white/20" />
    </div>
  );
};
