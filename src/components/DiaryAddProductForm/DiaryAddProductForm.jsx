import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSearch } from '../../redux/productSearch/productSearch-selectors';
import { search } from '../../redux/productSearch/productSearch-operations'

export const DiaryAddProductForm = () => {

  const [searchedProducts, setSearchedProducts] = useState('');
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);
  
  
  
  const handleChange = event => {
    setSearchedProducts(event.target.value);
  };
  
  console.log(searchedProducts);

  useEffect(() => {
    if (searchedProducts.length !== 0) {
      
      dispatch(search(searchedProducts));
    }
  }, [dispatch, searchedProducts]);

  return (
    <div>
      <input list="brow" value={searchedProducts} onChange={handleChange} />
      {/* <datalist id="brow">
       {products.map(product => {
          return <option value={product.title.ua} key={product._id}></option>;
        })} 
      </datalist> */}
      <input type="text" />

      <button type="button">

        <img src="./" alt="add" />
      </button>
    </div>
  );
};
