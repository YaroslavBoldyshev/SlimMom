<<<<<<< Routes-v.1
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  margin: 20px 20px 16px 20px;

  @media (min-width: 768px) {
    margin: 20px 32px 16px 32px;
  }
  @media (min-width: 1280px) {
    margin: 80px 1097px 147px 16px;
  }
`;

Container.propTypes = {
  children: PropTypes.node,
};
=======
import styled from '@emotion/styled';

// потрібно виправити розміри і падінги -----------------

export const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 480px) {
    width: 320px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
>>>>>>> dev
