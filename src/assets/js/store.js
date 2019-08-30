export function saveToLocal(id, key, value){
  let seller = localStorage._seller_;
  if (!seller){
    seller = {};
    seller[id] = {};
    seller[id][key] = value;
  } else {
    seller = JSON.parse(seller);
    if(!seller[id]){
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage._seller_ = JSON.stringify(seller);
}

export function loadFromLocal(id, key ,def){
  let seller = window.localStorage._seller_;
  if (!seller){
    return def;
  } else { 
    seller = JSON.parse(seller)[id];
    if (!seller){
      return def;
    } else {
      return seller[key] || def;
    }
  }
}