import React from "react";
import StatCard from "../Components/StatCard";
import Gerar from "../assets/png/gerar.png";
import Header from "../Components/Header";
import ChartWrapper from "../Components/ChartWrapper";
import BarChart from "../Components/charts/BarChart";
import LineChart from "../Components/charts/LineChart";
import ScatterChart from "../Components/charts/ScatterChart";
import DonutChart from "../Components/charts/DonutChart";

const GeralContent = ({ onSearchClick }) => {

    return (
        <main className="w-full p-8">
            <Header title="Painel Geral" onSearchClick={onSearchClick}/>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-11 gap-6"> 
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">

                        <StatCard   
                            title="Funcionários Ativos" 
                            value="13" 
                            icon={Gerar}
                        />

                        <StatCard   
                            title="Atrasos de Entrada" 
                            value="5" 
                            icon={Gerar} 
                        />

                        <StatCard   
                            title="Ausências Justificados" 
                            value="2" 
                            icon={Gerar}
                        />

                        <StatCard   
                            title="Func. em Hora Extra" 
                            value="0" 
                            icon={Gerar}
                        />
                    </div>
                    <ChartWrapper title="Horas Extras por Mês" className="h-128">
                        <DonutChart/>
                    </ChartWrapper>

                </div>

                <div className="lg:col-span-6 flex flex-col gap-6">
                   <ChartWrapper title="Projeção de Custos" className="h-64">
                        <BarChart/>
                    </ChartWrapper>

                    <ChartWrapper title="Taxa de Atraso" className="h-64">
                       <LineChart/>
                    </ChartWrapper>

                    <ChartWrapper title="Localização Crítica" className="h-64">
                        <ScatterChart/>
                    </ChartWrapper>

                </div> 


            </div>
        </main>
    );
};

export default GeralContent;