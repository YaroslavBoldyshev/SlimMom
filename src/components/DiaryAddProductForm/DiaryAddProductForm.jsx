export const DiaryAddProductForm = () => {
  const products = [
    {
      _id: '507f1f77bcf86cd799439011',
      categories: ['яйца'],
      weight: 100,
      title: {
        ru: 'Меланж яичный',
        ua: 'Меланж яєчний',
      },
      calories: 157,
      groupBloodNotAllowed: [null, true, false, false, false],
      __v: 0,
    },
    {
      _id: '507f1f77bcf86cd799439011',
      categories: ['яйца'],
      weight: 100,
      title: {
        ru: 'Меланж яичный',
        ua: 'Пюре',
      },
      calories: 157,
      groupBloodNotAllowed: [null, true, false, false, false],
      __v: 0,
    },
    {
      _id: '507f1f77bcf86cd799439011',
      categories: ['яйца'],
      weight: 100,
      title: {
        ru: 'Меланж яичный',
        ua: 'Котлета по києвський',
      },
      calories: 157,
      groupBloodNotAllowed: [null, true, false, false, false],
      __v: 0,
    },
  ];

  return (
    <div>
      <input list="brow" />
      <datalist id="brow">
        {products.map(product => {
          return <option value={product.title.ua}></option>;
        })}
      </datalist>
      <input type="text" />
      <button type="button">
        <img src="./" alt="add" />
      </button>
    </div>
  );
};
