import { Container, SEO } from "../components";
import Revolution from "../components/revolution";
import { H1 } from "../utils/typography";

export default function Products() {

    return (
        <>
            <SEO title='Products' />
            <main>
                <Hero />
                <JoinWaitlist />
                <Revolution />
            </main>
        </>
    )
}

const Hero = () => {

    return (
        <header className="bg-primary">
            <Container>
                <div className="w-full max-w-[1188px] mx-auto grid place-items-center">
                    <H1
                        className="text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]"
                    >
                        Shaping Futures, Empowering Innovators
                    </H1>
                    <h5 className='text-[#B0BDB9] text-center text-[20px] leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
                        At Creos, innovation is not just a concept; it&rsquo;s a way of life. We are excited to introduce our suite of products designed to nurture talent, foster collaboration, and drive disruptive innovation. <br />
                        With Creos, you&rsquo;re not just exploring possibilities; you&rsquo;re shaping the future.
                    </h5>
                </div>
            </Container>
        </header>
    )
}

const JoinWaitlist = () => {

    return (
        <section className="bg-[#E6EAE8] py-[30px] lg:py-[100px]">
            <Container>
                
            </Container>
        </section>
    )
}

