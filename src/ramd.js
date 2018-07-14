var $ = function(s) {
    return Array.prototype.slice.call(document.querySelectorAll(s))
}

function on(selector, type, fn) {
   var i = selector.length;
     while (i--) {
        selector[i].addEventListener(type, fn, false);
     }
}
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    var d = new Date();
    return d.getTime() + "-" + S4() + S4() + S4();
}

function setStorage (n,o){
  return localStorage.setItem(n, JSON.stringify(o));
}

function getStorage (n){
	return JSON.parse(localStorage.getItem(n));
}

function render(obj, selector) {
    selector.innerHTML = "";
    var len = Object.keys(obj).length;
    var v = Object.values(obj);
    var k = Object.keys(obj);

    for (var i = 0; i < len; i++) {
        var newElement = document.createElement(v[i].element);
        newElement.innerHTML = v[i].text;
        newElement.style.cssText = v[i].cssStyle;
        newElement.id = v[i].id;
        if (v[i].className !== ""){newElement.classList.add(v[i].className)}
        newElement.setAttribute('data-keys', k[i]);
        selector.appendChild(newElement.cloneNode(true));
    }
}

function renderOne(obj, key, parentSelector, cssStyle, id, className) {
    var newElement = document.createElement(obj[key].element);
    newElement.innerHTML = obj[key].text;
    newElement.style.cssText = cssStyle;
    newElement.id = id || "";
    if (className !== null){newElement.classList.add(className);}
    newElement.setAttribute('data-keys', key);
    parentSelector.appendChild(newElement.cloneNode(true));
}

function add(obj, parentSelector, e, v, cssStyle, id, className) {
    var newKey = guid();
    obj[newKey] = {
        element: e,
        text: v,
        cssStyle:cssStyle || "",
        id:id || "",
        className:className || ""
    }
    return renderOne(obj, newKey, parentSelector, cssStyle, id, className);
}

function modify(obj, key, text) {
  obj[key].text = text;
}

function del(obj, selector) {
  if(Array.isArray(selector) === true){
    var i = selector.length;
    while(i--){
      var key = selector[i].getAttribute('data-keys');
      delete obj[key];
      (selector)[i].parentNode.removeChild((selector)[i]);
    }
  }else {
    var key1 = selector.getAttribute('data-keys');
    delete obj[key1];
    selector.parentNode.removeChild(selector);
  }
}
