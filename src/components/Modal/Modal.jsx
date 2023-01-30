import mySvg from '../../icons/close.svg';
import { Link } from 'react-router-dom';
import { Link } from './Modal.styled';

const Modal = () => {
  return (
    <>
      <div className={css.modal}>
        <button type="button">
          <img src={mySvg} alt="close"></img>
        </button>
        <h2> Your recommended daily calorie intake is</h2>
        <p>
          2800 <span>kcal</span>
        </p>
        <ol>
          {products.map(prod => (
            <li key={prod.id} />
          ))}
        </ol>
        <Link to="/register">Start losing weight </Link>
      </div>
    </>
  );
};

export default Modal;
