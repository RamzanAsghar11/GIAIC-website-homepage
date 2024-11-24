import React from 'react'
import Image from 'next/image'

const cards = () => {
  return (
    <div>
      <div className='3-Cards flex justify-around mb-7'>
        <Image className='rounded-lg'
        src='/imageWebsite.5c6ae62f.jpg'
        width={400}
        height={400}
        alt=''/>
        <Image className='rounded-lg'
         src='/imageWebsite2.a102c7b5.jpg'
         width={400}
         height={400}
         alt=''/>
        <Image className='rounded-lg'
         src='/imageWebsite3.b845fe78.jpg'
         width={400}
         height={400}
         alt=''/>
      </div>

      <div className='2-Cards flex justify-around '>
        <Image className='rounded-lg'
        src='/slideShow5.b502aa01.jpg'
        width={650}
        height={600}
        alt=''/>
        
        <Image className='rounded-lg'
         src='/slideShow4.d9ba1e2d.jpg'
         width={650}
         height={600}
         alt=''/>
      </div>

      
    </div>
  )
}

export default cards
