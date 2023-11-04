import { useState } from 'react';
import { Tooltip, Typography } from '@mui/material'
import IconProduct from '/iconProduct.svg'
import { useNavigate } from 'react-router-dom';


export const TitlePanel = ({ nameAction, nameObject, nameBtn, modalOpen }) => {
    return (
        <div className="flex mx-6 items-center justify-between">
            <div className='flex items-center space-x-4'>
                <img src={IconProduct} alt="" className='w-[17%] bg-[#FF5722] p-1 rounded-md' />
                <div className='w-[20rem] '>
                    <p className='text-base font-light leading-3'>{nameAction}</p>
                    <p className="text-3xl font-semibold">{nameObject}</p>
                </div>
            </div>

            <div>
                <button className="border border-[red] rounded-sm px-4 py-2" onClick={modalOpen}>{nameBtn}</button>
            </div>
        </div>
    )
}

export const TitleDash = ({ nameAction, nameObject }) => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        const value = e.target.value;

        // Redirigir a la URL correspondiente
        navigate(`/tablero-productos/${value}`);

        // Actualizar el estado con la opción seleccionada
        setSelectedOption(value);
    };

    return (
        <div className="flex mx-6 items-center justify-between">
            <div className='flex items-center space-x-4'>
                <img src={IconProduct} alt="" className='w-[17%] bg-[#FF5722] p-1 rounded-md' />
                <div className='w-[20rem] '>
                    <p className='text-base font-light leading-3'>{nameAction}</p>
                    <p className="text-3xl font-semibold">{selectedOption}</p>
                </div>
            </div>

            <div className='w-[20%]'>
                <h2>Seleccion de Producto</h2>
                <select value={selectedOption} onChange={handleOptionChange} className='bg-white w-full py-1 px-2 rounded-md'>
                    <option disabled value="" >Selecciona una opción</option>
                    <option value="papas-camote">Papas con Camote</option>
                    <option value="aceituna">Aceituna</option>
                    <option value="lechuga">Lechuga</option>
                </select>
            </div>
        </div>
    )
}

export const TitleWInfo = ({ title, infoHover, style, styleLine = 'basis-[40%]' }) => {
    return (
        <div className='flex items-center pb-4'>
            <Typography variant="h4" component='h1' className={`!font-bold !text-[30px] ${style}`}>
                {title}
            </Typography>
            <Tooltip
                title={infoHover}
                placement="bottom-start"
                componentsProps={{
                    tooltip: {
                        style: { backgroundColor: '#FFFFFF', color: '#FF954A' },
                    },
                }}
            >
                {/* <p className='px-6'><IconHelp /></p> */}
                <p>?</p>
            </Tooltip>
            <hr className={`border border-[#FF954A] ${styleLine}`} />
        </div>
    )
}