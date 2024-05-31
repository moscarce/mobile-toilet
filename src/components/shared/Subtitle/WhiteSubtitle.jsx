/* eslint-disable react/prop-types */
import img from '../../../asset/lines3.png'

const WhiteSubtitle = ({title, description}) => {
  return (
    <div className='flex gap-3 items-center'>
        <div>
            <img src={img} className='w-12' alt="" />
        </div>
        <div>
            <p className=' text-[#FFFFFF] text-2xl font-medium'>{title}</p>
            <p className='text-[#f19124] text-4xl font-bold'>{description}</p>
        </div>
    </div>
  )
}

export default WhiteSubtitle