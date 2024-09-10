import React from 'react'
import ProfileIcon from '../assets/icons/ByeWind.png'
import ChartPieSlice from '../assets/icons/ChartPieSlice.png'
import fileicon from '../assets/icons/fileicon.png'
import analytics from '../assets/icons/sidebar/analytics.png'
import approvals from '../assets/icons/sidebar/approvals.png'
import forum from '../assets/icons/sidebar/forum.png'
import myProfile from '../assets/icons/sidebar/myProfile.png'
import users from '../assets/icons/sidebar/users.png'
import { useNavigate } from 'react-router-dom'

import Logo2 from '../assets/Logo2.png'

export default function Sidebar() {

    const navigate = useNavigate()

    const menuList = [
        {
            text: "Analytics",
            img: analytics
        },
        {
            text: "Approvals",
            img: approvals
        },
        {
            text: "Users",
            img: users
        },
        {
            text: "Forum",
            img: forum
        },
        {
            text: "My Profile",
            img: myProfile
        },
    ]
    return (

        <div className='border-r fixed w-[200px] h-[100vh] p-5'>
            <div className='relative h-full'>


                <div className='flex items-center gap-1 mb-10'>
                    <img src={ProfileIcon} alt="img" />
                    <p className='font-bold text-xs'>Prosper</p>
                </div>

                <div className='hidden'>
                    <p className='text-[gray]'>Favorites</p>
                    <p className='ml-3 font-semibold'>Overview</p>
                </div>

                <div className='mb-5'>
                    <p className='text-gray-400 mb-3'>Dashboards</p>
                    <div className=' text-sm'>
                        <div onClick={() => navigate('/dashboard')} className='hover:cursor-pointer hover:bg-[#F4F4F4] hover:border-l-4 border-black pl-3 rounded-r mb-2  flex  items-center justify-start gap-1'>
                            <img src={ChartPieSlice} className='w-[20px] ' alt="" />
                            <p className='py-1'>Overview</p>
                        </div>

                        <div onClick={() => navigate('/addNew1')} className='hover:cursor-pointer hover:bg-[#F4F4F4] hover:border-l-4 border-black pl-3 rounded-r flex gap-1 items-center justify-start'>
                            <i className="pi pi-folder text-center w-[20px] text-md"></i>
                            <p className='py-1'>Data Entry</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-3 text-gray-700'>
                    {
                        menuList.map((menu, index) => (
                            <div key={index} className='flex gap-2 items-center justify-start'>
                                <img src={menu.img} className=" w-[15px] text-md" />
                                <p className='py-1'>{menu.text}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute bottom-10">
                    <img src={Logo2} className="" alt="" />
                </div>
            </div>


        </div>
    )
}
