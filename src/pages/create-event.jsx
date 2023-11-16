import { NavLink } from 'react-router-dom';
import { Button, Container, SEO } from '../components';
import { H1 } from '../utils/typography';
import Revolution from '../components/revolution';
import Box from '../components/box';
import { SearchIcon } from '../components/svgs';

export default function CreateEvent() {
    return (
        <>
            <SEO title='Create Event' />
            <main>
                <Hero />
                <Revolution />
            </main>
        </>
    );
}

const Hero = () => {

    return (
        <header className='bg-primary pb-[30px] lg:pb-[50px]'>
            
        </header>
    );
};
