import { Link, useLocation } from 'react-router-dom';
import goBackLogo from '../../icons/goBack.svg';
import { useMediaQuery } from 'react-responsive';

export default function GoBack() {
  const isMobileScreen = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const location = useLocation();

  return (
    isMobileScreen && (
      <Link src={goBackLogo} to={location?.state?.from ?? '/'}>
        <img src={goBackLogo} alt="Back" />
      </Link>
    )
  );
}
