import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSearch, getProductId } from '../../redux/productSearch/productSearch-selectors';

import { search } from '../../redux/productSearch/productSearch-operations'
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { addDayProductThunk } from 'redux/day/day-operations';

export const DiaryAddProductForm = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);
  const [form, setForm] = useState({
    date: `${currentDate}`,
    product: '',
    productId: '',
    weight: 0,
  });

  // const handleChange = event => {
  //   setSearchedProducts(event.target.value);
  // };

  // useEffect(() => {
  // }, [dispatch]);
  
  const handleChange = e => {
    const { value, name, key } = e.target;
    if (form.product.length !== 0) {
      dispatch(search(form.product));
      // setForm.productId()
      console.log(key);
    }

    setForm(state => ({
      ...state,
      [name]: value,
      productId: key
    }));
  };
  
  const productHandleChange = e => {
    dispatch(search(productSelected));
    setProductSelected(e.target.value);
    console.log(e.target.key);
    // if (productSelected === '') {
    // }
  }
  
  // useEffect(() => {
  //   if (productSelected !== '') {
  // // const optionHandleClick = () => {

  const handleSubmit = () => {
    dispatch(addDayProductThunk());
  };

    dispFinal()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <input
          list="brow"
          value={form.product}
          onChange={handleChange}
          name="product"
          key={1111}
        />

        <div >
          <datalist id="brow">
            {Array.isArray(myProducts) &&
              myProducts.map(product => {
                return (
                  <option
                    value={product.title.ru}
                    key={product._id}
                  ></option>
                );
            })}
          </datalist>
        </div>

        <input type="number" name="weight" />

        <button type="submit">
          <img src="./" alt="add" />
        </button>
      </form>
      <div>
        <DiaryProductsList currentDate={form.data} />
      </div>
    </div>
  );
};
