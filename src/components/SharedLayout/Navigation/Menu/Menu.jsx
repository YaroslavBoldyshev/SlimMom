import { MenuContainer, MenuLink } from './Menu.styled';

export const Menu = ({ setIsMenuOpen }) => {
  const handleClick = () => setIsMenuOpen(false);
  return (
    <>
      <MenuContainer>
        <MenuLink to="/diary" onClick={handleClick}>
          Diary
        </MenuLink>
        <MenuLink to="/calculator" onClick={handleClick}>
          Calculator
        </MenuLink>
      </MenuContainer>
    </>
  );
};
