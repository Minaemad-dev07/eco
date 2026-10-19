import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingBag } from "react-icons/fa";

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 25 : 0;
  const grandTotal = subtotal + shipping;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" dir="rtl">
      <h1 className="text-3xl font-extrabold text-[#2F4156] mb-8">
        سلة المشتريات
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#C8D9E6] p-12 text-center">
          <FaShoppingBag size={50} className="mx-auto text-[#567C8D]/40 mb-4" />
          <p className="text-gray-500 text-lg mb-6">
            سلة المشتريات فارغة حالياً.
          </p>
          <Link
            to="/"
            className="bg-[#2F4156] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#567C8D] transition"
          >
            تصفح المنتجات
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl shadow-sm border border-[#C8D9E6] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold text-[#2F4156]">{item.name}</h3>
                    <p className="text-[#567C8D] font-semibold">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                  <div className="flex items-center border border-[#C8D9E6] rounded-lg overflow-hidden bg-[#F5EFEB]">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 font-bold text-[#2F4156] hover:bg-[#C8D9E6]"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 font-semibold text-[#2F4156]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 font-bold text-[#2F4156] hover:bg-[#C8D9E6]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C8D9E6] h-fit">
            <h2 className="text-xl font-bold text-[#2F4156] mb-6 border-b border-[#C8D9E6] pb-4">
              ملخص الطلب
            </h2>
            <div className="space-y-3 text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span className="font-semibold text-[#2F4156]">
                  ${subtotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span>الشحن:</span>
                <span className="font-semibold text-[#2F4156]">
                  ${shipping}
                </span>
              </div>
              <div className="border-t border-[#C8D9E6] pt-3 flex justify-between text-lg font-bold text-[#2F4156]">
                <span>الإجمالي:</span>
                <span className="text-[#567C8D]">${grandTotal}</span>
              </div>
            </div>
            <button className="w-full bg-[#2F4156] text-white font-bold py-3 rounded-xl hover:bg-[#567C8D] transition">
              إتمام الشراء
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
