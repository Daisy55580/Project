/**
 * @param {string} digits
 * @return {string[]}
 */

 //2:abc ,3:def,4:ghi,5:jkl,6:mno,7:pqrs,8:tuv,9:wxyz
 var letterCombinations = function(digits) {
    let phoneArr = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'],
        resultArr = [];
    let digitsArr = digits.split('').map(item => parseInt(item));
    for(let i=0;i<digitsArr.length;i++){
        resultArr = combination(phoneArr[digitsArr[i]],resultArr)
    }
    return resultArr
};

function combination(letter,arr){
    let newArr = [],
        letterArr = letter.split('');
    if(arr.length == 0){
        for(let i=0;i<letterArr.length;i++){
            newArr.push(letterArr[i])
        }
    }else{
        for(let i=0;i<letterArr.length;i++){
            for(let k=0;k<arr.length;k++){
                newArr.push(arr[k]+letterArr[i])
            }
        }
    }
    return newArr;
}


/**
 * @param {string} s
 * @return {boolean}
 */
// '('，')'，'{'，'}'，'['，']'
var isValid = function(s) {
    if(s.length % 2 != 0) return false;
    let sArr = s.split(''),
        temp = [],
        sArrMap = new Map();
    sArrMap.set(')','(');
    sArrMap.set(']','[');
    sArrMap.set('}','{');
    for(let i=0;i<sArr.length;i++){
        if(sArr[i] == '(' || sArr[i] == '{' || sArr[i] == '['){
            temp.push(sArr[i])
        }else{            
            if(temp[temp.length -1] == sArrMap.get(sArr[i])){
                temp.pop()
            }else{
                return false
            }
        }
    }
    if(temp.length > 0) return false;
    return true
};
//console.log(isValid("([)]"))


//node http模块应用

let httpUse = ()=>{
    let http = require('http');

    http.createServer((request,response)=>{
        response.writeHead(200,{'Content-Type':'text/palin'})
        console.log('request')
        response.end('Hello World\n')
    }).listen(8888)
}

//ES6 Symbol 测试
let symbolTest = ()=>{
    let mySymbol = Symbol();

    let a = {}
    a[mySymbol] = 'Hello!'

    let b = {
        [mySymbol] : 'Hello!'
    }

    let c = {}
    Object.defineProperty(c, mySymbol ,{value:'Hello! '})

    //console.log(a[mySymbol],b[mySymbol],c[mySymbol])

    const COLOR_RED = Symbol();
    const COLOR_GREEN = Symbol();

    let getComplement = color => {
        switch(color){
            case COLOR_RED:
                console.log('COLOR_RED');
                break;
            case COLOR_GREEN:
                console.log('COLOR_GREEN');
                break;
            default:
                throw new Error('Undefined color');
        }
    }
    //getComplement(COLOR_RED)

    const shapeType = {
        triangle: Symbol()
    }

    let getArea = (shape,options) => {
        let area = 0;
        switch(shape){
            case shapeType.triangle:
                area = 0.5 * options.width * options.height;
                break;
        }
        console.log(area)
    }
    //getArea(shapeType.triangle,{width:20,height:40})

    const obj = {a:'2132'}
    let a1 = Symbol('a1');
    let b1 = Symbol('b1');

    obj[a1] = 'Hello';
    obj[b1] = 'World';
    
    //console.log(Object.getOwnPropertySymbols(obj))
    //console.log(Reflect.ownKeys(obj))
    let size = Symbol('size');
    class Collection{
        constructor(){
            this[size] = 0;
        }
        add(item){
            this[this[size]] = item;
            this[size]++
        }

        get [Symbol.toStringTag]() {
            return 'class'
        }
        static sizeOf(instance){
            return instance[size];
        }
    }
    let x = new Collection();
    console.log(x.toString())
}
//symbolTest()





