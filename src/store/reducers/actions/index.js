import toast from "react-hot-toast";
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
  
      const { data } = await api.get(`/public/categories/all`);
      console.log("✅ Products fetched:", data);
  
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: data,
        // pageNumber: data.pageNumber,
        // pageSize: data.pageSize,
        // totalElements: data.totalElements,
        // totalPages: data.totalPages,
        // lastPage: data.lastPage,
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

  export const addToCart = (data, qty = 1) => (dispatch, getState) => {
    const { products } = getState().products;
    const { cart } = getState().carts;
  
    const product = products.find(
      (item) => item.productId === data.productId
    );
    const cartItem = cart.find(
      (item) => item.productId === data.productId
    );
  
    const alreadyInCartQty = cartItem?.quantity || 0;
    const totalRequestedQty = alreadyInCartQty + qty;
  
    const inStock =
      product && product.quantity >= totalRequestedQty;
  
    if (!inStock) {
      toast.error("❌ Out of stock");
      return;
    }
  
    const updatedItem = { ...data, quantity: totalRequestedQty };
  
    dispatch({
      type: "ADD_CART",
      payload: updatedItem,
    });
  
    // Save to localStorage
    setTimeout(() => {
      const updatedCart = getState().carts.cart;
      toast.success(`${data?.productName} added to the cart`)
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }, 0);
  };