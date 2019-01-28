// Helper Functions
const mainObj = require('./main-object');


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getObjKeyValuesInArray(obj, keys) {
  var arr = [];
  for (var i = 0; i < keys.length; i++) {
    arr.push(obj[keys[i]]);
  }
  return arr;
}
/**
 * Storing variable info inside an global object 
 *
 */
function storeVarInfo(name, type, key) {
    let typeArray = [];
    if (key == undefined) {
      var keys = Object.keys(mainObj.task.varNames);
      for (var i = 0; i < keys.length; i++) {
        if (mainObj.task.varNames[keys[i]] == name) {
          key = keys[i][0];
        }
      }
    }
    if (type != undefined && type.length > 1) {
      let tmpArr = type.split("");
      for (var i = 0; i < tmpArr.length; i++) {
        typeArray.push(mainObj.dataTypes[tmpArr[i]]);
      }
    } else if (type != undefined && type.length == 1) {
      typeArray = mainObj.dataTypes[type];
    } else {
      typeArray = "random";
    }
    return {
      key,
      name,
      type: typeArray
    };
  }
  function checkAndAddToUsedKeys(obj) {
    var found = mainObj.task.usedVarNames.some(function(el) {
      return el.key === obj.key;
    });
    if (!found) {
      mainObj.task.usedVarNames.push(obj);
      mainObj.task.usableVarNames.splice(mainObj.task.usableVarNames.indexOf(obj["name"]), 1);
    }
  }

  function getProperty(arr, key) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].key == key) {
        return arr[i].name;
      }
    }
  }



  function getUsedVar(arr, key) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].key == key) {
        return arr[i];
      }
    }
  }

  /**
   * This method checks the array for objects that has the type we are 
   * lookingfor..
   * [arr] = array of objects, [type] = "number,string,object,array.."
   */
  function getSpecificVarTypes(arr, type) {
    let tmp = [];
    arr.forEach(function(entry) {
      if (entry.type == type) {
        tmp.push(entry);
      }
    });
    return tmp;
  }
  

  module.exports = {
    random,
    getObjKeyValuesInArray,
    checkAndAddToUsedKeys,
    getSpecificVarTypes,
    storeVarInfo
  }