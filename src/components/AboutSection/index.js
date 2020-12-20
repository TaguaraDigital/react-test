import React from 'react';

import {
    AboutContainer,
    AboutContent,
    AboutTitle,
    AboutText,
    
} from './About.Styles'

const AboutSection = ({ id, title, classes, bgClr="#ff00ff" }) => {

        return (
        <AboutContainer id={id} bgClr={bgClr}>
            <AboutContent>
                <AboutTitle className={classes}> {title} </AboutTitle>
                <AboutText> Somos una empresa de desarrollamos web a la medida</AboutText>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutSection
