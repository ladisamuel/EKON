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
                        <p className="text-sm my-4 ">Emmanuel</p>
                        <p className='text-xs text-gray-400 '>The Embassy of the Kingdom of Heaven (EKOH)</p>
                    </div>
                    <div className="">
                        <div>
                            <div>
                                <p>Total Data Entry</p>
                                <p>721K</p>
                            </div>
                            <div>
                                <p>Total Approved</p>
                                <p>367K</p>
                            </div>
                            <div>
                                <p>Total Pending</p>
                                <p>354k</p>
                            </div>
                        </div>

                        <div onClick={() => navigate('/AddNewOne')} className='flex items-center gap-3 text-xs ml-5 px-2 py-2 bg-[#4A3AFF] rounded-lg text-white cursor-pointer'>
                            <p className=''>Add New Entry</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
