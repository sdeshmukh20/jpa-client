import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react';
interface TestRef{
    showAlert:()=>{}
}
interface Test2Child{
    maxId:string
}
interface AdvanceI{
    hello:string
}
export default function ParentFunction() {
    const childRef = useRef<TestRef | null>(null);

    useEffect(()=>{
        childRef?.current?.showAlert();
    })
    return (
        <div className="container">
            <div>
                Parent Component
            </div>
            <button
                onClick={() => { childRef?.current?.showAlert() }}
            >
            Call Function
            </button>
            <Child ref={childRef} hello='wow'/>
        </div>
    )
}
const Child = forwardRef((props:AdvanceI, ref) => {

    const[flag,setFlag]=useState('balle balle');

    function GoodChild(props:Test2Child){
        useEffect(()=>{
            alert('looks situation is in control'+props.maxId);
        })
        return (
            <div>My Child Component</div>
         )
    }
    useImperativeHandle(
        ref,
        () => ({
            showAlert() {
                setFlag(flag+'X__');
                alert("Child Function Called gr8")
            }
        }),
    )
    if(true){
        return(<GoodChild maxId={flag}/>);
    }
    return (
       <div>Child Component</div>
    )
})

