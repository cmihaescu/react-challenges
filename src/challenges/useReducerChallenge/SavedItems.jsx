export const SavedItems = ({ state }) => {
  let savedItems = state.filter((item) => item.saved === true);
  return (
    <div>
      <h3>Saved Items</h3>
      {savedItems.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};
