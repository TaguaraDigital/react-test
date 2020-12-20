import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import HeroSection from '../../components/HeroSection'
import AboutSection from '../../components/AboutSection'

const Clientes = () => {
    
    const { currentUser } = useAuth();

    return (
        <div>
            <HeroSection video="cliente" user={currentUser} />
            <AboutSection  id="about" title="About for Clientes " classes="title" bgClr="#fff000" />
            <AboutSection  id="service" title="Services for Cientes" classes="title" bgClr="#f000ff" />
            <AboutSection  id="project" title="Projects for Clientes" classes="title" bgClr="#1f551f" />
        </div>
    )
}

export default Clientes
