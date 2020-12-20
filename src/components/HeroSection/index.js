import React from 'react';
import Video1 from '../../assets/videos/video.mp4'
import Video2 from '../../assets/videos/video3.mov'

import { useAuth } from '../../contexts/AuthContext';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroTitle,
    HeroText,
    
} from './Hero.Styles'

const HeroSection = ({ video="public", user }) => {

    const {currentUser}  = useAuth();

        return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={(video === "cliente" ) ? Video2 : Video1 } type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroTitle className="title">Youssef Web Factory</HeroTitle>
                {currentUser 
                    ?  <HeroText> Welcome { currentUser.email } </HeroText>
                    :  <HeroText> Desarrollamos desde Caracas tu web a la medida</HeroText>
                }
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
