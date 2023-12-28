import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BgToken from '../assets/images/bg-token.png';
import ClockIcon from '../assets/svgs/clock';
import { Input, SEO } from '../components';
import { addressURL, companyData, validationText } from '../utils/config';
import { H1, Title } from '../utils/typography';
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

    const linkMapping = [
        {
            name: 'Join Creos XYZ Token Telegram',
            link: companyData.TELEGRAM,
        },
        {
            name: 'Join Creos Twitter',
            link: companyData.TWITTER,
        },
    ]

    return (
        <>
            <SEO title='Creos Token' />
            <main className='flex flex-col items-center'>
                <div className="flex justify-center items-center flex-col lg:w-[500px]">
                    <div className='lg:text-2xl'>Coming on Ethereum Blockchain.</div>
                    <Title className='text-3xl lg:text-5xl mb-10'>
                        Creos Xyz Token
                        <div className="mt-2">{'($CXYZ)'}</div>
                    </Title>
                    <div className="bg-center bg-no-repeat bg-contain hidden lg:block h-screen absolute -z-10 left-0" style={{ backgroundImage: `url('${BgToken}')` }}></div>
                    <div className='text-xl lg:text-2xl flex items-center gap-2 mb-5'>
                        <ClockIcon /> Launch date: <span className='text-creos'>TBA</span>
                    </div>

                    <div onClick={() => setFormActive(!formActive)} className={'p-3 px-5 w-full text-center rounded-full mb-10 bg-creos text-white'}>
                        Fill out this form
                    </div>

                    {formActive ? (
                        <div className='flex justify-center flex-col items-center mb-10 w-full'>
                            <div className='text-white inline-block text-center text-xl mb-2 lg:text-2xl'>
                                Ethereum Wallet
                            </div>
                            <Input
                                placeholder={companyData.TOKEN_ADDRESS}
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                className='text-center' />
                        </div>
                    ) : null}

                    {linkMapping.map((x, i) => (
                        <div className="flex flex-col items-center w-full">
                            <label className='text-white inline-block text-center text-xl lg:text-2xl mb-5'>
                                {x.name}
                            </label>
                            <CopyToClipboard text={x.link} onCopy={() => toast.success('Copied to Clipboard')}>
                                <div
                                    className='placeholder:text-primary-faded text-center text-ellipsis p-3 w-full bg-white text-black lg rounded-full text-xl lg:text-2xl mb-5'>
                                    {x.link}
                                </div>
                            </CopyToClipboard>
                            <div onClick={() => window.location.replace(x.link)} className={'p-3 px-5 w-full text-center rounded-full mb-10 bg-creos text-white'}>
                                Join
                            </div>
                        </div>
                    ))}

                </div>
            </main>
        </>
    );
}

export default CreosToken