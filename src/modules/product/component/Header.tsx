import logoAgro from '/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='flex items-center py-2 px-4 justify-around bg-[#4b836b]'>
                <div className='w-[5%] rounded-lg'>
                    <img src={logoAgro} alt="Logo" className='w-full' />
                </div>
                <p>Usuario</p>
            </div>

            <div className='grid grid-cols-5 gap-12 px-[10rem] bg-[#f3e28c] text-center text-lg'>
                <Link to={'/inicio'} className='text-[#736363] bg-[#41a57820] border-b-4 border-[#41a578] py-2'>Inicio</Link>
                <Link to={'/registrar-producto'} className='text-[#736363] py-2'>Registrar Producto</Link>
                <Link to={'/registro-compra'} className='text-[#736363] py-2'>Registrar Compra</Link>
                <Link to={'/registro-venta'} className='text-[#736363] py-2'>Registrar Venta</Link>
                <Link to={'/tablero-productos/1'} className='text-[#736363] py-2'>Ver Producto</Link>
            </div>
        </>
    )
}

export default Header