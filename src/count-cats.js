const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let numCats = 0;
    for(let i=0;i<arr.length;i++){
      if(arr[i].includes('^^')){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==='^^'){
                numCats+=1;
            }
        }
      }
    }
    return numCats;
};
