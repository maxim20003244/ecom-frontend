import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/reducers/actions";

const useProductFilter = ()=> {
const [searchParams] = useSearchParams ();
const dispatch = useDispatch();
const location = useLocation();


useEffect(() => {
    const params = new URLSearchParams(location.search); // ✅ use latest

    const currentPage = params.get("page") ? Number(params.get("page")) : 1;
    const sortOrder = params.get("sortby") || "asc";
    const categoryParams = params.get("category") || null;
    const keyword = params.get("keyword") || null;
    const pageSize = params.get("pageSize") || 8;

    

    const backendParams = new URLSearchParams();
    backendParams.set("pageNumber", currentPage - 1);
    backendParams.set("pageSize", pageSize);
    backendParams.set("sortBy", "specialPrice");
    backendParams.set("sortOrder", sortOrder);
   


    if (categoryParams) backendParams.set("category", categoryParams);
    if (keyword) backendParams.set("keyword", keyword);

    const queryString = backendParams.toString();
    console.log("🚀 Final QUERY STRING:", queryString);

     dispatch(fetchProducts(queryString)) 
  }, [location.search, dispatch]);
};

export default useProductFilter;