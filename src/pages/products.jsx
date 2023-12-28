import { Container, SEO } from '../components';
import ProductCard from '../components/products/productCard';
import Revolution from '../components/revolution';
import { H1 } from '../utils/typography';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { useEffect, useRef } from 'react';
import Box from '../components/box';
import { useInView } from 'framer-motion';
import { products } from '../utils/data';
import { motion } from "framer-motion"

export default function Products() {
  return (
    <>
      <SEO title='Our Solid Products' />
      <main>
        <Hero />
        <JoinWaitlist />
        <Revolution />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <header className='bg-primary'>
      <Container>
        <div className='w-full max-w-[1188px] mx-auto grid place-items-center'>
          <H1 className='text-light font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]'>
            Shaping Futures, Empowering Innovators
          </H1>
          <h5 className='text-primary-faded text-center text-xl leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
            At Creos, innovation is not just a concept; it's a way of
            life. We are excited to introduce our suite of products designed to
            nurture talent, foster collaboration, and drive disruptive
            innovation. <br />
            With Creos, you're not just exploring possibilities;
            you're shaping the future.
          </h5>
        </div>
      </Container>
    </header>
  );
};

const JoinWaitlist = () => {
  const containerRef = useRef();
  const firstCardRef = useRef();
  const secondCardRef = useRef();
  const thirdCardRef = useRef();

  const containerInView = useInView(containerRef, { amount: 0.12 });
  const secondCardInView = useInView(secondCardRef);
  const thirdCardInView = useInView(thirdCardRef);

  // useEffect(() => {
  //   console.log('Hi');
  //   if (containerInView) {
  //     if (!thirdCardInView) {
  //       console.log(secondCardRef.current);
  //       const height = secondCardRef.current.clientHeight;
  //       secondCardRef.current.style.transform = `translateY(${height * 1.2
  //         }px)`;
  //     } else {
  //       secondCardRef.current.style.transform = `translateY(0px)`;
  //       firstCardRef.current.style.transform = `translateY(0px)`;
  //     }

  //     if (!secondCardInView && !thirdCardInView) {
  //       const height = firstCardRef.current.clientHeight;
  //       firstCardRef.current.style.transform = `translateY(${height * 3 + 200
  //         }px)`;
  //     } else {
  //       firstCardRef.current.style.transform = `translateY(0px)`;
  //     }
  //   }
  // }, [thirdCardInView, secondCardInView]);


  const cardVariants = {
    offscreen: {
      y: -100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


  return (
    <section
      className='bg-[#E6EAE8]'
      ref={containerRef}
    >
      <Box className=''>
        <div className='w-full max-w-[1550px mx-auto relative'>
          <motion.div
            className="card-container mb-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            {/* <div className="splash" style={{ background }} /> */}
            <motion.div className="card" variants={cardVariants}>
              <ProductCard
                index={0}
                product={products[0]}
                showButton
                ref={firstCardRef}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="card-container mb-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            {/* <div className="splash" style={{ background }} /> */}
            <motion.div className="card" variants={cardVariants}>
            <ProductCard
                index={1}
                product={products[1]}
                showButton
                ref={secondCardRef}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="card-container mb-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            {/* <div className="splash" style={{ background }} /> */}
            <motion.div className="card" variants={cardVariants}>
            <ProductCard
                index={2}
                product={products[2]}
                ref={thirdCardRef}
              />
            </motion.div>
          </motion.div>
        </div>
      </Box>
    </section>
  );
};
