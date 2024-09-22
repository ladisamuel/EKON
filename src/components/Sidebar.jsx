import React, { useState } from 'react'
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
const [entryStatus, setEntryStatus] = useState(false)
const [userStatus, setUserStatus] = useState(false)
    const navigate = useNavigate()

    const toggleEntryStatus = () =>{
        setEntryStatus(!entryStatus)
    }

    const toggleUserStatus = () =>{
        setUserStatus(!userStatus)
    }

    const menuList = [
        {
            text: "Analytics",
            img: analytics,
            link: "/#",
            sub: []
        },
        {
            text: "Approvals",
            img: approvals,
            link: "/#",
            sub: []
        },
        {
            text: "Users",
            img: users,
            link: "/user/alluser",
            sub: [
                {
                    text: 'All Users', 
                    link: '/user/alluser'
                },
                {
                    text: 'Admin', 
                    link: '/user/admin'
                },
                {
                    text: 'Super Admin', 
                    link: '/user/super admin'
                },
                {
                    text: 'Add Users', 
                    link: '/user/addnewuser'
                },

            ]

        },
        {
            text: "Forum",
            img: forum,
            link: "/#",
            sub: []
        },
        {
            text: "My Profile",
            img: myProfile,
            link: "/#",
            sub: []
        },
    ]
    return (

        <div className='border-r  lg:fixed lg:w-[200px] lg:h-[100vh] p-5'>
            <div className='relative h-full'>


                <div className='hidden lg:flex items-center gap-1 mb-10'>
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

                        <div onClick={toggleEntryStatus} className=''>
                            <div className="hover:cursor-pointer hover:bg-[#F4F4F4] hover:border-l-4 border-black pl-3 rounded-r flex gap-1 items-center justify-start">
                            <i className="pi pi-folder text-center w-[20px] text-md"></i>
                            <p className='py-1'>Data Entry</p>
                            </div>
                            <ul className={`${entryStatus? 'block': 'hidden'} pl-10 flex flex-col gap-3 mt-2 `}>
                                <li className='cursor-pointer' onClick={()=>navigate('/Entries/AllEntries')}>All Entries</li>
                                <li className='cursor-pointer' onClick={()=>navigate('/Entries/ApprovedEntries')}>Approved</li>
                                <li className='cursor-pointer' onClick={()=>navigate('/Entries/PendingEntries')}>Pending</li>
                                <li className='cursor-pointer' onClick={()=>navigate('/AddNewOne')}>Add New</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-3 text-gray-700'>
                    {
                        menuList.map((menu, index) => (
                            <div key={index}  onClick={toggleUserStatus} className=''>
                                <div className=''>
                                    <div className="flex cursor-pointer gap-2 items-center justify-start hover:cursor-pointer hover:bg-[#F4F4F4] hover:border-l-4 border-black ">
                                    <img src={menu.img} className=" w-[15px] text-md" />
                                    <p className='py-1 '>{menu.text}</p>
                                    </div>
                                    <ul className={` pl-10 flex flex-col gap-3 mt-2 `}>
                                        {menu.sub.map((item, index)=>(
                                            <li key={index} className={`${userStatus? 'block': 'hidden'} text-sm cursor-pointer`} onClick={()=>navigate(item.link)}>{item.text}</li>

                                        ))}
                                    </ul>
                                    </div>
                                </div>
                        ))
                    }
                                
                </div>
                <div className="hidden lg:absolute bottom-10">
                    <img src={Logo2} className="" alt="" />
                </div>
            </div>


        </div>
    )
}
