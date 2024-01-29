const func1 = (changesValues)=>{
    a =4;
    b =5;
}

const func2 = ()=>{
    let a =5;
    let b=7;
}

//changing values
const changesValues = (newA, newB) =>{
    a = newA;
    b = newB;
}

changesValues( 1,20);
console.log(`This is the apdated value ${a}, ${b}`);