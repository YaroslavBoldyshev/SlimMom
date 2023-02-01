import { useEffect } from 'react';
import { useState } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
// import { getProductSearch } from '../../redux/productSearch/productSearch-selectors';
import { search } from '../../redux/productSearch/productSearch-operations';
import { DiaryAddStyled } from './DiaryAddProductForm.styled';
import addSvg from '../../icons/add.svg'

export const DiaryAddProductForm = () => {
  const [searchedProducts, setSearchedProducts] = useState('');
  const dispatch = useDispatch();
  // const myProducts = useSelector(getProductSearch);

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
    <DiaryAddStyled>
      <div className="DiaryAddStyled-wrapper">
        <input
          className="DiaryAddStyled-wrapper__product"
          list="brow"
          value={searchedProducts}
          onChange={handleChange}
          placeholder="Enter product name"
        />
        {/* <datalist id="brow">
       {products.map(product => {
          return <option value={product.title.ua} key={product._id}></option>;
        })} 
      </datalist> */}
        <input
          className="DiaryAddStyled-wrapper__grams"
          type="text"
          placeholder="Grams"
        />

        <button className="DiaryAddStyled-wrapper__btn" type="button">
          <img
            className="DiaryAddStyled-wrapper__img"
            src={addSvg}
            alt="add"
          />
        </button>
      </div>
    </DiaryAddStyled>
  );
};
