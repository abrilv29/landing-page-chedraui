import { useEffect, useState } from 'react';
import axios from 'axios';
import { GoHeart } from 'react-icons/go';
import StarRating from './StarRating '; // Ajusta la ruta según la ubicación de tu archivo

const CategoriaJeweler = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nuevos Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group relative border border-gray-100 bg-white max-w-md mx-auto">
            {product.new && (
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium absolute top-0 left-0">
                New
              </span>
            )}

            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <GoHeart />
            </button>

            <img
              src={product.image}
              alt={product.title}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 mx-auto"
            />

            <div className="p-4">
              <h3 className="mt-2 text-lg font-medium text-gray-900">{product.title}</h3>

              <p className="mt-1 text-sm text-gray-700">${product.price}</p>

              <div className="flex mt-2">
                <StarRating rating={product.rating.rate} />
                <span className="ml-2 text-gray-600">{product.rating.rate}</span>
              </div>

              <form className="mt-2">
                <button className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaJeweler;
