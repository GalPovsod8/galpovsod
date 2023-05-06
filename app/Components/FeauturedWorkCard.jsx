import Image from "next/image"
import Link from "next/link"

export default function FeauturedWorkCard({FWCImgSrc, FWCBrand, FWCBrandType, FWCLink}) {
  return (
    <figure className="relative group min-h-[288px] h-full w-full grid place-items-center font-primaryFont rounded-3xl overflow-hidden shadow-[0px_0px_20px_5px_rgba(0,0,0,0.38)]">
      <Image className="scale-105 group-hover:scale-100 h-full w-full object-contain transition-all ease-in-out duration-500" src={FWCImgSrc} alt={FWCBrand} height={1000} width={10000}/>
      <figcaption className="absolute h-max w-[95%] rounded-3xl flex items-center justify-between px-10 py-5 bg-darkBlack text-white group-hover:bottom-[4%] -bottom-1/2 transition-all ease-in-out duration-500">
        <div className="grid gap-1">
          <h3 className="lg:text-3xl text-xl font-semibold">{FWCBrand}</h3>
          <h4 className="lg:text-2xl text-slate-200">{FWCBrandType}</h4>
        </div>
        <Link role="button" className="lg:text-3xl text-xl font-semibold hover:opacity-90 transition-all duration-200 ease-in-out" href={FWCLink} target="_blank">VISIT</Link>
      </figcaption>
    </figure>
  )
}