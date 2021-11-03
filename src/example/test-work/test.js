const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reducerMethod(accumulator,currentValue){
    console.log('accumulator: '+accumulator+' :: currentValue'+currentValue);
    return accumulator+currentValue;
}
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducerMethod));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));

//map

const map1 = array1.map(x=>(x*2));

const map2 = array1.map(x=>{
let vv={};
vv[x]='life';
return vv;
});

const map3 = array1.reduce((x,y)=>{
    let vv={};
    vv[y]='life';
    return vv;
    });
  
    const obj4={};
    array1.forEach(obj=>{
        obj4[obj]={'chat':'goal'}
    })

console.log('obj4: '+JSON.stringify(obj4));