import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {

    const labels = ['Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro'];

    const series = [910, 297, 127, 12, 78];

    const options = {
        chart: {
            type: 'donut',
            toolbar: { show: false },
            background: 'transparent',
        },
        labels: labels,
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                return series[opts.seriesIndex] + "h"
            },
            style: {
                colors: ['#ffffff']
            }
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: false,
                            fontSize: '14px',
                            color: '#9ca3af',
                            offsetY: 8
                        },
                        value: {
                            show: false,
                            fontSize: '24px',
                            color: '#f8fafc',
                            offsetY: -8,
                            formatter: function (val) {
                                return val + '%'
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total Horas',
                            color: '#cbd5e1',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0) + 'h';
                            }
                        }
                    }
                }
            }
        },
        legend: {
            position: 'bottom',
            labels: { colors: '#f8fafc' },
            markers: { strokeWidth: 0 }
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return val + 'h'
                }
            }
        },
        colors: ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe']
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={320}
            />
        </div>
    )
};

export default DonutChart;