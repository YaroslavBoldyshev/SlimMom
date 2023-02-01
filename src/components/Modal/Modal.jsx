// import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
// import { unnamed } from 'redux/dailyRate/dailyRate-operations';
// import { getDailyRate } from 'redux/dailyRate/dailyRate-selectors';
import mySvg from '../../icons/close.svg';
import RegisterLink from './Modal.styled';
import { isDailyLoading } from 'redux/dailyRate/dailyRate-selectors';

const Modal = ({ sum }) => {
  const isLoading = useSelector(isDailyLoading);
  // const [summary, setSummary] = useState('');
  // const summary = useSelector(getDailyRate);
  // const dispatch = useDispatch();
  // console.log(summary);
  if (sum !== undefined) {
    console.log(sum);
  }

  // useEffect(() => {
  // dispatch(
  //   unnamed({
  //     weight: 100,
  //     height: 170,
  //     age: 30,
  //     desiredWeight: 60,
  //     bloodType: 1,
  //   })
  // );
  // setSummary(useSelector(getDailyRate));
  // }, [dispatch, summary]);

  const products = [];
  return createPortal(
    <>
      {!isLoading && (
        <div>
          <button type="button">
            <img src={mySvg} alt="close"></img>
          </button>
          <h2> Your recommended daily calorie intake is</h2>
          <p>
            {sum} <span>kcal</span>
          </p>
          <ol>
            {products.map(prod => (
              <li key={prod.id} />
            ))}
          </ol>
          <RegisterLink to="/register">Start losing weight </RegisterLink>
        </div>
      )}
    </>,
    document.querySelector('#portalModal')
  );
};

export default Modal;
