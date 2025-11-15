import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {

    const series = [{
        name: 'Custo Estimado',
        data: [1800, 2400, 1500]
    }, {
        name: 'Custo Real',
        data: [1950, 2300, 1650]
    }];

    const options = {
        chart: {
            type: 'bar',
            height: 250,
            toolbar: { show: false },
            background:'transparent',
            fontFamily: 'Roboto, Arial, sans-serif'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '90%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true,
            borderColor: '#475569',
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['transparent']
        },
        xaxis: {
            axisBorder: {
                show: true,
                color: '#177ACC'
            },
            axisTicks: { show: false },
            categories: ['Jan', 'Fev', 'Mar'],
            labels: {
                style: { colors: '#177ACC' }
            }
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: '#177ACC'
            },
            title: {
                style: {color: '#94a3b8'}
            },
            labels: {
                style: { colors: '#177ACC' }
            }
        },
        fill: {
            opacity: 0.95
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "R$ " + val + ",00"
                }
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'left',
            markers: {
                width: 12,
                height: 12,
                radius: 4,
                strokeWidth: 0
            },
            labels: {
                colors: '#f8fafc',
            }
        },
        colors: ['#4f46e5', '#818cf8']
    };

    return (
        <div className="w-full">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height="100%"
            />
        </div>
    );
};

export default BarChart;