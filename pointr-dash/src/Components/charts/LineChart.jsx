import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {

    const series = [{
        name: 'Taxa de Atraso',
        data: [12.5, 9.8, 11.2, 10.5, 8.9, 7.5]
    }];

    const options = {
        chart: {
            type:'line',
            height: 300,
            toolbar: { show: false },
            background: 'transparent',
        },
        stroke: {
            curve: 'smooth',
            width: 4,
            colors: ['#34d399']
        },
        makers: {
            size: 5,
            colors: ['#34d399'],
            strokeColors: '#1f2937',
            strokeWidth: 2,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true,
            borderColor: '#475569',
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        xaxis: {
            categories: ['Jul', 'Ago', 'Set', 'Out'],
            axisBorder: {
                show: true,
                color: '#47559'
            },
            axisTicks: { show: false },
            labels: {
                style: { colors: '#cbd5e1'}
            }
        },
        yaxis: {
            title: {
                text: 'Taxa (%)',
                style: { color: '#cbd5e1' }
            },
            labels: {
                style: { colors: '#cbd5e1' },
                formatter: function (val) {
                    return val.toFixed(1) + "%";
                }
            }
        },
        tooltip: {
            theme: 'dark',
            y: {
                formmater: function (val) {
                    return val.toFixed(1) + "%";
                }
            }
        },
        legend: {
            labels: { colors: '#f8fafc' },
            markers: { strokeWidth: 0 }
        }
    };

    return(
        <div className="w-full h-full">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height="100%"
            />
        </div>
    )
};

export default LineChart;