import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/app/assets/Arrow.svg'

export default function BtnSecondary({BtnSecondaryText, BtnSecondaryNavigateTo}) {
  return (
    <Link href={`/${BtnSecondaryNavigateTo}`} className={`group flex items-center justify-start gap-5 text-3xl font-primaryFont font-medium ease-in-out duration-200 hover:gap-7 hover:opacity-90`}>
      {BtnSecondaryText}
      <Image className='w-12 group-hover:opacity-90 dark:invert' src={Arrow} alt=">" />
    </Link>
  )
}