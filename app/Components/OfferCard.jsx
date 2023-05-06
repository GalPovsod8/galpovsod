import Link from "next/link"

export default function OfferCard({OCTitle, OCDesc, OCPrice, OCLink, OCBgColor}) {
  return (
    <div className={`h-max w-full min-h-full max-w-[500px] grid gap-5 p-10 rounded-3xl font-primaryFont outline outline-4 outline-darkBlack hover:outline-deepPurple transition-all duration-200 ease-in-out ${OCBgColor}`}>
      <div className="grid gap-2 h-max w-full">
        <h2 className="text-7xl font-bold">{OCTitle}</h2>
        <div className="h-max w-full flex items-center justify-between text-3xl font-medium">
          <p>From {OCPrice}€</p>
          <p>i</p>
        </div>
      </div>
      <div className="h-max w-full flex flex-col items-center justify-between gap-2">
        <div className="h-px w-full bg-darkBlack"></div>
        <p className="text-2xl">{OCDesc}</p>
        <div className="h-px w-full bg-darkBlack"></div>
      </div>
      <Link className="h-max w-full flex items-center justify-center p-3 text-5xl font-bold bg-darkBlack text-white hover:bg-lighterBlack transition-all duration-200 ease-in-out" href={OCLink}>MORE</Link>
    </div>
  )
}