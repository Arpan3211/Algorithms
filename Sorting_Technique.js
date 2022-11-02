


//----------------------Bubble sort------------------

//(  Problem -- [ 1 ])
/*
function bblsort(arr){     
                  // declear veriable for swapping the element                 
    let swapped = false;     
                  //looping on array            
    for (let i=0; i < arr.length-1; i++){      
                   // swapping condition
         swapped = false;                       
                   // looping on elements on first loop
        for(let j=0; j < arr.length-1-i; j++){    
                   // condition for swapping the two element 
           if (arr[j] > arr[j+1]){             
                   // swapping program
            let temp = arr[j];          
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swapped = true;    
           }
        }
                   // condition if noting is swapping in secong loop than break
      if(!swapped){            
        break;
      }

    }
    return arr;
}

console.log(bblsort([1,4,5,6,74,5,5447,6,5346,3,478,986,43,45,6,789,4,67,8,56,4,6,789,9,445,53]));
*/
//=================================================================================================






//----------------insertion using normal method(while loop)---------------------

//(  Problem -- [ 2 ])
  /*
function insertionsort(arr){      
    let curr;                   
                // loop for iterate on array
    for (let i = 1; i<arr.length;i++){   
              // storing for temperory in curr array
        curr = arr[i];                  
             // for second loop start from 1(element) , 0th element assume as a sorted element [ 0,(1),2,3,4,5,6,]
        j = i-1;                       
               // condition jth value is greater than 0  &&(and)   arr[j] is greater than element stored in curr variable  than swapp it
       while (j >=0 && arr[j]>curr){    
              //  declering  both element is equal [12,43,23] =>
        arr[j+1] = arr[j];   
           //  declering   [12,23,43]
        j=j-1;               
       } 
           //(curr) to permenent array(arr)
     arr[j+1] = curr;               
    }
    return arr;
}

let arr = [12,43,54,56,7,457,79,745,687,64,34]
console.log(insertionsort(arr));
========================================================================================*/




/*//----------insertion using for loop------------


(  Problem -- [ 2(A) ])

function insertion(array){
    for (i = 1; i < array.length; i++){
        for (j = i; j > 0; j--){
            if ( array[j]<array[j-1]) {
        [array[j] , array[j-1]] = [array[j-1] , array[j]]
            }else {
                break;
            }
        }
    }
    return array;
}
let array  = [43, 6, 78, 28, 66];
console.log(insertion(array));
//====================================================================================*/



//----------------------------- selection sorting-------------------------------------

//[Problem( 3 )]
/*
function selectionsort(arr) {
    let min_index;
    // one by one gating the min element as a min_index
    for (let i = 0; i < arr.length - 1; i++) {
        //gating  i(th) element as a min_index
        min_index = i;
        //iterating on a inner loop
        for (let j = i + 1; j < arr.length; j++) {
            // comparing with min_index 
            if (arr[j] < arr[min_index]) {
                min_index = j;
                // swapping with the min_index
                temp = arr[min_index];
                arr[min_index] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
let arr = [2, 4, 5, 7, 3, 4, 6, 26, 2, 362, 3];
console.log(selectionsort(arr));  */
//=======================================================



//------------------------Merge Sort------------------------

//(problem[ 4 ]);

/*
function mergeSort(arr){
    let half = arr.length/2;
    if(arr.length<=1){
        return arr;
    }
    const left = arr.splice(0,half);
    const right = arr;

    let leftSorted = mergeSort(left);
    let rightsorted = mergeSort(right);

    return merge(leftSorted,rightsorted);
}

function merge(L,R){
    let sortedarr = [];

    while ( L.length && R.length){
        if(L[0]<R[0]){
            sortedarr.push(L.shift());

        }else{
            sortedarr.push(R.shift());
        }

    }
    return [...sortedarr,...L,...R];
}

let arr = [3,4,5,2,3,52,34,63,2];

console.log(mergeSort(arr)); */

//=====================================================================