import { Container, SEO } from '../components';
import { Hero, Slider } from '../layouts';

export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <Container>
        <Hero />
        <Slider />
      </Container>
    </>
  );
}
