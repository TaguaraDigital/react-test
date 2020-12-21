import React from 'react';
import { Button } from '../globalStyles';

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection  id="about" title="About Public page" classes="title" bgClr={'var(--orangeClr)'} />
            <AboutSection  id="service" title="Services public page" classes="title" />
            <AboutSection  id="project" title="projects public pages" classes="title" bgClr={'var(--orangeClr)'} />
        </div>
    )
}

export default Home
