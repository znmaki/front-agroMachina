import { Form, Table, TitlePanel, useModal } from "..";
import { IconDelete } from "../../../shared";
import { Modal, Box } from '@mui/material';

const actionDelete = (width: number) => ({
  field: 'actions',
  headerName: 'Acciones',
  width: width,
  renderCell: () => (
    <div>
      <button onClick={() => console.log('Hola')} className="ml-6"><IconDelete /></button>
    </div >
  ),
});

const rows = [
  { id: 1, name: 'Hello' },
  { id: 2, name: 'Hello' },
  { id: 3, name: 'Hello' },
  { id: 4, name: 'Hello' },
  { id: 5, name: 'Hello' },
  { id: 6, name: 'Hello' },
];

const columns = [
  { field: 'id', headerName: 'Id', width: 200 },
  { field: 'name', headerName: 'Nombre', width: 743 },
  actionDelete(235)
];

const intial = {
  selectField: '', //ACA ES EL NOMBRE
  quantity: '',
  price: '',
}  //REEMPLAZAR POR LO QUE PEDIRA CADA MODULO

const ProductSales = () => {
  const { open, handleOpen, handleClose, style } = useModal();

  return (
    <div className="border border-red-600 mx-4 py-4 rounded-md relative">
      <TitlePanel
        nameAction="Registrar"
        nameObject="Venta"
        nameBtn="Nueva Venta"
        modalOpen={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Form initialData={intial} />
        </Box>
      </Modal>

      <hr className="mt-[4rem] mb-4" />

      <div className="w-[63%] m-auto">
        <Table rows={rows} columns={columns} />
      </div>
    </div>
  )
}

export default ProductSales