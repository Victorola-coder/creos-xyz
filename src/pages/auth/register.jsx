import { Link } from 'react-router-dom';
import { Button, SEO } from '../../components';
import { Logo, LogoName } from '../../assets/svgs/svg';
import 'swiper/css/effect-flip';
import { Close } from '../../components/svgs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../components/input';
import { toast } from 'react-toastify';
import { mainClient } from '../../utils/client';
import { registerURL } from '../../constants/config';

export default function register() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0)


  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    gender: '',
    linkedInUrl: '',
    distinction: '',
    email: '',
    password: '',
    confirmPassword: '',
    // uploadHeadshot: [],
  });

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const genders = ['Male', 'Female'];


  const handleClick = () => {
    navigate('/');
  };


  const handleClickForm = (e) => {
    if (currentIndex !== 0) {
      handleSubmit(e)
    } else {
      setCurrentIndex(1)
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!(
      formData.name &&
      formData.email &&
      formData.profession &&
      formData.gender &&
      formData.linkedInUrl &&
      formData.distinction &&
      formData.password &&
      formData.confirmPassword
    )) {
      warn('All fields are required');
    } else {
      mainClient.post(registerURL, formData)
        .then((r => {
          if (r.status === 200) {
            toast.success(r.data.message)
            navigate('/login')
          } else
            toast.error(r.data.message)
        }))
        .catch(e => {
          e.response?.data?.message && toast.error(e.response.data.message)
        })
      return;
    }
  };

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
        className='max-w-[800px] mb-5 p-[40px] mx-auto -mt-10'
      >
        {currentIndex === 0 ? (
          <div className='flex flex-col items-center gap-[32px]'>
            {/* name */}
            <fieldset className='flex flex-col gap-4'>
              <label className='text-white inline-block text-[20px] lg:text-[24px]'>
                Full Name
              </label>
              <Input
                placeholder='Full Name'
                type={`text`}
                name='name'
                value={formData.name}
                onChange={formDataHandler}
                className='placeholder:text-[#B0BDB9] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
              />
            </fieldset>
            {/*profession  */}
            <fieldset className='flex flex-col gap-4'>
              <label className='text-white inline-block text-[20px] lg:text-[24px]'>
                Profession
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
                {genders.map((option, index) => {
                  return (
                    <option className='capitalize' key={index} value={option[0]}>
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
                name='linkedInUrl'
                value={formData.linkedInUrl}
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
                className='placeholder:text-[#B0BDB9] text-primary max w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
              />
            </fieldset>
          </div>
        ) : null}

        {currentIndex === 1 ? (
          <div className='flex flex-col items-center gap-[32px]'>
            {/* Work Email */}
            <fieldset className='flex flex-col gap-4'>
              <label className='text-white inline-block text-[20px] lg:text-[24px]'>
                Work Email
              </label>
              <Input
                placeholder='Work Email'
                type={`text`}
                name='email'
                value={formData.email}
                onChange={formDataHandler}
                className='placeholder:text-[#B0BDB9] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
              />
            </fieldset>
            {/* Password  */}
            <fieldset className='flex flex-col gap-4'>
              <label className='text-white inline-block text-[20px] lg:text-[24px]'>
                Password
              </label>
              <Input
                placeholder='Password'
                type='password'
                name='password'
                value={formData.password}
                onChange={formDataHandler}
                className='placeholder:text-[#B0BDB9] lg:px-[20px] lg:py-[24px] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
              />
            </fieldset>
            {/* Change Password */}
            <fieldset className='flex flex-col gap-4'>
              <label className='text-white inline-block text-[20px] lg:text-[24px]'>
                Confirm Password
              </label>
              <Input
                placeholder='Confirm Password'
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={formDataHandler}
                className='placeholder:text-[#B0BDB9] w-full lg:w-[720px] rounded-[12px] text-[20px] lg:text-[24px]'
              />
            </fieldset>
          </div>
        ) : null}
      </form>
      <div className="flex justify-center">
        <Button
          onClick={handleClickForm}
          className={`text-primary !border-[4px] !border-[#DEB78C] lg:!w-[286px]  !bg-creos my-10 `}>
          {currentIndex === 0 ? 'Next' : 'Submit'}
        </Button>
      </div>
    </>
  );
}
