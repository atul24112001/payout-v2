import React from "react";
import QuestionMark from "../../assets/icons/QuestionMarak";
import MessageIcon from "../../assets/icons/Message";
import ArrowDownIcon from "../../assets/icons/ArrowDown";
import SearchIcon from "../../assets/icons/Search";
import IconButton from "../helper/IconButton";
import MenuIcon from "../../assets/icons/Menu";

type Props = {
  activeTab: string;
  setShowSidebar: (visible: boolean) => void;
};

export default function Header({ activeTab, setShowSidebar }: Props) {
  return (
    <div className="px-8 py-3 flex  items-center gap-3 border-0 border-b-[1px] border-solid  bg-secondary-background border-[#D9D9D9]">
      <div className="w-[80px]  flex gap-2 ">
        <MenuIcon className="md:hidden" onClick={() => setShowSidebar(true)} />
        <h2 className="text-[15px] ">{activeTab}</h2>
      </div>

      <div className="flex gap-1 items-center text-xs">
        <QuestionMark width={14} />
        <p className="text-third">How it works</p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-third-background  px-4 py-2 flex gap-2 items-center text-third rounded-md">
          <SearchIcon />
          <input
            type="text"
            className="border-none bg-transparent focus:outline-0 lg:w-[25vw]"
            placeholder="Search features, tutorials, etc."
          />
          {/* <span style={{ fontSize: "15px" }} className="text-third">
            {" "}
            
          </span> */}
        </div>
      </div>
      <IconButton onClick={() => {}}>
        {" "}
        <MessageIcon />
      </IconButton>
      <IconButton onClick={() => {}}>
        <ArrowDownIcon />
      </IconButton>
    </div>
  );
}
