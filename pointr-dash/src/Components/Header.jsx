import React from "react";
import { FiSearch, FiGrid, FiBarChart2 } from 'react-icons/fi'; 

const Header = () => {
    return (
        <header className="flex justify-between items-center w-full pb-4 border-b border-blue-900/10">
            <div>
                <h1 className="text-2xl font-bold text-white">Painel Geral</h1>
            </div>

            <div className="flex items-center space-x-6">

                <div className="flex items-center space-x-4">
                    <FiSearch size={20} className="text-gray-400 hover:text-[#2148b4] cursor-pointer" />
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