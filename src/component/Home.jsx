import React from 'react'
import video1 from '../assets/VALO RESOURCES/home/intro.mp4'
import whiteBack from '../assets/VALO RESOURCES/home/White_Back.avif'
import Agents from '../assets/VALO RESOURCES/home/Agents.webp'
import White_Back_2 from '../assets/VALO RESOURCES/home/White_Back_2.webp'
import Maps from '../assets/VALO RESOURCES/home/Maps.avif'
import collision from '../assets/VALO RESOURCES/home/Collision-removebg-preview.png'
import Conclusion from '../assets/VALO RESOURCES/home/Conclusion.webp'
import episode from '../assets/VALO RESOURCES/home/Episode.png'
import We_Are from '../assets/VALO RESOURCES/home/We_Are-removebg-preview.png'
import video2 from '../assets/VALO RESOURCES/home/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4'
import yourAgents from '../assets/VALO RESOURCES/home/We_Agents-removebg-preview.png'
import Creativity from '../assets/VALO RESOURCES/home/Creativity-removebg-preview.png'
import Your_Maps from '../assets/VALO RESOURCES/home/Your_maps-removebg-preview.png'
import Maps_inside from '../assets/VALO RESOURCES/home/Map_Inside.webp'
import Fight from '../assets/VALO RESOURCES/home/Fight-removebg-preview.png'
import Latest from '../assets/VALO RESOURCES/home/Latest.png'
import Card from './Card'
const Home = () => {
  const img = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=845'
  return (<div className='overflow-hidden'>

    <section className=' h-screen'>
      <video src={video1} autoPlay='true' loop='true' muted className=' object-cover absolute top-20 h-screen -z-10 w-screen' >
      </video>
      <div className=' h-full flex flex-col justify-center items-center '>
        <div className='h-2/4'>
          <div className='h-2/4'>
            <p className='  text-[#ECE8E1]   font-videofont tracking-wider font-medium' >A 5v5 character-based tactical shooter</p></div>
          <div className=' h-2/4 flex justify-center items-end '>
            <div className='p-1 border-white w-fit border-2'> <button className='bg-[#FF4655] text-[#ECE8E1] px-12 py-3 hover:bg-[#ECE8E1] hover:text-black' > PLAY FOR FREE  </button></div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
    <section className='h-[593px] overflow-scroll' >
      <div><img src={whiteBack} className=' h-[593px]  absolute -z-10 object-cover' alt="" /></div>
      <div className=' px-10 py-8  '> 
        <div className=' flex justify-between items-center'>
          <div> <img className='h-16' src={Latest} alt="" /> </div>
          <div className='flex items-center ' > <span className='font-videofont tracking-tight font-semibold '>GO TO THE NEWS PAGE</span> <span  className='text-[#FF4655]'>
          <svg width="60" height="60" viewBox="0 0 104 104"  xmlns="http://www.w3.org/2000/svg">
          <path fill='currentColor' d="M43 45.8723C43 44.286 44.286 43 45.8723 43H52.162V45.6809H45.8723C45.7666 45.6809 45.6809 45.7666 45.6809 45.8723V58.1277C45.6809 58.2334 45.7666 58.3191 45.8723 58.3191H52.5439C52.5946 58.3191 52.6433 58.299 52.6793 58.2631L56.4235 54.5188H51.838V51.838H59.6596C60.3999 51.838 61 52.4381 61 53.1784V61H58.3191V56.4145L54.5749 60.1587C54.0362 60.6974 53.3056 61 52.5439 61H45.8723C44.286 61 43 59.714 43 58.1277V45.8723Z" />
          </svg></span> </div>
        </div></div>
        <div className='flex gap-8 h-[450px] w-full  px-12 '>
        <div className='  w-[32%]'>
          <Card  Img='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b030f17585469caf0f2cd9f5cd88a2dabe31a703-1920x1080.jpg?auto=format&fit=fill&q=80&w=465' Date=' 27/11/2024' Title='VALORANT x Arcane: The Season 2 Arcane Collectors Set is here' Dis='Everything ypu need to know about Limited edition bundle'  ></Card>
        </div> 
        <div className='  w-[32%]'>
          <Card Img='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a295128976e386e9e53ade3744106220d34c7cc-1920x1080.jpg?auto=format&fit=fill&q=80&w=465' Date='19/11/2024' Title='VALORANT Patch Notes 9.10' Dis='Updates to Sentinels, Controllers, and Phoenix, the addition of a Regen Shield, changes to gameplay systems, and much much more.' ></Card>
        </div> 
        <div className=' w-[32%]'>
          <Card Img='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/679c94f1f9c45174f17149cba909bd4272a2476b-3571x2013.jpg?auto=format&fit=fill&q=80&w=465' Date='21/10/2024' Title='JUST ONE MORE // Ep 9: Act III' Dis='New skinlines, the Year End Patches and so much more in the last act of COLLISION.'></Card>
        </div> 
        </div>
      
    </section>

    <section className='h-[641.35px]' >
      <div> <img src={Conclusion} alt="" className=' absolute -z-10 h-[641.35px] object-cover' /> </div>
      <div className='h-full flex items-center'>
        <div className='h-2/4 pt-12 pl-12'>

          <img src={collision} alt="" />
          <div className='pt-8'>
            <img src={episode} className='h-9 object-contain ' alt="" />
            <button className='font-videofont text-[#ECE8E1] font-semibold bg-[#0f1923] px-8 py-5 hover:bg-[#ECE8E1] hover:text-[#0f1923]' >PLAY NOW</button>

          </div>
        </div>

      </div>
    </section>
    <section className='h-[673.1px]' >
      <div> <img src={White_Back_2} alt="" className=' h-[673.1px] absolute -z-10 object-cover' /> </div>
      <div className='w-full h-full flex' >
        <div className="w-2/4  h-full  pt-14 pl-8" > <div><img className='object-cover' src={We_Are} alt="" /> <button className='bg-[#FF4655] text-[#ECE8E1] px-8 py-5 font-semibold hover:bg-[#0f1923] mt-8' > LEARN THE GAME </button></div> </div>
        <div className="w-2/4  h-full flex justify-center items-center py-10 px-12"> <video className='object-cover' muted autoPlay loop src={video2}></video> </div>
      </div>
    </section>
    <section className='h-[698.5px]' >
      <div> <img src={Agents} alt="" className='object-cover absolute -z-10 h-[698.5px]' /> </div>
      <div className='flex h-full'>
        <div className='w-2/4 h-full p-11 '>
          <img className=' w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className='w-2/4 h-full flex justify-center items-center'>
          <div className='w-full'>
            <div>
              <img className='' src={yourAgents} alt="" />
            </div>
            <div className='pl-3 mb-5'>
              <img  className ='object-fill' src={Creativity} alt="" />
            </div>
            <div className='pl-8'>
              <button className='font-videofont text-[#ECE8E1] font-semibold bg-[#0f1923] px-8 py-5 hover:bg-[#ECE8E1] hover:text-[#0f1923]' >VIEW ALL AGENTS</button>
            </div>

          </div>
        </div> </div>
    </section>
    <section className='h-[698.5px]' >
      <div className=''> 
        <img src={Maps} alt="" className='object-cover absolute -z-10 h-[698.5px]' /> 
      </div>
      <div className='h-full  flex justify-center items-center '>
      
      <div className=' h-full  w-2/4 flex justify-center items-center p-8  '> 
      <div className=''><div className=''>
        <img src={Your_Maps} alt="" />
      </div>
      <div className='p-'>
        <img src={Fight} alt="" />
      </div> 
      <div> 
      <div className='p-1 border-[#0f1923] w-fit border-4 rounded-md'>  <button className='bg-[#FF4655] text-[#ECE8E1] px-8 py-5 font-semibold hover:bg-[#0f1923] ' > VIEW ALL MAPS </button></div>

      </div></div>
      </div>

      <div className='h-full w-2/4 px-12 pt-12'> 
        <img src={Maps_inside} alt="" />
      </div>
      </div>
    </section>
  </div>

  )
}

export default Home
