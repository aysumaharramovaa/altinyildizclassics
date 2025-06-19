import React from "react";

type ProductCardProps = {
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  ratingCount: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  oldPrice,
  image,
  ratingCount,
}) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="overflow-hidden rounded-t-lg h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-36">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>

        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-blue-600">
              ${typeof price === "number" ? price.toFixed(2) : "0.00"}
            </span>

            {oldPrice && typeof oldPrice === "number" && oldPrice > price && (
              <span className="text-gray-400 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1 text-yellow-500">
            {/* Simple star icon with rating count */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
            </svg>
            <span className="text-gray-600 font-medium">{ratingCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
