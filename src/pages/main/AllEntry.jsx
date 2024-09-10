import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import Entries from '../../utils/data/entries.json'
import { InputSwitch } from 'primereact/inputswitch';

export default function AllEntry() {
    const [entries, setEntries] = useState([]);

    const [selectedEntries, setSelectedEntries] = useState(null);
    const [rowClick, setRowClick] = useState(true);


    const columns = [
        { field: 'user', header: 'User' },
        { field: 'church', header: 'Church' },
        { field: 'founder', header: 'Founder' },
        { field: 'denomination', header: 'Denomination' },
        { field: 'status', header: 'Status' }
    ];

    const statusBodyTemplate = (rowData) => {
        return (
            <span
                className={`text-[10px] px-2 py1 rounded-3xl ${rowData.status === 'Approved' ? 'bg-green-100 text-green-400' : 'bg-[#F2F4F7] text-[#8a8a8a] '} text-white`}
            >
                {rowData.status}
            </span>
        );
    };

    return (
        <div className='p-10'>

            <div className="">
                <div className="card">
                    <DataTable value={Entries} stripedRows sortMode="multiple" tableStyle={{ minWidth: '30rem' }}>
                    <div className="flex justify-content-center align-items-center mb-4 gap-2">
                        <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
                        <label htmlFor="input-rowclick">Row Click</label>
                    </div>
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
    // className="text-sm text-gray-600"

}
