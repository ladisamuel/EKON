import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import StatisticData from "../../utils/data/dashboardData.json"
import Notifications from "../../utils/data/notification.json"
import Activities from "../../utils/data/activities.json"

import { Chart } from 'primereact/chart';
import Bar from '../../components/BarChart'
import Donut from '../../components/DonutChart'
import Line from '../../components/LineChart'


export default function DashBoard() {

    const donutCountry = [
        {
            color: 'bg-[#95A4FC]',
            country: 'United States',
            percent: '38.6%'
        },
        {
            color: 'bg-[#C1C1C1]',
            country: 'Canada',
            percent: '22.5%'
        },
        {
            color: 'bg-[#BAEDBD]',
            country: 'Mexico',
            percent: '30.8%'
        },
        {
            color: 'bg-[#B1E3FF]',
            country: 'Other',
            percent: '8.1%'
        },

    ]

    return (
        <div className='flex'>
            <div className='borderl-2 px-3 lg:w-[80%]'>
                <p className='font-semibold my-5'>Today </p>
                <div className='flex justify-between mb-5 gap-4 w-full'>
                    {StatisticData.map((data, index) => (

                        <div key={index} className={`bg-[#E3F5FF] p-3 rounded-lg w-[30%]`} >
                            <p className='font-bold text-xs'>{data.heading}</p>
                            <div className='flex justify-between gap-3 mt-2'>
                                <p className='font-bold text-xl'>{data.value}</p>
                                <p className='text-xs mt-1'>{data.rate}</p>
                            </div>

                        </div>
                    ))}

                </div>
                {/* graph */}
                <div className=' overflow-hidden w-full rounded-lg  h-[30vh] mt-6'>
                    <div className='bg-[#F7F9FB]  w-full h-[30vh]  p-5'>
                        <Line />
                    </div>

                </div>

                <div className='w-[100%] flex gap-3 my-5 '>
                    <div className='bg-[#F7F9FB] rounded-lg w-[50%] p-2 '>
                        <p className='font-bold text-xs pl-2 pt-2'>Traffic by device</p>
                        <div className="h-[25vh]">
                            <Bar />
                        </div>
                    </div>
                    <div className='bg-[#F7F9FB] rounded-lg w-[50%] p-2 '>
                        <p className='font-bold text-xs pl-2 pt-2'>Traffic by device</p>
                        <div className="h-[25vh] grid grid-cols-2">
                            <Donut />
                            <div className='w-full'>
                                <table className=' h-[20vh]'>
                                    {donutCountry.map((data, index)=>(

                                    <tr key={index} className=" flex gap-5 py-2 items-center justify-between text-xs">
                                        <td>{data.country} </td>
                                        <td>{data.percent}</td>
                                    </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-[#F7F9FB] rounded-lg w-[50%] pl-2 pt-2 h-[30vh]'>
                        <p className='font-bold text-xs'>Traffic by Location</p>
                        <Donut />
                    </div> */}
                </div>
            </div>

            <div className='lg:w-[20%] border-l p-3'>
                <p className='py-3 font-semibold'>Notifications</p>
                <div className=''>
                    {
                        Notifications.map((data, index) => (
                            <div key={index} className='flex gap-2 items-center justify-start mb-3'>
                                <img src={data.icon} alt="" />
                                {/* <p className='w-[30px] h-[30px] rounded-full bg-gray-50'></p> */}
                                <div className=''>
                                    <p className='font-semibol text-xs'>{data.info}</p>
                                    <p className='text-gray-400 text-xs'>{data.time}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* activities */}
                <p className='py-3 font-semibold'>Activities</p>

                <div className=''>
                    {
                        Activities.map((data, index) => (
                            <div key={index} className='flex gap-2 items-center justify-start mb-3'>
                                {/* <p className='w-[30px] h-[30px] rounded-full bg-gray-50'></p> */}
                                <img src={data.icon} alt="" />
                                <div className=''>
                                    <p className='font-semibol text-xs'>{data.info}</p>
                                    <p className='text-gray-400 text-xs'>{data.time}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>


    )
}
