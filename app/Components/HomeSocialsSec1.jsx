'use client'
import { Icon } from '@iconify/react';

function HomeSocialsSec1() {
  return (
    <ul className='sm:absolute relative hidden h-max justify-between bottom-5 sm:bottom-12 sm:flex gap-5 z-50 sm:text-darkBlack text-slate-200 dark:text-slate-200'>
        <li><Icon className='ease-in-out duration-200 hover:opacity-90 hover:cursor-pointer' height="3rem" icon="mdi:github" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-90 hover:cursor-pointer' height="3rem" icon="mdi:youtube" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-90 hover:cursor-pointer' height="3rem" icon="ph:instagram-logo-light" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-90 hover:cursor-pointer' height="3rem" icon="ph:linkedin-logo-light" /></li>
        <li><Icon className='ease-in-out duration-200 hover:opacity-90 hover:cursor-pointer' height="3rem" icon="ph:twitter-logo" /></li>
    </ul>
  )
}

export default HomeSocialsSec1