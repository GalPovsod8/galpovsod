'use client'
import { Icon } from '@iconify/react';

function MobileNavSocials() {
  return (
    <ul className='grid grid-cols-3 h-max gap-5 text-slate-200'>
        <li><Icon className='ease-in-out duration-200 hover:opacity-80 hover:cursor-pointer' height="3rem" icon="mdi:github" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-80 hover:cursor-pointer' height="3rem" icon="mdi:youtube" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-80 hover:cursor-pointer' height="3rem" icon="ph:instagram-logo-light" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-80 hover:cursor-pointer' height="3rem" icon="ph:linkedin-logo-light" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-80 hover:cursor-pointer' height="3rem" icon="ph:twitter-logo" /></li>
    </ul>
  )
}

export default MobileNavSocials