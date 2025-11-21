import React from 'react';

const CalendarStyles = () => (
    <style jsx="true">{` 
        
        .rbc-calendar {
            font-family: inherit;
            color: #E2E8F0;
            border-radius: 0.5rem;
        }

        
        .rbc-header {
            background-color: #060c18; 
            border: 0px; 
            border-color: transparent !important;
            color: #CBD5E1; 
            padding: 8px 0;
            font-weight: 600;
        }

        
        .rbc-day-bg {
            background-color: #00082b; 
        }
        .rbc-off-range-bg {
            background-color: #12172e; 
        }

        
        .rbc-today {
            background-color: #1E3A8A !important; 
        }

        .rbc-btn-group {
            border: 2px solid #0b111d;
            border-radius: 10px;
        }
        
        
        .rbc-btn-group button {
            background-color: #060c18;
            color: #F1F5F9;
            border: none;
            padding: 10px;
            border-radius: 10px;
            transition: 0.2s;
        }
        .rbc-toolbar button:hover {
            background-color: #0b111d;
            color: #5f7594;
        }

        .rbc-month-view,
        .rbc-day-bg,
        .rbc-time-view,
        .rbc-time-header {
            border-color: #02031b !important;
        }

        .rbc-time-slot {
            min-height: 40px;
            border-color: #02031b !important;
        }

        .rbc-time-content, .rbc-day-slot {
            min-height: 80%;
        }

        .rbc-time-slot-column {
            border-color: #475569 !important;
            background-color: #1E293B;
            color: #CBD5E1;
        }

        .rbc-time-content {
            overflow-y: auto; 
            scrollbar-width: thin; /* Firefox */
            scrollbar-color: #060c18 #1E293B; /* thumb e track (Firefox) */
        }

        .rbc-time-content::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        .rbc-time-content::-webkit-scrollbar-track {
            background: #1E293B;
            border-radius: 10px;
        }

        .rbc-time-content::-webkit-scrollbar-thumb {
            background-color: #060c18;
            border-radius: 10px;
            border: 2px solid #1E293B;
        }

        .rbc-btn-group > button.rbc-active {
            background-color: #042b80 !important; 
            
            color: white !important;
            
            border-color: #042b80 !important;
            
            box-shadow: none !important;
        }

        .rbc-btn-group > button.rbc-active:hover {
            background-color: #042b80 !important; 
        }
    `}</style>
);

export { CalendarStyles };