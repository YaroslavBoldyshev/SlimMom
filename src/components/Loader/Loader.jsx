import { Dna } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

const Loader = () => {
  return (
    <Loading>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Loading>
  );
};

export default Loader;
