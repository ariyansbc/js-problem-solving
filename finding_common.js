 
 var arr1 = [6,5,8,9,4,20];
 var arr2 = [7,99,8,5,4,15];
 var common = [];
 
 var i , j,element;
 for(i = 0 ; i< arr1.length ; i++) {

     for(j=0 ; j < arr2.length ; j++) {

        if(arr1[i]==arr2[j]) {
            element = arr1[i];
            common.push(element);
        }

     }
 }
console.log(common);
