import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSearch } from "redux/productSearch/productSearch-selectors";
import { search} from "../../redux/productSearch/productSearch-operations"


export const DiaryAddProductForm = () => {
  const [searchProduct, setSearchProduct] = useState("");
  // const [productsItem, setProductsItem] = useState([]);
  const dispatch = useDispatch();
  const myProducts = useSelector(getProductSearch);

  const handleClick = event => {
    setSearchProduct(event.target.value);
    dispatch(search('apple'));
    console.log(myProducts);
  }


  return (
    <div>
      <input list="brow" name="product" value={searchProduct} onChange={handleClick} />
      <datalist id="brow">
        {/* {products.map(product => {
          return <option value={product.title.ua}></option>;
        })} */}
      </datalist>
      <input type="text" />
      <button type="button">
        <img src="./" alt="add" />
      </button>
    </div>
  );
};
