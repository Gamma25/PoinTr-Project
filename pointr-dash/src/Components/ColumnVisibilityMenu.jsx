import React from "react";
import { FiX, FiCheck } from 'react-icons/fi';

const ColumnVisibilityMenu = ({ isOpen, visibility, onToggle, onClose }) => {

    if (!isOpen) return null;
    const columnKeys = Object.keys(visibility);

    return (
        <div className="absolute right-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-xl z-50 p-4 border border-slate-600">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-600">
                <h4 className="font-semibold text-white">Visibilidade</h4>
                <FiX size={18} className="text-gray-400 cursor-pointer hover:text-white" onClick={onClose} />
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto">
                {columnKeys.map(key => (
                    <label key={key} className="flex items-center space-x-3 cursor-pointer text-sm text-gray-300 hover:text-white transition">
                        <input
                            type="checkbox"
                            checked={visibility[key]}
                            onChange={() => onToggle(key)}
                            className="form-checkbox h-4 w-4 text-indigo-600 bg-slate-800 border-slate-600 rounded mr-2" 
                        />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                ))}
            </div>
        </div>

    )
};

export default ColumnVisibilityMenu;