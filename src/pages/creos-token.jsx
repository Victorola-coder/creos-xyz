import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BgToken from '../assets/images/bg-token.png';
import ClockIcon from '../assets/svgs/clock';
import { SEO } from '../components';
import { companyData } from '../constants/config';
import { H1 } from '../utils/typography';

function CreosToken() {
    const navigate = useNavigate()
    return (
        <>
            <SEO title='Creos Token' />
            <main className='flex justify-center items-center flex-col'>
                <p className='lg:text-2xl'>Coming on Ethereum Blockchain.</p>
                <H1 className='text-light font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]'>
                    Creos Xyz Token <br /> {'($CXYZ)'}
                </H1>
                <div className="flex justify-center flex-col items-center">
                    <div className="w-full bg-center bg-no-repeat bg-contain h-screen absolute -z-10 left-0" style={{ backgroundImage: `url('${BgToken}')` }}></div>
                    <p className='text-xl lg:text-2xl flex items-center gap-2 mb-5'><ClockIcon /> Launch date: <span className='text-creos'>TBA</span></p>
                    <p>
                        <Link to={'/community#connection'}>
                            <button className={'!border-none bg-creos hover:opacity-90 font-medium text-xl w-[300px] overflow-hidden xl:w-[500px] p-5 rounded-full'}>Fill out this form</button>
                        </Link></p>

                    <div className='flex justify-center flex-col items-center my-10 gap-5'>
                        <label className='text-white inline-block text-center text-[20px] lg:text-[24px]'>
                            Ethereum Wallet
                        </label>
                        <CopyToClipboard text={companyData.TOKEN_ADDRESS} onCopy={() => toast.success('Copied to Clipboard')}>

                            <div
                                className='placeholder:text-[#B0BDB9] text-center text-ellipsis p-5 bg-white text-black lg w-[300px] overflow-hidden xl:w-[500px] rounded-full text-[20px] lg:text-[24px]'>
                                {companyData.TOKEN_ADDRESS}
                            </div>

                        </CopyToClipboard>
                    </div>


                    <div className='flex justify-center flex-col items-center my-10 gap-5'>
                        <label className='text-white inline-block text-center text-[20px] lg:text-[24px]'>
                            Join Creos XYZ Token Telegram
                        </label>
                        <CopyToClipboard text={companyData.TOKEN_ADDRESS} onCopy={() => toast.success('Copied to Clipboard')}>
                            <div
                                className='placeholder:text-[#B0BDB9] text-center text-ellipsis p-5 bg-white text-black lg w-[300px] overflow-hidden:xl:w-[500px] rounded-full text-[20px] lg:text-[24px]'>
                                {companyData.TELEGRAM}
                            </div>
                        </CopyToClipboard>
                        <Link target='_blank' rel="noopener noreferrer" to={companyData.TELEGRAM}><button className={'!border-none bg-creos hover:opacity-90 font-medium text-xl w-[300px] overflow-hidden xl:w-[500px] p-5 rounded-full'}>Join</button></Link>
                    </div>



                    <div className='flex justify-center flex-col items-center my-10 gap-5'>
                        <label className='text-white inline-block text-center text-[20px] lg:text-[24px]'>
                            Follow Creos Twitter
                        </label>
                        <CopyToClipboard text={companyData.TOKEN_ADDRESS} onCopy={() => toast.success('Copied to Clipboard')}>
                            <div
                                className='placeholder:text-[#B0BDB9] text-center text-ellipsis p-5 bg-white text-black lg w-[300px] overflow-hidden:xl:w-[500px] rounded-full text-[20px] lg:text-[24px]'>
                                {companyData.TWITTER}
                            </div>
                        </CopyToClipboard>
                        <Link target='_blank' rel="noopener noreferrer" to={companyData.TWITTER}><button className={'!border-none bg-creos hover:opacity-90 font-medium text-xl w-[300px] overflow-hidden xl:w-[500px] p-5 rounded-full'}>Join</button></Link>
                    </div>

                    {/* <Button className={'!border-none bg-creos hover:bg-light w-full'}>Send</Button> */}
                </div>
            </main>
        </>
    );
}

export default CreosToken