import React, { useState, useEffect } from 'react';
import { FiSearch, FiX, FiUsers, FiFileText, FiSettings, FiCalendar, FiLogOut, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const POINTR_DATA = {
    pages: [
        { id: 1, title: "Painel Geral", path: "/", tag: "Dashboard" },
        { id: 2, title: "Calendário de Eventos", path: "/events", tag: "Eventos" },
        { id: 3, title: "Listagem de Colaboradores", path: "/employees", tag: "Tabela RH" },
    ],
    actions: [
        { id: 4, title: "Adicionar Novo Evento", action: "ADD_EVENT", tag: "Calendário", icon: FiPlus },
        { id: 5, title: "Ver Relatório Principal", action: "VIEW_REPORT", tag: "Relatórios", icon: FiFileText },
        { id: 6, title: "Configurações Globais", action: "SETTINGS", tag: "Ajustes", icon: FiSettings },
        { id: 7, title: "Sair do Sistema", action: "LOGOUT", tag: "Segurança", icon: FiLogOut },
    ],
    employees: [
        { id: 8, title: "Lucas Tania", detail: "Design Lead", tags: ["TI", "Frontend"] },
        { id: 9, title: "Matteo Vistocco", detail: "Head of Design", tags: ["Gerência", "UX"] },
        { id: 10, title: "Aaron Kim", detail: "Front-end Engineer", tags: ["TI"] },
    ]
};

const GlobalSearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('All');
    const navigate = useNavigate();

    if (!isOpen) return null;

    const filteredResults = POINTR_DATA.pages
        .concat(POINTR_DATA.actions)
        .concat(POINTR_DATA.employees)
        .filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    const handleNavigate = (path, action) => {
        if (path) {
            navigate(path);
        } else if (action === 'ADD_EVENT') {
            console.log("Abir Modal de Novo Evento");
        }
        onClose();
    };

    const tabs = ['All', 'Pages', 'Employees', 'Actions'];

    return (
        <>
            <div className='fixed inset-0 bg-black/40 z-[90]' onClick={onClose}/>

            <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-[#060622] rounded-xl shadow-2xl z-[100] border border-[#01011d85] overflow-hidden">
                <div className="p-4 border-b border-slate-700">
                    <div className="flex items-center space-x-3">
                        <FiSearch size={20} className="text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Pesquisar páginas, colaboradores ou ações..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full bg-transparent text-white focus:outline-none placeholder-gray-500 text-lg"
                        />
                        <FiX size={20} className="text-gray-400 cursor-pointer hover:text-white" onClick={onClose} />
                    </div>

                    <div className="flex space-x-3 mt-4">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1 text-sm rounded-full transition-colors font-medium cursor-pointer
                                    ${activeTab === tab
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-4 max-h-96 overflow-y-auto
                    scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800
                    [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-slate-600
                ">
                    {filteredResults.length === 0 && query && (
                        <p className="text-gray-400 text-center py-6">Nenhum resultado encontrado para "{query}".</p>
                    )}

                    <h3 className="text-xs uppercase text-gray-400 mb-2 mt-4">Resultados Recentes</h3>
                    {filteredResults.slice(0, 3).map(item => (
                        <div
                            key={item.id}
                            onClick={() => handleNavigate(item.path, item.action)}
                            className="flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer bg-[#18183d] hover:bg-[#252575] transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <FiFileText size={20} className="text-indigo-400" />
                                <div>
                                    <p className="text-sm font-medium text-white">{item.title}</p>
                                    <p className="text-xs text-gray-400">{item.detail || item.path || item.action}</p>
                                </div>
                            </div>

                            <span className="px-2 py-0.5 text-xs rounded bg-purple-600 text-white">{item.tag || 'Colaborador'}</span>
                        </div>
                    ))}

                    <h3 className="text-xs uppercase text-gray-400 mb-2 mt-6">Ações Rápidas</h3>
                    {POINTR_DATA.actions.slice(0, 3).map(item => (
                        <div
                            key={item.id}
                            onClick={() => handleNavigate(item.path, item.action)}
                            className="flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer bg-[#18183d] hover:bg-[#252575]  transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <item.icon size={20} className="text-green-400" />
                                <p className="text-sm font-medium text-white">{item.title}</p>
                            </div>
                            <span className='text-xs text-gray-500'>Ctrl + P</span>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
};

export default GlobalSearchModal;