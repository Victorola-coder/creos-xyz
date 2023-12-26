import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BgToken from '../assets/images/bg-token.png';
import ClockIcon from '../assets/svgs/clock';
import { SEO } from '../components';
import { addressURL, companyData, validationText } from '../utils/config';
import { H1 } from '../utils/typography';
import { mainClient } from '../utils/client';

function CreosToken() {
    const navigate = useNavigate()
    const [formActive, setFormActive] = useState(false)
    const [address, setAddress] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (!address) {
            toast.error(validationText);
        } else {
            mainClient.post(addressURL, {
                address
            })
                .then((r => {
                    if (r.status === 200) {
                        toast.success(r.data.message)
                        setAddress('')
                        setSelectedProduct(null)
                    } else
                        toast.error(r.data.message)
                }))
                .catch(e => {
                    toast.error(e?.response?.data?.message)
                })
            return;
        }
    }

    return (
        <>
            <SEO title='Creos Token' />
            <main className='flex justify-center items-center flex-col'>
                <p className='lg:text-2xl'>Coming on Ethereum Blockchain.</p>
                <H1 className='text-light font-black text-center !text-[32px] leading-[48px] lg:!text-[72px] lg:leading-[108px]'>
                    Creos Xyz Token <br /> {'($CXYZ)'}
                </H1>
                <div className="flex justify-center flex-col content-stretch items-center lg:w-[500px]">
                    <div className="bg-center bg-no-repeat bg-contain hidden lg:block h-screen absolute -z-10 left-0" style={{ backgroundImage: `url('${BgToken}')` }}></div>
                    <p className='text-xl lg:text-2xl flex items-center gap-2 mb-5'><ClockIcon /> Launch date: <span className='text-creos'>TBA</span></p>

                    <div onClick={() => setFormActive(!formActive)} className={'p-3 px-5 w-full text-center rounded-full mb-10 bg-creos text-white'}>Fill out this form</div>

                    {formActive ? (
                        <div className='flex justify-center flex-col items-center my-10'>
                            <label className='text-white inline-block text-center text-[20px] mb-2 lg:text-[24px]'>
                                Ethereum Wallet
                            </label>
                            <input placeholder={companyData.TOKEN_ADDRESS} onChange={(e) => setAddress(e.target.value)} value={address} className='text-left placeholder:text-[#B0BDB9] w-full text-ellipsis p-3 bg-white text-black rounded-full text-[20px] lg:text-[24px]' />
                        </div>
                    ) : null}

                    <div className='flex justify-center flex-col items-center my-10 gap-5'>
                        <label className='text-white inline-block text-center text-[20px] lg:text-[24px]'>
                            Join Creos XYZ Token Telegram
                        </label>
                        <CopyToClipboard text={companyData.TOKEN_ADDRESS} onCopy={() => toast.success('Copied to Clipboard')}>
                            <div
                                className='placeholder:text-[#B0BDB9] text-center text-ellipsis p-3 w-full bg-white text-black lg rounded-full text-[20px] lg:text-[24px]'>
                                {companyData.TELEGRAM}
                            </div>
                        </CopyToClipboard>
                        <div onClick={() => window.location.replace(companyData.TELEGRAM)} className={'p-3 px-5 w-full text-center rounded-full mb-10 bg-creos text-white'}>
                            Join
                        </div>
                    </div>


                    <div className='flex justify-center flex-col items-center my-10 gap-5'>
                        <label className='text-white inline-block text-center text-[20px] lg:text-[24px]'>
                            Join Creos Twitter
                        </label>
                        <CopyToClipboard text={companyData.TOKEN_ADDRESS} onCopy={() => toast.success('Copied to Clipboard')}>
                            <div
                                className='placeholder:text-[#B0BDB9] text-center text-ellipsis p-3 w-full bg-white text-black lg rounded-full text-[20px] lg:text-[24px]'>
                                {companyData.TWITTER}
                            </div>
                        </CopyToClipboard>
                        <div onClick={() => window.location.replace(companyData.TWITTER)} className={'p-3 px-5 w-full text-center rounded-full mb-10 bg-creos text-white'}>
                            Join
                        </div>
                    </div>

                    <div onClick={handleSubmit} className={'p-3 px-5 w-full text-center rounded-full mb-10 bg-creos text-white'}>
                        Send
                    </div>

                </div>
            </main>
        </>
    );
}

export default CreosToken