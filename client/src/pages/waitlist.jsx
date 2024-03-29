import { useState } from 'react';
import { Container, SEO } from '../components';
import Input from '../components/input';
import SecondaryButton from '../components/secondaryButton';
import Select from '../components/select';
import { nanoid } from 'nanoid';
import { validationText, waitlistURL } from '../utils/config';
import { mainClient } from '../utils/client';

import { toast } from 'react-toastify';
import { products } from '../utils/data';

export default function Waitlist() {
  return (
    <>
      <SEO title='Join our waitlist' />
      <main>
        <Main />
      </main>
    </>
  );
}

const Main = () => {
  return (
    <Container>
      <div className='grid lg:grid-cols-2 gap-[20px] pt-5'>
        <div>
          <div className='max-w-[647px]'>
            <h1 className='font-extrabold text-[32px] lg:text-[72px] text-white'>
              Join our waitlist
            </h1>
            <p className='text-[#E6EAE8] text-xl lg:text-[32px]'>
              Exciting things are happening at Creos, and we can't wait
              for you to be a part of it.
              <br /> <br />
              By signing up for our waitlist, you're taking the first step
              towards unlocking a world of innovation, collaboration, and
              endless possibilities.
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

  const [selectedProduct, setSelectedProduct] = useState(null);

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormDisabled = !(
    formData.name &&
    formData.email &&
    selectedProduct
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (!(formData.name &&
      formData.email &&
      selectedProduct)) {
        toast.error(validationText);
    } else {
      mainClient.post(waitlistURL, {
        name: formData.name,
        email:formData.email,
        product:selectedProduct.name
      })
        .then((r => {
          if (r.status === 200) {
            toast.success(r.data.message)
            setForm({ email: '', name: '' })
            setSelectedProduct(null)
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
    <form
      onSubmit={handleSubmit}
      className='flex flex-col mb-[180px] gap-[20px]'
    >
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
          Product
        </label>
        <Select
          value={selectedProduct}
          onChange={setSelectedProduct}
          options={products}
          selectedOption={selectedProduct}
        />
      </fieldset>
      <fieldset>
        <SecondaryButton disabled={isFormDisabled}>
          Join our waitlist
        </SecondaryButton>
      </fieldset>
    </form>
  );
};
