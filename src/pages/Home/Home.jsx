import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styled from '@emotion/styled';
// import '../../images/homeBgTablet.jpg'

const Home = () => {
  return (
    <Wrapper>
      <DailyCaloriesForm />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    background-image: url(../../images/homeBgTablet);
  }
  @media (min-width: 1280px) {
    background-image: url(./images/homeBgDesctop.jpg);
  }
`;
