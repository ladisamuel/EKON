import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import clock from '../assets/icons/clock.png'
import notification from '../assets/icons/notification.png'
import fileicon from '../assets/icons/fileicon.png'
import search from '../assets/icons/Search.png'
import text from '../assets/icons/Text.png'
import star from '../assets/icons/star.png'

export default function Topbar() {

    const [path, setPath] = useState('')
    const breadcrumbs = () => {

        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(Boolean);

        // console.log(pathSegments);
        // console.log(currentPath.toUpperCase());

        const formatSegment = (segment) => {
            return segment.replace(/([A-Z])/g, ' $1').trim();
        };

        return pathSegments.map(segment => formatSegment(segment)).join(' / ');

    }

    // console.log(breadcrumbs());
    useEffect(()=>{
        setPath(breadcrumbs());
    })
    
    return (
        <div className=" bg-white">
            <div className="flex justify-between items-center px-5 border-b">
                <div className='flex gap-2 py-4'>
                    {/* icons */}
                    <div className='flex gap-2'>
                        <img src={fileicon} className='w-6 h-6' alt="" />
                        <img src={star} className='w-6 h-6' alt="" />

                    </div>
                    <div className="flex items-center gap-1">
                        <p className='text-[gray]'>Dashboards / {path==="dashboard"?path:''}</p>
                        {/* <p className='text-[gray] font-bold'></p> */}
                        <p className='fontbold text-gray-00 text-sm'></p>
                    </div>
                </div>

                <div className='flex justify-end items-center gap-5 '>

                    <div className='relative'>
                        <i className='pi pi-search text-sm absolute -translate-y-1/2 pl-2 top-[50%] left[10px] text-gray-300 '></i>

                        <input type="text" className=" bg-gray-100 my-2 py-1 pl-[30px] rounded" placeholder="Search..." />

                        <img src={text} className='absolute right-3 -translate-y-1/2 pl-2 top-[50%] left[10px] h-6' alt="" />

                    </div>

                    {/* logos */}

                    <div className=' flex place-items-center gap-x-5 w-full'>
                        <i className='pi pi-sun text-sm'></i>
                        <i className='pi pi-history text-sm'></i>
                        <i className='pi pi-bell text-sm'></i>
                        <i className='pi pi-folder text-sm'></i>

                    </div>

                </div>

            </div>

        </div>
    )
}
