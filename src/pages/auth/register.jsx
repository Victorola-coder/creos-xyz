import { Link } from 'react-router-dom';
import { SEO } from '../../components';
import { Logo, LogoName } from '../../assets/svgs/svg';
import 'swiper/css/effect-flip';
import { Close } from '../../components/svgs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../components/input';

export default function register() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState({
    fullName: '',
    profession: '',
    gender: '',
    linkedProfile: '',
    distinction: '',
    workEmail: '',
    uploadHeadshot: [],
  });

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const gender = ['male', 'female'];
  return (
    <>
      <SEO title='Register' />
      <div className='px-5 lg:px-[100px] py-5 lg:py-[80px] w-full max-w-[1728px] mx-auto'>
        <nav className='flex items-center justify-between'>
          <Link to='/'>
            <figure className='flex flex-row items-center'>
              <Logo className={`w-[36px] h-[24px] md:w-[80px] md:h-[54px]`} />
              <LogoName
                className={`w-[54px] h-[20px] lg:w-[120px] lg:h-[45px]`}
              />
            </figure>
          </Link>
          <button onClick={handleClick}>
            <Close />
          </button>
        </nav>
      </div>

      <form
        onSubmit={handleSubmit}
        className='overflow-y-scroll overflow-x-hidden for|"m max-w-[800px] h-[740px] p-[40px] flex flex-col items-center mx-auto gap-[32px]'
      >
        {/* fullname */}
        <fieldset className='flex flex-col gap-4'>
          <label className='text-white inline-block text-[20px] lg:text-[24px]'>
            Full Name
          </label>
          <Input
            placeholder='Full Name'
            type={`text`}
            name='fullName'
            value={formData.fullName}
            onChange={formDataHandler}
            className='placeholder:text-[#B0BDB9] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
          />
        </fieldset>
        {/*profession  */}
        <fieldset className='flex flex-col gap-4'>
          <label className='text-white inline-block text-[20px] lg:text-[24px]'>
            profession
          </label>
          <Input
            placeholder='e.g Product Designer'
            type={`text`}
            name='profession'
            value={formData.profession}
            onChange={formDataHandler}
            className='placeholder:text-[#B0BDB9] lg:px-[20px] lg:py-[24px] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
          />
        </fieldset>
        {/*Gender  */}
        <fieldset className='flex flex-col gap-4'>
          <label className='text-white inline-block text-[20px] lg:text-[24px]'>
            Gender
          </label>
          <select
            className='placeholder:text-[#B0BDB9] capitalize text-primary lg:px-[20px] lg:py-[24px] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
            onChange={formDataHandler}
            name='gender'
            id='gender'
          >
            <option className=''>Gender</option>
            {gender.map((option, index) => {
              return (
                <option className='capitalize' key={index}>
                  {option}
                </option>
              );
            })}
          </select>
        </fieldset>
        {/* linkedin */}
        <fieldset className='flex flex-col gap-4'>
          <label className='text-white inline-block text-[20px] lg:text-[24px]'>
            LinkedIn Profile
          </label>
          <Input
            placeholder='e.g https://www.linkedin.com/in/stephenelufisan/'
            type='url'
            name='linkedProfile'
            value={formData.linkedProfile}
            onChange={formDataHandler}
            className='placeholder:text-[#B0BDB9] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
          />
        </fieldset>
        {/* distinvtion */}
        <fieldset className='flex flex-col gap-4'>
          <label className='text-white inline-block text-[20px] lg:text-[24px]'>
            Distinction
          </label>
          <Input
            placeholder='tell us about yourself and what you are doing differently with emerging disruptive technologies in three paragraphs'
            type='text'
            name='distinction'
            value={formData.distinction}
            onChange={formDataHandler}
            className='placeholder:text-[#B0BDB9]  w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
          />
        </fieldset>
      </form>
    </>
  );
}
