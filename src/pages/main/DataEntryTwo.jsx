import React from 'react'
import globe from '../../assets/globe.png'
import NewEntryImage from '../../components/NewEntryImage'
import { useNavigate } from 'react-router-dom'
export default function DataEntryTwo() {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-[100%] grid grid-rows-2 lg:grid-cols-[2.5fr,2fr] gap-10 p-10">
                {/* phase1 */}
                <div className="order-2 lg:order-1 mb-5">
                    <p className="text-xl font-bold">New Data Entry</p>
                    <p className="text-sm text-gray-400">The Embassy Of The Kingdom Of Heaven (EKOH)</p>

                    {/* form */}
                    <form action="" className=' '>
                        <div className='my-4'>
                            <p className="text-sm">Does this Church have a branch?*</p>
                            {/* <input type="radio" name="ChurchBranch" value="Yes" /> Yes<br />
                            <input type="radio" name="ChurchBranch" value="No" /> No */}

                            <label className="flex items-center">
                                <input type="radio" name="ChurchBranch" value="Yes" className="hidden peer" />
                                <div className="w-3 h-3 border border-gray-400 peer-checked:bg-black peer-checked:border-black rounded-sm relative">

                                </div>
                                <span className="ml-2 text-sm">Yes</span>
                            </label>

                            <label className="flex items-center mt-2">
                                <input type="radio" name="ChurchBranch" value="No" className="hidden peer" />
                                <div className="w-3 h-3 border border-gray-400 peer-checked:bg-black peer-checked:border-black rounded-sm"></div>
                                <span className="ml-2 text-sm">No</span>
                            </label>
                        </div>
                        <div className='my-4'>
                            <p className="text-sm">Selects which continents?*</p>
                            <select name="" className='w-full border rounded-lg text-xs py-2 px-3' id="">
                                <option className='w-full pl-3 py-3 border' value="select">Select Country</option>
                            </select>
                        </div>
                        <div className='my-4'>
                            <p className="text-sm">Which Country?*</p>
                            <select name="" className='w-full border rounded-lg text-xs py-2 px-3' id="">
                                <option className='w-full pl-3 py-3 border' value="select">Select Country</option>
                            </select>
                        </div>

                        <div className='my-4'>
                            <p className="text-sm">Which State is the church located in?*</p>
                            <select name="" className='w-full border rounded-lg text-xs py-2 px-3' id="">
                                <option className='w-full pl-3 py-3 border' value="select">Select State</option>
                            </select>
                        </div>

                        <div className='my-4'>
                            <p className="text-sm">Provide the exact address of the church (local assembly/branch)*</p>
                            <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Address " />
                        </div>

                        <div className='my-4'>
                            <p className="text-sm">Provide the name of the current pastor of that local assembly/branch?</p>
                            <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Current Pastor Name " />
                        </div>


                        <div className='my-4'>
                            <p className="text-sm">Population size of the local assembly/branch*</p>
                            <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Population size " />
                        </div>

                        <div className='my-4'>
                            <p className="text-sm">Provide a valid contact information of a pastor or leader in that local assembly (Name, position and phone number)</p>
                            <div className="flex gap-2">
                                <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="First Name " />
                                <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Last Name " />
                            </div>
                        </div>

                        <div className='my-4'>
                            <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Phone Number " />
                        </div>


                        <div className="flex gap-1">
                            <input type="submit" className='w-full bg-white text-[#383838] border border-[#383838] rounded-lg py-1 px-3 cursor-pointer' value="Previous" onClick={()=>navigate('/AddNewOne')} />
                            <input type="submit" className='w-full bg-[#4A3AFF] text-white border rounded-lg py-1 px-3 cursor-pointer' value="Submit"  />
                        </div>


                    </form>

                </div>
                {/* right */}
                {/* <div className="relative bg-[#0B0914] rounded-3xl overflow-hidden text-white p-10 h-[500px] max-w-[400px] ">
                    <div className="">
                        <p className='text-sm'>Create a</p>
                        <p className='text-2xl font-bold my-1'>New Church Data.</p>
                        <p className='text-xs text-gray-400'>The Embassy of the Kingdom of Heaven (EKOH)</p>
                    </div>
                    <div className="text-xs text-gray-400 mt-5">
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
                </div> */}
                <NewEntryImage />

            </div>

        </>
    )
}
