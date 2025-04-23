const SetQuantity = ({
    quantity,
    cardCounter,
    handleQtyIncrease,
    handleQtyDecrease,

}) => {
return (
    <div className="flex items-center gap-4">
      {!cardCounter && <span className="font-semibold text-sm">Quantity</span>}

      <div className="flex items-center gap-2 border px-2 py-1 rounded-md">
        <button
          onClick={handleQtyDecrease}
          className="px-2 text-lg font-semibold hover:text-red-500"
        >
          -
        </button>
        <span className="min-w-[24px] text-center">{quantity}</span>
        <button
          onClick={handleQtyIncrease}
          className="px-2 text-lg font-semibold hover:text-green-600"
        >
          +
        </button>
      </div>
    </div>

)
};
export default SetQuantity;
