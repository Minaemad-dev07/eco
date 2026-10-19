import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { FaCartPlus, FaArrowRight } from "react-icons/fa";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-bold text-[#2F4156]">
        المنتج غير موجود
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" dir="rtl">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#567C8D] hover:text-[#2F4156] mb-6 font-semibold transition"
      >
        <FaArrowRight /> العودة للخلف
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-[#C8D9E6] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2F4156] mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-[#567C8D] mb-4">
            ${product.price} USD
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#2F4156] hover:bg-[#567C8D] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition"
          >
            <FaCartPlus /> إضافة إلى العربة
          </button>

          {added && (
            <p className="text-emerald-600 text-center font-semibold mt-3">
              تمت الإضافة إلى العربة بنجاح!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
