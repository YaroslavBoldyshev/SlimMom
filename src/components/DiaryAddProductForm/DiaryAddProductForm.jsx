
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSearch } from '../../redux/productSearch/productSearch-selectors';
import { search } from '../../redux/productSearch/productSearch-operations'
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';



export const DiaryAddProductForm = () => {
  const [searchProduct, setSearchProduct] = useState("");
  // const [productsItem, setProductsItem] = useState([]);
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);

  const [myDate, setMyDate] = useState('')
   const [form, setForm] = useState({
     date: '',
     product: '',
     weight: 0,
   });
  
  // const handleChange = event => {
  //   setSearchedProducts(event.target.value);
  // };


  const handleClick = event => {
    setSearchProduct(event.target.value);
    dispatch(search('apple'));
    console.log(myProducts);
  }


  const handleChange = e => {
    const { value, name } = e.target;

    setForm(state => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {

  }

  const dataChange = event => {
    setMyDate(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={myDate} onChange={dataChange} />
        <input
          list="brow"
          value={searchedProducts}
          onChange={handleChange}
          name="product"
        />
        <datalist id="brow">
          {Array.isArray(myProducts) &&
            myProducts.map(product => {
              return (
                <option value={product.title.ru} key={product._id}></option>
              );
            })}
        </datalist>
        <input type="text" name="weight" />

        <button type="submit">
          <img src="./" alt="add" />
        </button>
      </form>
      <div>
        <DiaryProductsList currentDate={myDate} />
      </div>

    </div>
  );
};
