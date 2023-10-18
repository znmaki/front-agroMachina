import { Table, TitlePanel, useModal } from "..";
import { IconUpdate } from "../../../shared";
import { Modal, Box } from '@mui/material';

const actionEdit = (width: number) => ({
  field: 'actions',
  headerName: 'Acciones',
  width: width,
  renderCell: () => (
    <div>
      <button onClick={() => console.log('Hola')} className="ml-6"><IconUpdate /></button>
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
  actionEdit(235)
];

const RegisterProduct = () => {
  const { open, handleOpen, handleClose, style } = useModal();

  return (
    <div className="border border-red-600 mx-4">
      <TitlePanel
        nameAction="Registrar"
        nameObject="Producto"
        nameBtn="Nuevo Producto"
        modalOpen={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <p>Hola</p>
        </Box>
      </Modal>

      <div className="w-[63%] m-auto">
        <Table rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default RegisterProduct;
