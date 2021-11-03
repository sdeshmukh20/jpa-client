import { RowStruct } from "../jpa_models/models";

export function exRows(name:string)  {
    
    let dummyRows: RowStruct[] = [
      {
        id: 9,
        date: new Date(1979, 0, 1),
        date2: new Date(1979, 0, 1),
        first: 'Satyajeet',
        last: 'url',
        city: 'Pune'
      },
      {
        id: 10,
        date: new Date(1979, 0, 1),
        date2: new Date(1979, 0, 1),
        first: 'Nitesh',
        last: 'url',
        city:'Sangamner'
      }];
      dummyRows.forEach((row)=>{
        row.first=row.first+' '+name;
      })

      const entityMap:Map<number,RowStruct>=new Map();
      dummyRows.forEach((row)=>{
        entityMap.set(row.id,row);
      })

      return entityMap;
  }
