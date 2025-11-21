import React from "react";
import Header from "../Components/Header";
import EmployeeTable from "../Components/EmployeeTable";


const EmployeesPage = ({ onSearchClick }) => {

    return (
        <main className="w-full p-8">
            <Header title="Listagem de Colaboradores" onSearchClick={onSearchClick}/>

            <div className="mt-8">
                <EmployeeTable/>
            </div>
        </main>
    )
};

export default EmployeesPage;