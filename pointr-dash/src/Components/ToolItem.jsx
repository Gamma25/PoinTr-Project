import React from "react";

const ToolItem = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center space-y-1 p-2 bg-blue-900/50 rounded-lg hover:bg-blue-900 transition cursor-pointer">
            <div className="p-1 rounded-md text-indigo-400">
                {icon}
            </div>
            <span className="text-xs text-center text-gray-300">{label}</span>
        </div>
    )
};

export default ToolItem;