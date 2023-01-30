export const DiaryProductsListItem = ({ name, weight, kcal }) => {
  return (
      <div>
        <p key={1}>{name}</p>
        <p key={2}>{weight}</p>
        <p key={3}>{kcal}</p>
        <button
          type="button"
          // onClick={() => dispatch(deleteItem(id))}
        >
          <img src="./" alt="close" width="12" height="12" />
        </button>
      </div>
  );
};
