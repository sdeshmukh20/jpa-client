import React, * as React$1 from 'react';
import { DataGrid, GridColDef, GridCellParams, useGridSlotComponentProps } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Box, Button, Grid } from '@material-ui/core';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { Link as RouterLink, LinkProps as RouterLinkProps, useRouteMatch } from 'react-router-dom';
import { ComponentApply, EntityRowsProps, EntityRowsState, RowStruct, TestRef } from '../jpa_models/models';
import { useStyles } from './util/CustomCheckBox';
import _ from 'lodash';
import CustomSeparator from './CustomSeparator';
import { EntityPage } from './EntityPage';
import { getEntityColumnsInfo } from '../data-box/ColumnData';





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


function getButton(params: GridCellParams, onClickEvent: (val: number) => void): React$1.ReactNode {
  let firstString = params.getValue(params.id, 'first') as string;
  return (<strong>
    {(params.value as Date).getFullYear()}
    <Button
      onClick={() => onClickEvent(params.id as number)}
      variant="contained"
      color="primary"
      size="small"
      style={{ marginLeft: 16 }}
    >
      <div></div>Close
    </Button>
  </strong>)
}




export default function EntityDataRows(props: EntityRowsProps) {
  const test:ComponentApply={
    field:'date2',
    component:(params: GridCellParams)=>{
      return getButton(params,props.selectRow)
    }
  }
  const columns = getEntityColumnsInfo([test]);
  const childRef = React$1.useRef<TestRef | null>(null);
  let { entityName }: { entityName: string } = useParams();
  let rowState: EntityRowsState = {
    entityName: '#init',
    rows: [],
    callback: () => { }
  }


  let [flag, setFlag] = React$1.useState(rowState);


  React$1.useEffect(() => {
    // if below condition is always true, react goes in infinite loop.
    if (!(flag.entityName === entityName)||props.entityClicked) {
      //alert('props.entityClicked:'+props.entityClicked)
      let cloneState = _.cloneDeep(flag);
      cloneState.entityName = entityName;
      setFlag(cloneState);
      props.setRows(entityName);
      childRef?.current?.showAlert();
    }
    else {
      //alert('is this valid? props.entityClicked:'+props.entityClicked);
    }
  });

  const history = useHistory();

  let { path, url } = useRouteMatch();


  function letsGo(id: number) {
    props.selectRow(id);
    let urlVal2: string = url + '/view/' + id;
    history.push(urlVal2);
  }

  function viewEntity(params: GridCellParams): React$1.ReactNode {
    let firstString = params.getValue(params.id, 'first') as string;
    let urlVal2: string = url + '/view/' + params.id;
    return (<strong>
      <Button onClick={() => { letsGo(params.id as number) }}>Click me</Button>
      <Button color="primary" component={RouterLink} to={urlVal2}>
        Wow:{firstString}
      </Button>
    </strong>)
  }


  let lastColumn = _.find(columns, function (obj) {
    return obj.field === 'last';
  })

  if (lastColumn) {
    lastColumn.renderCell = (params: GridCellParams) => (
      viewEntity(params)
    )
  }




  function InnerComponent() {

    function NestedComponant_EntityPage() {
      return (
        <div>
          Knock knock
        <EntityPage viewCurrentState={() => { props.viewState() }} selectRow={(viewId) => { props.selectRow(viewId) }} entity={props.entity}  ref={childRef} />
        </div>
      );
    }

    function RowComponent(){
      if(props.hideRows){
      return (null);
      }
      return (        <DataGrid
        className={classes.root}
        pageSize={5}
        components={{
          Pagination: CustomPagination,
        }}
        rows={rows}
        columns={columns}
      />)
      }

    let rows: RowStruct[] = [];
    if (props.entityRowsDetails) {
      props.entityRowsDetails.rowMap.forEach((element) => {
        rows.push(element);
      });
    }

    return (
      <div style={{ height: 400, width: '100%', backgroundColor: '#f0fff0' }} className={classes.root}>
        Entity:<strong>{entityName}</strong>
        <RowComponent/>
        <hr />
        
          
          <Switch>
            <Route path={`${path}/view/:entityIdx`} component={NestedComponant_EntityPage} />
            <Route path={`${path}/:entityName`} render={() => props.rowComponent()} />
          </Switch>
          <CustomSeparator />
        
      </div>
    );
  }

  const classes = useStyles();

  return InnerComponent();

}