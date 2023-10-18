import { TitlePanel } from "..";
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
      <TitlePanel
        nameAction="Mirando"
        nameObject="Papas con Camote"
        nameBtn="Nuevo Producto"
      />
    </div>
  )
}

export default ProductDashboards