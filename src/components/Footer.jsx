import { ChevronDown, Facebook, Instagram } from 'lucide-react'
import React from 'react'

const Shop = [
  {name: "Women"},
  {name: "Men"},  
]
const Customer_Support = [
  {name: "FAQs"}, 
  {name: "Shippings"}, 
  {name: "Returns"}, 
  {name: "Help and Contacts"}, 
]
const About = [
  {name: "The story"}, 
  {name: "Blog"}, 
  {name: "Careers"}, 
]

const Footer = () => {
  return (
    <div className=' bg-gray-100 mt-2 px-5 py-10 md:px-10'>
      <section className='grid grid-cols-1  md:grid-cols-3 gap-3 gap-y-5 lg:grid-cols-4'>
        <div className='flex flex-col gap-2'>
          <h1 className="text-2xl LinkStyles font-['unbounded-bold'] text-black ">TIMBU</h1>
          <div className='text-[10px]  text-gray-600 flex flex-col gap-2 lg:gap-5 leading-relaxed'>
            <p>We breathe life into pre-loved garments, transforimng them into timeless expressions of styles that echps whispers of the past.</p>
            <p>Welcome to TIMBU, a place where fashion has a heart, and your story unfolds with every attire you put on .</p>
          </div>
        </div>
         {/* ICONS */}
      <ul className='mt-5 md:hidden gap-5 flex'>
       <li className='flex text-black text-sm items-center gap-2'> <Instagram fill='black' size={30} color='white'/> <span>TIMBU_ng</span></li>
       <li className='flex text-black text-sm items-center gap-2'> <Facebook fill='blue' size={25} color='blue'/> <span>TIMBU_ng</span></li>
      </ul>
        <ul className='flex flex-col  gap-4 md:text-sm text-xs  text-gray-600 border-y md:border-0 md:py-0 py-2 '>
          <li className='Footer-li'>Shop <span className='md:hidden'><ChevronDown/></span></li>
          {Array.isArray(Shop) && Shop.map((item, idx)=>(
            <li key={idx} className='text-sm hidden md:block'>{item.name}</li>
          ))}
        </ul>
        <ul className='Footer'>
          <li className='Footer-li'>Customer support <span className='md:hidden'><ChevronDown/></span></li>
          {Array.isArray(Customer_Support) && Customer_Support.map((item, idx)=>(
            <li key={idx} className='text-sm hidden md:block'>{item.name}</li>
          ))}
        </ul>
        <ul className='Footer'>
          <li className='Footer-li'>About HIMBU <span className='md:hidden'><ChevronDown/></span></li>
          {Array.isArray(About) && About.map((item, idx)=>(
            <li key={idx} className='text-sm hidden md:block'>{item.name}</li>
          ))}
        </ul>
      </section>
      {/* ICONS */}
      <ul className='mt-5 md:flex gap-5 hidden'>
       <li className='flex text-black text-sm items-center gap-2'> <Instagram fill='black' size={30} color='white'/> <span>TIMBU_ng</span></li>
       <li className='flex text-black text-sm items-center gap-2'> <Facebook fill='blue' size={25} color='blue'/> <span>TIMBU_ng</span></li>
      </ul>
    </div>
  )
}

export default Footer