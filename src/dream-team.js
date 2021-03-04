const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrayName) {
  let teamName = [];
  if(arrayName===null||arrayName===undefined){
    return false;
  }
  for(let i=0;i<arrayName.length;i++){
    if(typeof arrayName[i]==="string"){
      arrayName[i]= arrayName[i].replace(/^ +/gm, '');
      teamName.push(arrayName[i][0].toUpperCase());
    }
  }

  teamName.sort();
  if(teamName.length>0){
    return teamName.join('');
  }
  return false;
};
