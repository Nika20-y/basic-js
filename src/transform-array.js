const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {

    if(Array.isArray(array)){
        let result = [];
        let i = 0;
        const sequences = {
            '--discard-next': function (){
                i++;
            },
            '--discard-prev': function (){
                if(result[result.length-1]===array[i-1]){
                    result.pop();}
            },
            '--double-next': function (){
                if(array[i+1]!==undefined){
                    result.push(array[i+1])}
            },
            '--double-prev': function (){
                if(array[i-1]!==undefined&&array[i-1]===result[result.length-1]){
                    result.push(array[i-1])}
            }
        }
        while(i<array.length){

            if(sequences[array[i]]!==undefined){
                sequences[array[i]]();}

            else if(array[i]===result[result.length-1]){
                continue;
            }

            else{
                result.push(array[i]);
            }
            i++;
        }

        return result;
    }
    if(array.length===0){
        return [];
    }
    else {
        throw new Error('Error')
    }

};
