let counter = 0;
let areArraysSame = function(array1, array2) {
    for(let i = 0; i<array1.length; i++){
        if(array1[i] == array2[i]){
            counter++;
        }
    }
    if(counter == array1.length){
        console.log("These arrays are the same");
    } else{
        console.log("These arrays are not the same");
    }
};