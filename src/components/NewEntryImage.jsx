import React from 'react'
import globe from '../assets/globe.png'

export default function NewEntryImage() {
    return (
        <div>
            <div className="relative bg-[#0B0914] rounded-3xl overflow-hidden text-white p-10 h-[500px] max-w-[400px] ">
                <div className="">
                    <p className='text-sm'>Create a</p>
                    <p className='text-2xl font-bold my-1'>New Church Data.</p>
                    <p className='text-xs text-gray-400'>The Embassy of the Kingdom of Heaven (EKOH)</p>
                </div>
                <div className="text-xs text-gray-200 mt-5">
                    <span className='flex items-center justify-start gap-5'>
                        <p className='p-3 py-2 bg-blue-500 rounded-full'>1</p>
                        <p>Basic church info</p>
                    </span>
                    <div className='h-[20px] border-2 border-[#4A3AFF] mx-3 w-fit my-3'>

                    </div>
                    <span className='flex items-center justify-start gap-5'>
                        <p className='p-3 py-2 bg-blue-500 rounded-full'>2</p>
                        <p>More Church Info </p>
                    </span>
                </div>
                <img src={globe} className='absolute bottom-0 right-0 w-[300px]' alt="" />
            </div>
        </div>
    )
}
