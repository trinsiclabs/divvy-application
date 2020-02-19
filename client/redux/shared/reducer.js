export const removeItem = (state, action) => {
  const {id} = action.payload;

  return {
    ...state,
    items: state.items.filter(item => item.id !== id),
  };
};

export const upsertItem = (state, action) => {
  const {item} = action.payload;
  const exists = state.items.find(existing => existing.id === item.id) !== undefined;

  const items = exists
    ? state.items.filter(existing => existing.id !== item.id) // Remove the existing item.
    : state.items;

  return {
    ...state,
    items: [...items, item],
  };
};
