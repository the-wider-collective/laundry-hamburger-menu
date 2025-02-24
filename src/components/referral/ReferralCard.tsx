
import React from "react";

export const ReferralCard: React.FC = () => {
  return (
    <button
      className="flex flex-col relative w-full text-left cursor-pointer bg-gradient-to-b from-[#5DBAB3] to-[#7FD6D0] mb-5 p-5 rounded-xl max-sm:p-[15px] hover:opacity-90 transition-opacity"
      onClick={() => console.log("Referral clicked")}
    >
      <h3 className="text-white text-lg mb-[5px] max-sm:text-base">
        Refer a friend
      </h3>
      <p className="text-white text-sm opacity-80 max-sm:text-xs">
        Free 20$ orders for each friend you refer
      </p>
      <div className="absolute -translate-y-2/4 text-white right-5 top-2/4">
        <i className="ti ti-chevron-right" aria-hidden="true" />
      </div>
    </button>
  );
};
