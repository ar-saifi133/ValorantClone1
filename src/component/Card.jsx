import React from 'react'

const Card = ({Img,Date,Title,Dis}) => {
    

  return (
    <div className=' w-full h-full '>
        <div className='   w-full h-1/2 overflow-hidden '>
            <img className=' w-full h-full object-cover transition-transform duration-600 transform hover:scale-125 ' src={Img} alt="" />
        </div>
        <div className='pt-5'>
        <div className=''>
        <p className='font-bold text-sm'>
            <span className='text-[#FF4655]'>GAME UPDATES</span> <span className='text-[#BCB9B4]'>|</span> <span className='text-[#0F1923]' >{Date}</span>
        </p>
        <h1 className=' pt-3 text-xl tracking-wider text-[#0F1923] font-bold'>{Title}</h1>

        </div>
        <p className='text-[16px] text-[#0F1923] font-semibold pt-2 pr-5' >{Dis}</p>
    
        </div>
    </div>
  )
}

export default Card
