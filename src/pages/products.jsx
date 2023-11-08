import { nanoid } from "nanoid";
import { Button, Container, SEO } from "../components";
import ProductCard from "../components/products/productCard";
import Revolution from "../components/revolution";
import { H1 } from "../utils/typography";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { useState } from "react";

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

    const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

    const handleSlideChange = (swiper) => {
        console.log(swiper)
        setActiveIndex(swiper.activeIndex); // Update the active index when the slide changes
    };

    const cards = [
        <ProductCard key={1} index={0} />,
        <ProductCard key={2} index={1} />,
        <ProductCard key={3} index={2} />
    ]

    return (
        <section className="bg-[#E6EAE8] py-[30px] lg:py-[100px]">
            <Container className="">
                <div className="w-full max-w-[1550px] mx-auto ">
                    <Swiper
                        initialSlide={2}
                        onSlideChange={handleSlideChange}
                        grabCursor={true}
                        effect={'creative'}
                        // direction="vertical"
                        creativeEffect={{
                            prev: {
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                        modules={[EffectCreative]}
                        className="h-max"
                    >
                        {
                            cards.map((card, i) => (
                                <SwiperSlide key={i} className={`h-max`}>
                                    {card}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}
