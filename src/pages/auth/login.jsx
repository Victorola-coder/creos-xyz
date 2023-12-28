import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'swiper/css/effect-flip';
import { Logo, LogoName } from '../../assets/svgs/svg';
import { Button, SEO } from '../../components';
import Input from '../../components/input';
import { Close } from '../../components/svgs';
import { mainClient } from '../../utils/client';
import { handleAxiosError } from '../../utils/common';
import { loginURL, validationText } from '../../utils/config';
import Cookies from 'cookies';

export default function register() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleClick = () => {
    navigate('/');
  };


  const handleClickForm = (e) => {
    handleSubmit(e)
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!(
      formData.email &&
      formData.password
    )) {
      toast.error(validationText);
    } else {
      mainClient.post(loginURL, formData)
        .then((r => {
          console.log(r)
          if (r.status === 200) {
            toast.success("Login successful!")
            const token = r.data.accessToken
            // const cookies = new Cookies();
            // cookies.set('token', token, {
            //   expires: 7, 
            //   path: '/',
            //   httpOnly: true,
            //   sameSite: "lax",
            //   domain: process.env.NODE_ENV === "development" ? "localhost" : "creosxyz.com",
            // });
            document.cookie = `exampleCookie=${token}; expires=7; path=/; secure; HttpOnly`;
            navigate("/dashboard/events")
            setFormData({
              email: '',
              password: '',
            })
          } else
            handleAxiosError(e)
        }))
        .catch(e => {
          console.log(e)
          // handleAxiosError(e)
        })
      return;
    }
  };

  return (
    <>
      <SEO title='Login' />
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
        className=' max-w-[800px] p-[40px] mx-auto'>
        <div className='flex flex-col items-center gap-[32px]'>
          {/* Work Email */}
          <fieldset className='flex flex-col gap-4'>
            <label className='text-white inline-block text-xl lg:text-2xl'>
              Work Email
            </label>
            <Input
              placeholder='Work Email'
              type={`text`}
              name='email'
              value={formData.email}
              onChange={formDataHandler}
              className='placeholder:text-primary-faded w-full lg:w-[720px] rounded-[12px] text-xl lg:text-2xl'
            />
          </fieldset>
          {/* Password  */}
          <fieldset className='flex flex-col gap-4'>
            <label className='text-white inline-block text-xl lg:text-2xl'>
              Password
            </label>
            <Input
              placeholder='Password'
              type='password'
              name='password'
              value={formData.password}
              onChange={formDataHandler}
              className='placeholder:text-primary-faded lg:px-[20px] lg:py-[24px] w-full lg:w-[720px] rounded-[12px] text-xl lg:text-2xl'
            />
          </fieldset>

        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleClickForm}
            className={`text-primary !border-[4px] !border-[#DEB78C] lg:!w-[286px]  !bg-creos my-10 `}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
}
