import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import ProductCard from "../shared/ProductCard";
import { fetchProducts } from "../../store/reducers/actions";
import Loader from "../shared/Loader";

const Home = () => {
   const dispatch = useDispatch();
   const {products} = useSelector((state) => state.products);

   const { isLoading, errorMessage } = useSelector(
      (state) => state.errors);

   useEffect (() => {
      dispatch(fetchProducts());
   }, [dispatch]);
 return (
    <div className="lg:px-14 sm:px-8 px-4">
      <div className="py-6">
      <HeroBanner/>
      </div>

      <div className="py-5">
         <div className="flex flex-col justify-center items-center space-y-2">
         <h1 className="text-slate-800 text-4xl font-bold"> Products </h1>
            <span className="text-slate-700">
               Discover out handpicked selection  of tope-rated items just for you!
            </span>
         
         </div>

         {isLoading ? (
            <Loader/>
         ) : true ? (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            🚫 {errorMessage}
          </div>
         ) : (
      
    
     <div className="mt-12 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products &&
            products?.slice(0,8)
            .map((item) => (
              <ProductCard key={item.productId} {...item} />
            ))}
           
          </div>
         )}
    </div>
    </div>
 )
}
export default Home;
