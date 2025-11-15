import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import GeralContent from "./Components/GeralContent";
import SupportMenu from "./Components/SupportMenu";
import NotificationSystem from "./Components/NotificationSystem";

export function App() {
  const mainCompesationMargin = 'ml-24';

  return (
    <div className={`flex min-h-screen bg-gradient-to-b from-[#020313] to-[#00050f]`}>
        <Sidebar/>

        <NotificationSystem />

        <SupportMenu/>

        <div className={`${mainCompesationMargin} mr-5 flex-grow w-full text-white`}>
          <GeralContent/>
        </div>
      </div>
)
}

