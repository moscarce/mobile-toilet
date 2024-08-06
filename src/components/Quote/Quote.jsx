import { useState } from 'react';
import bgImg from '../../asset/AmobileHMBK.jpg';
import WhiteSubtitle from '../shared/Subtitle/WhiteSubtitle';
import img from '../../asset/cir-toilets1.png';


const Quote = () => {
  const getTodayISOString = () => new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventLocation: '',
    numOfToilets: '',
    startDate: '',
    endDate: '',
    toiletType: '',
    eventType: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [agreeError, setAgreeError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.eventLocation) newErrors.eventLocation = 'Event location is required';
    if (!formData.numOfToilets) newErrors.numOfToilets = 'Number of toilets is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (!formData.toiletType) newErrors.toiletType = 'Toilet type is required';
    if (!formData.eventType) newErrors.eventType = 'Event type is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else if (!formData.agree) {
      setAgreeError(true);
    } else {
      setErrors({});
      setAgreeError(false);
      console.log('Form Data:', formData);
      // Handle form submission logic (e.g., API call)
    }
  };

  return (
    <section
      className="grid grid-cols-3 py-28 max-lg:grid-cols-1"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
      }}
    >
      <div className="max-lg:mb-10">
        <WhiteSubtitle title={'Request'} description={'For Quote'} />
        <div>
          <img src={img} alt="" className="p-10 max-lg:p-5 max-md:w-full max-md:h-auto" />
        </div>
      </div>
      <div className="col-span-2 max-lg:col-span-1">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-10 mt-24 max-lg:flex-col">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full py-4 rounded-md px-5 font-bold max-md:py-2 max-md:px-3"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full py-4 px-5 rounded-md font-bold max-md:py-2 max-md:px-3"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
          </div>
          <div className="grid grid-cols-7 gap-5 my-10 max-lg:grid-cols-1 max-lg:gap-0 max-lg:space-y-5">
            <div className="col-span-3">
              <input
                type="text"
                name="phone"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Phone"
                className="w-full py-4 px-5 rounded-md font-bold max-md:py-2 max-md:px-3"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <div className="text-red-500">{errors.phone}</div>}
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="eventLocation"
                placeholder="Event Location"
                className="w-full py-4 px-5 rounded-md font-bold max-md:py-2 max-md:px-3"
                value={formData.eventLocation}
                onChange={handleInputChange}
                required
              />
              {errors.eventLocation && <div className="text-red-500">{errors.eventLocation}</div>}
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="numOfToilets"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="No of Toilets"
                className="w-full py-4 px-5 rounded-md font-bold max-md:py-2 max-md:px-3"
                value={formData.numOfToilets}
                onChange={handleInputChange}
                required
              />
              {errors.numOfToilets && <div className="text-red-500">{errors.numOfToilets}</div>}
            </div>
          </div>
          <div className="flex gap-5 my-10 max-lg:flex-col max-lg:gap-0 max-lg:space-y-5">
            <div className="w-full relative">
              {!formData.startDate && (
                <span
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none font-bold"
                  style={{ zIndex: 3 }}
                >
                  Start Date
                </span>
              )}
              <input
                type="date"
                name="startDate"
                required
                min={getTodayISOString()}
                value={formData.startDate}
                onChange={handleInputChange}
                className={`w-full py-4 px-5 rounded-md font-bold max-md:py-2 max-md:px-3 ${
                  !formData.startDate ? 'text-gray-400' : ''
                }`}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  color: !formData.startDate ? 'transparent' : 'inherit',
                }}
              />
              {errors.startDate && <div className="text-red-500">{errors.startDate}</div>}
            </div>
            <div className="w-full relative">
              {!formData.endDate && (
                <span
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none font-bold"
                  style={{ zIndex: 3 }}
                >
                  End Date
                </span>
              )}
              <input
                type="date"
                name="endDate"
                required
                min={formData.startDate || getTodayISOString()}
                value={formData.endDate}
                onChange={handleInputChange}
                className={`w-full py-4 px-5 rounded-md font-bold max-md:py-2 max-md:px-3 ${
                  !formData.endDate ? 'text-gray-400' : ''
                }`}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  color: !formData.endDate ? 'transparent' : 'inherit',
                }}
              />
              {errors.endDate && <div className="text-red-500">{errors.endDate}</div>}
            </div>
          </div>
          <div className="flex gap-5 my-10 max-lg:flex-col max-lg:gap-0 max-lg:space-y-5">
            <select
              name="toiletType"
              id="toilet_type"
              className="w-full py-4 px-5 pr-10 font-bold max-md:py-2 max-md:px-3"
              value={formData.toiletType}
              onChange={handleInputChange}
              required
            >
              <option value="">Toilet Type</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="luxury">Luxury</option>
            </select>
            <select
              name="eventType"
              id="event_type"
              className="w-full py-4 px-5 pr-10 font-bold max-md:py-2 max-md:px-3"
              value={formData.eventType}
              onChange={handleInputChange}
              required
            >
              <option value="">Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="festival">Festival</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-0 max-lg:grid-cols-1 max-lg:gap-y-5">
            <div className="text-white">
              <div className="float-left mr-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                />
              </div>
              <span>
                By using this form you agree with the storage and handling of your data by this
                website.
              </span>
              {errors.agree && <div className="text-red-500">{errors.agree}</div>}
              {agreeError && !formData.agree && (
                <div className="text-red-500 mt-2">You must agree to the terms to submit the form.</div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-8 py-3 text-1xl font-semibold max-lg:py-2 ${
                  !formData.agree ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f19124] cursor-pointer'
                }`}
                disabled={!formData.agree}
              >
                BOOK NOW!
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Quote;
