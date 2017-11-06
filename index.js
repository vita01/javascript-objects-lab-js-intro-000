


  var obj = { prop: 1 };
  function updateObjectWithKeyAndValue(object, key, value){

var newObj = Object.assign({}, obj,{key:value});
//object.key=value;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key=value;
    return object;

}
function deleteFromObjectByKey(object, key){
delete object.key;
return object;

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;

}
