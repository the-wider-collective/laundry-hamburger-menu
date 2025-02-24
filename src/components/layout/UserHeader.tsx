
import React from "react";

interface UserHeaderProps {
  name: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ name }) => {
  return (
    <header className="text-white text-4xl font-black mb-12 mt-8 max-md:text-[32px] max-sm:text-[28px] max-sm:mb-[30px]">
      Hi, {name}!
    </header>
  );
};
