import { useEffect } from 'react';
import { useState } from 'react';
import addSvg from '../../icons/add.svg';
import { DiaryAddStyled } from './DiaryAddProductForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSearch } from '../../redux/productSearch/productSearch-selectors';


import { search } from '../../redux/productSearch/productSearch-operations';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { addDayProductThunk } from 'redux/day/day-operations';
import { getDayInfoThunk } from 'redux/day/day-operations';
import { ModalForm } from 'components/ModalForm/ModalForm';

export const DiaryAddProductForm = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);
  const [productSearch, setProductSearch] = useState('');
  const [isModalShown, setIsModalShown] = useState(false);
  const [form, setForm] = useState({
    date: `${currentDate}`,
    productId: '',
    weight: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productSearch !== '') {
      dispatch(search(productSearch));
    }
  }, [dispatch, productSearch]);


  const dataHandleClick = e => {
    setForm(state => ({
      ...state,
      date: e.target.value,
    }));
    localStorage.setItem('date', e.target.value);
  };

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
    setIsLoading(true);
  };

  useEffect(() => {
    dispatch(getDayInfoThunk({ date: form.date }));
    setIsLoading(false);
  }, [dispatch, form.date, isLoading, isModalShown]);

  return (
    <DiaryAddStyled>
      <div className="DiaryAddStyled-wrapper">
        <form onSubmit={handleSubmit} className="DiaryAddStyled-wrapper__form">
          <div>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={dataHandleClick}
              className="DiaryAddStyled-wrapper__date"
            />
          </div>

          <div className="DiaryAddStyled-wrapper__foodInput">
            <input
              type="text"
              list="brow"
              value={[productSearch]}
              onChange={productHandleClick}
              name="product"
              placeholder="Food"
              className="DiaryAddStyled-wrapper__product"
            />
            <div>
              <datalist id="brow" onChange={e => console.log(e)}>

                {Array.isArray(myProducts) &&
                  myProducts.map(product => {
                    return (
                      <option
                        key={product._id}
                        value={[product.title.ru, product._id]}
                      ></option>
                    );
                  })}
              </datalist>
            </div>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={weightChange}
              className="DiaryAddStyled-wrapper__grams"
              placeholder="Grams"
            />
            <button className="DiaryAddStyled-wrapper__btn" type="submit">
              <img
                className="DiaryAddStyled-wrapper__img"
                src={addSvg}
                alt="add"
              />
            </button>
          </div>
        </form>
        <div>
          <DiaryProductsList currentDate={form.date} />
        </div>
        <div className="DiaryAddStyled-wrapper__mobileBtn">
          <button
            className="DiaryAddStyled-wrapper__btn"
            onClick={() => setIsModalShown(prevState => !prevState)}
            type="button"
          >
            <img
              className="DiaryAddStyled-wrapper__img"
              src={addSvg}
              alt="add"
            />
          </button>
        </div>
      </div>

      {isModalShown && <ModalForm date={form.date} onClose={setIsModalShown} />}
    </DiaryAddStyled>
  );
};
