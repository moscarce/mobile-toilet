import Subtitle from "../shared/Subtitle/Subtitle"
import img1 from '../../asset/mobile-toilet-rental.jpg'
import img2 from '../../asset/Luxury-AC-Sales.jpg'
import img3 from '../../asset/Urinary-Pack.jpg'
import img4 from '../../asset/Trash-Bin.jpg'
import img5 from '../../asset/Portable-Hand-Wash-Rental-Sales.jpg'
import img6 from '../../asset/septic-removal.jpg'
import img7 from '../../asset/sanitary-Academy.jpg'
import img8 from '../../asset/Pay-as-you-Go.jpg'
import OurServicesCard from "./OurServiceCard"


const OurServices = () => {

    const btnText = 'READ MORE'
    const serviceCardData = [
    {
        bgImg:img1,
        header:'Standard Mobile Toilets',
        btnText
    },
    {
        bgImg:img2,
        header:'Luxury VIP & VVIP AC Toilets',
        btnText
    },
    {
        bgImg:img3,
        header:'Mobile Standalone Urinal',
        btnText
    },
    {
        bgImg:img4,
        header:'Trash Bin',
        btnText
    },
    {
        bgImg:img5,
        header:'Mobile Stand Alone Hand Wash',
        btnText
    },
    {
        bgImg:img6,
        header:'Septic Emptying',
        btnText
    },
    {
        bgImg:img7,
        header:'Sanitation Academy',
        btnText
    },
    {
        bgImg:img8,
        header:'Pay – Use – Public - Toilets',
        btnText
    },
]
  return (
    <section>
        <div className="py-24">
            <div>
                <Subtitle title={'What We Offer'} description={'Our Services'}/>
            </div>
            <p className="my-10">Our services are unique, comfortable, luxurious, low prices, high quality, and hygienic. All our products are for Sale and Hire, and we can deliver promptly anywhere in Nigeria or neighbouring countries.</p>
            <div className='grid grid-cols-4 gap-x-4 gap-y-8 py-14 max-lg:grid-cols-3 max-md:grid-cols-1'>
                {
                    serviceCardData.map(({ bgImg, header, btnText }, index) => (
                        <div
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`
                        }}
                        className='service-card flex flex-col items-start justify-end pl-5 pb-5'
                        key={index}
                        >
                        <OurServicesCard bgImg={bgImg} header={header} btnText={btnText} key={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurServices