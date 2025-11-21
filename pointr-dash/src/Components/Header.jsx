import React from "react";
import { FiSearch, FiGrid, FiBarChart2 } from 'react-icons/fi'; 

const Header = ({ title, onSearchClick }) => {
    return (
        <header className="flex justify-between items-center w-full pb-4 border-b border-blue-900/10">
            <div>
                <h1 className="text-2xl font-bold text-white">{title}</h1>
            </div>

            <div className="flex items-center space-x-6">

                <button
                    onClick={onSearchClick}
                    className="flex items-center space-x-2 p-2 rounded-lg bg-[#010918] hover:bg-[#191e57] transition text-gray-400 cursor-pointer"
                >
                    <FiSearch size={20} />
                </button>

                <div className="flex items-center space-x-4">
                    <FiGrid size={20} className="text-gray-400 hover:text-[#2148b4] cursor-pointer" />
                    <FiBarChart2 size={20} className="text-gray-400 hover:text-[#2148b4] cursor-pointer" />
                </div>

                <div className="flex items-center space-x-3">

                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold cursor-pointer">BC</div>
                </div>
            </div>
        </header>
    );
};

export default Header;