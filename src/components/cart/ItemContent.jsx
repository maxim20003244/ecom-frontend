import { useSelector } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import { decreaseCartQuantity, increaseCartQunatity, removeFromCart } from "../../store/reducers/actions";
import toast from "react-hot-toast";
import { truncateText } from "../../utils.js/truncateText";
import { formatPrice } from "../../utils.js/formaTPRICE.JS";

const ItemContetnt = ({
          productId,
          productName,
          image,
          description,
          quantity,
          price ,
          discount,
          specialPrice,
          cartId,
}) => {
    

    const dispatch = useDispatch();
    const cartItem = useSelector((state) =>
        state.carts.cart.find((item) => item.productId === productId)
      );
      const currentQuantity = cartItem?.quantity || 1;

      
      const handleQtyIncrease = () => {
        const cartItem = {
          image,
          productName,
          description,
          specialPrice,
          price,
          productId,
          cartId
        };
      
        dispatch(
          increaseCartQunatity(cartItem, toast, currentQuantity)
        );
      };

     const handleQtyDecrease = () => {
        const cartItem = {
            image,
            productName,
            description,
            specialPrice,
            price,
            productId,
            cartId
          };

          dispatch(
            decreaseCartQuantity(cartItem,toast, currentQuantity)
          );
     };

     const handleRemoveFromCart = () => {
        const item = {
          image,
          productName,
          description,
          specialPrice,
          price,
          productId,
          quantity,
        };
      
        dispatch(removeFromCart(item, toast));
      };

return (
<div className="grid md:grid-cols-5 grid-cols-4 gap-4 items-center border-b py-4 px-2 hover:bg-slate-50 transition">
  {/* Product (image + name) */}
  <div className="md:col-span-2 col-span-2 flex items-center gap-4">
    {/* Image wrapper */}
    <div className="w-20 h-20 flex-shrink-0">
      <img
        src={image}
        alt={productName}
        className="w-full h-full object-cover rounded-md border"
      />
    </div>

    {/* Text info */}
    <div>
      <h3 className="lg:text-[15px] text-sm font-semibold text-slate-700">
        {truncateText(productName)}
      </h3>
      <p className="text-xs text-gray-500">Product details or short note</p>
    </div>
  </div>

  {/* Price */}
  <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
  <span>{formatPrice(specialPrice)}</span>
   
  </div>

  {/* Quantity */}
  <div className="text-center">
  <SetQuantity
  quantity={currentQuantity}
  cardCounter={true}
  handleQtyIncrease={handleQtyIncrease}
  handleQtyDecrease={handleQtyDecrease}
/>

    
  </div>

  {/* Total */}
  <div className="text-center flex flex-col items-center gap-2">
   <span className="font-semibold text-gray-800">
  ${(specialPrice * currentQuantity).toFixed(2)}
</span>
    <button
      onClick={()=> handleRemoveFromCart({
        image,
        productName,
        description,
        specialPrice,
        price,
        productId,
       quantity,
      })}
      className="flex items-center gap-1 text-red-400  hover:text-red-600 transition cursor-pointer"
      
    >
        <HiOutlineTrash size={16} className="text-rose-600"/>
        
      Remove
    </button>
  </div>
</div>
)
};
export default ItemContetnt;