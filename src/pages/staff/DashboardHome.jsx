import React from 'react'
import staffdashboardimg from '../../assets/staffHome.png'
export default function DashboardHome() {
  return (
    <div>
        <div className="px-10">
            <div className="">
                <div className=" py-10 flex items-center">
                    <div className="w-fit m-auto">
                    <img src={staffdashboardimg} alt="" />
                    </div>

                </div>
                <div className="w-fit m-auto text-center">
                    <h1 className="bg-[#E7E7E74D] px-3 py-1 rounded-full font-bold">Welcome to EKOH</h1>
                    <p className="text-sm ">Emmanuel</p>
                    <p className='text-xs '>The Embassy of the Kingdom of Heaven (EKOH)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
