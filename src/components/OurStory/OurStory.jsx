import img from '../../asset/HM02.jpg';
import Subtitle from '../shared/Subtitle/Subtitle';

const OurStory = () => {
  return (
    <section>
        <div  className="grid grid-cols-2 max-lg:grid-cols-1 w-[100%] gap-24 py-12">
            <div>
                <img src={img} alt="" className='w-[85%]'/>
            </div>
            <div className=''>
                <Subtitle title={'Who we are'} description={'OUR STORY'} />
                <p className='mt-10 mb-8'>Our story began in 2007, at the famous and ever-busy area called Kano Street situated in Ebute Metta, Lagos State, Nigeria; cleaning the street of Bornu Way and providing mobile toilets in that locality for rental.</p>
                <p className='mb-8'>The company was to establish to meet the urgent needs of Sanitation, Hygiene and poverty level, in Nigeria and Africa as a whole.</p>
                <p>The company was to establish to meet the urgent needs of Sanitation, Hygiene and poverty level, in Nigeria and Africa as a whole.</p>
            </div>
        </div>
        <div className=' text-center'>
            <h1 className=' text-[#f19124] text-6xl font-bold'>A-MOBILE TOILETS LIMITED</h1>
            <p className='text-black text-3xl'>…the One-Stop-Sanitation and Hygiene Company</p>
        </div>
    </section>
  )
}

export default OurStory