
//1-siempre hambriento//
function siempreHambriento(arr) {
    let isBueno = null;
    for (let i = 0; i<arr.length; i++) {
        if("Comida"===arr[i]) {
            isBueno ="Delisioso"
            console.log(isBueno);
        }
    }
        if(isBueno!=="Delisioso"){
            console.log("tengo hambre");
        }
    }
    siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
    // esto debería mostrar "delicioso, "delicioso"
    siempreHambriento([4, 1, 5, 7, 2]);
    // esto debería mostrar "Tengo hambre"
    
//2-Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cutoff < arr[i]) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

//3-Mejor que el promedio
function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += (arr[i])/arr.length
    }
    let promedio = Math.floor(sum)
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>promedio) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

//4-Arreglo invertido
function reverse(arr) {
    let reverseArr=[]
    for (let i = 0; i < arr.length; i++) {
        reverseArr.push(arr[(arr.length-1)-i])
    }
    arr = reverseArr
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

//5-Arreglo de Fibonacci
function fibonacciArray(n) {
    var fibArr = [0, 1];
    if (n===0) {
        fibArr = [0]
    }else if(n==1){
        fibArr = [0,1]
    }else{
        for (let i = 2; i < n; i++) {
            fibArr[i]=fibArr[i-2]+fibArr[i-1]
        }
    }
    return fibArr;
}
var result = fibonacciArray(11);
console.log(result); 
