import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?title=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const filteredProduct = searchResults.find((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Resultados de búsqueda para: {searchTerm}</h2>
      {loading ? (
        <p>Cargando resultados...</p>
      ) : filteredProduct ? (
        <div key={filteredProduct.id}>
          <img src={filteredProduct.image} alt={filteredProduct.title} />
          <h3>{filteredProduct.title}</h3>
          <p>{filteredProduct.description}</p>
          <p>Precio: {filteredProduct.price}</p>
          <p>Categoría: {filteredProduct.category}</p>
          <p>Calificación: {filteredProduct.rating.rate}</p>
          <p>Recuento de Calificaciones: {filteredProduct.rating.count}</p>
          {/* Otros detalles del producto */}
          <p>Información adicional para el producto buscado</p>
          {/* Agrega más detalles según sea necesario */}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default SearchResults;
