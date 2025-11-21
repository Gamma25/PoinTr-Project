import React, { useState } from "react";
import { FiMoreVertical } from 'react-icons/fi';
import EditableCell from "./EditableCell";
import ColumnVisibilityMenu from "./ColumnVisibilityMenu";


const employeesData = [
    { id: 1, name: "Lucas Tania", job: "Design Lead", city: "Shanghai", phone: "421 3294", country: "EUA", timezone: "Zone 1", connection: "Very strong", company: "Facebook", badge: "Lira" },
    { id: 2, name: "Matteo Vistocco", job: "Head of Design", city: "Cairo", phone: "482 3245", country: "EUA", timezone: "Zone 3", connection: "Good", company: "Apple", badge: null },
    { id: 3, name: "Aaron Kim", job: "Front-end Engineer", city: "New York City", phone: "592 2105", country: "EUA", timezone: "Zone 3", connection: "Good", company: "The Walt Disney Company", badge: null },
    { id: 4, name: "Thomas Train", job: "CMO", city: "Paris", phone: "412 3901", country: "UK", timezone: "Zone 4", connection: "Very strong", company: "Instagram", badge: null },
    { id: 5, name: "Sarah Clinton", job: "Senior Analyst", city: "London", phone: "499 2031", country: "CAN", timezone: "Zone 1", connection: "Very weak", company: "Bank of America", badge: null },
    { id: 6, name: "Juan Smith", job: "Product Designer", city: "Mumbai", phone: "324 3910", country: "EUA", timezone: "Zone 4", connection: "Good", company: "MasterCard", badge: null },
    { id: 7, name: "Lucas Tania", job: "Design Lead", city: "Shanghai", phone: "421 3294", country: "EUA", timezone: "Zone 1", connection: "Very strong", company: "Facebook", badge: "Lira" },
    { id: 8, name: "Matteo Vistocco", job: "Head of Design", city: "Cairo", phone: "482 3245", country: "EUA", timezone: "Zone 3", connection: "Good", company: "Apple", badge: null },
    { id: 9, name: "Aaron Kim", job: "Front-end Engineer", city: "New York City", phone: "592 2105", country: "EUA", timezone: "Zone 3", connection: "Good", company: "The Walt Disney Company", badge: null },
    { id: 10, name: "Thomas Train", job: "CMO", city: "Paris", phone: "412 3901", country: "UK", timezone: "Zone 4", connection: "Very strong", company: "Instagram", badge: null },
    { id: 11, name: "Sarah Clinton", job: "Senior Analyst", city: "London", phone: "499 2031", country: "CAN", timezone: "Zone 1", connection: "Very weak", company: "Bank of America", badge: null },
    { id: 12, name: "Juan Smith", job: "Product Designer", city: "Mumbai", phone: "324 3910", country: "EUA", timezone: "Zone 4", connection: "Good", company: "MasterCard", badge: null },
    { id: 13, name: "Lucas Tania", job: "Design Lead", city: "Shanghai", phone: "421 3294", country: "EUA", timezone: "Zone 1", connection: "Very strong", company: "Facebook", badge: "Lira" },
    { id: 14, name: "Matteo Vistocco", job: "Head of Design", city: "Cairo", phone: "482 3245", country: "EUA", timezone: "Zone 3", connection: "Good", company: "Apple", badge: null },
    { id: 15, name: "Aaron Kim", job: "Front-end Engineer", city: "New York City", phone: "592 2105", country: "EUA", timezone: "Zone 3", connection: "Good", company: "The Walt Disney Company", badge: null },
    { id: 16, name: "Thomas Train", job: "CMO", city: "Paris", phone: "412 3901", country: "UK", timezone: "Zone 4", connection: "Very strong", company: "Instagram", badge: null },
    { id: 17, name: "Sarah Clinton", job: "Senior Analyst", city: "London", phone: "499 2031", country: "CAN", timezone: "Zone 1", connection: "Very weak", company: "Bank of America", badge: null },
    { id: 18, name: "Juan Smith", job: "Product Designer", city: "Mumbai", phone: "324 3910", country: "EUA", timezone: "Zone 4", connection: "Good", company: "MasterCard", badge: null },
];

const statusMap = {
    'Very strong': 'bg-green-400',
    'Good': 'bg-indigo-400',
    'Weak': 'bg-yellow-400',
    'Very weak': 'bg-red-400',
};


