export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  } else if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter a value',
    };
  } else if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  } else if (action.type === 'REMOVE_ITEM') {
    const newPeople = [
      ...state.people.filter((person) => person.id !== action.payload),
    ];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item removed',
    };
  }
  //throws error if empty submit
  throw new Error('no matching action type');
};
