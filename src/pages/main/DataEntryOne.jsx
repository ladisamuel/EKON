import React from 'react'
import NewEntryImage from '../../components/NewEntryImage'
export default function DataEntryOne() {
  return (
    <>
    <div className="w-[100%] grid grid-cols-[2.5fr,2fr] gap-10 p-10">
        {/* left */}
        <div className="">
            <p className="text-xl font-bold">New Data Entry</p>
            <p className="text-sm text-gray-400">The Embassy Of The Kingdom Of Heaven (EKOH)</p>

            {/* form */}
            <form action="" className=' '>
                <div className='my-4'>
                    <p className="text-sm">Name of church (Headquarter)*</p>
                    <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Name of Church " />
                </div>

                <div className='my-4'>
                    <p className="text-sm">Name of general overseer or founder*</p>
                    <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Founder name " />
                </div>

                <div className='my-4'>
                    <p className="text-sm">Domination*</p>
                    <select name=""className='w-full border rounded-lg text-xs py-2 px-3' id="">
                        <option className='w-full pl-3 py-3 border' value="select">Select</option>
                    </select>
                </div>

                <div className='my-4'>
                    <p className="text-sm">What year was this church founded?</p>
                    <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Founder Year " />
                </div>

                <div className='my-4'>
                    <p className="text-sm">Church Website URL</p>
                    <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Website " />
                </div>

                <div className='my-4'>
                    <p className="text-sm">Social Media Pages (Facebook,Instagram and X)</p>
                    <input type="text" className='w-full border rounded-lg text-xs py-2 px-3' placeholder="Social media " />
                </div>

                <div className="">
                    <input type="submit" className='w-full bg-[blue] text-white border rounded-lg text-xs py-2 px-3' value="Next" placeholder="Social media " />
                </div>
                

            </form>

        </div>
        {/* right */}
        <NewEntryImage />

    </div>

    </>
  )
}
