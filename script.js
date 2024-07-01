console.log('hello world');

let person={
    name:'maya',
    age:22,
    location:'tvm'
}

console.log(person.name);
let arr=['heera','jai',10];
console.log(arr.length);
let arr_obj=[{age:23,location:'tvm'},{age:42,location:'kochi'}];
function add(a,b) {var sum=a+b;return sum;
   
    
}
let result=add(20,30); console.log(result);
console.log(arr_obj[1].location);
let p=1;
let  z=++p;
console.log(p);
console.log(z);
var a1=2;
var a2='2';
if (a1>a2) {console.log("A1 IS GREATER")
    
}else if(a1==a2)
    {
        console.log('a1 and a2 are equal and the value is '+a1)
    }
 else {console.log('A2 IS GREATER')
    
}
var arr2=[2,3,4,5]

    for(const i in arr2)
        {
            console.log(i)
        } 
        for(const i of arr2)
            {
                console.log(i);
            }