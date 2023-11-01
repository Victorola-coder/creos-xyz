import { SEO } from '../components';
import { Hero, Slider, Partner, Haven } from '../layouts';

export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <main>
        <Hero />
        <Slider />
        <Partner />
        {/* <Haven /> */}
      </main>
    </>
  );
}
