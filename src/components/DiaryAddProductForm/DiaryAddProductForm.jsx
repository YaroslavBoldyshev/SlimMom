import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSearch, getProductId } from '../../redux/productSearch/productSearch-selectors';

import { search } from '../../redux/productSearch/productSearch-operations'
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { addDayProductThunk } from 'redux/day/day-operations';
import { getDayInfoThunk } from 'redux/day/day-operations';

export const DiaryAddProductForm = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);
  const [productSearch, setProductSearch] = useState("")
  const [form, setForm] = useState({
    date: `${currentDate}`,
    productId: '',
    weight: 0,
  });
  const[isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (productSearch !== '') {
      dispatch(search(productSearch));
    }
  }, [productSearch]);
  
  const dataHandleClick = e => {
    setForm(state => ({
      ...state,
      date: e.target.value
    }));
  }
  
  const productHandleClick = e => {
    const thatINeed = e.target.value.split(',');
    setProductSearch(thatINeed[0]);
    setForm(state => ({
      ...state,
      productId: thatINeed[1],
    }));
  };

  const weightHandleClick = e => {
    setForm(state => ({
      ...state,
      weight: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addDayProductThunk(form));
    setForm(state => ({
      ...state,
      productId: '',
      weight: 0,
    }));
    setProductSearch("")
    setIsLoading(true)
  };

  useEffect(() => {
    dispatch(getDayInfoThunk({ date: form.date }));
    setIsLoading(false);
  }, [dispatch, isLoading])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={dataHandleClick}
        />
        <input
          type="text"
          list="brow"
          value={[productSearch]}
          onChange={productHandleClick}
          name="product"
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

        <input type="number" name="weight" onChange={weightHandleClick} />

        <button type="submit">
          <img src="./" alt="add" />
        </button>
      </form>
      <div>
        <DiaryProductsList currentDate={form.date} />
 
      </div>
    </div>
  );
};
