import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  padding: 32px 20px 60px 20px;
  padding-top: 32px;
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 100px 32px 60px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 293px;
    padding-left: 16px;
  }
`;

Container.propTypes = {
  children: PropTypes.node,
};
