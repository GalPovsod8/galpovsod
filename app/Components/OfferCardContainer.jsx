import OfferCard from "./OfferCard"

export default function OfferCardContainer() {
  return (
    <div className='relative z-20 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 pt-12'>
        <OfferCard OCLink="#" OCTitle="DESIGN" OCDesc="Want only the design? With affordable prices, robust and beautiful designs, I got you covered." OCBgColor="bg-softPurple" OCPrice="200"/>
        <OfferCard OCLink="#" OCTitle="ONE SITE" OCDesc="If you quickly require small and affordable website this plan is perfect for you and your needs." OCBgColor="bg-softGreen" OCPrice="500"/>
        <OfferCard OCLink="#" OCTitle="MPA SITE" OCDesc="You want a scalable and fast website with multiple pages and beautiful design. Say no more. This plan has you covered." OCBgColor="bg-softBlue" OCPrice="1000"/>
    </div>
  )
}