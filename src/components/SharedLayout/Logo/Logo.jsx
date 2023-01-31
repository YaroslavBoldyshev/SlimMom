import {
  LogoContainer,
  LogoImg,
  LogoMom,
  LogoSlim,
  LogoText,
} from './Logo.styled';

import logoIcon from '../images/logoT.png';
import logoSlim from '../images/Slim.svg';
import logoMom from '../images/Mom.svg';

export const Logo = () => {
  return (
    // <link>
    <LogoContainer>
      <LogoImg src={logoIcon} alt="logo" />
      <LogoText>
        <LogoSlim src={logoSlim} />
        <LogoMom src={logoMom} />
      </LogoText>
    </LogoContainer>
    /* </link> */
  );
};
