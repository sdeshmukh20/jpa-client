import * as React from 'react';
import { DataGrid, useGridSlotComponentProps } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Button } from '@material-ui/core';

function customCheckbox(theme: Theme) {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: `1px solid #d9d9d9`,
      /*border: `1px solid ${
        theme.palette.type === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
      }`,*/
      borderRadius: 2,
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#1890ff',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

const defaultTheme = createMuiTheme();
const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        border: 0,
        color:'rgba(0,0,0,.85)',
        /*  theme.palette.type === 'light'
            ? 'rgba(0,0,0,.85)'
            : 'rgba(255,255,255,0.85)',*/
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: '#FFDBDB',
          /*backgroundColor: theme.palette.type === 'light' ? '#fafafa' : '#1d1d1d',*/
        },
        '& .MuiDataGrid-iconSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
          borderLeft: `1px solid #f0f0f0`/* ${
            
            theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
          }`*/,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
          borderBottom: `1px solid #f0f0f0`/*${
            theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
          }`*/,
        },
        '& .MuiDataGrid-cell': {
          color:'rgba(0,0,0,.85)'
           /* theme.palette.type === 'light'
              ? 'rgba(0,0,0,.85)'
              : 'rgba(255,255,255,0.65)'*/,
        },
        '& .MuiPaginationItem-root': {
          borderRadius: 0,
        },
        ...customCheckbox(theme),
      },
    }),
  { defaultTheme },
);

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={state.pagination.page}
      count={state.pagination.pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value)}
    />
  );
}

export default function AntDesignGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10,
  });
  const classes = useStyles();

  return (
    <div style={{ height: 400, width: '100%',backgroundColor:'#f0fff0' }}>
      <DataGrid
        className={classes.root}
        checkboxSelection
        pageSize={5}
        components={{
          Pagination: CustomPagination,
        }}
        {...data}
      />
    </div>
  );
}


 function testButton(theme: Theme) {

  return (
    <Button/>
  );
}
