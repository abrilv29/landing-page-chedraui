import { useEffect } from 'react';
import PropTypes from 'prop-types';

function SearchResultados(props) {
  useEffect(() => {
    const { searchResults } = props;

    // Verificar si searchResults está definido y es un array antes de realizar map
    if (searchResults && Array.isArray(searchResults)) {
      // Realizar operaciones con searchResults
      console.log('searchResults:', searchResults);
    } else {
      console.error('searchResults no está definido o no es un array.');
    }
  }, [props.searchResults]);

  // Mover la lógica de renderizado aquí
  return (
    <div>
      <h2>Search Results</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* Verificar si searchResults está definido y es un array antes de realizar map */}
        {props.searchResults && Array.isArray(props.searchResults) && props.searchResults.length > 0 ? (
          props.searchResults.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating.rate}</p>
            </div>
          ))
        ) : (
          <div>No hay resultados para mostrar.</div>
        )}
      </div>
    </div>
  );
}

SearchResultados.propTypes = {
  searchResults: PropTypes.array,
};
SearchResultados.defaultProps = {
    searchResults: [], // Agrega un valor por defecto
  };

export default SearchResultados;
