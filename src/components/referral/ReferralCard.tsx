import React from "react";

export const ReferralCard: React.FC = () => {
  return (
    <button
      className="flex flex-col relative w-full text-left cursor-pointer bg-[rgba(255,255,255,0.2)] mb-5 p-5 rounded-xl max-sm:p-[15px] hover:bg-[rgba(255,255,255,0.25)] transition-colors"
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
