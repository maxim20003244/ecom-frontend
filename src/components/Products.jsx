import { FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { fetchCategories, fetchProducts } from "../store/reducers/actions";
import Filter from "./Filter";
import useProductFilter from "./useProductFilter";


const Products = () => {
  const { isLoading, errorMessage } = useSelector(
    (state) => state.errors);
  
    const {products,categories} = useSelector(
      (state)  => state.products
    );
    const dispatch = useDispatch();
    useProductFilter();
    
    useEffect(()=>{
      dispatch(fetchCategories());

    },[dispatch])
    
    return (
      
      <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:max-w-[90%] 2xl:mx-auto">
         <div className="mb-8">
      <Filter  categories={categories ? categories : []}/>
    </div>
        {isLoading ? (
          <p className="text-center text-lg font-medium text-blue-600">Loading...</p>
        ) : errorMessage ? (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
    🚫 {errorMessage}
  </div>
        ) : products && products.length > 0 ? (
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products.map((item) => (
              <ProductCard key={item.productId} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}
      </div>
    );
}
export default Products;