import { SEO } from '../components';

export default function NotFound() {
  return (
    <>
      <SEO title={`page not found 👀`} />
      <section className='mx-auto text-xl text-center'>page not found</section>
    </>
  );
}
