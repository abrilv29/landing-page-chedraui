

import { useEffect, useState } from "react";


function ProductAll() {

    // Creacion del estado useState

    const [products,setAllproducts] = useState([]);


    //funcion que permita mostrar todos los productos

    const allProducts = async() => {
        const data = await fetch('https://fakestoreapi.com/products');
        const productsData = await data.json();
        setAllproducts(productsData);
        console.log(productsData);
    }

    // Renderizar la funcion para que se ejecute solo una vez 
    useEffect(()=> {
        allProducts() 
    },[])
      



  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductAll;