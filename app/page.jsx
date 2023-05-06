import heroPfp from '/app/assets/heroPfp.png'
import 'aos/dist/aos.css';
import BtnPrimary from './Components/BtnPrimary';
import BtnSecondary from './Components/BtnSecondary';
import Image from 'next/image';
import HomeSocialsSec1 from './Components/HomeSocialsSec1';
import AOSProvider from './Components/AOSProvider';
import Heading2Component from './Components/Heading2Component';
import RectangleRoundBg from '/app/assets/RectangleRoundBg.svg'
import OfferCardContainer from './Components/OfferCardContainer';
import FeauturedWorkCard from './Components/FeauturedWorkCard';

/*DEMO SLIKE ZA FEAUTURED WORK KARTE:*/ 
import auditing from './assets/work/auditing.jpg'
import tajaOderlap from './assets/work/tajaOderlap.png'
import jovana from './assets/work/jovana.png'
import amadej from './assets/work/amadej.png'



function Home() {
  return (
    <main>
      {/* section1 */}
      <section className='min-h-screen sm:h-sectionHeight w-full grid sm:grid-cols-2 bg-mainBgColor px-5 sm:px-10% text-darkBlack dark:text-slate-200 dark:bg-lighterBlack ease-in-out duration-200 gap-20 sm:gap-0'>
        <div className='animate-fadeIn h-max place-items-end sm:place-items-start sm:mt-0 mt-36 grid gap-y-10 sm:gap-y-7 place-self-center'>
          {/* dodaj za pfp sliko ikone ko vn pridejo na loado pa se premikajo okol */}
          <div className='grid gap-12'>
            <h1 className='font-primaryFont font-bold text-5xl lg:text-7xl tracking-wide'>
            <div className='sm:h-[75px] h-11 overflow-hidden'>
              <div className='grid h-max'>
                <span className='sm:animate-homeHeroTextTransformLG animate-homeHeroTextTransform'>SCALABLE</span>
                <span className='sm:animate-homeHeroTextTransformLG animate-homeHeroTextTransform'>PREFORMANT</span>
                <span className='sm:animate-homeHeroTextTransformLG animate-homeHeroTextTransform'>BEAUTIFUL</span>
              </div>
            </div>
              WEBSITES FOR YOUR NEEDS</h1>
            <div className='grid gap-y-8 sm:gap-y-8'>
              <h2 className=' font-primaryFont text-3xl lg:text-4xl'>Front-End <span className='text-deepPurple font-semibold dark:text-softPurple'>Developer</span>, <span className='text-deepPurple dark:text-softPurple font-semibold'>Designer</span> and <span className='text-deepPurple dark:text-softPurple font-semibold'>Creative Director</span> based in Slovenia.</h2>
              <div className='flex gap-10'>
                <BtnPrimary BtnPrimaryText="Offers" BtnPrimaryTextNavigateTo="Offers"/>
                <BtnSecondary BtnSecondaryText="About" BtnSecondaryNavigateTo="About"/>
              </div>
            </div>
          </div>
          <HomeSocialsSec1/>
        </div>
        <div className='animate-fadeIn h-full w-full grid place-items-end'>
          <Image loading='eager' priority className="animate-heroPfpShaddow w-11/12 max-w-maxPfpWidth'" src={heroPfp} alt="GP " />
        </div>
      </section>
      {/* section2 */}
      <section className='grid sm:grid-flow-col h-max sm:justify-between justify-center place-items-center gap-8 py-20 w-full sm:px-10% border-t-2 border-b-2 border-darkSilver bg-slate-200 dark:bg-neutral-900 dark:text-slate-200 font-primaryFont'>
        <AOSProvider>
        <div data-aos="fade-up" data-aos-once="true" className='grid place-items-center gap-3'>
          <h3 className='text-6xl font-bold text-deepPurple dark:text-softPurple'>200+</h3>
          <h4 className='sm:text-5xl text-4xl font-semibold text-gray-700 dark:text-slate-300'>PROJECTS</h4>
        </div>
        <div className='w-3 h-3 bg-darkSilver rounded-full'></div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className='grid place-items-center gap-3'>
          <h3 className='text-6xl font-bold text-deepPurple dark:text-softPurple'>5000</h3>
          <h4 className='sm:text-5xl text-4xl font-semibold text-gray-700 dark:text-slate-300'>AWARDS</h4>
        </div>
        <div className='w-3 h-3 bg-darkSilver rounded-full'></div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className='grid place-items-center gap-3'>
          <h3 className='text-6xl font-bold text-deepPurple dark:text-softPurple'>-1000</h3>
          <h4 className='sm:text-5xl text-4xl font-semibold text-gray-700 dark:text-slate-300'>LICENCES</h4>
        </div>
        <div className='w-3 h-3 bg-darkSilver rounded-full'></div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className='grid place-items-center gap-3'>
          <h3 className='text-6xl font-bold text-deepPurple dark:text-softPurple'>AG</h3>
          <h4 className='sm:text-5xl text-4xl font-semibold text-gray-700 dark:text-slate-300'>CERTIFICATE</h4>
        </div>
        </AOSProvider>
      </section>
      {/* section3 */}
      <section className='min-h-screen h-max w-full bg-mainBgColor px-5 sm:px-10% pt-12 sm:pt-16 text-darkBlack dark:text-slate-200 dark:bg-lighterBlack'>
        <Heading2Component Heading2ComponentTitle="FEATURED WORK" Heading2ComponentDesc="Check out some of my best work so far. Maybe our next project could land here." Heading2ComponentLink="Work" Heading2ComponentLinkText="More Work"/>
        <div className='h-full w-full pt-16 sm:gap-20 grid gap-10 sm:grid-cols-2 items-start place-items-center'>
          <FeauturedWorkCard FWCImgSrc={auditing} FWCBrand="Auditing" FWCBrandType="Business & Accounting" FWCLink="https://react-test.aglasencnik.com/"/>
          <FeauturedWorkCard FWCImgSrc={tajaOderlap} FWCBrand="Auditing" FWCBrandType="Business & Accounting" FWCLink="https://react-test.aglasencnik.com/"/>
          <FeauturedWorkCard FWCImgSrc={jovana} FWCBrand="Auditing" FWCBrandType="Business & Accounting" FWCLink="https://react-test.aglasencnik.com/"/>
          <FeauturedWorkCard FWCImgSrc={amadej} FWCBrand="Auditing" FWCBrandType="Business & Accounting" FWCLink="https://react-test.aglasencnik.com/"/>
        </div>
      </section>
      {/* section 4 */}
      <section className='min-h-screen h-max w-full relative bg-mainBgColor px-5 sm:px-10% py-12 sm:py-16 text-darkBlack dark:text-slate-200 dark:bg-lighterBlack'>
        <Heading2Component Heading2ComponentTitle="OFFERS" Heading2ComponentDesc="Chose between multiple offers and decide wich best fits your needs." Heading2ComponentLink="Offers" Heading2ComponentLinkText="More Offers"/>
        <Image className='absolute left-0 top-9 h-auto w-3/6' src={RectangleRoundBg} alt="RECTROUNDBG"/>
        <OfferCardContainer/>
      </section>
      {/* section 5 */}
      <section className='h-72 w-full grid place-items-center bg-lightestBlack'>
        <h2 className='text-white'>test</h2>
      </section>
      {/* section 6 */}
      <section className='min-h-screen h-max w-full relative bg-mainBgColor px-5 sm:px-10% py-12 sm:py-16 text-darkBlack dark:text-slate-200 dark:bg-lighterBlack'>
        <Heading2Component Heading2ComponentTitle="ABOUT" Heading2ComponentDesc="Hey nice  to meet you! I’m still just a human so besides coding I also code. Read more about me." Heading2ComponentLink="About" Heading2ComponentLinkText="More About Me"/>
        <div className='h-max w-full grid grid-cols-2 pt-20'>
          <article className=' text-xl font-secondaryFont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, alias fuga. Eaque odio temporibus inventore porro voluptatum ex libero consectetur cupiditate ducimus hic eos accusamus, quidem dolorum harum? Molestiae, pariatur eum sequi dolore hic nemo cupiditate. Explicabo dolorem tenetur illo placeat perspiciatis neque culpa aliquam, ullam rerum laboriosam dolores officia voluptatum expedita, ad vero. Quis tempora autem perferendis nihil ipsum quia assumenda provident quo commodi magnam exercitationem hic molestiae, ducimus enim laboriosam. Earum impedit cumque recusandae, beatae deserunt, enim omnis sit maiores saepe, non blanditiis! Blanditiis accusamus sequi, nam maxime ut explicabo at praesentium optio, dolorem, labore modi harum voluptate rerum? Natus beatae hic iure ab, sit, officia mollitia dolores odio ex reiciendis tenetur? Quisquam eius quis explicabo illo quos ab ratione consequuntur ipsam esse nisi neque repellat voluptate cumque, exercitationem in nam cupiditate vitae provident fuga error commodi? Asperiores magnam nobis aspernatur laboriosam autem obcaecati ex aut adipisci placeat perferendis eum cum commodi, laudantium perspiciatis possimus, omnis dolores nemo nostrum ad in. Hic aut consectetur blanditiis obcaecati nostrum est fugiat facere a aliquid. Beatae aperiam quidem earum vitae enim! Ut, nisi dolor dolores cum numquam eius fugiat accusantium dolorem et ipsam repellendus perspiciatis ipsa tenetur, recusandae veniam. Rem, repellendus?</article>
          {/* <SkillShowcaseCarousel/> */}
        </div>
      </section>
    </main>
  )
}

export default Home