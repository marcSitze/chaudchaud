import React from 'react'
import styles from './Styles.module.css'
import rStyles from './Responsive.module.css'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <div className={`bg-smoke p-4 md:p-16 w-5/6 ${styles.testimonials} ${rStyles.testimonials} flex overflow-x-scroll`}>
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </div>
  )
}

export default Testimonials