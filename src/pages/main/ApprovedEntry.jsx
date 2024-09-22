import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import AllData from '../../utils/data/entries.json'
import { useNavigate } from 'react-router-dom';
import { getApprovedData } from '../../utils/api/data';

export default function ApprovedEntry() {
    const [entries, setEntries] = useState([]);

    const [selectedEntries, setSelectedEntries] = useState(null);
    const [rowClick, setRowClick] = useState(true);

    const navigate = useNavigate()
    
    const columns = [
        { field: 'user', header: 'User' },
        { field: 'nameOfChurch', header: 'Church' },
        { field: 'nameOfGO', header: 'Founder' },
        { field: 'denomination', header: 'Denomination' },
        { field: 'status', header: 'Status' }
    ];

    const getData = async () => {
        // const allData = AllData.map((data, index) => ({
        //     ...data,
        //     id: index + 1
        // }));
        // const approvedEntries = allData.filter(entry => entry.status === 'Approved');

        await getApprovedData().then((res)=>{
            console.log(res, 'response');
            console.log(res.data.payload);
            const allData = res.data.payload.map((data, index) => ({
                ...data,
                id: index + 1
            }));
            
            setEntries(allData);
        })
        // setEntries(allData);
        
    };


    useEffect(() => {
        getData()
    }, []);
    const statusBodyTemplate = (rowData) => {
        return (
            <span
                className={`text-[10px] px-2 py1 rounded-3xl ${rowData.status === 'Approved' ? 'bg-green-100 text-green-500' : 'bg-[#F2F4F7] text-[#8a8a8a] '} `}
            >
                {rowData.status}
            </span>
        );
    };

    return (
        <div className='p-10'>

            <div className="mb-10 flex lg:flex-row items-start justify-between gap-5">
                <div className="lg:flex">
                    <p className="font-bold">My Data Entry</p>
                    <p className='text-xs lg:ml-5 w-fit px-2 py-1 bg-[#F7FAFF] rounded-xl text-[#4A3AFF]'>Approved</p>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-center">
                    <p className='mx-5'>Filters</p>
                    <div onClick={() => navigate('/AddNewOne')} className='flex items-center gap-3 text-xs px-2 py-2 bg-[#4A3AFF] rounded-lg text-white cursor-pointer'>
                        <i className='pi pi-plus'></i>
                        <p className=''>Add New Entry</p>
                    </div>

                </div>
            </div>
            <div className="">

                <div className="card">
                    <DataTable
                        value={entries}
                        selectionMode={rowClick ? null : 'checkbox'}
                        selection={selectedEntries}
                        onSelectionChange={(e) => setSelectedEntries(e.value)}
                        dataKey="id"
                        paginator
                        rows={30}
                        paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport"

                        // stripedRows
                        // sortMode="multiple"
                        tableStyle={{ minWidth: '30rem' }}
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>

                        {columns.map((col, i) => (
                            <Column
                                key={col.field}
                                field={col.field}
                                className={`text-xs py-3 border-b ${col.header === 'User' ? 'font-bold text-gray-700' : 'text-gray-500'}  `}
                                body={col.field === 'status' ? statusBodyTemplate : null}
                                header={col.header}
                            />
                        ))}
                    </DataTable>
                </div>
            </div>
        </div>
    )

}
