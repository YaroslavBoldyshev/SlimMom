import mySvg from '../../icons/close.svg';
import  RegisterLink  from './Modal.styled';

const Modal = () => {
  const products =[];
  return (
    <>
      <div >
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
        <RegisterLink to="/register">Start losing weight </RegisterLink>
      </div>
    </>
  );
};

export default Modal;
