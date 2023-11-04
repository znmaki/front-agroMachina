import { Card, TitleDash, TitleWInfo } from "..";
/* import { IconDelete } from "../../../shared"; */

/* const actionSelect = (width: number) => ({
  field: 'actions',
  headerName: 'Acciones',
  width: width,
  renderCell: () => (
    <div>
      <button onClick={() => console.log('Hola')} className="ml-6"><IconDelete /></button>
    </div >
  ),
}); */

const ProductDashboards = () => {
  return (
    <div className="border border-red-600 mx-4">
      <TitleDash
        nameAction="Mirando"
        nameObject="Papas con Camote"
      />

      <div>
        <TitleWInfo
          title='Información de Inventario'
          infoHover='Hola'
          style='basis-[55%]'
        />

        <div className='grid grid-cols-2 gap-10'>
          <Card
            quantity={4}
            title='Unidades Disponibles'
          />
          <Card
            quantity={4}
            title='Unidades Vendidas'
          />
          <Card
            quantity={4}
            title='Ingreso Total'
            style='col-span-2'
          />
        </div>
      </div>

      <div>
        <TitleWInfo
          title='Prediccion de Ventas'
          infoHover='Hola'
          style='basis-[55%]'
        />

        <p>Terrible Grafico</p>
      </div>
    </div>
  )
}

export default ProductDashboards