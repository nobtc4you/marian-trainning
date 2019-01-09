

console.log("Hola soy marian como estas?");//1a


let numT = 731;

console.log("ejercicio 2 a "+ numT*13/100); //2a


console.log( numT+numT); //2b


console.log(numT*13/100 - (numT+numT)); //2c

console.log("sus numeros de la suerte son: ", numT,numT*13/100,numT+numT,"y",numT*13/100 - (numT+numT));//3d


function aleatorio(minimo,maximo){ //3a
  return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

//para mas numeros randoms, loop por cant de numeros?

console.log(aleatorio (1,10));


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

var myArray = [3, 0, 2, 5, -1, 4, 1 ]; //string de radom?

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
