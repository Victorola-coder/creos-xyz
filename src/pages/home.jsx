import { SEO } from '../components';
import { Hero } from '../layouts';

export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <main>
        <Hero />
      </main>
    </>
  );
}
