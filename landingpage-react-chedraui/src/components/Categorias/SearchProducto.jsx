import PropTypes from 'prop-types';

const SearchProducto = ({ results, onResultClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {results.map((product) => (
        <div key={product.id} className="text-center" onClick={() => onResultClick(product)}>
          <img src={product.image} alt={product.title} className="max-w-full h-auto" />
          <h3 className="text-sm font-medium">{product.title}</h3>
          <p className="text-xs">Price: ${product.price}</p>
          <p className="text-xs">Rating: {product.rating.rate}</p>
        </div>
      ))}
    </div>
  );
};

SearchProducto.propTypes = {
  results: PropTypes.array.isRequired,
  onResultClick: PropTypes.func.isRequired,
};

export default SearchProducto;
