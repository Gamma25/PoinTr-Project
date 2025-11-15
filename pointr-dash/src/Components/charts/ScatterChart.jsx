import React from "react";
import ReactApexChart from "react-apexcharts";

const ScatterChart = () => {

    const series = [{
        name: 'Área A',
        data: [[16,55], [20,60], [18, 70], [25,65]]
    }, {
        name: 'Área B',
        data: [[5,80], [10, 85], [12,90]]
    }, {
        name: 'Área C',
        data: [[2, 20], [8,30], [15,35], [4,40]]
    }];

    const options = {
        chart: {
            type: 'scatter',
            toolbar: { show: false },
            background: 'transparent',
        },

        xaxis: {
            tickAmount: 10,
            title: {
                text: 'Volume de Ocorrências',
                style: { color: '#cbd5e1'}
            },
            min: 0,
            max: 30,
            axisBorder: { show: true, color: '#475569' },
            labels: { style: { colors: '#cbd5e1' } }
        },
        yaxis: {
            tickAmount: 5,
            title: {
                text: 'Gravidade (%)',
                style: { color: '#cbd5e1' }
            },
            labels: { style: { colors: '#cbd5e1' } }
        },
        markers: {
            size: 8,
            strokeColors: '#1f2937',
            strokeWidth: 2
        },
        grid: {
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } },
        },
        tooltip: {
            theme: 'dark',
            custom: function({ _, seriesIndex, dataPointIndex, w }) {
                const x = w.globals.seriesX[seriesIndex][dataPointIndex];
                const y = w.globals.seriesY[seriesIndex][dataPointIndex];
                return '<div class="p-2">' +
                '<span>' + w.globals.seriesNames[seriesIndex] + '</span><br>' +
                '<span>Volume: ' + x + '</span><br>' +
                '<span>Gravidade: ' + y + '%</span>' +
                '</div>';
            }
        },
        legend: {
            labels: { colors: '#f8fafc' },
            markers: { strokeWidth: 0 }
        },
        colors: ['#4f46e5', '#34d399', '#f97316']
    };

    return (
        <div className="w-full h-full">
            <ReactApexChart
                options={options}
                series={series}
                type="scatter"
                height="100%"
            />
        </div>
    )
};

export default ScatterChart;