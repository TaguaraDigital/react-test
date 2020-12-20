import React from 'react';
import { Button } from '../globalStyles';

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection  id="about" title="About Public page" classes="title" bgClr="#ffff00" />
            <AboutSection  id="service" title="Services public page" classes="title" bgClr="#0000ff" />
            <AboutSection  id="project" title="projects public pages" classes="title" bgClr="#00ffff" />
        </div>
    )
}

export default Home
