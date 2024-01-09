import { PropsWithChildren, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

// type Props = {};

export default function Layout({ children }: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState("Home");
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex">
      <Sidebar
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        setActiveTab={setActiveTab}
      />
      <div className="flex-1 flex flex-col h-[100vh]">
        <Header activeTab={activeTab} setShowSidebar={setShowSidebar} />
        <div className="px-8 overflow-auto flex-1 py-3 bg-[#fafafa]">
          {children}
        </div>
      </div>
    </div>
  );
}