const COLUMN_METADATA = [
    { key: 'name', label: 'Colaborador', visible: true, isEditable: false },
    { key: 'job', label: 'Cargo', visible: true, isEditable: true },
    { key: 'city', label: 'Cidade', visible: true, isEditable: true },
    { key: 'connection', label: 'Conexão', visible: true, isEditable: false },
    { key: 'company', label: 'Empresa', visible: true, isEditable: true },
    { key: 'phone', label: 'Telefone', visible: false, isEditable: true },
    { key: 'country', label: 'País', visible: true, isEditable: false },
    { key: 'timezone', label: 'Zona', visible: false, isEditable: false },
];

const EmployeeTable = () => {

    const [employees, setEmployees] = useState(employeesData);

    const initialVisibility = COLUMN_METADATA.reduce((acc, col) => {
        acc[col.key] = col.key !== 'phone' && col.key !== 'timezone';
        return acc;
    }, {});

    const [columnVisibility, setColumVisibility] = useState(initialVisibility)


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleColumn = (key) => {
        setColumVisibility(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = (id, field, newValue) => {
        const updatedEmployees = employees.map(emp => {
            if (emp.id === id) {
                console.log(`[Cade o BackEnd???]: Salvar ID ${id}, Campo ${field}: ${newValue}`);

                return {
                    ...emp,
                    [field]: newValue
                };
            }

            return emp;
        });

        setEmployees(updatedEmployees);
    };

    return (
        <div className="bg-gradient-to-t from-[#06062285] to-[#0606228a] rounded-lg shadow-xl relative">
            <div className="flex justify-between items-center p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Colaboradores</h3>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" cursor-pointer flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors">
                    <span className="text-sm">Colunas</span>
                    <span className="bg-indigo-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {Object.values(columnVisibility).filter(v => v).length}
                    </span>
                </button>
            </div>

            <ColumnVisibilityMenu 
                isOpen={isMenuOpen}
                visibility={columnVisibility}
                onToggle={toggleColumn}
                onClose={() => setIsMenuOpen(false)}
            />

            <div className="overflow-x-auto 
                            scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800
                            [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-slate-600
            ">
                <table className="min-w-full divide-y divide-slate-700">

                    <thead className="bg-[#191e57]">
                        <tr>
                            {Object.keys(columnVisibility).map((key) => {
                                if (columnVisibility[key]) {
                                    const meta = COLUMN_METADATA.find(c => c.key === key);

                                    return (
                                        <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                            {meta ? meta.label : key}
                                        </th>
                                    );
                                }
                                return null;
                            })}
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>

                    <tbody className="bg-gradient-to-t from-[#06062285] to-[#0606228a] divide-y divide-slate-700">
                        {employees.map((employee) => (
                            <tr key={employee.id} className="hover:bg-slate-700 transition duration-150">

                                {columnVisibility.name && (
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-white">
                                            {employee.name}
                                        </div>
                                        {employee.badge && (
                                            <span className="ml-1 px-1.5 py-0.5 text-xs font-semibold rounded bg-purple-600 text-white">
                                                {employee.badge}
                                            </span>
                                        )}
                                    </td>
                                )}

                                {columnVisibility.job && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <EditableCell
                                            value={employee.job}
                                            onSave={(newValue) => handleSave(employee.id, 'job', newValue)}
                                        />
                                    </td>
                                )}

                                {columnVisibility.city && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <EditableCell
                                            value={employee.city}
                                            onSave={(newValue) => handleSave(employee.id, 'city', newValue)}
                                        />
                                    </td>
                                )}

                                {columnVisibility.connection && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <div className="flex items-center">
                                            <div className={`w-2.5 h-2.5 rounded-full mr-2 ${statusMap[employee.connection]}`}></div>
                                            {employee.connection}
                                        </div>
                                    </td>
                                )}

                                {columnVisibility.company && (
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 test-xs font-semibold rounded bg-gray-700 text-white">
                                            <EditableCell
                                                value={employee.company}
                                                onSave={(newValue) => handleSave(employee.id, 'company', newValue)}
                                            />
                                        </span>
                                    </td>
                                )}

                                {columnVisibility.phone && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <EditableCell value={employee.phone} onSave={(newValue) => handleSave(employee.id, 'phone', newValue)} />
                                    </td>
                                )}

                                {columnVisibility.country && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {employee.country}
                                    </td>
                                )}

                                {columnVisibility.timezone && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {employee.timezone}
                                    </td>
                                )}

                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <FiMoreVertical size={18} className="text-gray-400 cursor-pointer hover:text-white" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default EmployeeTable;