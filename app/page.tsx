import React from 'react'
import { prisma } from './lib/prisma'

const HomePage = async () => {
  const employees = await prisma.employee.findMany()

  const employeeListElements = employees.map((e) => {
    const {id, agency, department, name} = e

    return (
      <div key={id}>
        <h2 className='text-3xl font-bold'>{name}</h2>
        <p>{agency}</p>
        <p>{department}</p>
      </div>
    )
  })

  return (
    <main>
      <h1>Employee Attendance System</h1>
      <p>Welcome to the Employee Attendance System! This is a simple web application that allows you to track the attendance of employees in your organization.</p>
      <p>Use the navigation links above to get started.</p>
      {employeeListElements}
    </main>
  )
}

export default HomePage