import React from "react";
import { FiMoreVertical, FiCalendar, FiClock } from 'react-icons/fi';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';


const upcomingEvents = [
    { 
      title: "Solicitação de Férias", 
      start: new Date(2025, 11, 10, 8, 0),
      end: new Date(2025, 11, 20, 17, 0),
      color: 'text-indigo-400' 
    },
    { 
      title: "Reunião Geral (TI)", 
      start: new Date(2025, 11, 6, 14, 30),
      end: new Date(2025, 11, 6, 16, 0), 
      color: 'text-green-400' 
    },
    { 
      title: "Treinamento de Segurança", 
      start: new Date(2025, 11, 15, 9, 0), 
      end: new Date(2025, 11, 15, 11, 30), 
      color: 'text-yellow-400' 
    },
];

const formatDateHeader = (date) => format(date, 'MMM d');
const formatTime = (date) => format(date, 'HH:mm');

const EventList = () => {
    return (
        <div className="flex flex-col h-full">

            <h3 className="text-lg font-semibold text-white mb-2">Próximos Eventos</h3>
            <p className="text-xs text-gray-400 mb-6">Eventos agendados no</p>

            <div className="space-y-6 overflow-y-auto pr-3">
                {upcomingEvents.map((event, index) => {

                    const isSingleDay = isSameDay(event.start, event.end);

                    return (
                        <div key={index} className="flex justify-between items-start border-b border-slate-700 pb-4">

                            <div className="flex flex-col">
                                <p className={`text-sm font-bold ${event.color}`}>{event.title}</p>

                                <div className="flex items-center text-xs text-gray-400 mt-1">
                                    <FiCalendar size={12} className="mr-1" />
                                    {isSingleDay
                                        ? formatDateHeader(event.start)
                                        : `${formatDateHeader(event.start)} - ${formatDateHeader(event.end)}`
                                    }
                                </div>
                                <div className="flex items-center text-xs text-gray-400 mt-0.5">
                                    <FiClock size={12} className="mr-1" /> 
                                    {`${formatTime(event.start)} - ${formatTime(event.end)}`}
                                </div>

                                <p className="text-xs text-gray-500 mt-2">
                                    {event.description}
                                </p>
                            </div>  

                            <div className="flex flex-col items-end space-y-1">
                                <FiMoreVertical size={18} className="text-gray-400 cursor-pointer hover:text-white" />
                                <p className="text-lg font-semibold text-white mt-1">{event.price}</p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default EventList;