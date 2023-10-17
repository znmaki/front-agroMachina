import IconProduct from '/iconProduct.svg'

const TitlePanel = ({ nameAction, nameObject, nameBtn }) => {
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
                <button className="border border-[red] rounded-sm px-4 py-2">{nameBtn}</button>
            </div>
        </div>
    )
}

export default TitlePanel