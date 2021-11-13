
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import EntityDataRows from './EntityDataRows';
import EntityList from './EntityList';
import CustomSeparator from './CustomSeparator';
import { JPAHomeProps, JpaState, ViewEntityProps,ViewEntityProps2 } from '../jpa_models/models';
import _ from "lodash";
import { exRows } from '../service/RestEntity';
import { emptyJpaState } from '../data-box/InitialState';
import { Button } from '@material-ui/core';

export default function JpaHome(props:JPAHomeProps) {

    let initJpaState: JpaState = emptyJpaState();
    const [appJpaState, setAppJpaState] = React.useState(initJpaState);

    const updateAndSetEntityAsSelected = (entityName: string) => {
        let rowMap = exRows(entityName);
        setAppJpaState(prevState=>{
            let names=prevState.flags.entityNames;
            names.push(entityName);
            prevState.entityMap[entityName] = {
                entityName: entityName,
                rowMap: rowMap
            }
            prevState.flags={
                entityClicked:false,
                hideEntityRows:false,
                entityListOccurance:0,
                entityNames:names,
                homeInitiated:false
            }
            prevState.selectedEntity = entityName;  
            alert('updated jpa-state:'+JSON.stringify(prevState))       
        return {...prevState};
        });
    }

    const enableEntityClickedFlag = () => {
        setAppJpaState(prevState=>{
            prevState.flags.entityClicked=true;
        return {...prevState};
        });
    }

    const finalizeEntitySelection = () => {
        if(appJpaState.flags.entityNames[0] && !appJpaState.flags.homeInitiated){
        setAppJpaState(prevState=>{
           
                prevState.selectedEntity = prevState.flags.entityNames[0];
                appJpaState.flags.homeInitiated=true;
        return {...prevState};
        });
    }
    }

    const setEntityIdAsSelected = (viewId: number) => {
        setAppJpaState(prevState=>{
            prevState.viewId=viewId;
            prevState.flags.hideEntityRows=true;
            alert('prevState.selectedEntity'+prevState.selectedEntity);
        return {...prevState};
        });
    }

    const viewState=()=>{
        alert('viewState:'+JSON.stringify(appJpaState));
    }

    let { path, url } = useRouteMatch();
    function ComponentEntitySection(){
        return (  
        <Grid item xs={10}>
            <CustomSeparator />
            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:entityName`} render={() => NestedComponent_EntityDataRows()} />
            </Switch>
        </Grid>
        );
    }
    function NestedComponent_EntityDataRows(){

        return (<EntityDataRows rowComponent={()=>{return NestedComponent_EntityDataRows()}}     entityClicked={appJpaState.flags.entityClicked} hideRows={appJpaState.flags.hideEntityRows} viewState={()=>{viewState()}} selectRow={(viewId) => { setEntityIdAsSelected(viewId) }}  entityRowsDetails={appJpaState.entityMap[appJpaState.selectedEntity]} setRows={(value) => { updateAndSetEntityAsSelected(value) }} 
        entity={appJpaState.entityMap[appJpaState.selectedEntity].rowMap.get(appJpaState.viewId)}
        />);
    }

    // render component
    // <AppBar> elevation={0} to remove shadow
    function JpaAppBar() {
        React.useEffect(()=>{
            //alert('jpa effect loaded 3x')
            //viewState();
            //finalizeEntitySelection();
        })
        return (
            <AppBar position="static"  elevation={0}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        JPA chya Gawat
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
    return (
        <Box p={1}>
            <Grid container marginBottom={1} spacing={1} columns={12}>
                <Grid item xs={12}>
                    <JpaAppBar />
                </Grid>
            </Grid>
            <Grid container spacing={1} columns={12}>

                <Grid item xs={2}>
                    <Box >{appJpaState.title}
                        <EntityList flagClicked={appJpaState.flags.entityClicked} title='ok' onEntityClick={()=>{enableEntityClickedFlag()}}/>
                    </Box>
                </Grid>
        
        <Grid item xs={10}>
            <CustomSeparator />
            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:entityName`} render={() => NestedComponent_EntityDataRows()} />
            </Switch>
        </Grid>
            </Grid>
        </Box>
    );
}

