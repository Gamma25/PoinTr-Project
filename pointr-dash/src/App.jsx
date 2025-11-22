import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import GeralContent from "./pages/GeralContent";
import EventsPage from "./pages/EventsPage";
import SupportMenu from "./Components/SupportMenu";
import NotificationSystem from "./Components/NotificationSystem";
import GlobalSearchModal from "./Components/GlobalSearchModal";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeDetailPages from "./pages/EmployeeDetailPage";
import ShiftManagementPage from "./pages/ShiftManagementPage";

export function App() {
  const mainCompesationMargin = 'ml-24';

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
      <BrowserRouter>
        <div className={`flex min-h-screen bg-gradient-to-b from-[#020313] to-[#00050f] overflow-x-hidden`}>
            <Sidebar/>

            <NotificationSystem />

            <SupportMenu/>

            <GlobalSearchModal isOpen={isSearchOpen} onClose={closeSearch} />

            <div className={`${mainCompesationMargin} mr-5 flex-grow w-full text-white min-w-0`}>
              <Routes>
                <Route path="/" element={<GeralContent onSearchClick={openSearch} />} />
                <Route path="/events" element={<EventsPage onSearchClick={openSearch} />} />
                <Route path="/employees" element={<EmployeesPage onSearchClick={openSearch} />} />
                <Route path="/employees/:id" element={<EmployeeDetailPages onSearchClick={openSearch} />} />
                <Route path="/shifts" element={<ShiftManagementPage onSearchClick={openSearch} />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
)
}

