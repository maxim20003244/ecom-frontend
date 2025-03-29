import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
    productId,
    productName,
          image,
          description,
          quantity,
          price ,
          discount,
          specialPrice,
          
}) => {
    const [openProductViewModal ,setOpenProductViewModal] = useState(false);
    const btnloader = false;
    const [selectedViewProduct,setSelectedViewProduct ] = useState('');
    const isAvailable = quantity && Number(quantity) > 0;
   
    const handleProductView = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
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
                   className="w-full overflow-hidden aspect-[3/2" >
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
                {productName}
              </h2>
           
         
           <div className="min-h-20 max-h-20">
            <p className="text-gray-600 text-sm">
                {description}
            </p>
           </div>
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

<button
  disabled={!isAvailable || btnloader}
  onClick={() => {
    if (!isAvailable || btnloader) return;
    console.log("Add to cart clicked");
  }}
  className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded transition ${
    !isAvailable || btnloader
      ? 'bg-blue-300 cursor-not-allowed'
      : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
  }`}
>
  <FaShoppingCart />
  {btnloader ? 'Loading...' : 'Add to Cart'}
</button>
          
          </div>
          </div>
        </div>
    )
}
export default ProductCard;