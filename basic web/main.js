

function aleatorio(minimo,maximo){ //3a
  return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

function arrayRandom(cant, max, min){
  let arrAux =[];
  while(--cant > 0) {
    arrAux.push(aleatorio(min,max));
  }
  return arrAux;
}
////////////////////////////////////////////////////////////////////////////////// array random


/*
function linearSearch(array, toFind){
for(let i = 0; i < array.length; i++){
if(array[i] === toFind) return i;
}
return -1;
}
*/


function LinearSearch(A,searchQuery) {
  // console.log("prueba: " + A.length);
  for (var i = 0; i < A.length; i++) {
    if( A[i] === searchQuery) {
      return i;
    }
  }
  return undefined;
}


let sorteaDeEsto = (arrayRandom (100000000000000000000000,1500000,0));



var starttime = new Date().getTime();
var pos = LinearSearch(sorteaDeEsto, 27);
var end = new Date().getTime();
console.log(end -starttime);
console.log(pos);




////////////////////////////////////////////////////////////////////////////////// benchmark linear


//
// sorteaDeEsto.sort();

// console.log(sorteaDeEsto);

////////////////////////////////////////////////////////////////////////////////sort

//
//
// var starttime = new Date(0).getTime();
// sorteaDeEsto.sort();
// var end = new Date(0).getTime();
// console.log(end -starttime);


//////////////////////////////////////////////////////////////////////////////////benchmark sort











function bubbleSort(arr){
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([1,2,5,98,64,8,7,8,9,8,7]);



//

function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

var myArray = (arrayRandom(10,15,0));

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
//
// console.log("Sorted array: " + sortedArray);
