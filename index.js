var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function updateObjectWithKeyAndValue (obj, key, value) {
  obj.key = value;
  return obj;
}