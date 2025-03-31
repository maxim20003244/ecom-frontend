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
             pagepageNumber: action.pageNumber,
             pageSize: action.pageSize,
             totalElements: action.totalElements,
             totalPages: action.totalPages,
             lastPage: actionlastPage,
        },
        };
        default:
            return state;
   }
};