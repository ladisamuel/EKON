
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',],
            datasets: [
                {
                    type: 'bar',

                    data: [50, 25, 12, 48, 90, 76, 42],
                    backgroundColor: [
                        '#95A4FC',
                        '#BAEDBD',
                        '#C1C1C1',
                        '#B1E3FF',
                        '#A8C5DA',
                        '#A1E3CB'
                    ],
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.1,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: '#95A4FC'


                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Chart type="bar" className='h-[100%]  text-xs' data={chartData} options={chartOptions} />
    )
}
