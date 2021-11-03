import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { GridColumns } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';


const columns: GridColumns = [
  {
    field: 'first',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'last',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
];

const rows = [
  {
    id: 1,
    first: 'Jane',
    last: 'Carter',
  },
  {
    id: 2,
    first: 'Jack',
    last: 'Smith',
  },
  {
    id: 3,
    first: 'Gill',
    last: 'Martin',
  },
];

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(255, 97, 0, 0.55)',
      height:90
    },
  },
});

export function StylingHeaderGrid() {
  const classes = useStyles();

  return (
    <div style={{ height: 300, width: '100%' }} className={classes.root}>
      <DataGrid rowHeight={38}  rows={rows} columns={columns} />
    </div>
  );
}

export function DenseHeightGrid() {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 4,
      maxColumns: 5
    });
    const classes = useStyles();
    console.log('Data: '+JSON.stringify(data));
    return (
        
      <div style={{ height: 400, width: '100%', backgroundColor:'#f0fff0'}} className={classes.root}>
        <DataGrid rowHeight={40}  rows={rows} columns={columns} />
      </div>
    );
  }

  export function DenseHeightGridBkp() {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 4,
      maxColumns: 5
    });
    console.log('Data: '+JSON.stringify(data));
    return (
        
      <div style={{ height: 400, width: '100%', backgroundColor:'#f0fff0'}}>
        <DataGrid rowHeight={30} {...data} />
      </div>
    );
  }