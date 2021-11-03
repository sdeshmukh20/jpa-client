import * as React from 'react';
import {
  GridColumns,
  GridRowsProp,
  DataGrid,
  GridSortDirection,
  GridValueGetterParams,
  GridSortModel,
} from '@material-ui/data-grid';


const columns: GridColumns = [
  { field: 'name' },
  { field: 'age', type: 'number' },
  {
    field: 'username',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'name') || 'unknown'} - ${
        params.getValue(params.id, 'age') || 'x'
      }`,
    sortComparator: (v1, v2, param1, param2) =>
      param1.api.getCellValue(param1.id, 'age') -
      param2.api.getCellValue(param2.id, 'age'),
    width: 150,
  },
  { field: 'dateCreated', type: 'date', width: 180 },
  { field: 'lastLogin', type: 'dateTime', width: 180 },
];
const today: Date = new Date();
const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: today,
    lastLogin: today,
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: today,
    lastLogin: today,
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: today,
    lastLogin: today,
  },
  {
    id: 4,
    name: 'Sebastien',
    age: 28,
    dateCreated: today,
    lastLogin: today,
  },
  {
    id: 5,
    name: 'Louise',
    age: 23,
    dateCreated: today,
    lastLogin: today,
  },
  {
    id: 6,
    name: 'George',
    age: 10,
    dateCreated: today,
    lastLogin: today,
  },
];

export default function ComparatorSortingGrid() {
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'username',
      sort: 'asc',
    },
  ]);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}