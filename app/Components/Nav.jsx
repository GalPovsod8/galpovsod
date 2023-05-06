import Link from 'next/link'

function Nav() {
  return (
    <nav className={'sm:flex items-center justify-center h-max w-full dark:text-slate-200 text-darkBlack sm:relative hidden'}>
        <ul className='sm:flex-row items-center flex gap-10 flex-col'>
            <li className='group transition duration-300'><Link href="/">Home<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link href="/Work">Work<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link href="/Offers">Offers<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link href="/About">About<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link href="/Contact">Contact<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
        </ul>
    </nav>
  )
}

export default Nav