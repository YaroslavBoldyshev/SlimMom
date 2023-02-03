import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDayProductThunk, getDayInfoThunk } from 'redux/day/day-operations';
import { search } from 'redux/productSearch/productSearch-operations';
import { getProductSearch } from 'redux/productSearch/productSearch-selectors';
import {
  ModalBtn,
  ModalFormContainer,
  ProductInput,
  WeightInput,
} from './ModalForm.styled';

export const ModalForm = ({ date, onClose }) => {
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);
  const [productSearch, setProductSearch] = useState('');

  const [form, setForm] = useState({
    date: `${date}`,
    productId: '',
    weight: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productSearch !== '') {
      dispatch(search(productSearch));
    }
  }, [dispatch, productSearch]);

  const productHandleClick = e => {
    const thatINeed = e.target.value.split(',');
    setProductSearch(thatINeed[0]);
    setForm(state => ({
      ...state,
      productId: thatINeed[1],
    }));
  };

  const weightChange = e => {
    setForm(state => ({
      ...state,
      weight: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addDayProductThunk(form));
    setForm(state => ({
      ...state,
      productId: '',
      weight: '',
    }));
    setProductSearch('');
    // setIsLoading(true);
    onClose(false);
  };

  useEffect(() => {
    dispatch(getDayInfoThunk({ date: form.date }));
    setIsLoading(false);
  }, [dispatch, form.date, isLoading]);
  return createPortal(
    <>
      {!isLoading && (
        <ModalFormContainer onSubmit={handleSubmit}>
          <ProductInput
            type="text"
            list="brow"
            value={[productSearch]}
            onChange={productHandleClick}
            name="product"
            placeholder="Enter product name"
          />
          <div>
            <datalist id="brow" onChange={e => console.log(e)}>
              {Array.isArray(myProducts) &&
                myProducts.map(product => {
                  return (
                    <option
                      key={product._id}
                      value={[product.title.ua, product._id]}
                    ></option>
                  );
                })}
            </datalist>
          </div>
          <WeightInput
            type="number"
            name="weight"
            value={form.weight}
            onChange={weightChange}
            placeholder="Grams"
          />
          <ModalBtn type="submit">Add</ModalBtn>
        </ModalFormContainer>
      )}
    </>,
    document.querySelector('#portalModal')
  );
};
