import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styled from '@emotion/styled';
import img from '../../images/homeBgTablet.jpg';
import image from '../../images/homeBgDesktop.jpg';

const Img = styled.img`
display: none;
  @media (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: -1;

  }
`

const Image = styled.img`
display: none;
  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: -1;
    
  }
`

const Home = () => {
  return (
    <>
      <DailyCaloriesForm />
       <Img src={img}/>
       <Image src={image}/>
    </>
  );
};

export default Home;




