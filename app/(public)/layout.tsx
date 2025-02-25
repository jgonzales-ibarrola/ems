import React, { ReactNode } from 'react'

const PublicLayout = async ({
    children
}: {
    children: ReactNode
}) => {
  return (
    <>
        <main>
            {children}
        </main>
    </>
  )
}

export default PublicLayout