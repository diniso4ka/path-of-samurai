import '../../../App.css'
import React from 'react'

const Info = () => {
   return (
      <section className='info-wrapper'>
         <div className='avatar'></div>
         <div className='text-wrapper'>
            <p className='text__name'>Denis Z.</p>
            <p className='text__city'>Erevan</p>
            <p className='text__education'>Gerevan</p>
            <p className='text__birthday'>02.11.2001</p>
            <p className='text__website'>...</p>
         </div>
      </section>
   )
}

export default Info