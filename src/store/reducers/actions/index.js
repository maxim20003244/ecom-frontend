import api from "../../../api/api";

export const fetchProducts = (queryString) => async (dispatch) => {
    console.log("📦 fetchProducts started"); 
  
    try {
      dispatch({ type: "IS_FETCHING" });
  
      const { data } = await api.get(`/public/products?${queryString}`);
      console.log("✅ Products fetched:", data);
  
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.content,
        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
        lastPage: data.lastPage,
      });
  
      dispatch({ type: "IS_SUCCESS" });
    } catch (error) {
        console.log(error.response?.data?.message);
        console.error("🔥 FULL AXIOS ERROR:", error);
      
        const errorMsg =
          error?.response?.data?.message ||
          error?.message || "Something went wrong";
      
        dispatch({
          type: "FETCH_PRODUCTS_ERROR",
          payload: errorMsg,
        });
    
    }
  };