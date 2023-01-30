import styled from 'styled-components';

export default function NotFounddd() {
  return (
    <NotFoundPage>
      <p>404 PAGE NOT FOUND!</p>
    </NotFoundPage>
  );
}

const NotFoundPage = styled.div`
  min-height: calc(100vh - 95px);
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0;
  font-family: fantasy;
  font-weight: 400;
  font-size: 45px;
  font-stretch: expanded;
  text-shadow: 15px 30px 15px #3d3d30;
  font-variant: oldstyle-nums;
  background-image: url('./wrong.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  letter-spacing: 0.23em;
`;
