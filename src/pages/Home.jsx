import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10" dir="rtl">
      <h1 className="text-3xl font-extrabold text-[#2F4156] mb-8">
        قائمة المنتجات
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-[#C8D9E6] overflow-hidden flex flex-col justify-between hover:shadow-md transition"
          >
            {/* تم تعديل طريقة عرض الصورة لتظهر بالكامل بدون قص */}
            <div className="w-full h-56 bg-white p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between border-t border-[#C8D9E6]/30">
              <div>
                <h3 className="font-bold text-xl text-[#2F4156] mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-[#567C8D] font-bold text-lg mb-4 text-center">
                  USD ${product.price}
                </p>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="block text-center bg-[#2F4156] hover:bg-[#567C8D] text-white py-2.5 rounded-xl font-semibold transition"
              >
                عرض التفاصيل
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
