// import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import mySvg from '../../icons/close.svg';
import { RegisterLink } from './Modal.styled';
import { SumKcal } from './Modal.styled';
import { ModWin } from './Modal.styled';
import { ModCon } from './Modal.styled';
import { BtnClose } from './Modal.styled';
import { OverlayWin } from './Modal.styled';
import { Title } from './Modal.styled';
import { TopEdge } from './Modal.styled';
import { ListTitle } from './Modal.styled';
import { NumList } from './Modal.styled';
import {
  getNotAllow,
  isDailyLoading,
} from 'redux/dailyRate/dailyRate-selectors';
import { useEffect } from 'react';

const Modal = ({ sum, onClose }) => {
  const isLoading = useSelector(isDailyLoading);
  const products = useSelector(getNotAllow);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <>
      {!isLoading && (
        <OverlayWin onClick={handleBackdrop}>
          <ModWin>
            <ModCon>
              <TopEdge>
                <BtnClose type="button" onClick={() => onClose(false)}>
                  <img src={mySvg} alt="close"></img>
                </BtnClose>
              </TopEdge>
              <Title> Your recommended daily calorie intake is</Title>
              <SumKcal>
                {sum} <span>kcal</span>
              </SumKcal>
              <ListTitle>Foods you should not eat</ListTitle>
              <NumList>
                {products.length > 0 &&
                  products.map(prod => <li key={prod.id}>{prod}</li>)}
              </NumList>
              <RegisterLink to="/register">Start losing weight </RegisterLink>
            </ModCon>
          </ModWin>
        </OverlayWin>
      )}
    </>,
    document.querySelector('#portalModal')
  );
};

export default Modal;
