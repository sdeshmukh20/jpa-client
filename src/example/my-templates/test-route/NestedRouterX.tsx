import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';



function Topic(){
    let { topicId }:{topicId:string} = useParams();
    console.log('topicid:'+topicId);
    return(
        <div>
            <h3>hello-x {topicId}</h3>
        </div>
    )
}
export default function Topics(){
    let {path,url}=useRouteMatch();
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/foo`}>Foo</Link>
                </li>
                <li>
                    <Link to={`${url}/bar`}>Bar</Link>
                </li>
                <li>
                    <Link to={`${url}/baz`}>Baz</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                <h3>Please select a topic.</h3>
                <h3>path:{path}::url:{url}</h3>
                </Route>
                <Route path={`${path}/:topicId`} component={Topic}/>
            </Switch>
        </div>
    );
}