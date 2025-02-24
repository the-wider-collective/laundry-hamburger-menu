import React from "react";
import { UserHeader } from "./UserHeader";
import { MenuList } from "../menu/MenuList";
import { ReferralCard } from "../referral/ReferralCard";

export const MenuLayout: React.FC = () => {
  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-[393px] mx-auto my-0 p-5 max-md:p-[15px] max-sm:p-2.5">
        <UserHeader name="John" />
        <MenuList />
        <ReferralCard />
        <button
          onClick={handleSignOut}
          className="text-white text-lg cursor-pointer hover:opacity-80 transition-opacity"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};
