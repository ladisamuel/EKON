import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'

export default function Main() {
    return (
        <div className=''>

            <div className=' grid grid-cols-[200px,1fr] '>
                <div>
                    <Sidebar />
                </div>
                <div className=" ">
                    <div className=" fixed w-[calc(100%-200px)]  z-50">
                        <Topbar />
                    </div>
                    <div className="mt-[10vh]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
