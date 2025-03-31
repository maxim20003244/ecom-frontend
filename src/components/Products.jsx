import { FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { fetchProducts } from "../store/reducers/actions";


const Products = () => {
    const isLoading = false;
    const errorMessage = '';
    const {products,loading ,error} = useSelector(
      (state)  => state.products
    );
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchProducts())
    },[dispatch]);
  
    return (
      <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:max-w-[90%] 2xl:mx-auto">
        {loading ? (
          <p className="text-center text-lg font-medium text-blue-600">Loading...</p>
        ) : error ? (
          <div className="flex justify-center items-center h-40 bg-red-100 rounded p-4">
            <FaExclamationTriangle className="text-red-600 text-2xl mr-2" />
            <span className="text-red-600 text-lg font-medium">{error}</span>
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