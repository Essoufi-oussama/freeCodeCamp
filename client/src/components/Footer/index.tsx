import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Col } from '@freecodecamp/ui';

import appleStoreBadge from '../../assets/images/footer-ads/apple-store-badge.svg';
import googlePlayBadge from '../../assets/images/footer-ads/google-play-badge.svg';
import { Spacer, Link } from '../helpers';
import './footer.css';

function Footer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className='site-footer'>
      <div className='footer-top'>
        <div className='footer-desc-col'>
          <h6 className='text-uppercase fw-bold text-white'>
            <img src='https://w4j.yool.education/assets/web4jobs/images/logo-light.png' className='logo' alt='logo' />
          </h6>
          <p className='text-white text-decoration-none'>
            Web4jobs, votre partenaire pour l'avenir professionnel. Nous offrons des programmes de formation spécialisés, des opportunités d'emploi exclusives et un accompagnement personnalisé pour stimuler votre carrière dans le domaine de l'informatique. Rejoignez-nous pour développer vos compétences et atteindre de nouveaux sommets professionnels.
          </p>
        </div>
        <div className='footer-contact-col'>
          <h6 className='text-uppercase fw-bold text-white'>Contacts</h6>
          <p className='text-white text-decoration-none'><i className='fa fa-home me-2'></i>24, Rue 19, Missimi - Hay Hassani Casablanca - 20300</p>
          <p className='text-white text-decoration-none'><i className='fa fa-envelope me-2'></i>web4jobs@yool.education</p>
          <p className='text-white text-decoration-none'><i className='fa fa-phone me-2'></i>+212645393690</p>
        </div>
        
      </div>
      <div className='footer-bottom'>
        
        <div className='footer-copyright'>
          <p className='text-white fw-bold'>© 2024 <span className='text-white fw-bold'> Web4jobs</span></p>
        </div>
      </div>
</footer>

  );
}

Footer.displayName = 'Footer';
export default Footer;
