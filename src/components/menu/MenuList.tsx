
import React from "react";
import { MenuItem } from "./MenuItem";

const menuItems = [
  { icon: "user", text: "Profile" },
  { icon: "shopping-cart", text: "Service and Pricing" },
  { icon: "credit-card", text: "Billing" },
  { icon: "package", text: "My Orders" },
  { icon: "phone", text: "Contact us" },
];

export const MenuList: React.FC = () => {
  return (
    <nav className="flex flex-col gap-0 mb-10" role="navigation">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </nav>
  );
};
