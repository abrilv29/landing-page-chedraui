import { useState } from 'react';
import selecto from '../assets/img/selecto.png';
import martes from '../assets/img/martes.png';
import landia from '../assets/img/landia.png';
import farmacia from '../assets/img/farmacia.png';
import ofertas from '../assets/img/ofertas.png';
import menos from '../assets/img/menos.png';
import { GiDiamondRing } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { LuGamepad2 } from "react-icons/lu";


function EnlacesMenu() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const imageUrls = [
        selecto,
        martes,
        landia,
        farmacia,
        ofertas,
        menos,
    ];

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-center items-center mt-4 pr-8 space-x-8">
            <div className="relative inline-block">
                <div
                    onClick={toggleDropdown}
                    className="cursor-pointer"
                    style={{ zIndex: isDropdownOpen ? '10' : '1' }}
                >
                    <BiMenuAltLeft className="icon-menu" />
                </div>
                {isDropdownOpen && (
                    <ul className="absolute mt-6 p-4 shadow bg-base-100 rounded-box w-64 z-10 font-montserrat font-medium">
                        <div className="flex items-center space-x-2">
                            <GiDiamondRing className="icon-drop" />
                            <li className="text-customBlue"><a>Joyeria</a></li>
                        </div>
                        <div className="flex items-center space-x-2">
                            <LuGamepad2 className="icon-drop" />
                            <li className="text-customBlue"><a>Electronica</a></li>
                        </div>
                    </ul>
                )}
            </div>
            <div className="flex justify-center items-center space-x-6">
                {imageUrls.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className="rounded-md"
                        style={{ maxWidth: '150px', maxHeight: '100px', width: 'auto', height: 'auto' }}
                    />
                ))}
            </div>
        </div>
    );
}

export default EnlacesMenu;
