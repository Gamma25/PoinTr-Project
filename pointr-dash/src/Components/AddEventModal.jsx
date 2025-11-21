import React, { useState } from "react";
import { FiX, FiCheck } from 'react-icons/fi';

const AddEventModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState ({
        title: '',
        startDateTime: '',
        endDateTime: '',
        description: '',
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Novo Evento Salvo(Cade o back Caio????):", formData);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/70 z-40" onClick={onClose} />

            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="bg-[#0c0b29] p-8 rounded-lg shadow-2xl w-full max-w-lg transform transition-all">

                    <div className="flex justify-between items-center border-b border-slate-700 pb-3 mb-4">
                        <h2 className="text-xl font-bold text-white">Adicionar Novo Evento</h2>
                        <FiX size={24} className="text-gray-400 cursor-pointer hover:text-white" onClick={onClose} />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Título</label>
                            <input
                                type="text" 
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Reunião, Férias, Lançamento..."
                                className="w-full p-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Início</label>
                                <input
                                    type="datetime-local"
                                    name="startDateTime"
                                    value={formData.startDateTime}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Fim</label>
                                <input
                                    type="datetime-local"
                                    name="endDateTime"
                                    value={formData.endDateTime}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Descrição (Opcional)</label>
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                                className="w-full p-2.5 bg-slate-700 resize-none text-white rounded-lg  border border-slate-600 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex justify-end pt-4">
                            <button type="submit" className="px-4 py-2 cursor-pointer bg-[#042b80] text-white font-semibold rounded-lg hover:bg-[#041c50] transition flex items-center space-x-2">
                                <FiCheck size={18} />
                                <span>Salvar Evento</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
};

export default AddEventModal;