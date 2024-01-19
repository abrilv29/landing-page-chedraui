import selecto from '../../assets/img/selecto.png';
import martes from '../../assets/img/martes.png';
import landia from '../../assets/img/landia.png';
import farmacia from '../../assets/img/farmacia.png';
import ofertas from '../../assets/img/ofertas.png';
import menos from '../../assets/img/menos.png';

function PromotionsGrid() {


  return (
<>
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <div className="h-32 rounded-lg bg-gray-200 mb-4 lg:mb-4"></div>
    <div className="h-32 rounded-lg bg-gray-200 mb-4 lg:mb-4"></div>
    <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
  </div>
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2 mb-4 lg:mb-4"></div>
    <div className="h-32 rounded-lg bg-gray-200 mb-4 lg:mb-4"></div>
    <div className="h-32 rounded-lg bg-gray-200 mb-4 lg:mb-4"></div>
  </div>
</>


  )
}


export default PromotionsGrid;

