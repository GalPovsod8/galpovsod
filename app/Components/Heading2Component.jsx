import BtnSecondary from "./BtnSecondary"

export default function Heading2Component({Heading2ComponentTitle, Heading2ComponentDesc, Heading2ComponentLink, Heading2ComponentLinkText}) {
  return (
    <div className="grid gap-5 relative z-50 font-primaryFont">
      <h2 className="text-6xl font-semibold">{Heading2ComponentTitle}</h2>
      <article className="h-max w-full flex justify-between sm:flex-row flex-col gap-5 sm:gap-0">
        <h3 className="sm:w-1/2 text-3xl">{Heading2ComponentDesc}</h3>
        <BtnSecondary BtnSecondaryText={Heading2ComponentLinkText} BtnSecondaryNavigateTo={Heading2ComponentLink}/>
      </article>
    </div>
  )
}