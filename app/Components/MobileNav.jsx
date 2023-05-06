import Link from 'next/link'

function MobileNav({MobileNavLinkClicked}) {
  return (
    <nav className={'h-max w-full text-slate-200 text-4xl border-l-2 border-slate-200'}>
        <ul className='grid place-items-start gap-5 pl-5'>
            <li className='group transition duration-300'><Link onClick={MobileNavLinkClicked} href="/">Home<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link onClick={MobileNavLinkClicked} href="/Work">Work<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link onClick={MobileNavLinkClicked} href="/Offers">Offers<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link onClick={MobileNavLinkClicked} href="/About">About<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
            <li className='group transition duration-300'><Link onClick={MobileNavLinkClicked} href="/Contact">Contact<span className="block max-w-0 group-hover:max-w-maxUnderlineWidth transition-all duration-500 h-0.5 bg-deepPurple dark:bg-softPurple"></span></Link></li>
        </ul>
    </nav>
  )
}

export default MobileNav