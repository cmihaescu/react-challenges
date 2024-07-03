export const ProductCard = ({
  id,
  title,
  price,
  image,
  description,
  handleReducer,
}) => {
  return (
    <div className="product-card">
      <div className="product-details">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
          <h5>{price} EUR</h5>
        </div>
        <img src={`${image}`} alt="product" />
      </div>
      <div className="product-buttons">
        <button
          onClick={() =>
            handleReducer({
              type: "add",
              payload: {
                id,
                title,
                price,
                image,
                description,
              },
            })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            handleReducer({
              type: "remove",
              payload: {
                id,
              },
            })
          }
        >
          Remove
        </button>
        <button
          onClick={() =>
            handleReducer({
              type: "save",
              payload: {
                id,
                title,
                price,
                image,
                description,
              },
            })
          }
        >
          Save
        </button>
      </div>
    </div>
  );
};
