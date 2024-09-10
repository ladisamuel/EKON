
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';




export default function DashBoard() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    // for graph 
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        // const textColor = documentStyle.getPropertyValue('--text-color');
        const textColor = "rgba(0,0,0,0.234)";
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',],
            datasets: [
                {
                    label: 'Current Week',
                    data: [50, 35, 40, 64, 70, 60],
                    fill: false,
                    borderColor: '#C1C1C1',
                    tension: 0.4
                },
                {
                    label: 'Previous Week',
                    data: [40, 55, 50, 40, 50, 65],
                    fill: false,
                    borderColor: '#A8C5DA',
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            },



        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (

            <Chart type="line" className='h-[100%]' data={chartData} options={chartOptions} />

    )

}