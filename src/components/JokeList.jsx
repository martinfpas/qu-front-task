import { Button, Stack, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'type',
        headerName: 'Type',
        flex: 1,
        editable: true,
    },
    {
        field: 'setup',
        headerName: 'Setup',
        flex: 1,
        editable: true,
    },
    {
        field: 'punchline',
        headerName: 'punchline',
        flex: 1,
        editable: true,
    },
    {
        field: 'edit',
        headerName: 'Edit',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (_, row) => row.id,
        renderCell: (row) => {
            return <Button variant="contained" component={Link} to={`/joke/${row.id}`} >Edit</Button>
        }
    }
];

export const JokeList = ({ jokes }) => {

    return <Stack>
        <Stack textAlign={"center"} alignItems={"center"} >
            <Stack direction={"row"} spacing={2} p={2}>
                <Typography variant="h4">Joke List</Typography>
                <Button variant="contained" component={Link} to={`/joke/`} >New</Button>
            </Stack>
        </Stack>
        <Stack>
            {jokes && <DataGrid
                rows={jokes}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 8,
                        },
                    },
                }}
                pageSizeOptions={[8]}
            />}
        </Stack>
    </Stack>
}