import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Container, Modal, SEO } from '../components';
import Input from '../components/input';
import Revolution from '../components/revolution';
import { mainClient } from '../utils/client';
import { handleAxiosError } from '../utils/common';
import { linkedInURL, validationText } from '../utils/config';
import { H1 } from '../utils/typography';

export default function Community() {

  const targetRef = useRef(null);
  const [url, setUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [headhsot, setHeadshot] = useState('')
  const [selectedFile, setSelectedFile] = useState();
  const fileRef = useRef()
  const [data, setData] = useState({
    name: '',
    profession: '',
    gender: '',
    linkedInUrl: '',
    distinction: '',
    email: '',
    headhsot:''
  });

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);


  const handleSubmit = e => {
    e.preventDefault();
    if (!url) {
      toast.error(validationText)
    } else {
      mainClient.post(linkedInURL, { url })
        .then((r => {
          if (r.status === 200) {
            toast.success(r.data.message)
            setUrl('')
          } else
            toast.error(r.data.message)
        }))
        .catch(e => {
          handleAxiosError(e)
        })
      return;
    }
  }

  const handleSubmitMembership = e => {
    e.preventDefault();
    const form = { ...data, headhsot }
    if (!headhsot) {
      toast.error(validationText)
    } else {
      mainClient.post(membershipURL, form)
        .then((r => {
          if (r.status === 200) {
            toast.success(r.data.message)
            setData('')
          } else
            toast.error(r.data.message)
        }))
        .catch(e => {
          handleAxiosError(e)
        })
      return;
    }
  }



  const handleChange = (e) => {
    const { id, value } = e.target
    setData({
      ...data,
      [id]: value
    })
  }

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    // const ext = getExtension(file.name)
    // if (ext !== '' )
    setSelectedFile(file);
  }


  useEffect(() => {
    if (!selectedFile) {
      setHeadshot("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setHeadshot(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <SEO title='Join the Community' />
      <main>
        <Modal title='Membership Registration'
          buttonText='Proceed to Payment'
          onClickButton={handleSubmitMembership}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}>
          <div className='flex flex-col gap-2 p-2 h-[400px] overflow-y-scroll pb-10'>
            <div>Full Name</div>
            <Input rounded={false} value={data.name} placeholder='Full Name' required id="name" onChange={handleChange} />
            <div>Profession</div>
            <Input rounded={false} value={data.profession} placeholder='Profession' type='text' required id="profession" onChange={handleChange} />
            <div>Gender</div>
            <Input rounded={false} value={data.gender} placeholder='Gender' type='text' required id="gender" onChange={handleChange} />
            <div>LinkedIn Profile</div>
            <Input rounded={false} value={data.linkedInUrl} placeholder='LinkedIn Profile' type='text' required id="linkedInProfile" onChange={handleChange} />
            <div>Distinction</div>
            <textarea placeholder='Distinction' id="distinction" cols="40" rows="5"
              onChange={handleChange} value={data.distinction}
              className='rounded-lg p-3 text-xl outline-none min-h-[100px]'></textarea>
            <div>Email</div>
            <Input rounded={false} value={data.email} placeholder='Work Email' type='email' required id="email" onChange={handleChange} />
            <div>Headshot</div>
            <div
              className='p-3 bg-white text-primary-faded text-xl mb-5 rounded-lg flex gap-2'
              onClick={() => { console.log("jns"); fileRef.current.click() }}
              id="headshot" value={headhsot} >
              <div>{selectedFile ? selectedFile.name : 'Upload Headshot'}</div>
              {selectedFile ? <div> | Change</div> : null}
            </div>
            <input ref={fileRef} onChange={onSelectFile} hidden type={'file'} multiple={false} id="headshot" />
          </div>
        </Modal>
        <header className='bg-primary'>
          <Container>
            <div className='w-full max-w-[1188px] mx-auto grid place-items-center'>
              <H1 className='text-light font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]'>
                Join the Creos Community: Where Innovators Thrive
              </H1>
              <h5 className='text-primary-faded text-center text-xl leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
                At Creos, we're on the lookout for revolutionary creators,
                visionaries who are reshaping the world as we know it. If
                you've got what it takes to be part of our vibrant community,
                there are three pathways to join us:
              </h5>
            </div>
          </Container>
        </header>


        <section className='bg-[#E6EAE8] py-[30px] lg:py-[100px]'>
          <Container>
            <div className='flex flex-col gap-[95px]'>
              <section className='grid lg:grid-cols-2 gap-[74px]'>
                <div className='flex'>
                  <div className='my-auto'>
                    <h1 ref={targetRef} id="connnection" className='text-dark text-[32px] lg:text-[48px] font-extrabold'>
                      We're Watching
                    </h1>
                    <p className='lg:text-2xl py-[29px] leading-[43px] text-black'>
                      Creos scouts the globe for groundbreaking innovators
                      challenging the status quo. When we discover your exceptional
                      work, we extend a personal invitation to join our
                      community—all at our expense. <br />
                      <br />
                      Want to increase your chances? Share your LinkedIn profile
                      with us, and let your achievements speak for themselves.
                    </p>
                    <div className='mb-5'>
                      <Input
                        value={url}
                        onChange={(e) => setUrl(e?.target?.value)}
                        className='border-[1px] border-primary placeholder-primary'
                        placeholder='LinkedIn URL'
                      />
                    </div>
                    <Button onClick={handleSubmit} className='bg-primary text-white !w-[233px] border-primary-faded'>
                      Check me out
                    </Button>
                  </div>
                </div>
                <figure>
                  <img src='/images/share.svg' alt='Creos Hackathon' className='' />
                </figure>
              </section>
              <div className='h-[1px] w-full bg-primary'></div>
              <section className='grid lg:grid-cols-2 gap-[134px]'>
                <figure className='row-start-2 lg:col-start-1 lg:row-start-1'>
                  <img
                    src='/images/greeks-out.svg'
                    alt='Creos Hackathon'
                    className=''
                  />
                </figure>
                <div className='flex'>
                  <div className='my-auto'>
                    <h1 className='text-dark text-[32px] lg:text-[48px] font-extrabold'>
                      Pay for Membership
                    </h1>
                    <p className='lg:text-2xl py-[29px] leading-[43px] text-black'>
                      Already confident you're a perfect fit for Creos? You
                      can expedite your entry by opting for our paid membership. For
                      a fee of $2,000, here's what you get:
                    </p>
                    <ul className='lg:text-2xl py-[32px] leading-[43px] text-black flex flex-col gap-2'>
                      <li className='pl-6 relative before:absolute before:left-0 before:top-[10px]s before:h-2 before:w-2 before:rounded-[100%] before:bg-black before:top-[18px]'>
                        Instant Global Recognition: Your unique story will be
                        featured in press releases across 12+ international
                        platforms, amplifying your reach and influence.
                      </li>
                      <li className='pl-6 relative before:absolute before:left-0 before:top-[10px]s before:h-2 before:w-2 before:rounded-[100%] before:bg-black before:top-[18px]'>
                        Personalized Spotlight: Creos Press will conduct a live
                        one-on-one interview, delving into the fascinating tale of
                        how it all began for you.
                      </li>
                      <li className='pl-6 relative before:absolute before:left-0 before:top-[10px]s before:h-2 before:w-2 before:rounded-[100%] before:bg-black before:top-[18px]'>
                        Exclusive Membership Kit: Welcome to Creos with an official
                        Non-Fungible Token (NFT) identity card, a symbol of your
                        unique presence within our community. Plus, receive a
                        physical membership card for blockchain verification and
                        networking opportunities.
                      </li>
                    </ul>
                    <Button onClick={() => setIsOpen(true)} className='bg-primary text-white !w-[176px] border-primary-faded'>
                      Let's go
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className='w-full max-w-[1030px] mx-auto grid place-items-center relative'>
              <H1
                className={`text-light font-black text-center !text-[32px] leading-[48px] max-w-[353px] w-full lg:!text-[72px] lg:leading-[108px] lg:max-w-[869px]`}
              >
                Why Join Creos?
              </H1>
              <h5 className='text-[#E6EAE8] text-center text-xl leading-[36px] lg:leading-[43px] lg:text-2xl my-5'>
                At Creos, we're more than a community; we're a movement
                driving change. Here, innovation meets recognition, and creativity
                finds its stage. When you join Creos, you're not just joining
                a network; you're becoming part of a family of disruptors,
                inventors, and pioneers shaping the future. <br /> <br />
                Your journey to innovation begins here. Let's build a better
                future together. Join Creos, where your ideas transform into
                realities.
              </h5>
              <div className='h-[1px] w-full bg-[#E6EAE8] absolute bottom-[-5px] lg:bottom-[-50px]'></div>
            </div>
          </Container>
        </section>
        <Revolution />
      </main>
    </>
  );
}