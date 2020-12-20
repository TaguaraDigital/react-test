import React from 'react';
import { IconContext } from 'react-icons/lib';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

import {
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

} from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <IconContext.Provider value={{color: 'var(--ctaClr)'}}>
                        <SocialLogo to='/'>
                            <SocialIcon />
                                You Web Factory
                        </SocialLogo>
                    </IconContext.Provider>
                    
                    <WebsiteRights>You Web Factory © 2020</WebsiteRights>
                     <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink>
                        <SocialIconLink
                            href={'//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'}
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href={ 'https://twitter.com/TaguaraDigital' }
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
