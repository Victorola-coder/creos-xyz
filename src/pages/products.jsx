import { motion } from 'framer-motion';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Container, SEO } from '../components';
import Box from '../components/box';
import ProductCard from '../components/products/productCard';
import Revolution from '../components/revolution';
import { products } from '../utils/data';
import { H1, SubTitle, Title } from '../utils/typography';

export default function Products() {
  const containerRef = useRef();
  const firstCardRef = useRef();
  const secondCardRef = useRef();
  const thirdCardRef = useRef();

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
    <>
      <SEO title='Our Solid Products' />
      <main>

        <header className='bg-primary'>
          <Container>
            <div className='w-full max-w-[1188px] mx-auto grid place-items-center'>
              <H1 leading className='text-light font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]'>
                Shaping Futures, Empowering Innovators
              </H1>
              <SubTitle className='max-w-[950px] my-5'>
                At Creos, innovation is not just a concept; it's a way of
                life. We are excited to introduce our suite of products designed to
                nurture talent, foster collaboration, and drive disruptive
                innovation. <br />
                With Creos, you're not just exploring possibilities;
                you're shaping the future.
              </SubTitle>
            </div>
          </Container>
        </header>
        {/* <JoinWaitlist /> */}

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
        <Revolution />
      </main>
    </>
  );
}
