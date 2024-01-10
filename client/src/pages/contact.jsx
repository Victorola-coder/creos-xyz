import { useState } from 'react';
import { Container, SEO } from '../components';
import Input from '../components/input';
import SecondaryButton from '../components/secondaryButton';
import TextArea from '../components/textarea';
import { mainClient } from '../utils/client';
import { toast } from 'react-toastify';
import { contactURL, validationText } from '../utils/config';

export default function Contact() {
  return (
    <>
      <SEO title='Contact us' />
      <main>
        <Main />
      </main>
    </>
  );
}

const Main = () => {
  return (
    <Container>
      <div className='grid lg:grid-cols-2 mb-[182px] gap-[20px] pt-5'>
        <div>
          <div className='max-w-[487px]'>
            <h2 className='text-[#E6EAE8] text-xl lg:text-[40px]'>
              Contact us
            </h2>
            <h1 className='font-extrabold text-[32px] lg:text-[72px] text-white'>
              Get in touch
            </h1>
            <p className='text-[#E6EAE8] text-xl lg:text-3xl'>
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </Container>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
    message: '',
  });

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormDisabled = !(
    formData.name &&
    formData.email &&
    formData.enquiry &&
    formData.message
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (!(formData.name &&
      formData.email &&
      formData.enquiry &&
      formData.message)) {
        toast.error(validationText);
    } else {
      mainClient.post(contactURL, formData)
        .then((r => {
          if (r.status === 200) {
            toast.success(r.data.message)
            setForm({
              name: '',
              email: '',
              enquiry: '',
              message: '',
            })
          } else
            toast.error(r.data.message)
        }))
        .catch(e => {
          handleAxiosError(e)
        })
      return;
    }
  }

  return (
    <form className='flex flex-col gap-[20px]' onSubmit={handleSubmit}>
      <fieldset>
        <label className='text-white inline-block mb-2 text-xl lg:text-2xl'>
          Full Name
        </label>
        <Input
          placeholder='Full Name'
          type='text'
          name='name'
          className='placeholder-primary rounded-[12px] text-xl lg:text-2xl'
          value={formData.name}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <label className='text-white inline-block mb-2 text-xl lg:text-2xl'>
          Email
        </label>
        <Input
          placeholder='you@company.com'
          type='email'
          name='email'
          className='placeholder-primary rounded-[12px] text-xl lg:text-2xl'
          value={formData.email}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <label className='text-white inline-block mb-2 text-xl lg:text-2xl'>
          What is your enquiry about?
        </label>
        <Input
          placeholder='Your enquiry'
          type='text'
          name='enquiry'
          className='placeholder-primary rounded-[12px] text-xl lg:text-2xl'
          value={formData.enquiry}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <label className='text-white inline-block mb-2 text-xl lg:text-2xl'>
          Message
        </label>
        <TextArea
          type='text'
          name='message'
          className='rounded-[12px] outline text-xl lg:text-2xl'
          value={formData.message}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <SecondaryButton disabled={isFormDisabled}>
          Send message
        </SecondaryButton>
      </fieldset>
    </form>
  );
};