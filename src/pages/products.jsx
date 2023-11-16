import { Container, SEO } from "../components";
import ProductCard from "../components/products/productCard";
import Revolution from "../components/revolution";
import { H1 } from "../utils/typography";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { useEffect, useRef } from "react";
import Box from "../components/box";
import { useInView } from "framer-motion";

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

    const containerRef = useRef();
    const firstCardRef = useRef();
    const secondCardRef = useRef();
    const thirdCardRef = useRef();

    const containerInView = useInView(containerRef, { amount: 0.12 });
    const secondCardInView = useInView(secondCardRef);
    const thirdCardInView = useInView(thirdCardRef);
    

    useEffect(() => {
        console.log("Hi")
        if(containerInView){
            if(!thirdCardInView){
                console.log(secondCardRef.current)
                const height = secondCardRef.current.clientHeight
                secondCardRef.current.style.transform =  `translateY(${(height * 1.2) + 200}px)`
            } else{
                secondCardRef.current.style.transform =  `translateY(0px)`
                firstCardRef.current.style.transform =  `translateY(0px)`
            }
            
            if(!secondCardInView && !thirdCardInView){
                const height = firstCardRef.current.clientHeight
                firstCardRef.current.style.transform =  `translateY(${(height * 3) + 200}px)`
            }else{
                firstCardRef.current.style.transform =  `translateY(0px)`
            }
        }
    }, [thirdCardInView, secondCardInView])
    
    return (
        <section className="bg-[#E6EAE8] py-[30px] lg:py-[100px]" ref={containerRef}>
            <Box className="">
                <div className="w-full max-w-[1550px] mx-auto relative pb-[500px]">
                    <ProductCard index={0} ref={firstCardRef} className="absolute top-0 z-[10]" />
                    <ProductCard index={1} ref={secondCardRef} className="left-0 top-[70px] lg:top-[150px] absolute z-[20]" />
                    <ProductCard index={2} ref={thirdCardRef} className="left-0 top-[140px] lg:top-[300px] absolute z-[30]" />
                    <ProductCard index={0} className="mb-[200px] invisible" />
                    <ProductCard index={1} className="invisible" />
                    <ProductCard index={2} className="invisible" />
                </div>
            </Box>
        </section>
    )
}
