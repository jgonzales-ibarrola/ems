import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
    const links = [
        {
            href:'/',
            label: 'Home',
            icon: 'icon',
        }
    ]

  return (
    <nav className='flex-none h-screen overflow-hidden bg-black text-white'>
        <ul>
            {links.map((link, index) => {
                const {href, icon: Icon, label} = link;

                return (
                    <li key={index}>
                        <Link href={href}>
                            <Icon /> {label}
                        </Link>
                    </li>   
                )
            })}
        </ul>

        <Button type='button' size={'sm'} variant={'ghost'}>
            <MdLogout />
        </Button>
    </nav>
  )
}

export default Sidebar