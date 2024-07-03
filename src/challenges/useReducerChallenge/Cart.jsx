export const Cart = ({ state }) => {
  console.log(state);
  return (
    <div className="cart">
      <h3>Cart</h3>
      {!state.length
        ? "Add something"
        : state.map((item) => {
            console.log(item.title);
            return <div key={item.id}>{item?.title}</div>;
          })}
    </div>
  );
};
