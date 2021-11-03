import React, {
    forwardRef,
    useEffect,
    useRef,
    useImperativeHandle
  } from "react";
  import { BrowserRouter, Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
  //import "./styles.css";
  
  const withRouterForwardRef = (Component:any) => {
    const WithRouter = withRouter(({ forwardedRef, ...props }:any) => (
      <Component ref={forwardedRef} {...props} />
    ));
  
    return forwardRef((props, ref) => (
      <WithRouter {...props} forwardedRef={ref} />
    ));
  };
  
  const Child = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      say: () => console.log("hello from child")
    }));
  
    return <div>Child</div>;
  });
  
  const ChildWithRoute = forwardRef(({ location }:any, ref) => {
    
      useImperativeHandle(ref, () => (({
        say: () => console.log("hello from child with route")
      })));
    
        useEffect(() => {
      console.log("route props, location.pathname", location.pathname);
    });
  
    return <div>ChildWithRoute</div>;
  });
  
  const ChildWithRouteAndRef = withRouterForwardRef(ChildWithRoute);
  
  interface test1{
      say:()=>(void)
  }

  export default function AppX() {


    let { path, url } = useRouteMatch();
    const childRef = useRef<test1>(null);
    const childWithRouteRef = useRef<test1>(null);
    function test1(){
        return( <Child ref={childRef} />);
    }
    function Test2(){
        return( <ChildWithRouteAndRef ref={childWithRouteRef} />);
    }
  
    useEffect(() => {
      console.log("childWithRouteRef", childWithRouteRef);
      childRef?.current?.say();
      childWithRouteRef?.current?.say();
    });
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <BrowserRouter>
        <Switch>
        <Route path={`${path}/jpa2`} component={test1}/>
        <Route path={`${path}/jpa3`} component={Test2}/>
          </Switch>
        
        
        </BrowserRouter>
      </div>
    );
  }
  