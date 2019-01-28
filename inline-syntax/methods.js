const helpers = require('./helpers');
const mainObj = require('./main-object');


  function replaceVarNames(match, p1, p2, offset, string) {
    let key, type, nameVar, infoVar;
    key = p1;
    type = p2;
    (nameVar = mainObj.task.varNames[key]),
      (infoVar = helpers.storeVarInfo(nameVar, type, key));
    helpers.checkAndAddToUsedKeys(infoVar);
    if(p1 === "g" || p2 === "$g"){
      console.log(match,offset)
    }
   
    
    return nameVar;
  }

  function redeclareVars(match, p1, p2, offset, string){
    if(match === "$rdc_"){
      return helpers.random(0, 1) === 1 ? "var " : "";
    } else {
      let typeOfVar = mainObj.dataTypes[p1];
      let arrayOfType = helpers.getSpecificVarTypes(mainObj.task.usedVarNames, typeOfVar);
      let rnd = helpers.random(0, arrayOfType.length - 1);
      let nameVar = arrayOfType[rnd].name;
      return helpers.random(0, 1) === 1 ? "var " + nameVar : nameVar; 
    }
  }

  function declareRandomVars(match,p1,p2,offset,string){
    let nameVar;
      rnd = helpers.random(0, mainObj.task.usableVarNames.length - 1);
      if (p2 == undefined) {
        let type = p1;
        nameVar = mainObj.task.usableVarNames[rnd];
        var infoVar = helpers.storeVarInfo(nameVar, type);
      } else {
        nameVar = mainObj.task.usableVarNames[rnd];
        var infoVar = helpers.storeVarInfo(nameVar);
      }
      helpers.checkAndAddToUsedKeys(infoVar);
      return nameVar;
    }

  module.exports = {
    replaceVarNames,
    redeclareVars,
    declareRandomVars
  }