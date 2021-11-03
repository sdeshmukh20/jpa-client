import { Button } from "@material-ui/core";
import { GridCellParams, GridColDef } from "@material-ui/data-grid";
import _ from "lodash";
import { ComponentApply } from "../jpa_models/models";

 const entityColumnsInfo: GridColDef[] = [
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
  
    },
    {
      field: 'first',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 140,
    },
    {
      field: 'last',
      headerName: 'Year3',
      width: 150
    },
  
  ];

  export function getEntityColumnsInfo(componentApplyArr:[ComponentApply]){
    const columns= _.cloneDeep(entityColumnsInfo);
    componentApplyArr.forEach(obj=>{
       const resultColumn = _.find(columns,(col=>{
           return col.field === obj.field;
       }));
       if(resultColumn){
           //
           resultColumn.renderCell = (params: GridCellParams) => (
            obj.component(params)
           )

           //
       }
    });
    return columns;
  }