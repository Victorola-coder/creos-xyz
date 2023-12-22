import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { subscribeURL } from '../constants/config';
import { mainClient } from '../utils/client';
import { P } from '../utils/typography';
import Button from './button';
import Container from './container';
import Input from './input';
export default function Revolution() {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
  });

  const warn = (error) =>
    toast.error(error, { toastId: 'revolve', autoClose: 2000 });

  function handleSubmit(e) {
    e.preventDefault();

    if (form.email === '' || form.firstName === '') {
      warn('All fields are required');
    } else {
      mainClient.post(subscribeURL, form)
        .then((r => {
          if(r.status === 200){
            toast.success(r.data.message)
            setForm({email:'', firstName:''})
          } else 
          toast.error(r.data.message)
        }))
        .catch(e => {
          toast.error(e.response.data.message)
        })
      return;
    }
  }

  const formDataHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <div className='w-full max-w-[1030px] mx-auto grid place-items-center'>
        <P className='text-[#D9DFDD] !text-base leading-[24px] lg:!text-[20px] font-medium lg:leading-[48px]'>
          Join the Revolution
        </P>
        <h5 className='text-white text-center text-[20px] font-medium leading-[36px] lg:leading-[57.6px] lg:-tracking-[0.2px] lg:text-[36px] my-[28px] lg:max-w-[1030px]'>
          Are you ready to turn your dreams into disruptions? To be part of a
          community where your ideas are not just valued but vital? Creos
          invites you to join the revolution.
        </h5>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-[900px] mx-auto flex flex-col lg:flex-row  items-center gap-[13px] pt-5'
        >
          <fieldset className='flex-1'>
            <Input
              value={form.firstName}
              onChange={formDataHandler}
              type='text'
              name='firstName'
              placeholder='First name'
            />
          </fieldset>
          <fieldset className='flex-1'>
            <Input
              value={form.email}
              onChange={formDataHandler}
              type='text'
              name='email'
              placeholder='Email address'
            />
          </fieldset>
          <Button className='text-primary bg-[#B0BDB9] active:bg-[#FEFAF5] hover:bg-[#FEFAF5]'>
            Join our newsletter
          </Button>
        </form>
      </div>
    </Container>
  );
}
