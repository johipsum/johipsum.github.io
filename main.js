"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(o,t,r){return t&&e(o.prototype,t),r&&e(o,r),o}}(),Colorizer=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";_classCallCheck(this,e),this._root=document.querySelector(o),this._children=document.querySelectorAll(o+" *")}return _createClass(e,[{key:"getRandomColorRgba",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1,o=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),n=e;return"rgba("+o+", "+t+", "+r+", "+n+")"}},{key:"setBackgroundColor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getRandomColorRgba();this._root.style.backgroundColor=e}}]),e}();document.addEventListener("DOMContentLoaded",function(){var e=new Colorizer("body");setInterval(function(){return e.setBackgroundColor()},1e3)});