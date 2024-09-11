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
                    <div className=" w-[65%] m-auto mt-4">
                        <div className="flex justify-between">
                            <div className="border p-5 rounded-2xl bg-[#E3F5FF]">
                                <p>Total Data Entry</p>
                                <p>721K</p>
                            </div>
                            <div className="border p-5 rounded-2xl bg-[#E5ECF6]">
                                <p>Total Approved</p>
                                <p>367K</p>
                            </div>
                            <div className="border p-5 rounded-2xl bg-[#E3F5FF]">
                                <p>Total Pending</p>
                                <p>354k</p>
                            </div>
                        </div>

                        <div className="w-fit m-auto">
                            <button onClick={() => navigate('/AddNewOne')} className='text-center mt-4 border text-xs px-5 py-2 bg-[#4A3AFF] ml-4 rounded-lg text-white cursor-pointer w-fit'>
                                Create a new entry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
