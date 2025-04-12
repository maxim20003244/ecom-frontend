import { Dialog, DialogPanel, DialogTitle, Button } from '@headlessui/react';
import { FaShoppingCart } from 'react-icons/fa';

function ProductViewModal({ open, setOpen, product = {}, isAvailable }) {
  const {
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product;

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel 
        className="w-full max-w-xl rounded-lg bg-white shadow-2xl p-6">

         
          <DialogTitle className="text-2xl font-bold mb-4 text-gray-800">
            {productName}
          </DialogTitle>

          {/* Product Image */}
          <img
            src={image}
            alt={productName}
            className="w-full h-64 object-cover rounded-md mb-4"
          />

          {/* Description */}
          <p className="text-gray-600 mb-4">{description}</p>

          {/* Price & Availability */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              {discount > 0 ? (
                <>
                  <p className="text-xl font-semibold text-blue-600">
                    ${specialPrice.toFixed(2)}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${price.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-sm text-blue-500">Save {discount}%</p>
                </>
              ) : (
                <p className="text-xl font-semibold text-gray-800">${price?.toFixed(2)}</p>
              )}
            </div>

            <span
  className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full shadow-sm ${
    isAvailable
      ? 'bg-green-100 text-green-700 border border-green-300'
      : 'bg-red-100 text-red-700 border border-red-300'
  }`}
>
  <FaShoppingCart />
  {isAvailable ? 'In Stock' : 'Out of Stock'}
</span>
          </div>

          {/* Close Button */}
          <div className="text-right">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ProductViewModal;