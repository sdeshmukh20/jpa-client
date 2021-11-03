/* eslint-disable no-nested-ternary */
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import * as H from 'history';

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox/important/very-importanat': 'Very important',
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/inbox/important/very-importanat/much-important': 'Very much important',
  '/inbox/moderate': 'Moderate',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};



interface PLType {
  pl: number
}
interface BreadcrumbsProps {
  to: string,
  underline?: string,
  color?: string,
  children?: string,
  open?: boolean,
  onClick?: () => void,
  sx?: PLType,
}


function ListItemLink(props: BreadcrumbsProps) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

/*
ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};
*/
const LinkRouter = (props: any) => <Link {...props} component={RouterLink} ></Link>;

let breadCumbsStateObject={
  open: false
}

interface StateWrap{
  open: boolean
}


function buildBreadcrumbs(location:H.Location){
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      { pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

interface ListContentProps{
  moduleState:StateWrap,
  action:()=>void
}
function AppListContent(props:ListContentProps){
return (          <List>
  <ListItemLink to="/inbox" open={props.moduleState.open} onClick={props.action} />
  <Collapse component="li" in={props.moduleState.open} timeout="auto" unmountOnExit>
    <List >
      <ListItemLink sx={{ pl: 4 }} to="/inbox/important" />
      <Collapse component="li" in={props.moduleState.open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink sx={{ pl: 8 }} to="/inbox/important/very-importanat" />
        </List>
      </Collapse>

    </List>
  </Collapse>
  <ListItemLink to="/trash" />
  <ListItemLink to="/spam" />
</List>);
}

const setMyState = (prevState:StateWrap) => {
  
    let localState={
      open: !prevState.open,
    }
    return localState;
  };

function testd(){

}
export default function RouterBreadcrumbs() {
  const [moduleState, getNewModuleState] = React.useState(breadCumbsStateObject);

  const handleClick = () => {
    getNewModuleState(function (prevState){
    return setMyState(prevState);
    });
  };

  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
        <Route>
          {
            ({ location }) => {
                return buildBreadcrumbs(location);
          }}
        </Route>
        <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 1,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
        <AppListContent moduleState={moduleState} action={handleClick}/>
        </Box>
      </Box>
    </MemoryRouter>
  );
}
