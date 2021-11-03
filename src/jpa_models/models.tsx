import { GridCellParams } from '@material-ui/data-grid';
import * as H from 'history';
import { ComponentType, ReactNode } from 'react';

export interface JPAHomeProps{
  children?:ReactNode
  color:string
}

export interface RowStruct {
    id: number,
    date: Date,
    date2: Date,
    first: string,
    last: string,
    city: string
  }

  export interface EntityRowsDetails{
    entityName: string,
    rowMap:Map<number, RowStruct>;
  }

  export interface EntityRowsProps {
    entityRowsDetails:EntityRowsDetails,
    entity: RowStruct | undefined,
    hideRows:boolean,
    entityClicked:boolean,
   setRows:(title:string)=>(void),
   selectRow:(id:number)=>(void),
   viewState:()=>(void)
  }

  export interface EntityRowsState {
    rows:RowStruct[],
    entityName: string,
    callback: ()=>(void)
  }

  export interface ViewEntityProps {
    entity: RowStruct | undefined,
    viewCurrentState:()=>(void)
    selectRow:(id:number)=>(void)
  }

  export interface ViewEntityProps2 {
    entity: RowStruct | undefined,
    viewCurrentState:()=>(void),
    onViewClick:()=>(void)
  }

  export interface EntityListPropsM {
    title:string,
    flagClicked: boolean,
    onEntityClick:()=>(void)
  }

  export interface JpaState {
    entityMap : { [key:string]:EntityRowsDetails }
    selectedEntity:string,
    title: string,
    entityCount:number,
    viewId:number,
    flags:Flags
  }

  interface Flags {
    hideEntityRows:boolean,
    entityClicked:boolean
  }
  
  export interface Test2Child{
    maxId:string
}
export interface AdvanceI{
    hello:string
}

export interface TestRef{
  showAlert:()=>{}
}
export interface ComponentApply{
  field:string,
  component(params: GridCellParams):ReactNode
}