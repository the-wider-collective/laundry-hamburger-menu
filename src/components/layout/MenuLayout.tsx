
import React from "react";
import { UserHeader } from "./UserHeader";
import { MenuList } from "../menu/MenuList";
import { ReferralCard } from "../referral/ReferralCard";
import { X } from "lucide-react";

export const MenuLayout: React.FC = () => {
  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  const handleClose = () => {
    console.log("Close menu clicked");
  };

  return (
    <div className="min-h-screen p-5 bg-[#7FD6D0]">
      <div className="max-w-[393px] mx-auto my-0 p-5 max-md:p-[15px] max-sm:p-2.5 relative">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 text-white hover:opacity-80 transition-opacity"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <UserHeader name="John" />
        <MenuList />
        <ReferralCard />
        <button
          onClick={handleSignOut}
          className="text-white text-lg cursor-pointer hover:opacity-80 transition-opacity mt-4"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};
