import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";

const QuickSearchToolbar = () => {
    return (
        <div className='flex items-center justify-end space-x-5 mb-2'>
            <div className="border border-red-500 bg-white px-2 py-1 rounded-lg">
                <GridToolbarQuickFilter />
            </div>
        </div>
    );
}

const Table = ({ rows, columns }) => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            slots={{
                toolbar: QuickSearchToolbar
            }}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10, 25]}
            sx={{
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: '#3F3D56',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    color: '#FFFFFF',
                    padding: '8px',
                    paddingLeft: '2rem'
                },
                '& .MuiDataGrid-cell': {
                    color: '#3F3D56',
                    paddingLeft: '2rem',
                    /* fontWeight: 'bold', */
                    fontSize: '1.25rem',
                },
                border: 'none',
                '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
                    outline: 'none',
                },
                '& .Mui-selected': {
                    backgroundColor: 'rgba(0, 0, 0, .15) !important',
                    transition: 'background-color 500ms',
                },
            }}
            disableRowSelectionOnClick
        />
    )
}

export default Table