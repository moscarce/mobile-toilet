import { useState } from 'react'
import bgImg from '../../asset/AmobileHMBK.jpg'
import WhiteSubtitle from '../shared/Subtitle/WhiteSubtitle'
import img from '../../asset/cir-toilets1.png'

const Quote = () => {
  const getTodayISOString = () => {
        return new Date().toISOString().split('T')[0];
      };
    
      const [startDate, setStartDate] = useState(getTodayISOString());
      const [endDate, setEndDate] = useState(getTodayISOString());
    
      const handleStartDateChange = (event) => {
        const selectedDate = event.target.value;
        setStartDate(selectedDate);
    
        if (new Date(selectedDate) > new Date(endDate)) {
          setEndDate(selectedDate);
        }
      };
    
      const handleEndDateChange = (event) => {
        const selectedDate = event.target.value;
        
        if (new Date(selectedDate) < new Date(startDate)) {
          setStartDate(selectedDate);
        }
    
        setEndDate(selectedDate);
      };


  return (
    <section className=" grid grid-cols-3 py-28"
        style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    objectFit: 'cover'
                }}
    >
        <div>
            <WhiteSubtitle title={'Request'} description={'For Quote'}/>
            <div>
                <img src={img} alt="" className='p-10'/>
            </div>
        </div>
        <div className=" col-span-2">
          <form action="">
            <div className='flex gap-5 my-10 mt-24'>
              <input type="text" placeholder='Name' className='w-full py-4 rounded-md px-5 font-bold' required/>
              <input type="text" placeholder='Email' className='w-full py-4 px-5 rounded-md font-bold' required/>
            </div>
            <div  className='grid grid-cols-7 gap-5 justify-between my-10'>
              <input type="text" inputMode="numeric"  pattern="[0-9]*"  placeholder='Phone' className=' col-span-3 py-4 px-5 rounded-md font-bold' required/>
              <input type="text" placeholder='Event Location' className='basis-[25%] py-4 px-5 rounded-md font-bold col-span-2' required/>
              <input  type="text" inputMode="numeric"  pattern="[0-9]*" placeholder='No of Toilets' className='basis-[25%] py-4 px-5 rounded-md font-bold col-span-2' required/>
            </div>
            <div className='flex gap-5 my-10'>
                            <input
                                type="date"
                                name="startDate"
                                required
                                min={getTodayISOString()}
                                value={startDate}
                                onChange={handleStartDateChange}
                                id='start_date'
                                className='w-full py-4 px-5 rounded-md font-bold'
                                />

                            <input
                                type="date"
                                name="endDate"
                                id='end_date'
                                required
                                min={startDate}
                                value={endDate}
                                onChange={handleEndDateChange}
                                className='w-full py-4 px-5 rounded-md font-bold'
                                />
              </div>
              <div className='flex gap-5 my-10'>
                      <select name="" id="toilet_type" className=' w-full py-4 px-5 pr-10 font-bold'>
                          <option value="Toilet Type">Toilet Type</option>
                      </select>
                      <select name="" id="event_type" className=' w-full py-4 px-5 pr-10 font-bold'>
                          <option value="Event Type">Event Type</option>
                      </select>
              </div>
              <div className='grid grid-cols-2 gap-0'>
                        <div className='text-white'>
                            <div className='float-left mr-2'>
                                <input type="checkbox"/>
                            </div>
                                <span>
                                By using this form you agree with the storage and handling of your data by this website.</span>
                        </div>
                        <div>
                        <button className='px-8 py-3 text-1xl font-semibold'>BOOK NOW!</button>
                        </div>
                    </div>
          </form>
        </div>
    </section>
  )
}

export default Quote