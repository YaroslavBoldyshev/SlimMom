import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styled from '@emotion/styled';
import img from '../../images/homeBgTablet.jpg';
import image from '../../images/homeBgDesktop.jpg';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <DailyCaloriesForm />

      {!isLoggedIn && (
        <>
          <Image src={image} />
          <Img src={img} />
        </>
      )}
    </>
  );
};

export default Home;

const Img = styled.img`
  display: none;
  @media (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: -1;
  }
`;

const Image = styled.img`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: -1;
  }
`;
