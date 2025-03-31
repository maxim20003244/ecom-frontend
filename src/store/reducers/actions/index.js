import api from "../../../api/api";

export const fetchProducts = () => async (dispatch) => {
    try {
const {data} = await api.get(`/public/products`);
console.log("✅ Products fetched:", data);
dispatch({
    type: "FETCH_PRODUCTS",
    payload: data.content,
    pageNumber: data.pageNumber,
    pageSize: data.pageSize,
    totalElements: data.totalElements,
    totalPages: data.totalPages,
    lastPage: data.lastPage,

})
    } catch (error) {
        dispatch({
          type: "FETCH_PRODUCTS_ERROR",
          payload: error.message || "Failed to fetch products",
        });
    }
}
