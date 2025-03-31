const initialState = {
    products: null,
    categories: null,
    pagination : {},
};
export const productReducer = (state = initialState,action) =>{
   switch(action.type){
    case "FETCH_PRODUCTS":
        return {
        ...state,
        products:action.payload,
        pagination: {
             ...state.pagination,
             pageNumber: action.pageNumber,
             pageSize: action.pageSize,
             totalElements: action.totalElements,
             totalPages: action.totalPages,
             lastPage: action.lastPage,
        },
        };
        case "FETCH_PRODUCTS_ERROR":
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
          default:
            return state;
   }
};