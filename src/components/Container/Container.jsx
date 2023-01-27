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
