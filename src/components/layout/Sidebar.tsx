// import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/ChevronDown";
import { routes } from "../../routes";
import WalletIcon from "../../assets/icons/Wallet";

type Props = {
  setActiveTab: (title: string) => void;
  setShowSidebar: (visible: boolean) => void;
  showSidebar: boolean;
};

export default function Sidebar({
  setActiveTab,
  setShowSidebar,
  showSidebar,
}: Props) {
  return (
    <div
      style={{ display: showSidebar ? "flex" : "none" }}
      className="fixed py-4 px-3 md:static  w-screen top-0 bottom-0 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-primary-background flex-col"
    >
      <div className="flex gap-3 items-center px-4">
        <img src="/logo.png" className="w-[39px] h-[39px] rounded-sm" />
        <div className="flex-1">
          <h1 className="text-secondary-background text-sm font-medium">
            Nishyan
          </h1>
          <a
            className="text-secondary-background text-xs font-normal underline"
            href="#"
          >
            Visit store
          </a>
        </div>
        <Icon
          onClick={() => setShowSidebar(false)}
          color="white"
          width={22}
          height={20}
        />
      </div>
      <div className="mt-8 flex-1">
        {routes.map((link) => {
          const { title, IconActive, IconInactive, link: path } = link;
          return (
            <NavLink
              to={path}
              onClick={() => setActiveTab(title)}
              className={({ isActive }) =>
                `text-secondary-background flex gap-3 px-4 py-2 text-sm items-center rounded-md my-1 ${
                  isActive ? "bg-[#ffffff10]" : ""
                }`
              }
            >
              {({ isActive }) => {
                return (
                  <>
                    {isActive ? (
                      <IconActive height={22} />
                    ) : (
                      <IconInactive height={22} />
                    )}
                    {title}
                  </>
                );
              }}
            </NavLink>
          );
        })}
      </div>
      <div className="bg-[#353C53] px-3 py-[6px] rounded text-white flex gap-3 items-center">
        <div className="p-[6px] bg-[#ffffff10] rounded">
          <WalletIcon />
        </div>
        <div className="">
          <div className="text-[13px] text-white font-normal">
            Available credits
          </div>
          <div className="text-[16px] text-white font-medium">222.10</div>
        </div>
      </div>
    </div>
  );
}
