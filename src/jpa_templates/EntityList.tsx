import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link,useHistory,useParams,useRouteMatch } from 'react-router-dom';
import EMTitle from './EMTitle';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { EntityListPropsM } from '../jpa_models/models';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows2 = [
  createData(
    0,
    '16 Mar, 2019',
    'Entity1',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Entity2',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Entity3',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity4',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity5',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity6',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity7',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity8',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity9',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity10',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity11',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity12',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity13',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity14',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Entity15',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

export default function EntityList(props:EntityListPropsM) {
  let {path,url}=useRouteMatch();
  const history = useHistory();
  let { entityName }: { entityName: string } = useParams();

  function letsGo(name:string) {
    props.onEntityClick();
    let urlVal2: string = url + '/' + name;
    //alert('URL:'+urlVal2);
    history.push(urlVal2);
  }
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#fffff0' }}>
      <EMTitle>Entities zzzz</EMTitle>
      <Link to={`/about`}>Foo</Link>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Name</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow key={row.id}>
                <TableCell>
                  <Button onClick={()=>letsGo(row.name)}>{row.name}</Button>
                  <Link to={`${url}/${row.name}`}>{row.name}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      </Paper>
  );
}
