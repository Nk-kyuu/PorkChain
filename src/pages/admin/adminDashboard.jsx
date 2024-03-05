import SidebarAdmin from '../../components/sidebar/sidebarAdmin';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import Adminappbar from '../../components/appbar/Adminappbar';

function adminDashboard() {
    const columns = [
        { field: 'lotID', headerName: 'LotID', width: 90 },
        {
            field: 'action',
            headerName: 'Action',
            width: 110,
            editable: true,
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 150,
            editable: true,
        },
        {
            field: 'logDateTime',
            headerName: 'LogDateTime',
            width: 150,
            editable: true,
        },
        {
            field: 'eventDateTime',
            headerName: 'LogDateTime',
            width: 150,
            editable: true,
        },
    ];

    const rows = [
        { lotID: 1, action: 'add', location: 'farm', logDateTime: '22 Mar 2024: 10:20', eventDateTime: '25 Mar 2024: 10:20' },
        { lotID: 2, action: 'add', location: 'farm', logDateTime: '22 Mar 2024: 10:20', eventDateTime: '25 Mar 2024: 10:20' },
        { lotID: 3, action: 'add', location: 'farm', logDateTime: '22 Mar 2024: 10:20', eventDateTime: '25 Mar 2024: 10:20' },
        { lotID: 4, action: 'add', location: 'farm', logDateTime: '22 Mar 2024: 10:20', eventDateTime: '25 Mar 2024: 10:20' },
        { lotID: 5, action: 'add', location: 'farm', logDateTime: '22 Mar 2024: 10:20', eventDateTime: '25 Mar 2024: 10:20' }
    ]

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Adminappbar/>
            <SidebarAdmin/>
            <h1 href='/register' style={{ position: 'absolute', top: 100, left: 300}}>Transaction</h1>
            <Box sx={{ width: '80%', margin: 'auto', marginLeft: '300px', marginTop: '60px', display: 'flex'  }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.lotID}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                autoPageSize
                autoHeight
            />
            </Box>
        </Box>
    )
}

export default adminDashboard