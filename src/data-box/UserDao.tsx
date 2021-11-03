import _ from "lodash";
import { RowStruct } from "../jpa_models/models";

export function getRowById(id:number,rows:RowStruct[]){
    //alert('id ox:'+rows[0].id);
    let d= _.find(rows,{id});
    alert('check: '+d);
    return d;
}