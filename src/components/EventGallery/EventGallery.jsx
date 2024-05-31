import img1 from '../../asset/IMG-20210320-WA0154.jpg'
import img2 from '../../asset/Amobile-staff.jpg'
import img3 from '../../asset/amobile-wafbec-01.jpeg'
import img4 from '../../asset/amobile-wafbec-02.jpeg'
import img5 from '../../asset/amobile-wafbec-04.jpeg'
import img6 from '../../asset/amobile-wafbec-06.jpeg'
import img7 from '../../asset/amobile-wafbec-07.jpeg'
import img8 from '../../asset/amobile-wafbec-08.jpeg'
import img9 from '../../asset/amobile-wafbec-10.jpeg'
import img10 from '../../asset/amobile-wafbec-05.jpeg'

const EventGallery = () => {

    const imgList = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]

  return (
    <section className='py-20'>
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
            {
            imgList.map((img,index)=>(
                <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    objectFit: 'cover'
                }}
                 className='p-[40%]'
                 key={index}
                 >
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default EventGallery