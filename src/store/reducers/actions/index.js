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
export const fetchCategories = (queryString) => async (dispatch) => {
  console.log("📦 fetchCategories started");
  
    try {
      dispatch({ type: "CATEGORY_LOADER" });
  
      const { data } = await api.get(`/public/categories`);
      console.log("✅ Products fetched:", data);
  
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: data.content,
        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
        lastPage: data.lastPage,
      });
  
      dispatch({ type: "IS_ERROR" });
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