import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  width: 100%;
  @media screen and (max-width: 767px) {
    margin: 20px 20px 16px 20px;
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    margin: 20px 32px 16px 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin: 80px 1097px 147px 16px;
  }
`;

Container.propTypes = {
  children: PropTypes.node,
};
