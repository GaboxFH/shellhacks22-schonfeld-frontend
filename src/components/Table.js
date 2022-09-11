import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'weight', headerName: 'weight', width: 100 },
  { field: 'root_symbol', headerName: 'root_symbol', width: 100 },
  { field: 'bbg', headerName: 'bbg', width: 135 },
  { field: 'symbol', headerName: 'symbol', width: 130 },
  { field: 'ric', headerName: 'ric', width: 130 },
  { field: 'cusip', headerName: 'cusip', width: 110 },
  { field: 'isin', headerName: 'isin', width: 130 },
  { field: 'bb_yellow', headerName: 'bb_yellow', width: 150 },
  { field: 'bloomberg', headerName: 'bloomberg', width: 100 },
  { field: 'spn', headerName: 'spn', width: 110 },
  { field: 'security_id', headerName: 'security_id', width: 135 },
  { field: 'sedol', headerName: 'sedol', width: 130 },
];


export default function DataTable(props) {
  return (
    <div style={{ height: 1500, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.security_id}
        rows={props.rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25, 50, 100]}
        checkboxSelection
        sx={{
            boxShadow: 2,
            border: 5,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell': {
              color: 'white',
            },
            '& .MuiDataGrid-cell:hover': {
                color: 'orange',
              },
              '& .MuiDataGrid-columnHeader': {
                color: 'white',
              },
          }}
      />
    </div>
  );
}
