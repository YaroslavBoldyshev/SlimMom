import { MenuContainer, MenuLink } from './Menu.styled';

export const Menu = ({ setIsMenuOpen }) => {
  const handleClick = () => setIsMenuOpen(false);
  return (
    <>
      <MenuContainer>
        <MenuLink onClick={handleClick}>Щоденник</MenuLink>
        <MenuLink onClick={handleClick}>Калькулятор</MenuLink>
      </MenuContainer>
    </>
  );
};
