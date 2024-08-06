import { useState } from "react"
import Subtitle from "../shared/Subtitle/Subtitle"

const Service = () => {
    const [faq,setFaq] = useState([
    {
      id:0,
      isOpen:false,
      question:'We are Innovative:',
      answer:'Our products and services are customizable using technology to meet a wide variety of sanitation and hygiene needs, without visiting our office'
    },
    {
      id:1,
      isOpen:false,
      question:'Prompt Delivery:',
      answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci odit'
    },
    {
      id:2,
      isOpen:false,
      question:'Hygienic and Eco Friendly:',
      answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci odit'
    },
    {
      id:3,
      isOpen:false,
      question:'We are Effective and Reliable:',
      answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci odit'
    },
  ])
  return (
    <section className="py-24">
        {/* <Subtitle title={'Why Choose'} description={'A-MOBILE TOILETS'}/> */}
        <div>

        </div>
    </section>
  )
}

export default Service