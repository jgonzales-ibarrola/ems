import React, { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'

const PrivateLayout = async ({
    children
}: {
    children: ReactNode
}) => {
  return (
    <>
        <div className='flex'>
            <Sidebar />
            <main className='flex-1'>
                {children}
            </main>
        </div>
    </>
  )
}

export default PrivateLayout