import React from "react";
import { Link, useMatch} from 'react-router-dom';

const SidebarItem = ({iconSrc, text, to}) => {

    const active = useMatch(to);

    const baseClasses = 'relative flex items-center justify-center h-10 w-10 mb-1 mx-auto cursor-pointer transition-colors duration-200';

    const activeClasses = active
    ? 'bg-[#032175]'
    : 'hover:bg-blue-900/10';

    return (
        <li className="group">

            <Link to={to} className={`${baseClasses} ${activeClasses} rounded-xl`}>
                <img src={iconSrc} alt={text} className="w-4 h-4 object-contain"/>

                <span className="absolute left-full rounded-md px-3 py-2 ml-4 bg-[#021a5a] text-white text-sm whitespace-nowrap
                                invisible opacity-0 transition-all duration-200
                                group-hover:visible group-hover:opacity-100              
                ">
                    {text}
                </span>
            </Link>

        </li>
    );
};

export default SidebarItem;