


  var obj = { prop: 1 };
  function updateObjectWithKeyAndValue(obj, key, value){

//var newObj = Object.assign({}, obj,{key:value});
obj.key=value;
  return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj.key=value;
    return obj;

}
function deleteFromObjectByKey(obj, key){
delete obj.key;
return obj;

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;

}
