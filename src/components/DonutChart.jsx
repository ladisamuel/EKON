
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            // labels: ['A', 'B', 'C' , 'D'],
            datasets: [
                {
                    data: [100, 150, 90, 30],
                    backgroundColor: [
                        '#95A4FC', 
                        '#C1C1C1', 
                        '#BAEDBD',
                        '#B1E3FF'
                    ],
                    hoverBackgroundColor: [
                        '#95A4AC', 
                        '#C2A5C5', 
                        '#BABDBD',
                        '#B1E3FF'
                    ]
                }
            ]
        };
        const options = {
            cutout: '65%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="m-auto h-[80%] flex items-center justify-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className=" h-[100%] m-auto md:w-30rem" />
        </div>
            
    )
}
        // <div className="card h-full pl-10 gap-9 flex justify-content-center">

        //     {/* <div className='w-full h-[20vh] flex justify-center place-items-center'>
        //         <ul className='w-full  pt-2'>
        //             <li className='list-disc font-semibold mb-3'>U-S <span className='font-semibold pl-10'>38.6%</span></li>
        //             <li className='list-disc font-semibold mb-3'>Canada<span className='font-semibold pl-10'>22.5%</span></li>
        //             <li className='list-disc font-semibold mb-3'>Mexico<span className='font-semibold pl-10'>30.8%</span></li>
        //             <li className='list-disc font-semibold'>Other<span className='font-semibold pl-10'>8.1%</span></li>
        //         </ul>
           

        //     </div> */}
        // </div>
        