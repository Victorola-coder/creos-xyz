import { Link } from "react-router-dom";
import { Button, Container, SEO } from "../components";
import { H1 } from "../utils/typography";
import Revolution from "../components/revolution";

export default function Events() {

    return (
        <>
            <SEO title='Events' />
            <main>
                <Hero />
                <CreosEvents />
                <Revolution />
            </main>
        </>
    )
}


const Hero = () => {

    return (
        <header className="bg-primary pb-[30px] pb-[20px] lg:pb-[50px]">
            <Container>
                <div className="w-full max-w-[1188px] mx-auto grid place-items-center">
                    <H1
                        className="text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px] max-w-[869px]"
                    >
                        Discover the Future at Creos Events
                    </H1>
                    <h5 className='text-[#B0BDB9] text-center text-[20px] leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
                        Join us in the dynamic world of Creos Events, where creativity meets competition and innovation sparks to life.
                    </h5>
                    <Button className="bg-[#B0BDB9]">Create Events</Button>
                </div>
            </Container>
            <div className="mx-5 lg:mx-[100px]">
                <div className="py-[20px] flex items-center lg:px-[20px] lg:text-[24px] gap-[10px] lg:gap-[20px]">
                    <Link className="text-[#E6EAE8] font-bold">Creos Events</Link>
                    <div className="w-[1px] h-[24px] lg:h-[36px] bg-[#E6EAE8]"></div>
                    <Link className="text-[#E6EAE8]">Browse Events</Link>
                </div>
            </div>
        </header>
    )
}


const CreosEvents = () => {

    return (
        <section className="bg-[#E6EAE8] py-[30px] lg:py-[100px]">
            <Container>
                <div className="flex flex-col gap-[95px]">
                    <section className="grid lg:grid-cols-2 gap-[134px]">
                        <div>
                            <div>
                                <h2 className="text-primary lg:text-[24px]">Creos Hackathon</h2>
                                <h1 className="text-[#222222] text-[32px] lg:text-[48px] font-extrabold">Pioneering Sustainable Solutions for a Better Future</h1>
                                <p className="lg:text-[24px] py-[29px] leading-[43px] text-black">
                                    Join us for the groundbreaking event of the year, Creos Hackathon, where creators, innovators, and visionaries unite to shape a sustainable future aligned with the United Nations&rsquo; Sustainable Development Goals.
                                    <br /> <br />
                                    Prepare to be immersed in a whirlwind of cutting-edge technologies, collaborative problem-solving, and the thrill of bringing game-changing ideas to life.
                                </p>
                                <Button className="bg-primary text-white !w-[312px] border-[#B0BDB9]">
                                    Get event tickets today
                                </Button>
                            </div>
                        </div>
                        <figure>
                            <img
                                src="/images/creos-hackathon.svg"
                                alt="Creos Hackathon"
                                className=""
                            />
                        </figure>
                    </section>
                    <div className="h-[1px] w-full bg-primary"></div>
                    <section className="grid lg:grid-cols-2 gap-[134px]">
                        <figure className="row-start-2 lg:col-start-1 lg:row-start-1">
                            <img
                                src="/images/greeks-out.svg"
                                alt="Creos Hackathon"
                                className=""
                            />
                        </figure>
                        <div>
                            <div>
                                <h2 className="text-primary lg:text-[24px]">Creos Greeks Out</h2>
                                <h1 className="text-[#222222] text-[32px] lg:text-[48px] font-extrabold">Your Inner Geek with the Future!</h1>
                                <p className="lg:text-[24px] py-[29px] leading-[43px] text-black">
                                    Join us for a one-of-a-kind gathering where creators come together to have a blast, enjoy immersive experiences, and expand their networks. <br /> <br />
                                    At Creos Geek Out, we believe that your network holds the key to unlocking endless opportunities and success. It&rsquo;s the perfect platform to foster collaboration, meet potential partners, connect with customers, and so much more.
                                </p>
                                <Button className="bg-primary text-white !w-[312px] border-[#B0BDB9]">
                                    Get event tickets today
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </section>
    )
}