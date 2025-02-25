import React from 'react'
import Sidebar from '../components/Sidebar'
import {DataTable} from '@/components/ems-table/data-table'
import { columns, RecordColumns } from '@/components/ems-table/columns'

async function getData(): Promise<RecordColumns[]> {
  // Fetch data from your API here.
  return [
    {
      employeeId: "E001",
      employeeName: "John Doe",
      department: "HR",
      agency: "Agency A",
      remarks: "On leave",
      date_n_time: "2025-02-25 10:00:00",
    },
    {
      employeeId: "E002",
      employeeName: "Jane Smith",
      department: "Finance",
      agency: "Agency B",
      remarks: "Working remotely",
      date_n_time: "2025-02-25 11:00:00",
    },
    {
      employeeId: "E003",
      employeeName: "Alice Johnson",
      department: "IT",
      agency: "Agency C",
      remarks: "In office",
      date_n_time: "2025-02-25 12:00:00",
    },
  ]
}

const PublicPage = async () => {
  const records = await getData();

  return (
    <>
        <div className='flex'>
            <Sidebar />
            <DataTable data={records} columns={columns}/>
        </div>
    </>
  )
}

export default PublicPage