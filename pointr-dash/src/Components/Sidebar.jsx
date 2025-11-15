import React from "react";
import SidebarItem from "./SidebarItem";

import PointrLogo from "../assets/png/pointr_logo.png";
import GeralIcon from "../assets/png/geral.png";
import AlertaIcon from "../assets/png/alertas.png";
import AnaliseIcon from "../assets/png/analise.png";
import AusenciasIcon from "../assets/png/ausencias.png";
import GestaoIcon from "../assets/png/gestao.png";
import RelatorioIcon from "../assets/png/relatorio.png";
import TurnosIcon from "../assets/png/turnos.png";
import SairIcon from "../assets/png/sair.png";

const Sidebar = () => {
    const sidebarWidth = 'w-19';

    return (
        <aside className={`fixed left-5 z-10 ${sidebarWidth} h-[95%] bg-gradient-to-b from-[#04051a] to-[#010313] text-white rounded-2xl shadow-2xl top-1/2 -translate-y-1/2`}>
            <nav className="flex flex-col items-center h-full">
                <div className="mb-12 mt-5 bg-gradient-to-tl p-2 from-[#02031b] to-[#010918] rounded-full border-2 border-slate-900">
                    <img src={PointrLogo} alt="Logo da PoinTr" className="w-8 h-8 object-contain"/>
                </div>
                
                <ul className="flex flex-col items-center space-y-2">
                    <SidebarItem iconSrc={GeralIcon} text="Geral" active/>
                    <SidebarItem iconSrc={GestaoIcon} text="Gestão"/>
                    <SidebarItem iconSrc={AusenciasIcon} text="Ausências"/>
                </ul>

                <div className="flex-grow"></div>

                <ul className="flex flex-col items-center space-y-2">
                    <SidebarItem iconSrc={AlertaIcon} text="Alertas"/>
                    <SidebarItem iconSrc={TurnosIcon} text="Turnos"/>
                    <SidebarItem iconSrc={AnaliseIcon} text="Análises"/>
                </ul>
                
                <div className="flex-grow"></div>

                <ul className="flex flex-col items-center space-y-2">
                    <SidebarItem iconSrc={RelatorioIcon} text="Relatórios"/>
                </ul>
                <div className="flex-grow"></div>
                <div className="flex-grow"></div>
                 <ul className="flex flex-col items-center space-y-2">
                    <SidebarItem iconSrc={SairIcon} text="Sair"/>
                </ul>

            </nav>
        </aside>
    )
};

export default Sidebar;