const { nodes, utils } = require('stylus')

module.exports = function (key, value) {
  return function (style) {
    style.define(key, convert(value));
  }
}

function convert (obj) {
  var ret = new nodes.Object();

  for (var key in obj) {
    var val = obj[key];
    if ('object' == typeof val) {
      ret.set(key, convert(val));
    } else {
      val = utils.coerce(val);
      if ('string' == val.nodeName) {
        val = utils.parseString(val.string);
      }
      ret.set(key, val);
    }
  }
  return ret;
}
