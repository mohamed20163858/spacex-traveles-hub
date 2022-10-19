const CHECK_STATUS = 'Bookstore/src/redux/categories';

const initialState = [];

export const checkCategoriesStatus = () => ({
  type: CHECK_STATUS,
});
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default categoryReducer;
