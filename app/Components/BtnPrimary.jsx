import Link from "next/link";

export default function BtnPrimary({BtnPrimaryText, BtnPrimaryTextNavigateTo}) {
  return (
    <Link href={`/${BtnPrimaryTextNavigateTo}`} className='flex items-center justify-center border-2 border-darkBlack bg-deepPurple text-white text-3xl font-primaryFont font-medium uppercase py-2 px-5 ease-in-out duration-200 hover:opacity-90'>
      {BtnPrimaryText}
    </Link>
  )
}