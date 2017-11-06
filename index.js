

//var obj=new Object([prop: 1])
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
  var newObj = Object.assign({}, obj)
 
//newObj // { foo: 'bar' }
 
delete newObj.key // true
//delete obj.key;
return newObj;

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;

}
