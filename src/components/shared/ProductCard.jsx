import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "../shared/ProductViewModal" ;
import { truncateText } from "../../utils.js/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/actions";
import toast from "react-hot-toast";

const ProductCard = ({
    productId,
    productName,
          image,
          description,
          quantity,
          price ,
          discount,
          specialPrice,
          about = false,
          
}) => {
    const [openProductViewModal ,setOpenProductViewModal] = useState(false);
    const btnloader = false;
    const [selectedViewProduct,setSelectedViewProduct ] = useState('');
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();
   
    const handleProductView = (product) => {
      if(!about) {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
      }
    }
    const addToCarHandler = ( cartItems) =>{
      dispatch(addToCart(cartItems,1, toast));
    }
    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
           <div onClick={()=> {
            handleProductView({
          id: productId,
          productName,
          image,
          description,
          quantity,
          price ,
          discount,
          specialPrice,
          
            })
           }}
                   className="w-full overflow-hidden aspect-[3/2]" >
              <img className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
               src={image}
               alt={productName}>           
              </img>
           </div>
           <div className="p-4">
              <h2 onClick={()=> {
                
                handleProductView({
                  id: productId,
                  productName,
                  image,
                  description,
                  quantity,
                  price ,
                  discount,
                  specialPrice,
                    })
                   
              }}
                className="text-lg font-semibold mb-2 cursor-pointer">
                 {truncateText( productName,50)}
              </h2>
           
         
           <div className="min-h-20 max-h-20">
            <p className="text-gray-600 text-sm">
                {truncateText( description,80)}
            </p>
           </div>

           {!about && (
            <div className="flex items-center justify-between">
            {specialPrice ? (
                <div className="flex flex-col">
                <span className="text-gray-400 line-through ">
                   ${Number(price).toFixed(2)}
                </span>
                <span className="text-xl font-bold text-slate-700 ">
                   ${Number(specialPrice).toFixed(2)}
                </span>
   
           </div>
            ) : (
               
               <span className="text-gray-400 line-through ">
                  {"  "}
                   ${Number(price).toFixed(2)}
                </span>
            )}
   
   {isAvailable ? (
     <button
       disabled={btnloader}
       onClick={() => addToCarHandler({
          image,
          productName,
          description,
          specialPrice,
          price,
          productId,
          quantity,
          
 
       })}
       
       className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded transition ${
         btnloader
           ? 'bg-blue-300 cursor-not-allowed'
           : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
       }`}
     >
       <FaShoppingCart />
       {btnloader ? 'Loading...' : 'Add to Cart'}
     </button>
   ) : (
     <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 bg-gray-200 rounded cursor-not-allowed">
       <FaShoppingCart />
       Out of Stock
     </span>
   )}
             
             </div>
           )}
       
          </div>
          <ProductViewModal
          open={openProductViewModal}
          setOpen={setOpenProductViewModal}
          product={selectedViewProduct}
          isAvailable={isAvailable}/>
        </div>
    )
}
export default ProductCard;