import * as React from 'react';
import * as React$1 from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid, GridColDef, GridCellParams } from '@material-ui/data-grid';

const testD: string = 'hello mam';

const rows = [
    {
        id: 9,
        date: new Date(1979, 0, 1),
        date2: new Date(1979, 0, 1),
        first: 'Satyajeet',
    },
    {
        id: 2,
        date: new Date(1984, 1, 1),
        date2: new Date(1979, 0, 1),
        first: 'Rakesh',
    },
    {
        id: 3,
        date: new Date(1992, 2, 1),
        date2: new Date(1979, 0, 1),
        first: 'Sanjay',
    },
];
const columns: GridColDef[] = [
    {
        field: 'date',
        headerName: 'Year',
        width: 150,
        renderCell: (params: GridCellParams) => (
            <strong>
                {(params.value as Date).getFullYear()}
                <Button
                    onClick={() => (alert('hi..' + params.getValue(params.id, 'first')))}
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                >
                    Open
                </Button>
            </strong>
        )
    },
    {
        field: 'date2',
        headerName: 'Year2',
        width: 150,
        renderCell: (params: GridCellParams) => (
           getButton(params)
        )
    },
    {
        field: 'first',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        width: 140,
    },
];


function getButton(params: GridCellParams):React$1.ReactNode{
    return(<strong>
    {(params.value as Date).getFullYear()}
    <Button
        onClick={() => (alert('hi..' + params.getValue(params.id, 'first')))}
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
    >
        Close
    </Button>
</strong>)
}

export default function RenderCellGrid() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
