export const removeItem = actionType => {
  return id => ({
    type: actionType,
    payload: {id},
  });
};

export const upsertItem = actionType => {
  return item => ({
    type: actionType,
    payload: {item},
  });
};
