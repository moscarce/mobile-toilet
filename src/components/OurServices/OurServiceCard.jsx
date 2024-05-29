/* eslint-disable react/prop-types */

const OurServicesCard = ({header,btnText}) => {
    
  return (
      <div className="service">
        <h2 className='font-medium text-white mr-9 text-2xl'>{header}</h2>
        <button className='font-semibold px-6 py-3'>{btnText}</button>
    </div>
  )
}

export default OurServicesCard