import Link from "next/link"

function Footer() {
  return (
    <footer className="h-80 w-full font-primaryFont text-slate-100 bg-lightestBlack grid grid-rows-3 px-5 sm:px-10%">
        <nav className="h-max w-full text-2xl items-center flex justify-between py-5 border-b-2 border-slate-100">
            <ul className="sm:flex items-center justify-center gap-10">
                <li className="hover:opacity-80 transition-all duration-200"><Link href="/">Home</Link></li>
                <li className="hover:opacity-80 transition-all duration-200"><Link href="/Work">Work</Link></li>
                <li className="hover:opacity-80 transition-all duration-200"><Link href="/Offers">Offers</Link></li>
                <li className="hover:opacity-80 transition-all duration-200"><Link href="/About">About</Link></li>
                <li className="hover:opacity-80 transition-all duration-200"><Link href="/Contact">Contact</Link></li>
            </ul>
            <h2 className="font-semibold" aria-label="Gal Povsod">GP</h2>
        </nav>
        <h2>FOOTER M</h2>
        <h2>FOOTER B</h2>
    </footer>
  )
}

export default Footer