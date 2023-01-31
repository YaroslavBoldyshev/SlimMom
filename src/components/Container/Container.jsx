import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 300px 40px 0px 40px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 300px 40px 0px 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 300px 40px 0px 40px;
  }
`;

Container.propTypes = {
  children: PropTypes.node,
};
