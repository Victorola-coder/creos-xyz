import { SEO } from '../components';
import { Hero, Slider, Partner } from '../layouts';

export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <main>
        <Hero />
        <Slider />
        <Partner />
      </main>
    </>
  );
}
