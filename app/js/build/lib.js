/* Web Font Loader v1.6.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments)}var p=Date.now||function(){return+new Date};function r(a,b){this.D=a;this.m=b||a;this.F=this.m.document}r.prototype.createElement=function(a,b,c){a=this.F.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.F.createTextNode(c));return a};function s(a,b,c){a=a.F.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}
function t(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),f=0;f<b.length;f+=1){for(var e=!1,g=0;g<d.length;g+=1)if(b[f]===d[g]){e=!0;break}e||d.push(b[f])}b=[];for(f=0;f<d.length;f+=1){e=!1;for(g=0;g<c.length;g+=1)if(d[f]===c[g]){e=!0;break}e||b.push(d[f])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(a,b){for(var c=a.className.split(/\s+/),d=0,f=c.length;d<f;d++)if(c[d]==b)return!0;return!1}
function v(a){if("string"===typeof a.da)return a.da;var b=a.m.location.protocol;"about:"==b&&(b=a.D.location.protocol);return"https:"==b?"https:":"http:"}function w(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b,media:"all"}),d=!1;c.onload=function(){d||(d=!0)};c.onerror=function(){d||(d=!0)};s(a,"head",c)}
function x(a,b,c,d){var f=a.F.getElementsByTagName("head")[0];if(f){var e=a.createElement("script",{src:b}),g=!1;e.onload=e.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&f.removeChild(e))};f.appendChild(e);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return e}return null};function y(a){this.ca=a||"-"}y.prototype.d=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ca)};function A(a,b){this.V=a;this.N=4;this.H="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.H=c[1],this.N=parseInt(c[2],10))}A.prototype.getName=function(){return this.V};function B(a){return a.H+a.N}function ca(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function da(a,b){this.a=a;this.h=a.m.document.documentElement;this.J=b;this.f="wf";this.e=new y("-");this.Z=!1!==b.events;this.u=!1!==b.classes}function ea(a){a.u&&t(a.h,[a.e.d(a.f,"loading")]);C(a,"loading")}function D(a){if(a.u){var b=u(a.h,a.e.d(a.f,"active")),c=[],d=[a.e.d(a.f,"loading")];b||c.push(a.e.d(a.f,"inactive"));t(a.h,c,d)}C(a,"inactive")}function C(a,b,c){if(a.Z&&a.J[b])if(c)a.J[b](c.getName(),B(c));else a.J[b]()};function fa(){this.t={}}function ga(a,b,c){var d=[],f;for(f in b)if(b.hasOwnProperty(f)){var e=a.t[f];e&&d.push(e(b[f],c))}return d};function E(a,b){this.a=a;this.q=b;this.j=this.a.createElement("span",{"aria-hidden":"true"},this.q)}
function G(a,b){var c=a.j,d;d=[];for(var f=b.V.split(/,\s*/),e=0;e<f.length;e++){var g=f[e].replace(/['"]/g,"");-1==g.indexOf(" ")?d.push(g):d.push("'"+g+"'")}d=d.join(",");f="normal";"o"===b.H?f="oblique":"i"===b.H&&(f="italic");c.style.cssText="display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+d+";"+("font-style:"+f+";font-weight:"+(b.N+"00")+";")}
function H(a){s(a.a,"body",a.j)}E.prototype.remove=function(){var a=this.j;a.parentNode&&a.parentNode.removeChild(a)};function I(a,b,c,d,f,e,g){this.O=a;this.ba=b;this.a=c;this.g=d;this.q=g||"BESbswy";this.s={};this.M=f||3E3;this.T=e||null;this.C=this.B=this.w=this.v=null;this.v=new E(this.a,this.q);this.w=new E(this.a,this.q);this.B=new E(this.a,this.q);this.C=new E(this.a,this.q);G(this.v,new A(this.g.getName()+",serif",B(this.g)));G(this.w,new A(this.g.getName()+",sans-serif",B(this.g)));G(this.B,new A("serif",B(this.g)));G(this.C,new A("sans-serif",B(this.g)));H(this.v);H(this.w);H(this.B);H(this.C)}
var J={ga:"serif",fa:"sans-serif"},K=null;function L(){if(null===K){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);K=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return K}I.prototype.start=function(){this.s.serif=this.B.j.offsetWidth;this.s["sans-serif"]=this.C.j.offsetWidth;this.ea=p();M(this)};function N(a,b,c){for(var d in J)if(J.hasOwnProperty(d)&&b===a.s[J[d]]&&c===a.s[J[d]])return!0;return!1}
function M(a){var b=a.v.j.offsetWidth,c=a.w.j.offsetWidth,d;(d=b===a.s.serif&&c===a.s["sans-serif"])||(d=L()&&N(a,b,c));d?p()-a.ea>=a.M?L()&&N(a,b,c)&&(null===a.T||a.T.hasOwnProperty(a.g.getName()))?O(a,a.O):O(a,a.ba):ha(a):O(a,a.O)}function ha(a){setTimeout(n(function(){M(this)},a),50)}function O(a,b){setTimeout(n(function(){this.v.remove();this.w.remove();this.B.remove();this.C.remove();b(this.g)},a),0)};function P(a,b,c){this.a=a;this.o=b;this.K=0;this.X=this.S=!1;this.M=c}P.prototype.$=function(a){var b=this.o;b.u&&t(b.h,[b.e.d(b.f,a.getName(),B(a).toString(),"active")],[b.e.d(b.f,a.getName(),B(a).toString(),"loading"),b.e.d(b.f,a.getName(),B(a).toString(),"inactive")]);C(b,"fontactive",a);this.X=!0;Q(this)};
P.prototype.aa=function(a){var b=this.o;if(b.u){var c=u(b.h,b.e.d(b.f,a.getName(),B(a).toString(),"active")),d=[],f=[b.e.d(b.f,a.getName(),B(a).toString(),"loading")];c||d.push(b.e.d(b.f,a.getName(),B(a).toString(),"inactive"));t(b.h,d,f)}C(b,"fontinactive",a);Q(this)};function Q(a){0==--a.K&&a.S&&(a.X?(a=a.o,a.u&&t(a.h,[a.e.d(a.f,"active")],[a.e.d(a.f,"loading"),a.e.d(a.f,"inactive")]),C(a,"active")):D(a.o))};function R(a){this.D=a;this.p=new fa;this.U=0;this.P=this.Q=!0}R.prototype.load=function(a){this.a=new r(this.D,a.context||this.D);this.Q=!1!==a.events;this.P=!1!==a.classes;ia(this,new da(this.a,a),a)};
function ja(a,b,c,d,f){var e=0==--a.U;(a.P||a.Q)&&setTimeout(function(){var a=f||null,l=d||null||{};if(0===c.length&&e)D(b.o);else{b.K+=c.length;e&&(b.S=e);var h,k=[];for(h=0;h<c.length;h++){var m=c[h],z=l[m.getName()],q=b.o,F=m;q.u&&t(q.h,[q.e.d(q.f,F.getName(),B(F).toString(),"loading")]);C(q,"fontloading",F);q=null;q=new I(n(b.$,b),n(b.aa,b),b.a,m,b.M,a,z);k.push(q)}for(h=0;h<k.length;h++)k[h].start()}},0)}
function ia(a,b,c){var d=[],f=c.timeout;ea(b);var d=ga(a.p,c,a.a),e=new P(a.a,b,f);a.U=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,c,d){ja(a,e,b,c,d)})};function S(a,b,c){this.I=a?a:b+ka;this.k=[];this.L=[];this.Y=c||""}var ka="//fonts.googleapis.com/css";S.prototype.d=function(){if(0==this.k.length)throw Error("No fonts to load!");if(-1!=this.I.indexOf("kit="))return this.I;for(var a=this.k.length,b=[],c=0;c<a;c++)b.push(this.k[c].replace(/ /g,"+"));a=this.I+"?family="+b.join("%7C");0<this.L.length&&(a+="&subset="+this.L.join(","));0<this.Y.length&&(a+="&text="+encodeURIComponent(this.Y));return a};function T(a){this.k=a;this.W=[];this.G={}}
var U={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},la={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ma={i:"i",italic:"i",n:"n",normal:"n"},na=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
T.prototype.parse=function(){for(var a=this.k.length,b=0;b<a;b++){var c=this.k[b].split(":"),d=c[0].replace(/\+/g," "),f=["n4"];if(2<=c.length){var e;var g=c[1];e=[];if(g)for(var g=g.split(","),l=g.length,h=0;h<l;h++){var k;k=g[h];if(k.match(/^[\w-]+$/))if(k=na.exec(k.toLowerCase()),null==k)k="";else{var m;m=k[1];if(null==m||""==m)m="4";else{var z=la[m];m=z?z:isNaN(m)?"4":m.substr(0,1)}k=k[2];k=[null==k||""==k?"n":ma[k],m].join("")}else k="";k&&e.push(k)}0<e.length&&(f=e);3==c.length&&(c=c[2],e=[],
c=c?c.split(","):e,0<c.length&&(c=U[c[0]])&&(this.G[d]=c))}this.G[d]||(c=U[d])&&(this.G[d]=c);for(c=0;c<f.length;c+=1)this.W.push(new A(d,f[c]))}};function V(a,b){this.a=a;this.c=b}var oa={Arimo:!0,Cousine:!0,Tinos:!0};V.prototype.load=function(a){for(var b=this.a,c=new S(this.c.api,v(b),this.c.text),d=this.c.families,f=d.length,e=0;e<f;e++){var g=d[e].split(":");3==g.length&&c.L.push(g.pop());var l="";2==g.length&&""!=g[1]&&(l=":");c.k.push(g.join(l))}d=new T(d);d.parse();w(b,c.d());a(d.W,d.G,oa)};function W(a,b){this.a=a;this.c=b;this.R=[]}W.prototype.A=function(a){var b=this.a;return v(this.a)+(this.c.api||"//f.fontdeck.com/s/css/js/")+(b.m.location.hostname||b.D.location.hostname)+"/"+a+".js"};
W.prototype.load=function(a){var b=this.c.id,c=this.a.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,l=c.fonts.length;g<l;++g){var h=c.fonts[g];d.R.push(new A(h.name,ca("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.R)},x(this.a,this.A(b),function(b){b&&a([])})):a([])};function X(a,b){this.a=a;this.c=b}X.prototype.A=function(a){return(this.c.api||"https://use.typekit.net")+"/"+a+".js"};X.prototype.load=function(a){var b=this.c.id,c=this.a.m;b?x(this.a,this.A(b),function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var f=[],e=0;e<b.length;e+=2)for(var g=b[e],l=b[e+1],h=0;h<l.length;h++)f.push(new A(g,l[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(k){}a(f)}},2E3):a([])};function Y(a,b){this.a=a;this.c=b}Y.prototype.A=function(a,b){var c=v(this.a),d=(this.c.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};Y.prototype.load=function(a){var b=this.c.projectId,c=this.c.version;if(b){var d=this.a.m;x(this.a,this.A(b,c),function(c){if(c)a([]);else if(d["__mti_fntLst"+b]){c=d["__mti_fntLst"+b]();var e=[];if(c)for(var g=0;g<c.length;g++)e.push(new A(c[g].fontfamily));a(e)}else a([])}).id="__MonotypeAPIScript__"+b}else a([])};function pa(a,b){this.a=a;this.c=b}pa.prototype.load=function(a){var b,c,d=this.c.urls||[],f=this.c.families||[],e=this.c.testStrings||{};b=0;for(c=d.length;b<c;b++)w(this.a,d[b]);d=[];b=0;for(c=f.length;b<c;b++){var g=f[b].split(":");if(g[1])for(var l=g[1].split(","),h=0;h<l.length;h+=1)d.push(new A(g[0],l[h]));else d.push(new A(g[0]))}a(d,e)};var Z=new R(window);Z.p.t.custom=function(a,b){return new pa(b,a)};Z.p.t.fontdeck=function(a,b){return new W(b,a)};Z.p.t.monotype=function(a,b){return new Y(b,a)};Z.p.t.typekit=function(a,b){return new X(b,a)};Z.p.t.google=function(a,b){return new V(b,a)};var $={load:n(Z.load,Z)};"function"===typeof define&&define.amd?define(function(){return $}):"undefined"!==typeof module&&module.exports?module.exports=$:(window.WebFont=$,window.WebFontConfig&&Z.load(window.WebFontConfig));}());


/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*! jQuery UI - v1.10.4 - 2014-06-19
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.sortable.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( $, undefined ) {

var uuid = 0,
	runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.10.4",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	scrollParent: function() {
		var scrollParent;
		if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		}

		return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	uniqueId: function() {
		return this.each(function() {
			if ( !this.id ) {
				this.id = "ui-id-" + (++uuid);
			}
		});
	},

	removeUniqueId: function() {
		return this.each(function() {
			if ( runiqueId.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.extend( $.ui, {
	// $.ui.plugin is deprecated. Use $.widget() extensions instead.
	plugin: {
		add: function( module, option, set ) {
			var i,
				proto = $.ui[ module ].prototype;
			for ( i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var i,
				set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
				return;
			}

			for ( i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},

	// only used by resizable
	hasScroll: function( el, a ) {

		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	}
});

})( jQuery );
(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

})( jQuery );
(function( $, undefined ) {

var mouseHandled = false;
$( document ).mouseup( function() {
	mouseHandled = false;
});

$.widget("ui.mouse", {
	version: "1.10.4",
	options: {
		cancel: "input,textarea,button,select,option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.bind("mousedown."+this.widgetName, function(event) {
				return that._mouseDown(event);
			})
			.bind("click."+this.widgetName, function(event) {
				if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
					$.removeData(event.target, that.widgetName + ".preventClickEvent");
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind("."+this.widgetName);
		if ( this._mouseMoveDelegate ) {
			$(document)
				.unbind("mousemove."+this.widgetName, this._mouseMoveDelegate)
				.unbind("mouseup."+this.widgetName, this._mouseUpDelegate);
		}
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		if( mouseHandled ) { return; }

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = (event.which === 1),
			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				that.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
			$.removeData(event.target, this.widgetName + ".preventClickEvent");
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return that._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return that._mouseUp(event);
		};
		$(document)
			.bind("mousemove."+this.widgetName, this._mouseMoveDelegate)
			.bind("mouseup."+this.widgetName, this._mouseUpDelegate);

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// IE mouseup check - mouseup happened when mouse was out of window
		if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
			return this._mouseUp(event);
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		$(document)
			.unbind("mousemove."+this.widgetName, this._mouseMoveDelegate)
			.unbind("mouseup."+this.widgetName, this._mouseUpDelegate);

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target === this._mouseDownEvent.target) {
				$.data(event.target, this.widgetName + ".preventClickEvent", true);
			}

			this._mouseStop(event);
		}

		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(/* event */) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(/* event */) {},
	_mouseDrag: function(/* event */) {},
	_mouseStop: function(/* event */) {},
	_mouseCapture: function(/* event */) { return true; }
});

})(jQuery);
(function( $, undefined ) {

$.widget("ui.draggable", $.ui.mouse, {
	version: "1.10.4",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
			this.element[0].style.position = "relative";
		}
		if (this.options.addClasses){
			this.element.addClass("ui-draggable");
		}
		if (this.options.disabled){
			this.element.addClass("ui-draggable-disabled");
		}

		this._mouseInit();

	},

	_destroy: function() {
		this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
		this._mouseDestroy();
	},

	_mouseCapture: function(event) {

		var o = this.options;

		// among others, prevent a drag on a resizable-handle
		if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle(event);
		if (!this.handle) {
			return false;
		}

		$(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
			$("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>")
			.css({
				width: this.offsetWidth+"px", height: this.offsetHeight+"px",
				position: "absolute", opacity: "0.001", zIndex: 1000
			})
			.css($(this).offset())
			.appendTo("body");
		});

		return true;

	},

	_mouseStart: function(event) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		this.helper.addClass("ui-draggable-dragging");

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if($.ui.ddmanager) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent();
		this.offsetParent = this.helper.offsetParent();
		this.offsetParentCssPosition = this.offsetParent.css( "position" );

		//The element's absolute position on the page minus margins
		this.offset = this.positionAbs = this.element.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		//Reset scroll cache
		this.offset.scroll = false;

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if(this._trigger("start", event) === false) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ($.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(this, event);
		}


		this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

		//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart(this, event);
		}

		return true;
	},

	_mouseDrag: function(event, noPropagation) {
		// reset any necessary cached properties (see #5009)
		if ( this.offsetParentCssPosition === "fixed" ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		//Call plugins and callbacks and use the resulting position if something is returned
		if (!noPropagation) {
			var ui = this._uiHash();
			if(this._trigger("drag", event, ui) === false) {
				this._mouseUp({});
				return false;
			}
			this.position = ui.position;
		}

		if(!this.options.axis || this.options.axis !== "y") {
			this.helper[0].style.left = this.position.left+"px";
		}
		if(!this.options.axis || this.options.axis !== "x") {
			this.helper[0].style.top = this.position.top+"px";
		}
		if($.ui.ddmanager) {
			$.ui.ddmanager.drag(this, event);
		}

		return false;
	},

	_mouseStop: function(event) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ($.ui.ddmanager && !this.options.dropBehaviour) {
			dropped = $.ui.ddmanager.drop(this, event);
		}

		//if a drop comes from outside (a sortable)
		if(this.dropped) {
			dropped = this.dropped;
			this.dropped = false;
		}

		//if the original element is no longer in the DOM don't bother to continue (see #8269)
		if ( this.options.helper === "original" && !$.contains( this.element[ 0 ].ownerDocument, this.element[ 0 ] ) ) {
			return false;
		}

		if((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
			$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				if(that._trigger("stop", event) !== false) {
					that._clear();
				}
			});
		} else {
			if(this._trigger("stop", event) !== false) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function(event) {
		//Remove frame helpers
		$("div.ui-draggable-iframeFix").each(function() {
			this.parentNode.removeChild(this);
		});

		//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
		if( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop(this, event);
		}

		return $.ui.mouse.prototype._mouseUp.call(this, event);
	},

	cancel: function() {

		if(this.helper.is(".ui-draggable-dragging")) {
			this._mouseUp({});
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function(event) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_createHelper: function(event) {

		var o = this.options,
			helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);

		if(!helper.parents("body").length) {
			helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
		}

		if(helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
			helper.css("position", "absolute");
		}

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		//This needs to be actually done for all browsers, since pageX/pageY includes this information
		//Ugly IE fix
		if((this.offsetParent[0] === document.body) ||
			(this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition === "relative") {
			var p = this.element.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.element.css("marginLeft"),10) || 0),
			top: (parseInt(this.element.css("marginTop"),10) || 0),
			right: (parseInt(this.element.css("marginRight"),10) || 0),
			bottom: (parseInt(this.element.css("marginBottom"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var over, c, ce,
			o = this.options;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() - this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() + ( $( window ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document") {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if( !ce ) {
			return;
		}

		over = c.css( "overflow" ) !== "hidden";

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ) ,
			( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) - ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) - ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) - this.helperProportions.width - this.margins.left - this.margins.right,
			( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) - ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) - ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) - this.helperProportions.height - this.margins.top  - this.margins.bottom
		];
		this.relative_container = c;
	},

	_convertPositionTo: function(d, pos) {

		if(!pos) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scroll = this.cssPosition === "absolute" && !( this.scrollParent[ 0 ] !== document && $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ? this.offsetParent : this.scrollParent;

		//Cache the scroll
		if (!this.offset.scroll) {
			this.offset.scroll = {top : scroll.scrollTop(), left : scroll.scrollLeft()};
		}

		return {
			top: (
				pos.top	+																// The absolute mouse position
				this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top * mod -										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top ) * mod )
			),
			left: (
				pos.left +																// The absolute mouse position
				this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left ) * mod )
			)
		};

	},

	_generatePosition: function(event) {

		var containment, co, top, left,
			o = this.options,
			scroll = this.cssPosition === "absolute" && !( this.scrollParent[ 0 ] !== document && $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ? this.offsetParent : this.scrollParent,
			pageX = event.pageX,
			pageY = event.pageY;

		//Cache the scroll
		if (!this.offset.scroll) {
			this.offset.scroll = {top : scroll.scrollTop(), left : scroll.scrollLeft()};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( this.originalPosition ) {
			if ( this.containment ) {
				if ( this.relative_container ){
					co = this.relative_container.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				}
				else {
					containment = this.containment;
				}

				if(event.pageX - this.offset.click.left < containment[0]) {
					pageX = containment[0] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top < containment[1]) {
					pageY = containment[1] + this.offset.click.top;
				}
				if(event.pageX - this.offset.click.left > containment[2]) {
					pageX = containment[2] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top > containment[3]) {
					pageY = containment[3] + this.offset.click.top;
				}
			}

			if(o.grid) {
				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
				top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
				pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
				pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY -																	// The absolute mouse position
				this.offset.click.top	-												// Click offset (relative to the element)
				this.offset.relative.top -												// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
				( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top )
			),
			left: (
				pageX -																	// The absolute mouse position
				this.offset.click.left -												// Click offset (relative to the element)
				this.offset.relative.left -												// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
				( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left )
			)
		};

	},

	_clear: function() {
		this.helper.removeClass("ui-draggable-dragging");
		if(this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function(type, event, ui) {
		ui = ui || this._uiHash();
		$.ui.plugin.call(this, type, [event, ui]);
		//The absolute position has to be recalculated after plugins
		if(type === "drag") {
			this.positionAbs = this._convertPositionTo("absolute");
		}
		return $.Widget.prototype._trigger.call(this, type, event, ui);
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

});

$.ui.plugin.add("draggable", "connectToSortable", {
	start: function(event, ui) {

		var inst = $(this).data("ui-draggable"), o = inst.options,
			uiSortable = $.extend({}, ui, { item: inst.element });
		inst.sortables = [];
		$(o.connectToSortable).each(function() {
			var sortable = $.data(this, "ui-sortable");
			if (sortable && !sortable.options.disabled) {
				inst.sortables.push({
					instance: sortable,
					shouldRevert: sortable.options.revert
				});
				sortable.refreshPositions();	// Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
				sortable._trigger("activate", event, uiSortable);
			}
		});

	},
	stop: function(event, ui) {

		//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
		var inst = $(this).data("ui-draggable"),
			uiSortable = $.extend({}, ui, { item: inst.element });

		$.each(inst.sortables, function() {
			if(this.instance.isOver) {

				this.instance.isOver = 0;

				inst.cancelHelperRemoval = true; //Don't remove the helper in the draggable instance
				this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)

				//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: "valid/invalid"
				if(this.shouldRevert) {
					this.instance.options.revert = this.shouldRevert;
				}

				//Trigger the stop of the sortable
				this.instance._mouseStop(event);

				this.instance.options.helper = this.instance.options._helper;

				//If the helper has been the original item, restore properties in the sortable
				if(inst.options.helper === "original") {
					this.instance.currentItem.css({ top: "auto", left: "auto" });
				}

			} else {
				this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance
				this.instance._trigger("deactivate", event, uiSortable);
			}

		});

	},
	drag: function(event, ui) {

		var inst = $(this).data("ui-draggable"), that = this;

		$.each(inst.sortables, function() {

			var innermostIntersecting = false,
				thisSortable = this;

			//Copy over some variables to allow calling the sortable's native _intersectsWith
			this.instance.positionAbs = inst.positionAbs;
			this.instance.helperProportions = inst.helperProportions;
			this.instance.offset.click = inst.offset.click;

			if(this.instance._intersectsWith(this.instance.containerCache)) {
				innermostIntersecting = true;
				$.each(inst.sortables, function () {
					this.instance.positionAbs = inst.positionAbs;
					this.instance.helperProportions = inst.helperProportions;
					this.instance.offset.click = inst.offset.click;
					if (this !== thisSortable &&
						this.instance._intersectsWith(this.instance.containerCache) &&
						$.contains(thisSortable.instance.element[0], this.instance.element[0])
					) {
						innermostIntersecting = false;
					}
					return innermostIntersecting;
				});
			}


			if(innermostIntersecting) {
				//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
				if(!this.instance.isOver) {

					this.instance.isOver = 1;
					//Now we fake the start of dragging for the sortable instance,
					//by cloning the list group item, appending it to the sortable and using it as inst.currentItem
					//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
					this.instance.currentItem = $(that).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
					this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it
					this.instance.options.helper = function() { return ui.helper[0]; };

					event.target = this.instance.currentItem[0];
					this.instance._mouseCapture(event, true);
					this.instance._mouseStart(event, true, true);

					//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
					this.instance.offset.click.top = inst.offset.click.top;
					this.instance.offset.click.left = inst.offset.click.left;
					this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
					this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;

					inst._trigger("toSortable", event);
					inst.dropped = this.instance.element; //draggable revert needs that
					//hack so receive/update callbacks work (mostly)
					inst.currentItem = inst.element;
					this.instance.fromOutside = inst;

				}

				//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
				if(this.instance.currentItem) {
					this.instance._mouseDrag(event);
				}

			} else {

				//If it doesn't intersect with the sortable, and it intersected before,
				//we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
				if(this.instance.isOver) {

					this.instance.isOver = 0;
					this.instance.cancelHelperRemoval = true;

					//Prevent reverting on this forced stop
					this.instance.options.revert = false;

					// The out event needs to be triggered independently
					this.instance._trigger("out", event, this.instance._uiHash(this.instance));

					this.instance._mouseStop(event, true);
					this.instance.options.helper = this.instance.options._helper;

					//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
					this.instance.currentItem.remove();
					if(this.instance.placeholder) {
						this.instance.placeholder.remove();
					}

					inst._trigger("fromSortable", event);
					inst.dropped = false; //draggable revert needs that
				}

			}

		});

	}
});

$.ui.plugin.add("draggable", "cursor", {
	start: function() {
		var t = $("body"), o = $(this).data("ui-draggable").options;
		if (t.css("cursor")) {
			o._cursor = t.css("cursor");
		}
		t.css("cursor", o.cursor);
	},
	stop: function() {
		var o = $(this).data("ui-draggable").options;
		if (o._cursor) {
			$("body").css("cursor", o._cursor);
		}
	}
});

$.ui.plugin.add("draggable", "opacity", {
	start: function(event, ui) {
		var t = $(ui.helper), o = $(this).data("ui-draggable").options;
		if(t.css("opacity")) {
			o._opacity = t.css("opacity");
		}
		t.css("opacity", o.opacity);
	},
	stop: function(event, ui) {
		var o = $(this).data("ui-draggable").options;
		if(o._opacity) {
			$(ui.helper).css("opacity", o._opacity);
		}
	}
});

$.ui.plugin.add("draggable", "scroll", {
	start: function() {
		var i = $(this).data("ui-draggable");
		if(i.scrollParent[0] !== document && i.scrollParent[0].tagName !== "HTML") {
			i.overflowOffset = i.scrollParent.offset();
		}
	},
	drag: function( event ) {

		var i = $(this).data("ui-draggable"), o = i.options, scrolled = false;

		if(i.scrollParent[0] !== document && i.scrollParent[0].tagName !== "HTML") {

			if(!o.axis || o.axis !== "x") {
				if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
				} else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
				}
			}

			if(!o.axis || o.axis !== "y") {
				if((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
				} else if(event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if(!o.axis || o.axis !== "x") {
				if(event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				} else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
				}
			}

			if(!o.axis || o.axis !== "y") {
				if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				} else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
				}
			}

		}

		if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(i, event);
		}

	}
});

$.ui.plugin.add("draggable", "snap", {
	start: function() {

		var i = $(this).data("ui-draggable"),
			o = i.options;

		i.snapElements = [];

		$(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function() {
			var $t = $(this),
				$o = $t.offset();
			if(this !== i.element[0]) {
				i.snapElements.push({
					item: this,
					width: $t.outerWidth(), height: $t.outerHeight(),
					top: $o.top, left: $o.left
				});
			}
		});

	},
	drag: function(event, ui) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			inst = $(this).data("ui-draggable"),
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for (i = inst.snapElements.length - 1; i >= 0; i--){

			l = inst.snapElements[i].left;
			r = l + inst.snapElements[i].width;
			t = inst.snapElements[i].top;
			b = t + inst.snapElements[i].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
				if(inst.snapElements[i].snapping) {
					(inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
				}
				inst.snapElements[i].snapping = false;
				continue;
			}

			if(o.snapMode !== "inner") {
				ts = Math.abs(t - y2) <= d;
				bs = Math.abs(b - y1) <= d;
				ls = Math.abs(l - x2) <= d;
				rs = Math.abs(r - x1) <= d;
				if(ts) {
					ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
				}
				if(bs) {
					ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
				}
				if(ls) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
				}
				if(rs) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
				}
			}

			first = (ts || bs || ls || rs);

			if(o.snapMode !== "outer") {
				ts = Math.abs(t - y1) <= d;
				bs = Math.abs(b - y2) <= d;
				ls = Math.abs(l - x1) <= d;
				rs = Math.abs(r - x2) <= d;
				if(ts) {
					ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top - inst.margins.top;
				}
				if(bs) {
					ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
				}
				if(ls) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left - inst.margins.left;
				}
				if(rs) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;
				}
			}

			if(!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
				(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
			}
			inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

		}

	}
});

$.ui.plugin.add("draggable", "stack", {
	start: function() {
		var min,
			o = this.data("ui-draggable").options,
			group = $.makeArray($(o.stack)).sort(function(a,b) {
				return (parseInt($(a).css("zIndex"),10) || 0) - (parseInt($(b).css("zIndex"),10) || 0);
			});

		if (!group.length) { return; }

		min = parseInt($(group[0]).css("zIndex"), 10) || 0;
		$(group).each(function(i) {
			$(this).css("zIndex", min + i);
		});
		this.css("zIndex", (min + group.length));
	}
});

$.ui.plugin.add("draggable", "zIndex", {
	start: function(event, ui) {
		var t = $(ui.helper), o = $(this).data("ui-draggable").options;
		if(t.css("zIndex")) {
			o._zIndex = t.css("zIndex");
		}
		t.css("zIndex", o.zIndex);
	},
	stop: function(event, ui) {
		var o = $(this).data("ui-draggable").options;
		if(o._zIndex) {
			$(ui.helper).css("zIndex", o._zIndex);
		}
	}
});

})(jQuery);
(function( $, undefined ) {

function isOverAxis( x, reference, size ) {
	return ( x > reference ) && ( x < ( reference + size ) );
}

$.widget("ui.droppable", {
	version: "1.10.4",
	widgetEventPrefix: "drop",
	options: {
		accept: "*",
		activeClass: false,
		addClasses: true,
		greedy: false,
		hoverClass: false,
		scope: "default",
		tolerance: "intersect",

		// callbacks
		activate: null,
		deactivate: null,
		drop: null,
		out: null,
		over: null
	},
	_create: function() {

		var proportions,
			o = this.options,
			accept = o.accept;

		this.isover = false;
		this.isout = true;

		this.accept = $.isFunction(accept) ? accept : function(d) {
			return d.is(accept);
		};

		this.proportions = function( /* valueToWrite */ ) {
			if ( arguments.length ) {
				// Store the droppable's proportions
				proportions = arguments[ 0 ];
			} else {
				// Retrieve or derive the droppable's proportions
				return proportions ?
					proportions :
					proportions = {
						width: this.element[ 0 ].offsetWidth,
						height: this.element[ 0 ].offsetHeight
					};
			}
		};

		// Add the reference and positions to the manager
		$.ui.ddmanager.droppables[o.scope] = $.ui.ddmanager.droppables[o.scope] || [];
		$.ui.ddmanager.droppables[o.scope].push(this);

		(o.addClasses && this.element.addClass("ui-droppable"));

	},

	_destroy: function() {
		var i = 0,
			drop = $.ui.ddmanager.droppables[this.options.scope];

		for ( ; i < drop.length; i++ ) {
			if ( drop[i] === this ) {
				drop.splice(i, 1);
			}
		}

		this.element.removeClass("ui-droppable ui-droppable-disabled");
	},

	_setOption: function(key, value) {

		if(key === "accept") {
			this.accept = $.isFunction(value) ? value : function(d) {
				return d.is(value);
			};
		}
		$.Widget.prototype._setOption.apply(this, arguments);
	},

	_activate: function(event) {
		var draggable = $.ui.ddmanager.current;
		if(this.options.activeClass) {
			this.element.addClass(this.options.activeClass);
		}
		if(draggable){
			this._trigger("activate", event, this.ui(draggable));
		}
	},

	_deactivate: function(event) {
		var draggable = $.ui.ddmanager.current;
		if(this.options.activeClass) {
			this.element.removeClass(this.options.activeClass);
		}
		if(draggable){
			this._trigger("deactivate", event, this.ui(draggable));
		}
	},

	_over: function(event) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
			return;
		}

		if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
			if(this.options.hoverClass) {
				this.element.addClass(this.options.hoverClass);
			}
			this._trigger("over", event, this.ui(draggable));
		}

	},

	_out: function(event) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
			return;
		}

		if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
			if(this.options.hoverClass) {
				this.element.removeClass(this.options.hoverClass);
			}
			this._trigger("out", event, this.ui(draggable));
		}

	},

	_drop: function(event,custom) {

		var draggable = custom || $.ui.ddmanager.current,
			childrenIntersection = false;

		// Bail if draggable and droppable are same element
		if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
			return false;
		}

		this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
			var inst = $.data(this, "ui-droppable");
			if(
				inst.options.greedy &&
				!inst.options.disabled &&
				inst.options.scope === draggable.options.scope &&
				inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element)) &&
				$.ui.intersect(draggable, $.extend(inst, { offset: inst.element.offset() }), inst.options.tolerance)
			) { childrenIntersection = true; return false; }
		});
		if(childrenIntersection) {
			return false;
		}

		if(this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
			if(this.options.activeClass) {
				this.element.removeClass(this.options.activeClass);
			}
			if(this.options.hoverClass) {
				this.element.removeClass(this.options.hoverClass);
			}
			this._trigger("drop", event, this.ui(draggable));
			return this.element;
		}

		return false;

	},

	ui: function(c) {
		return {
			draggable: (c.currentItem || c.element),
			helper: c.helper,
			position: c.position,
			offset: c.positionAbs
		};
	}

});

$.ui.intersect = function(draggable, droppable, toleranceMode) {

	if (!droppable.offset) {
		return false;
	}

	var draggableLeft, draggableTop,
		x1 = (draggable.positionAbs || draggable.position.absolute).left,
		y1 = (draggable.positionAbs || draggable.position.absolute).top,
		x2 = x1 + draggable.helperProportions.width,
		y2 = y1 + draggable.helperProportions.height,
		l = droppable.offset.left,
		t = droppable.offset.top,
		r = l + droppable.proportions().width,
		b = t + droppable.proportions().height;

	switch (toleranceMode) {
		case "fit":
			return (l <= x1 && x2 <= r && t <= y1 && y2 <= b);
		case "intersect":
			return (l < x1 + (draggable.helperProportions.width / 2) && // Right Half
				x2 - (draggable.helperProportions.width / 2) < r && // Left Half
				t < y1 + (draggable.helperProportions.height / 2) && // Bottom Half
				y2 - (draggable.helperProportions.height / 2) < b ); // Top Half
		case "pointer":
			draggableLeft = ((draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left);
			draggableTop = ((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top);
			return isOverAxis( draggableTop, t, droppable.proportions().height ) && isOverAxis( draggableLeft, l, droppable.proportions().width );
		case "touch":
			return (
				(y1 >= t && y1 <= b) ||	// Top edge touching
				(y2 >= t && y2 <= b) ||	// Bottom edge touching
				(y1 < t && y2 > b)		// Surrounded vertically
			) && (
				(x1 >= l && x1 <= r) ||	// Left edge touching
				(x2 >= l && x2 <= r) ||	// Right edge touching
				(x1 < l && x2 > r)		// Surrounded horizontally
			);
		default:
			return false;
		}

};

/*
	This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
	current: null,
	droppables: { "default": [] },
	prepareOffsets: function(t, event) {

		var i, j,
			m = $.ui.ddmanager.droppables[t.options.scope] || [],
			type = event ? event.type : null, // workaround for #2317
			list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();

		droppablesLoop: for (i = 0; i < m.length; i++) {

			//No disabled and non-accepted
			if(m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0],(t.currentItem || t.element)))) {
				continue;
			}

			// Filter out elements in the current dragged item
			for (j=0; j < list.length; j++) {
				if(list[j] === m[i].element[0]) {
					m[i].proportions().height = 0;
					continue droppablesLoop;
				}
			}

			m[i].visible = m[i].element.css("display") !== "none";
			if(!m[i].visible) {
				continue;
			}

			//Activate the droppable if used directly from draggables
			if(type === "mousedown") {
				m[i]._activate.call(m[i], event);
			}

			m[ i ].offset = m[ i ].element.offset();
			m[ i ].proportions({ width: m[ i ].element[ 0 ].offsetWidth, height: m[ i ].element[ 0 ].offsetHeight });

		}

	},
	drop: function(draggable, event) {

		var dropped = false;
		// Create a copy of the droppables in case the list changes during the drop (#9116)
		$.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {

			if(!this.options) {
				return;
			}
			if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance)) {
				dropped = this._drop.call(this, event) || dropped;
			}

			if (!this.options.disabled && this.visible && this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
				this.isout = true;
				this.isover = false;
				this._deactivate.call(this, event);
			}

		});
		return dropped;

	},
	dragStart: function( draggable, event ) {
		//Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
		draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
			if( !draggable.options.refreshPositions ) {
				$.ui.ddmanager.prepareOffsets( draggable, event );
			}
		});
	},
	drag: function(draggable, event) {

		//If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
		if(draggable.options.refreshPositions) {
			$.ui.ddmanager.prepareOffsets(draggable, event);
		}

		//Run through all droppables and check their positions based on specific tolerance options
		$.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

			if(this.options.disabled || this.greedyChild || !this.visible) {
				return;
			}

			var parentInstance, scope, parent,
				intersects = $.ui.intersect(draggable, this, this.options.tolerance),
				c = !intersects && this.isover ? "isout" : (intersects && !this.isover ? "isover" : null);
			if(!c) {
				return;
			}

			if (this.options.greedy) {
				// find droppable parents with same scope
				scope = this.options.scope;
				parent = this.element.parents(":data(ui-droppable)").filter(function () {
					return $.data(this, "ui-droppable").options.scope === scope;
				});

				if (parent.length) {
					parentInstance = $.data(parent[0], "ui-droppable");
					parentInstance.greedyChild = (c === "isover");
				}
			}

			// we just moved into a greedy child
			if (parentInstance && c === "isover") {
				parentInstance.isover = false;
				parentInstance.isout = true;
				parentInstance._out.call(parentInstance, event);
			}

			this[c] = true;
			this[c === "isout" ? "isover" : "isout"] = false;
			this[c === "isover" ? "_over" : "_out"].call(this, event);

			// we just moved out of a greedy child
			if (parentInstance && c === "isout") {
				parentInstance.isout = false;
				parentInstance.isover = true;
				parentInstance._over.call(parentInstance, event);
			}
		});

	},
	dragStop: function( draggable, event ) {
		draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
		//Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
		if( !draggable.options.refreshPositions ) {
			$.ui.ddmanager.prepareOffsets( draggable, event );
		}
	}
};

})(jQuery);
(function( $, undefined ) {

function isOverAxis( x, reference, size ) {
	return ( x > reference ) && ( x < ( reference + size ) );
}

function isFloating(item) {
	return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
}

$.widget("ui.sortable", $.ui.mouse, {
	version: "1.10.4",
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: "> *",
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000,

		// callbacks
		activate: null,
		beforeStop: null,
		change: null,
		deactivate: null,
		out: null,
		over: null,
		receive: null,
		remove: null,
		sort: null,
		start: null,
		stop: null,
		update: null
	},
	_create: function() {

		var o = this.options;
		this.containerCache = {};
		this.element.addClass("ui-sortable");

		//Get the items
		this.refresh();

		//Let's determine if the items are being displayed horizontally
		this.floating = this.items.length ? o.axis === "x" || isFloating(this.items[0].item) : false;

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();

		//We're ready to go
		this.ready = true;

	},

	_destroy: function() {
		this.element
			.removeClass("ui-sortable ui-sortable-disabled");
		this._mouseDestroy();

		for ( var i = this.items.length - 1; i >= 0; i-- ) {
			this.items[i].item.removeData(this.widgetName + "-item");
		}

		return this;
	},

	_setOption: function(key, value){
		if ( key === "disabled" ) {
			this.options[ key ] = value;

			this.widget().toggleClass( "ui-sortable-disabled", !!value );
		} else {
			// Don't call widget base _setOption for disable as it adds ui-state-disabled class
			$.Widget.prototype._setOption.apply(this, arguments);
		}
	},

	_mouseCapture: function(event, overrideHandle) {
		var currentItem = null,
			validHandle = false,
			that = this;

		if (this.reverting) {
			return false;
		}

		if(this.options.disabled || this.options.type === "static") {
			return false;
		}

		//We have to refresh the items data once first
		this._refreshItems(event);

		//Find out if the clicked node (or one of its parents) is a actual item in this.items
		$(event.target).parents().each(function() {
			if($.data(this, that.widgetName + "-item") === that) {
				currentItem = $(this);
				return false;
			}
		});
		if($.data(event.target, that.widgetName + "-item") === that) {
			currentItem = $(event.target);
		}

		if(!currentItem) {
			return false;
		}
		if(this.options.handle && !overrideHandle) {
			$(this.options.handle, currentItem).find("*").addBack().each(function() {
				if(this === event.target) {
					validHandle = true;
				}
			});
			if(!validHandle) {
				return false;
			}
		}

		this.currentItem = currentItem;
		this._removeCurrentsFromItems();
		return true;

	},

	_mouseStart: function(event, overrideHandle, noActivation) {

		var i, body,
			o = this.options;

		this.currentContainer = this;

		//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
		this.refreshPositions();

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Get the next scrolling parent
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
		    top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		// Only after we got the offset, we can change the helper's position to absolute
		// TODO: Still need to figure out a way to make relative sorting possible
		this.helper.css("position", "absolute");
		this.cssPosition = this.helper.css("position");

		//Generate the original position
		this.originalPosition = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Cache the former DOM position
		this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

	    //Create the placeholder
		this._createPlaceholder();

	    //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
		if(this.helper[0] !== this.currentItem[0]) {
			this.currentItem.hide();
		}

		//Set a containment if given in the options
		if(o.containment) {
			this._setContainment();
		}

		if( o.cursor && o.cursor !== "auto" ) { // cursor option
			body = this.document.find( "body" );

			// support: IE
			this.storedCursor = body.css( "cursor" );
			body.css( "cursor", o.cursor );

			this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
		}

		if(o.opacity) { // opacity option
			if (this.helper.css("opacity")) {
				this._storedOpacity = this.helper.css("opacity");
			}
			this.helper.css("opacity", o.opacity);
		}

		if(o.zIndex) { // zIndex option
			if (this.helper.css("zIndex")) {
				this._storedZIndex = this.helper.css("zIndex");
			}
			this.helper.css("zIndex", o.zIndex);
		}

		//Prepare scrolling
		if(this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
			this.overflowOffset = this.scrollParent.offset();
		}

		//Call callbacks
		this._trigger("start", event, this._uiHash());

		//Recache the helper size
		if(!this._preserveHelperProportions) {
			this._cacheHelperProportions();
		}


		//Post "activate" events to possible containers
		if( !noActivation ) {
			for ( i = this.containers.length - 1; i >= 0; i-- ) {
				this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
			}
		}

		//Prepare possible droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.current = this;
		}

		if ($.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(this, event);
		}

		this.dragging = true;

		this.helper.addClass("ui-sortable-helper");

		this.refreshPositions();

		this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position

		return true;
	},

	_mouseDrag: function(event) {
		var i, item, itemElement, intersection,
			o = this.options,
			scrolled = false;

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}

		//Do scrolling
		if(this.options.scroll) {
			if(this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {

				if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				} else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
				}

				if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				} else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
				}

			} else {

				if(event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				} else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
				}

				if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				} else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
				}

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}
		}

		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");

		//Set the helper position
		if(!this.options.axis || this.options.axis !== "y") {
			this.helper[0].style.left = this.position.left+"px";
		}
		if(!this.options.axis || this.options.axis !== "x") {
			this.helper[0].style.top = this.position.top+"px";
		}

		//Rearrange
		for (i = this.items.length - 1; i >= 0; i--) {

			//Cache variables and intersection, continue if no intersection
			item = this.items[i];
			itemElement = item.item[0];
			intersection = this._intersectsWithPointer(item);
			if (!intersection) {
				continue;
			}

			// Only put the placeholder inside the current Container, skip all
			// items from other containers. This works because when moving
			// an item from one container to another the
			// currentContainer is switched before the placeholder is moved.
			//
			// Without this, moving items in "sub-sortables" can cause
			// the placeholder to jitter beetween the outer and inner container.
			if (item.instance !== this.currentContainer) {
				continue;
			}

			// cannot intersect with itself
			// no useless actions that have been done before
			// no action if the item moved is the parent of the item checked
			if (itemElement !== this.currentItem[0] &&
				this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
				!$.contains(this.placeholder[0], itemElement) &&
				(this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
			) {

				this.direction = intersection === 1 ? "down" : "up";

				if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
					this._rearrange(event, item);
				} else {
					break;
				}

				this._trigger("change", event, this._uiHash());
				break;
			}
		}

		//Post events to containers
		this._contactContainers(event);

		//Interconnect with droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.drag(this, event);
		}

		//Call callbacks
		this._trigger("sort", event, this._uiHash());

		this.lastPositionAbs = this.positionAbs;
		return false;

	},

	_mouseStop: function(event, noPropagation) {

		if(!event) {
			return;
		}

		//If we are using droppables, inform the manager about the drop
		if ($.ui.ddmanager && !this.options.dropBehaviour) {
			$.ui.ddmanager.drop(this, event);
		}

		if(this.options.revert) {
			var that = this,
				cur = this.placeholder.offset(),
				axis = this.options.axis,
				animation = {};

			if ( !axis || axis === "x" ) {
				animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
			}
			if ( !axis || axis === "y" ) {
				animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
			}
			this.reverting = true;
			$(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
				that._clear(event);
			});
		} else {
			this._clear(event, noPropagation);
		}

		return false;

	},

	cancel: function() {

		if(this.dragging) {

			this._mouseUp({ target: null });

			if(this.options.helper === "original") {
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			} else {
				this.currentItem.show();
			}

			//Post deactivating events to containers
			for (var i = this.containers.length - 1; i >= 0; i--){
				this.containers[i]._trigger("deactivate", null, this._uiHash(this));
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", null, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		if (this.placeholder) {
			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			if(this.placeholder[0].parentNode) {
				this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			}
			if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
				this.helper.remove();
			}

			$.extend(this, {
				helper: null,
				dragging: false,
				reverting: false,
				_noFinalSort: null
			});

			if(this.domPosition.prev) {
				$(this.domPosition.prev).after(this.currentItem);
			} else {
				$(this.domPosition.parent).prepend(this.currentItem);
			}
		}

		return this;

	},

	serialize: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			str = [];
		o = o || {};

		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
			if (res) {
				str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
			}
		});

		if(!str.length && o.key) {
			str.push(o.key + "=");
		}

		return str.join("&");

	},

	toArray: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			ret = [];

		o = o || {};

		items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
		return ret;

	},

	/* Be careful with the following core functions */
	_intersectsWith: function(item) {

		var x1 = this.positionAbs.left,
			x2 = x1 + this.helperProportions.width,
			y1 = this.positionAbs.top,
			y2 = y1 + this.helperProportions.height,
			l = item.left,
			r = l + item.width,
			t = item.top,
			b = t + item.height,
			dyClick = this.offset.click.top,
			dxClick = this.offset.click.left,
			isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
			isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
			isOverElement = isOverElementHeight && isOverElementWidth;

		if ( this.options.tolerance === "pointer" ||
			this.options.forcePointerForContainers ||
			(this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
		) {
			return isOverElement;
		} else {

			return (l < x1 + (this.helperProportions.width / 2) && // Right Half
				x2 - (this.helperProportions.width / 2) < r && // Left Half
				t < y1 + (this.helperProportions.height / 2) && // Bottom Half
				y2 - (this.helperProportions.height / 2) < b ); // Top Half

		}
	},

	_intersectsWithPointer: function(item) {

		var isOverElementHeight = (this.options.axis === "x") || isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
			isOverElementWidth = (this.options.axis === "y") || isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
			isOverElement = isOverElementHeight && isOverElementWidth,
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (!isOverElement) {
			return false;
		}

		return this.floating ?
			( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
			: ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

	},

	_intersectsWithSides: function(item) {

		var isOverBottomHalf = isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
			isOverRightHalf = isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (this.floating && horizontalDirection) {
			return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
		} else {
			return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
		}

	},

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta !== 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: function() {
		var delta = this.positionAbs.left - this.lastPositionAbs.left;
		return delta !== 0 && (delta > 0 ? "right" : "left");
	},

	refresh: function(event) {
		this._refreshItems(event);
		this.refreshPositions();
		return this;
	},

	_connectWith: function() {
		var options = this.options;
		return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
	},

	_getItemsAsjQuery: function(connected) {

		var i, j, cur, inst,
			items = [],
			queries = [],
			connectWith = this._connectWith();

		if(connectWith && connected) {
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i]);
				for ( j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
					}
				}
			}
		}

		queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

		function addItems() {
			items.push( this );
		}
		for (i = queries.length - 1; i >= 0; i--){
			queries[i][0].each( addItems );
		}

		return $(items);

	},

	_removeCurrentsFromItems: function() {

		var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

		this.items = $.grep(this.items, function (item) {
			for (var j=0; j < list.length; j++) {
				if(list[j] === item.item[0]) {
					return false;
				}
			}
			return true;
		});

	},

	_refreshItems: function(event) {

		this.items = [];
		this.containers = [this];

		var i, j, cur, inst, targetData, _queries, item, queriesLength,
			items = this.items,
			queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
			connectWith = this._connectWith();

		if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i]);
				for (j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
						this.containers.push(inst);
					}
				}
			}
		}

		for (i = queries.length - 1; i >= 0; i--) {
			targetData = queries[i][1];
			_queries = queries[i][0];

			for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
				item = $(_queries[j]);

				item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

				items.push({
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				});
			}
		}

	},

	refreshPositions: function(fast) {

		//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
		if(this.offsetParent && this.helper) {
			this.offset.parent = this._getParentOffset();
		}

		var i, item, t, p;

		for (i = this.items.length - 1; i >= 0; i--){
			item = this.items[i];

			//We ignore calculating positions of all connected containers when we're not over them
			if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
				continue;
			}

			t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

			if (!fast) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			p = t.offset();
			item.left = p.left;
			item.top = p.top;
		}

		if(this.options.custom && this.options.custom.refreshContainers) {
			this.options.custom.refreshContainers.call(this);
		} else {
			for (i = this.containers.length - 1; i >= 0; i--){
				p = this.containers[i].element.offset();
				this.containers[i].containerCache.left = p.left;
				this.containers[i].containerCache.top = p.top;
				this.containers[i].containerCache.width	= this.containers[i].element.outerWidth();
				this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			}
		}

		return this;
	},

	_createPlaceholder: function(that) {
		that = that || this;
		var className,
			o = that.options;

		if(!o.placeholder || o.placeholder.constructor === String) {
			className = o.placeholder;
			o.placeholder = {
				element: function() {

					var nodeName = that.currentItem[0].nodeName.toLowerCase(),
						element = $( "<" + nodeName + ">", that.document[0] )
							.addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
							.removeClass("ui-sortable-helper");

					if ( nodeName === "tr" ) {
						that.currentItem.children().each(function() {
							$( "<td>&#160;</td>", that.document[0] )
								.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
								.appendTo( element );
						});
					} else if ( nodeName === "img" ) {
						element.attr( "src", that.currentItem.attr( "src" ) );
					}

					if ( !className ) {
						element.css( "visibility", "hidden" );
					}

					return element;
				},
				update: function(container, p) {

					// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
					if(className && !o.forcePlaceholderSize) {
						return;
					}

					//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
					if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
					if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
				}
			};
		}

		//Create the placeholder
		that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

		//Append it after the actual current item
		that.currentItem.after(that.placeholder);

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update(that, that.placeholder);

	},

	_contactContainers: function(event) {
		var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, base, cur, nearBottom, floating,
			innermostContainer = null,
			innermostIndex = null;

		// get innermost container that intersects with item
		for (i = this.containers.length - 1; i >= 0; i--) {

			// never consider a container that's located within the item itself
			if($.contains(this.currentItem[0], this.containers[i].element[0])) {
				continue;
			}

			if(this._intersectsWith(this.containers[i].containerCache)) {

				// if we've already found a container and it's more "inner" than this, then continue
				if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
					continue;
				}

				innermostContainer = this.containers[i];
				innermostIndex = i;

			} else {
				// container doesn't intersect. trigger "out" event if necessary
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", event, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		// if no intersecting containers found, return
		if(!innermostContainer) {
			return;
		}

		// move the item into the container if it's not there already
		if(this.containers.length === 1) {
			if (!this.containers[innermostIndex].containerCache.over) {
				this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
				this.containers[innermostIndex].containerCache.over = 1;
			}
		} else {

			//When entering a new container, we will find the item with the least distance and append our item near it
			dist = 10000;
			itemWithLeastDistance = null;
			floating = innermostContainer.floating || isFloating(this.currentItem);
			posProperty = floating ? "left" : "top";
			sizeProperty = floating ? "width" : "height";
			base = this.positionAbs[posProperty] + this.offset.click[posProperty];
			for (j = this.items.length - 1; j >= 0; j--) {
				if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
					continue;
				}
				if(this.items[j].item[0] === this.currentItem[0]) {
					continue;
				}
				if (floating && !isOverAxis(this.positionAbs.top + this.offset.click.top, this.items[j].top, this.items[j].height)) {
					continue;
				}
				cur = this.items[j].item.offset()[posProperty];
				nearBottom = false;
				if(Math.abs(cur - base) > Math.abs(cur + this.items[j][sizeProperty] - base)){
					nearBottom = true;
					cur += this.items[j][sizeProperty];
				}

				if(Math.abs(cur - base) < dist) {
					dist = Math.abs(cur - base); itemWithLeastDistance = this.items[j];
					this.direction = nearBottom ? "up": "down";
				}
			}

			//Check if dropOnEmpty is enabled
			if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
				return;
			}

			if(this.currentContainer === this.containers[innermostIndex]) {
				return;
			}

			itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
			this._trigger("change", event, this._uiHash());
			this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
			this.currentContainer = this.containers[innermostIndex];

			//Update the placeholder
			this.options.placeholder.update(this.currentContainer, this.placeholder);

			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		}


	},

	_createHelper: function(event) {

		var o = this.options,
			helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

		//Add the helper to the DOM if that didn't happen already
		if(!helper.parents("body").length) {
			$(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
		}

		if(helper[0] === this.currentItem[0]) {
			this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
		}

		if(!helper[0].style.width || o.forceHelperSize) {
			helper.width(this.currentItem.width());
		}
		if(!helper[0].style.height || o.forceHelperSize) {
			helper.height(this.currentItem.height());
		}

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {


		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		// This needs to be actually done for all browsers, since pageX/pageY includes this information
		// with an ugly IE fix
		if( this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition === "relative") {
			var p = this.currentItem.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
			top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var ce, co, over,
			o = this.options;
		if(o.containment === "parent") {
			o.containment = this.helper[0].parentNode;
		}
		if(o.containment === "document" || o.containment === "window") {
			this.containment = [
				0 - this.offset.relative.left - this.offset.parent.left,
				0 - this.offset.relative.top - this.offset.parent.top,
				$(o.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
				($(o.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
			];
		}

		if(!(/^(document|window|parent)$/).test(o.containment)) {
			ce = $(o.containment)[0];
			co = $(o.containment).offset();
			over = ($(ce).css("overflow") !== "hidden");

			this.containment = [
				co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
				co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) {
			pos = this.position;
		}
		var mod = d === "absolute" ? 1 : -1,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
			scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top	+																// The absolute mouse position
				this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left +																// The absolute mouse position
				this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var top, left,
			o = this.options,
			pageX = event.pageX,
			pageY = event.pageY,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if(this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
			this.offset.relative = this._getRelativeOffset();
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options

			if(this.containment) {
				if(event.pageX - this.offset.click.left < this.containment[0]) {
					pageX = this.containment[0] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top < this.containment[1]) {
					pageY = this.containment[1] + this.offset.click.top;
				}
				if(event.pageX - this.offset.click.left > this.containment[2]) {
					pageX = this.containment[2] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top > this.containment[3]) {
					pageY = this.containment[3] + this.offset.click.top;
				}
			}

			if(o.grid) {
				top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
				pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
				pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY -																// The absolute mouse position
				this.offset.click.top -													// Click offset (relative to the element)
				this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX -																// The absolute mouse position
				this.offset.click.left -												// Click offset (relative to the element)
				this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_rearrange: function(event, i, a, hardRefresh) {

		a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

		//Various things done here to improve the performance:
		// 1. we create a setTimeout, that calls refreshPositions
		// 2. on the instance, we have a counter variable, that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
		// 4. this lets only the last addition to the timeout stack through
		this.counter = this.counter ? ++this.counter : 1;
		var counter = this.counter;

		this._delay(function() {
			if(counter === this.counter) {
				this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
			}
		});

	},

	_clear: function(event, noPropagation) {

		this.reverting = false;
		// We delay all events that have to be triggered to after the point where the placeholder has been removed and
		// everything else normalized again
		var i,
			delayedTriggers = [];

		// We first have to update the dom position of the actual currentItem
		// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
		if(!this._noFinalSort && this.currentItem.parent().length) {
			this.placeholder.before(this.currentItem);
		}
		this._noFinalSort = null;

		if(this.helper[0] === this.currentItem[0]) {
			for(i in this._storedCSS) {
				if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
					this._storedCSS[i] = "";
				}
			}
			this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
		} else {
			this.currentItem.show();
		}

		if(this.fromOutside && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
		}
		if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
		}

		// Check if the items Container has Changed and trigger appropriate
		// events.
		if (this !== this.currentContainer) {
			if(!noPropagation) {
				delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
				delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
				delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
			}
		}


		//Post events to containers
		function delayEvent( type, instance, container ) {
			return function( event ) {
				container._trigger( type, event, instance._uiHash( instance ) );
			};
		}
		for (i = this.containers.length - 1; i >= 0; i--){
			if (!noPropagation) {
				delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
			}
			if(this.containers[i].containerCache.over) {
				delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
				this.containers[i].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if ( this.storedCursor ) {
			this.document.find( "body" ).css( "cursor", this.storedCursor );
			this.storedStylesheet.remove();
		}
		if(this._storedOpacity) {
			this.helper.css("opacity", this._storedOpacity);
		}
		if(this._storedZIndex) {
			this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
		}

		this.dragging = false;
		if(this.cancelHelperRemoval) {
			if(!noPropagation) {
				this._trigger("beforeStop", event, this._uiHash());
				for (i=0; i < delayedTriggers.length; i++) {
					delayedTriggers[i].call(this, event);
				} //Trigger all delayed events
				this._trigger("stop", event, this._uiHash());
			}

			this.fromOutside = false;
			return false;
		}

		if(!noPropagation) {
			this._trigger("beforeStop", event, this._uiHash());
		}

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
		this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

		if(this.helper[0] !== this.currentItem[0]) {
			this.helper.remove();
		}
		this.helper = null;

		if(!noPropagation) {
			for (i=0; i < delayedTriggers.length; i++) {
				delayedTriggers[i].call(this, event);
			} //Trigger all delayed events
			this._trigger("stop", event, this._uiHash());
		}

		this.fromOutside = false;
		return true;

	},

	_trigger: function() {
		if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
			this.cancel();
		}
	},

	_uiHash: function(_inst) {
		var inst = _inst || this;
		return {
			helper: inst.helper,
			placeholder: inst.placeholder || $([]),
			position: inst.position,
			originalPosition: inst.originalPosition,
			offset: inst.positionAbs,
			item: inst.currentItem,
			sender: _inst ? _inst.element : null
		};
	}

});

})(jQuery);

/*!
 * jQuery scrollintoview() plugin and :scrollable selector filter
 *
 * Version 1.8 (14 Jul 2011)
 * Requires jQuery 1.4 or newer
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
	var converter = {
		vertical: { x: false, y: true },
		horizontal: { x: true, y: false },
		both: { x: true, y: true },
		x: { x: true, y: false },
		y: { x: false, y: true }
	};

	var settings = {
		duration: "fast",
		direction: "both"
	};

	var rootrx = /^(?:html)$/i;

	// gets border dimensions
	var borders = function (domElement, styles) {
		styles = styles || (document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(domElement, null) : domElement.currentStyle);
		var px = document.defaultView && document.defaultView.getComputedStyle ? true : false;
		var b = {
			top: (parseFloat(px ? styles.borderTopWidth : $.css(domElement, "borderTopWidth")) || 0),
			left: (parseFloat(px ? styles.borderLeftWidth : $.css(domElement, "borderLeftWidth")) || 0),
			bottom: (parseFloat(px ? styles.borderBottomWidth : $.css(domElement, "borderBottomWidth")) || 0),
			right: (parseFloat(px ? styles.borderRightWidth : $.css(domElement, "borderRightWidth")) || 0)
		};
		return {
			top: b.top,
			left: b.left,
			bottom: b.bottom,
			right: b.right,
			vertical: b.top + b.bottom,
			horizontal: b.left + b.right
		};
	};

	var dimensions = function ($element) {
		var win = $(window);
		var isRoot = rootrx.test($element[0].nodeName);
		return {
			border: isRoot ? { top: 0, left: 0, bottom: 0, right: 0} : borders($element[0]),
			scroll: {
				top: (isRoot ? win : $element).scrollTop(),
				left: (isRoot ? win : $element).scrollLeft()
			},
			scrollbar: {
				right: isRoot ? 0 : $element.innerWidth() - $element[0].clientWidth,
				bottom: isRoot ? 0 : $element.innerHeight() - $element[0].clientHeight
			},
			rect: (function () {
				var r = $element[0].getBoundingClientRect();
				return {
					top: isRoot ? 0 : r.top,
					left: isRoot ? 0 : r.left,
					bottom: isRoot ? $element[0].clientHeight : r.bottom,
					right: isRoot ? $element[0].clientWidth : r.right
				};
			})()
		};
	};

	$.fn.extend({
		scrollintoview: function (options) {
			/// <summary>Scrolls the first element in the set into view by scrolling its closest scrollable parent.</summary>
			/// <param name="options" type="Object">Additional options that can configure scrolling:
			///        duration (default: "fast") - jQuery animation speed (can be a duration string or number of milliseconds)
			///        direction (default: "both") - select possible scrollings ("vertical" or "y", "horizontal" or "x", "both")
			///        complete (default: none) - a function to call when scrolling completes (called in context of the DOM element being scrolled)
			/// </param>
			/// <return type="jQuery">Returns the same jQuery set that this function was run on.</return>

			options = $.extend({}, settings, options);
			options.direction = converter[typeof (options.direction) === "string" && options.direction.toLowerCase()] || converter.both;

			var dirStr = "";
			if (options.direction.x === true) dirStr = "horizontal";
			if (options.direction.y === true) dirStr = dirStr ? "both" : "vertical";

			var el = this.eq(0);
			var scroller = el.closest(":scrollable(" + dirStr + ")");

			// check if there's anything to scroll in the first place
			if (scroller.length > 0)
			{
				scroller = scroller.eq(0);

				var dim = {
					e: dimensions(el),
					s: dimensions(scroller)
				};

				var rel = {
					top: dim.e.rect.top - (dim.s.rect.top + dim.s.border.top),
					bottom: dim.s.rect.bottom - dim.s.border.bottom - dim.s.scrollbar.bottom - dim.e.rect.bottom,
					left: dim.e.rect.left - (dim.s.rect.left + dim.s.border.left),
					right: dim.s.rect.right - dim.s.border.right - dim.s.scrollbar.right - dim.e.rect.right
				};

				var animOptions = {};

				// vertical scroll
				if (options.direction.y === true)
				{
					if (rel.top < 0)
					{
						animOptions.scrollTop = dim.s.scroll.top + rel.top;
					}
					else if (rel.top > 0 && rel.bottom < 0)
					{
						animOptions.scrollTop = dim.s.scroll.top + Math.min(rel.top, -rel.bottom);
					}
				}

				// horizontal scroll
				if (options.direction.x === true)
				{
					if (rel.left < 0)
					{
						animOptions.scrollLeft = dim.s.scroll.left + rel.left;
					}
					else if (rel.left > 0 && rel.right < 0)
					{
						animOptions.scrollLeft = dim.s.scroll.left + Math.min(rel.left, -rel.right);
					}
				}

				// scroll if needed
				if (!$.isEmptyObject(animOptions))
				{
					if (rootrx.test(scroller[0].nodeName))
					{
						scroller = $("html,body");
					}
					scroller
						.animate(animOptions, options.duration)
						.eq(0) // we want function to be called just once (ref. "html,body")
						.queue(function (next) {
							$.isFunction(options.complete) && options.complete.call(scroller[0]);
							next();
						});
				}
				else
				{
					// when there's nothing to scroll, just call the "complete" function
					$.isFunction(options.complete) && options.complete.call(scroller[0]);
				}
			}

			// return set back
			return this;
		}
	});

	var scrollValue = {
		auto: true,
		scroll: true,
		visible: false,
		hidden: false
	};

	$.extend($.expr[":"], {
		scrollable: function (element, index, meta, stack) {
			var direction = converter[typeof (meta[3]) === "string" && meta[3].toLowerCase()] || converter.both;
			var styles = (document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(element, null) : element.currentStyle);
			var overflow = {
				x: scrollValue[styles.overflowX.toLowerCase()] || false,
				y: scrollValue[styles.overflowY.toLowerCase()] || false,
				isRoot: rootrx.test(element.nodeName)
			};

			// check if completely unscrollable (exclude HTML element because it's special)
			if (!overflow.x && !overflow.y && !overflow.isRoot)
			{
				return false;
			}

			var size = {
				height: {
					scroll: element.scrollHeight,
					client: element.clientHeight
				},
				width: {
					scroll: element.scrollWidth,
					client: element.clientWidth
				},
				// check overflow.x/y because iPad (and possibly other tablets) don't dislay scrollbars
				scrollableX: function () {
					return (overflow.x || overflow.isRoot) && this.width.scroll > this.width.client;
				},
				scrollableY: function () {
					return (overflow.y || overflow.isRoot) && this.height.scroll > this.height.client;
				}
			};
			return direction.y && size.scrollableY() || direction.x && size.scrollableX();
		}
	});
})(jQuery);

/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
/**
 * React (with addons) v0.13.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(25),o=e(31),i=e(42),a=e(34),s=e(67),u=e(95),l=e(97),c=e(124),p=e(119),d=e(165);o.addons={CSSTransitionGroup:a,LinkedStateMixin:r,PureRenderMixin:i,TransitionGroup:u,batchedUpdates:l.batchedUpdates,classSet:c,cloneWithProps:p,createFragment:s.create,update:d},t.exports=o},{119:119,124:124,165:165,25:25,31:31,34:34,42:42,67:67,95:95,97:97}],2:[function(e,t,n){"use strict";var r=e(131),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}};t.exports=o},{131:131}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case P.topCompositionStart:return I.compositionStart;case P.topCompositionEnd:return I.compositionEnd;case P.topCompositionUpdate:return I.compositionUpdate}}function a(e,t){return e===P.topKeyDown&&t.keyCode===b}function s(e,t){switch(e){case P.topKeyUp:return-1!==E.indexOf(t.keyCode);case P.topKeyDown:return t.keyCode!==b;case P.topKeyPress:case P.topMouseDown:case P.topBlur:return!0;default:return!1}}function u(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(_?o=i(e):w?s(e,r)&&(o=I.compositionEnd):a(e,r)&&(o=I.compositionStart),!o)return null;M&&(w||o!==I.compositionStart?o===I.compositionEnd&&w&&(l=w.getData()):w=v.getPooled(t));var c=g.getPooled(o,n,r);if(l)c.data=l;else{var p=u(r);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case P.topCompositionEnd:return u(t);case P.topKeyPress:var n=t.which;return n!==T?null:(R=!0,N);case P.topTextInput:var r=t.data;return r===N&&R?null:r;default:return null}}function p(e,t){if(w){if(e===P.topCompositionEnd||s(e,t)){var n=w.getData();return v.release(w),w=null,n}return null}switch(e){case P.topPaste:return null;case P.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case P.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=D?c(e,r):p(e,r),!o)return null;var i=y.getPooled(I.beforeInput,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(16),h=e(21),m=e(22),v=e(23),g=e(103),y=e(107),C=e(154),E=[9,13,27,32],b=229,_=m.canUseDOM&&"CompositionEvent"in window,x=null;m.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=m.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=m.canUseDOM&&(!_||x&&x>8&&11>=x),T=32,N=String.fromCharCode(T),P=f.topLevelTypes,I={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[P.topCompositionEnd,P.topKeyPress,P.topTextInput,P.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[P.topBlur,P.topCompositionEnd,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[P.topBlur,P.topCompositionStart,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[P.topBlur,P.topCompositionUpdate,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]}},R=!1,w=null,O={eventTypes:I,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=O},{103:103,107:107,154:154,16:16,21:21,22:22,23:23}],4:[function(e,t,n){var r=e(147),o={addClass:function(e,t){return r(!/\s/.test(t)),t&&(e.classList?e.classList.add(t):o.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return r(!/\s/.test(t)),t&&(e.classList?e.classList.remove(t):o.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?o.addClass:o.removeClass)(e,t)},hasClass:function(e,t){return r(!/\s/.test(t)),e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}};t.exports=o},{147:147}],5:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},s={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=s},{}],6:[function(e,t,n){"use strict";var r=e(5),o=e(22),i=(e(118),e(125)),a=e(145),s=e(156),u=(e(166),s(function(e){return a(e)})),l="cssFloat";o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=u(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=l),a)n[o]=a;else{var s=r.shorthandPropertyExpansions[o];if(s)for(var u in s)n[u]="";else n[o]=""}}}};t.exports=c},{118:118,125:125,145:145,156:156,166:166,22:22,5:5}],7:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(30),i=e(29),a=e(147);i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{147:147,29:29,30:30}],8:[function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=x.getPooled(P.change,R,e);E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){I=e,R=t,I.attachEvent("onchange",o)}function s(){I&&(I.detachEvent("onchange",o),I=null,R=null)}function u(e,t,n){return e===N.topChange?n:void 0}function l(e,t,n){e===N.topFocus?(s(),a(t,n)):e===N.topBlur&&s()}function c(e,t){I=e,R=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(I,"value",k),I.attachEvent("onpropertychange",d)}function p(){I&&(delete I.value,I.detachEvent("onpropertychange",d),I=null,R=null,w=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,o(e))}}function f(e,t,n){return e===N.topInput?n:void 0}function h(e,t,n){e===N.topFocus?(p(),c(t,n)):e===N.topBlur&&p()}function m(e,t,n){return e!==N.topSelectionChange&&e!==N.topKeyUp&&e!==N.topKeyDown||!I||I.value===w?void 0:(w=I.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===N.topClick?n:void 0}var y=e(16),C=e(18),E=e(21),b=e(22),_=e(97),x=e(105),D=e(148),M=e(150),T=e(154),N=y.topLevelTypes,P={change:{phasedRegistrationNames:{bubbled:T({onChange:null}),captured:T({onChangeCapture:null})},dependencies:[N.topBlur,N.topChange,N.topClick,N.topFocus,N.topInput,N.topKeyDown,N.topKeyUp,N.topSelectionChange]}},I=null,R=null,w=null,O=null,S=!1;b.canUseDOM&&(S=D("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;b.canUseDOM&&(A=D("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},L={eventTypes:P,extractEvents:function(e,t,n,o){var i,a;if(r(t)?S?i=u:a=l:M(t)?A?i=f:(i=m,a=h):v(t)&&(i=g),i){var s=i(e,t,n);if(s){var c=x.getPooled(P.change,s,o);return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}};t.exports=L},{105:105,148:148,150:150,154:154,16:16,18:18,21:21,22:22,97:97}],9:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],10:[function(e,t,n){"use strict";function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o=e(13),i=e(77),a=e(160),s=e(147),u={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var n,u=null,l=null,c=0;c<e.length;c++)if(n=e[c],n.type===i.MOVE_EXISTING||n.type===i.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID;s(d),u=u||{},u[f]=u[f]||[],u[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(n=e[v],n.type){case i.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex);break;case i.MOVE_EXISTING:r(n.parentNode,u[n.parentID][n.fromIndex],n.toIndex);break;case i.TEXT_CONTENT:a(n.parentNode,n.textContent);break;case i.REMOVE_NODE:}}};t.exports=u},{13:13,147:147,160:160,77:77}],11:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(147),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},u=e.DOMMutationMethods||{};e.isCustomAttribute&&s._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){o(!s.isStandardName.hasOwnProperty(l)),s.isStandardName[l]=!0;var c=l.toLowerCase();if(s.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l];s.getPossibleStandardName[p]=l,s.getAttributeName[l]=p}else s.getAttributeName[l]=c;s.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,u.hasOwnProperty(l)?s.getMutationMethod[l]=u[l]:s.getMutationMethod[l]=null;var d=t[l];s.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),s.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),s.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),s.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),s.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),s.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),s.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!s.mustUseAttribute[l]||!s.mustUseProperty[l]),o(s.mustUseProperty[l]||!s.hasSideEffects[l]),o(!!s.hasBooleanValue[l]+!!s.hasNumericValue[l]+!!s.hasOverloadedBooleanValue[l]<=1)}}},a={},s={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<s._isCustomAttributeFunctions.length;t++){var n=s._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i};t.exports=s},{147:147}],12:[function(e,t,n){"use strict";function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=e(11),i=e(158),a=(e(166),{createMarkupForID:function(e){return o.ID_ATTRIBUTE_NAME+"="+i(e)},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return"";var n=o.getAttributeName[e];return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?n:n+"="+i(t)}return o.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,n);else if(r(t,n))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=a},{11:11,158:158,166:166}],13:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(22),i=e(123),a=e(126),s=e(139),u=e(147),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){u(o.canUseDOM);for(var t,n={},p=0;p<e.length;p++)u(e[p]),t=r(e[p]),t=s(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,m=n[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=i(m.join(""),a),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),u(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return u(f===d.length),u(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){u(o.canUseDOM),u(t),u("html"!==e.tagName.toLowerCase());var n=i(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{123:123,126:126,139:139,147:147,22:22}],14:[function(e,t,n){"use strict";var r=e(154),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})];t.exports=o},{154:154}],15:[function(e,t,n){"use strict";var r=e(16),o=e(21),i=e(109),a=e(75),s=e(154),u=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:s({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:s({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===u.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==u.topMouseOut&&e!==u.topMouseOver)return null;var s;if(t.window===t)s=t;else{var d=t.ownerDocument;s=d?d.defaultView||d.parentWindow:window}var f,h;if(e===u.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||s):(f=s,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",g=i.getPooled(c.mouseLeave,m,r);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=i.getPooled(c.mouseEnter,v,r);return y.type="mouseenter",y.target=h,y.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,y,m,v),p[0]=g,p[1]=y,p}};t.exports=d},{109:109,154:154,16:16,21:21,75:75}],16:[function(e,t,n){"use strict";var r=e(153),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{153:153}],17:[function(e,t,n){var r=e(126),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{126:126}],18:[function(e,t,n){"use strict";var r=e(19),o=e(20),i=e(115),a=e(132),s=e(147),u={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){s(!n||"function"==typeof n);var r=u[t]||(u[t]={});r[e]=n},getListener:function(e,t){var n=u[t];return n&&n[e]},deleteListener:function(e,t){var n=u[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,n,o){for(var a,s=r.plugins,u=0,l=s.length;l>u;u++){var c=s[u];if(c){var p=c.extractEvents(e,t,n,o);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l;l=null,a(e,c),s(!l)},__purge:function(){u={}},__getListenerBank:function(){return u}};t.exports=d},{115:115,132:132,147:147,19:19,20:20}],19:[function(e,t,n){"use strict";function r(){if(s)for(var e in u){var t=u[e],n=s.indexOf(e);if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var s=r[o];i(s,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(147),s=null,u={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!s),s=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];u.hasOwnProperty(n)&&u[n]===o||(a(!u[n]),u[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){s=null;for(var e in u)u.hasOwnProperty(e)&&delete u[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{147:147}],20:[function(e,t,n){"use strict";function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function s(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function u(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=l(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=e(16),h=e(147),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:s,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1};t.exports=g},{147:147,16:16}],21:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o);i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r);o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function s(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function u(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,s)}var p=e(16),d=e(18),f=e(115),h=e(132),m=p.PropagationPhases,v=d.getListener,g={accumulateTwoPhaseDispatches:u,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l};t.exports=g},{115:115,132:132,16:16,18:18}],22:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],23:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(30),i=e(29),a=e(142);i(r.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var s=t>1?1-t:void 0;return this._fallbackText=o.slice(e,s),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{142:142,29:29,30:30}],24:[function(e,t,n){"use strict";var r,o=e(11),i=e(22),a=o.injection.MUST_USE_ATTRIBUTE,s=o.injection.MUST_USE_PROPERTY,u=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|u,allowTransparency:a,alt:null,async:u,autoComplete:null,autoPlay:u,cellPadding:null,cellSpacing:null,charSet:a,checked:s|u,classID:a,className:r?a:s,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:s|u,coords:null,crossOrigin:null,data:null,dateTime:a,defer:u,dir:null,disabled:a|u,download:d,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:u,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|u,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:s,label:null,lang:null,list:a,loop:s|u,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:s|u,muted:s|u,name:null,noValidate:u,open:u,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:s|u,rel:null,required:u,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scoped:u,scrolling:null,seamless:a|u,selected:s|u,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:s,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:s|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|u,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{11:11,22:22}],25:[function(e,t,n){"use strict";var r=e(73),o=e(92),i={linkState:function(e){return new r(this.state[e],o.createStateKeySetter(this,e))}};t.exports=i},{73:73,92:92}],26:[function(e,t,n){"use strict";function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function s(e){this.props.checkedLink.requestChange(e.target.checked)}var u=e(84),l=e(147),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),s):e.props.onChange}};t.exports=p},{147:147,84:84}],27:[function(e,t,n){"use strict";function r(e){e.remove()}var o=e(33),i=e(115),a=e(132),s=e(147),u={trapBubbledEvent:function(e,t){s(this.isMounted());var n=this.getDOMNode();s(n);var r=o.trapBubbledEvent(e,t,n);this._localEventListeners=i(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}};t.exports=u},{115:115,132:132,147:147,33:33}],28:[function(e,t,n){"use strict";var r=e(16),o=e(126),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=a},{126:126,16:16}],29:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var s in a)r.call(a,s)&&(n[s]=a[s])}}return n}t.exports=r},{}],30:[function(e,t,n){"use strict";var r=e(147),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},s=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},u=function(e){var t=this;r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=u,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:s};t.exports=d},{147:147}],31:[function(e,t,n){"use strict";var r=e(20),o=e(37),i=e(39),a=e(38),s=e(44),u=e(45),l=e(61),c=(e(62),e(46)),p=e(57),d=e(60),f=e(70),h=e(75),m=e(80),v=e(84),g=e(87),y=e(90),C=e(29),E=e(129),b=e(157);d.inject();var _=l.createElement,x=l.createFactory,D=l.cloneElement,M=m.measure("React","render",h.render),T={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},Component:i,DOM:c,PropTypes:v,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:E,render:M,renderToString:y.renderToString,renderToStaticMarkup:y.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:s.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:u,InstanceHandles:f,Mount:h,Reconciler:g,TextComponent:p});T.version="0.13.3",t.exports=T},{129:129,157:157,20:20,29:29,37:37,38:38,39:39,44:44,45:45,46:46,57:57,60:60,61:61,62:62,70:70,75:75,80:80,84:84,87:87,90:90}],32:[function(e,t,n){"use strict";var r=e(129),o={getDOMNode:function(){return r(this)}};t.exports=o},{129:129}],33:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=e(16),i=e(18),a=e(19),s=e(65),u=e(114),l=e(29),c=e(148),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},s,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e;

}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),s=a.registrationNameDependencies[e],u=o.topLevelTypes,l=0,p=s.length;p>l;l++){var d=s[l];i.hasOwnProperty(d)&&i[d]||(d===u.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",n):d===u.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",n)),i[u.topBlur]=!0,i[u.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=u.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});t.exports=v},{114:114,148:148,16:16,18:18,19:19,29:29,65:65}],34:[function(e,t,n){"use strict";var r=e(31),o=e(29),i=r.createFactory(e(95)),a=r.createFactory(e(35)),s=r.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:r.PropTypes.string.isRequired,transitionAppear:r.PropTypes.bool,transitionEnter:r.PropTypes.bool,transitionLeave:r.PropTypes.bool},getDefaultProps:function(){return{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return a({name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return i(o({},this.props,{childFactory:this._wrapChild}))}});t.exports=s},{29:29,31:31,35:35,95:95}],35:[function(e,t,n){"use strict";var r=e(31),o=e(4),i=e(94),a=e(157),s=(e(166),17),u=r.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode(),r=this.props.name+"-"+e,a=r+"-active",s=function(e){e&&e.target!==n||(o.removeClass(n,r),o.removeClass(n,a),i.removeEndEventListener(n,s),t&&t())};i.addEndEventListener(n,s),o.addClass(n,r),this.queueClass(a)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,s))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(o.addClass.bind(o,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillAppear:function(e){this.props.appear?this.transition("appear",e):e()},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return a(this.props.children)}});t.exports=u},{157:157,166:166,31:31,4:4,94:94}],36:[function(e,t,n){"use strict";var r=e(87),o=e(130),i=e(146),a=e(162),s={instantiateChildren:function(e,t,n){var r=o(e);for(var a in r)if(r.hasOwnProperty(a)){var s=r[a],u=i(s,null);r[a]=u}return r},updateChildren:function(e,t,n,s){var u=o(t);if(!u&&!e)return null;var l;for(l in u)if(u.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=u[l];if(a(p,d))r.receiveComponent(c,d,n,s),u[l]=c;else{c&&r.unmountComponent(c,l);var f=i(d,null);u[l]=f}}for(l in e)!e.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||r.unmountComponent(e[l]);return u},unmountChildren:function(e){for(var t in e){var n=e[t];r.unmountComponent(n)}}};t.exports=s},{130:130,146:146,162:162,87:87}],37:[function(e,t,n){"use strict";function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e;var i=r.getPooled(t,n);f(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function s(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var s=o.mapFunction.call(o.mapContext,t,r);i[n]=s}}function u(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return f(e,s,o),a.release(o),d.create(r)}function l(e,t,n,r){return null}function c(e,t){return f(e,l,null)}var p=e(30),d=e(67),f=e(164),h=(e(166),p.twoArgumentPooler),m=p.threeArgumentPooler;p.addPoolingTo(r,h),p.addPoolingTo(a,m);var v={forEach:i,map:u,count:c};t.exports=v},{164:164,166:166,30:30,67:67}],38:[function(e,t,n){"use strict";function r(e,t){var n=D.hasOwnProperty(t)?D[t]:null;T.hasOwnProperty(t)&&y(n===_.OVERRIDE_BASE),e.hasOwnProperty(t)&&y(n===_.DEFINE_MANY||n===_.DEFINE_MANY_MERGED)}function o(e,t){if(t){y("function"!=typeof t),y(!d.isValidElement(t));var n=e.prototype;t.hasOwnProperty(b)&&M.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==b){var i=t[o];if(r(n,o),M.hasOwnProperty(o))M[o](e,i);else{var a=D.hasOwnProperty(o),l=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,f=p&&!a&&!l&&!c;if(f)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(l){var h=D[o];y(a&&(h===_.DEFINE_MANY_MERGED||h===_.DEFINE_MANY)),h===_.DEFINE_MANY_MERGED?n[o]=s(n[o],i):h===_.DEFINE_MANY&&(n[o]=u(n[o],i))}else n[o]=i}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in M;y(!o);var i=n in e;y(!i),e[n]=r}}}function a(e,t){y(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(y(void 0===e[n]),e[n]=t[n]);return e}function s(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,f.guard(n,e.constructor.displayName+"."+t))}}var p=e(39),d=(e(45),e(61)),f=e(64),h=e(71),m=e(72),v=(e(83),e(82),e(96)),g=e(29),y=e(147),C=e(153),E=e(154),b=(e(166),E({mixins:null})),_=C({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),x=[],D={mixins:_.DEFINE_MANY,statics:_.DEFINE_MANY,propTypes:_.DEFINE_MANY,contextTypes:_.DEFINE_MANY,childContextTypes:_.DEFINE_MANY,getDefaultProps:_.DEFINE_MANY_MERGED,getInitialState:_.DEFINE_MANY_MERGED,getChildContext:_.DEFINE_MANY_MERGED,render:_.DEFINE_ONCE,componentWillMount:_.DEFINE_MANY,componentDidMount:_.DEFINE_MANY,componentWillReceiveProps:_.DEFINE_MANY,shouldComponentUpdate:_.DEFINE_ONCE,componentWillUpdate:_.DEFINE_MANY,componentDidUpdate:_.DEFINE_MANY,componentWillUnmount:_.DEFINE_MANY,updateComponent:_.OVERRIDE_BASE},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=g({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=g({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=s(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=g({},e.propTypes,t)},statics:function(e,t){i(e,t)}},T={replaceState:function(e,t){v.enqueueReplaceState(this,e),t&&v.enqueueCallback(this,t)},isMounted:function(){var e=h.get(this);return e&&e!==m.currentlyMountingInstance},setProps:function(e,t){v.enqueueSetProps(this,e),t&&v.enqueueCallback(this,t)},replaceProps:function(e,t){v.enqueueReplaceProps(this,e),t&&v.enqueueCallback(this,t)}},N=function(){};g(N.prototype,p.prototype,T);var P={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;y("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new N,t.prototype.constructor=t,x.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),y(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){x.push(e)}}};t.exports=P},{147:147,153:153,154:154,166:166,29:29,39:39,45:45,61:61,64:64,71:71,72:72,82:82,83:83,96:96}],39:[function(e,t,n){"use strict";function r(e,t){this.props=e,this.context=t}{var o=e(96),i=e(147);e(166)}r.prototype.setState=function(e,t){i("object"==typeof e||"function"==typeof e||null==e),o.enqueueSetState(this,e),t&&o.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){o.enqueueForceUpdate(this),e&&o.enqueueCallback(this,e)};t.exports=r},{147:147,166:166,96:96}],40:[function(e,t,n){"use strict";var r=e(50),o=e(75),i={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=i},{50:50,75:75}],41:[function(e,t,n){"use strict";var r=e(147),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r(!o),i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{147:147}],42:[function(e,t,n){"use strict";var r=e(161),o={shouldComponentUpdate:function(e,t){return!r(this.props,e)||!r(this.state,t)}};t.exports=o},{161:161}],43:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var o=e(41),i=e(44),a=e(45),s=e(61),u=(e(62),e(71)),l=e(72),c=e(78),p=e(80),d=e(83),f=(e(82),e(87)),h=e(97),m=e(29),v=e(127),g=e(147),y=e(162),C=(e(166),1),E={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=C++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=c.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=v,this._instance=a,u.set(a,this);var s=a.state;void 0===s&&(a.state=s=null),g("object"==typeof s&&!Array.isArray(s)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,h=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=h}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=f.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}f.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,u.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=s.cloneAndReplaceProps(n,m({},n.props,e)),h.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return v;var n=this._currentElement.type.contextTypes;if(!n)return v;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_getValidatedChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){g("object"==typeof t.constructor.childContextTypes);for(var r in n)g(r in t.constructor.childContextTypes);return n}return null},_mergeChildContext:function(e,t){return t?m({},e,t):e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{g("function"==typeof e[i]),a=e[i](t,i,o,n)}catch(s){a=s}a instanceof Error&&(r(this),n===d.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&f.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,s=i.props;t!==n&&(a=this._processContext(n._context),s=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(s,a));var u=this._processPendingState(s,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(s,u,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,s,u,a,e,o)):(this._currentElement=n,this._context=o,i.props=s,i.state=u,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=m({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var s=r[a];m(i,"function"==typeof s?s.call(n,i,e,t):s)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,s=a.props,u=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,s,u,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),i=this._renderValidatedComponent(o);if(y(r,i))f.receiveComponent(n,i,e,this._mergeChildContext(t,o));else{var a=this._rootNodeID,s=n._rootNodeID;f.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(i,this._currentElement.type);var u=f.mountComponent(this._renderedComponent,a,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(s,u)}},_replaceNodeWithMarkupByID:function(e,t){o.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(e){var t,n=i.current;i.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=n,a.current=null}return g(null===t||t===!1||s.isValidElement(t)),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(E,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var b={Mixin:E};t.exports=b},{127:127,147:147,162:162,166:166,29:29,41:41,44:44,45:45,61:61,62:62,71:71,72:72,78:78,80:80,82:82,83:83,87:87,97:97}],44:[function(e,t,n){"use strict";var r=e(29),o=e(127),i=(e(166),{current:o,withContext:function(e,t){var n,o=i.current;i.current=r({},o,e);try{n=t()}finally{i.current=o}return n}});t.exports=i},{127:127,166:166,29:29}],45:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],46:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(61),i=(e(62),e(155)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{155:155,61:61,62:62}],47:[function(e,t,n){"use strict";var r=e(2),o=e(32),i=e(38),a=e(61),s=e(153),u=a.createFactory("button"),l=s({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=i.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[r,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&l[t]||(e[t]=this.props[t]);return u(e,this.props.children)}});t.exports=c},{153:153,2:2,32:32,38:38,61:61}],48:[function(e,t,n){"use strict";function r(e){e&&(null!=e.dangerouslySetInnerHTML&&(g(null==e.children),g("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML)),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===D?o.ownerDocument:o;E(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){I.call(P,e)||(g(N.test(e)),P[e]=!0)}function a(e){i(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var s=e(6),u=e(11),l=e(12),c=e(33),p=e(40),d=e(75),f=e(76),h=e(80),m=e(29),v=e(128),g=e(147),y=(e(148),e(154)),C=(e(166),c.deleteListener),E=c.listenTo,b=c.registrationNameModules,_={string:!0,number:!0},x=y({style:null}),D=1,M=null,T={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},N=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,P={},I={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e,r(this._currentElement.props);var o=T[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,n)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(b.hasOwnProperty(r))o(this._rootNodeID,r,i,e);else{r===x&&(i&&(i=this._previousStyleCopy=m({},t.style)),i=s.createMarkupForStyles(i));var a=l.createMarkupForProperty(r,i);a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">";var u=l.createMarkupForID(this._rootNodeID);return n+" "+u+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=_[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+v(i);if(null!=a){var s=this.mountChildren(a,e,t);return n+s.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){r(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,r,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var s=this._previousStyleCopy;for(r in s)s.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else b.hasOwnProperty(n)?C(this._rootNodeID,n):(u.isStandardName[n]||u.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===x?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=m({},l):this._previousStyleCopy=null,c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else b.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(u.isStandardName[n]||u.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}i&&M.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=_[typeof e.children]?e.children:null,i=_[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,u=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=s;null!=u&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=s?a!==s&&M.updateInnerHTMLByID(this._rootNodeID,s):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),p.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},h.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),m(a.prototype,a.Mixin,f.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{11:11,12:12,128:128,147:147,148:148,154:154,166:166,29:29,33:33,40:40,6:6,75:75,76:76,80:80}],49:[function(e,t,n){"use strict";var r=e(16),o=e(27),i=e(32),a=e(38),s=e(61),u=s.createFactory("form"),l=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[i,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}});t.exports=l},{16:16,27:27,32:32,38:38,61:61}],50:[function(e,t,n){"use strict";var r=e(6),o=e(10),i=e(12),a=e(75),s=e(80),u=e(147),l=e(159),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:function(e,t,n){var r=a.getNode(e);u(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);u(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var n=a.getNode(e);r.setValueForStyles(n,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);l(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);o.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);o.processUpdates(e,t)}};s.measureMethods(p,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=p},{10:10,12:12,147:147,159:159,6:6,75:75,80:80}],51:[function(e,t,n){"use strict";var r=e(16),o=e(27),i=e(32),a=e(38),s=e(61),u=s.createFactory("iframe"),l=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[i,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")}});t.exports=l},{16:16,27:27,32:32,38:38,61:61}],52:[function(e,t,n){"use strict";var r=e(16),o=e(27),i=e(32),a=e(38),s=e(61),u=s.createFactory("img"),l=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}});t.exports=l},{16:16,27:27,32:32,38:38,61:61}],53:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(12),a=e(26),s=e(32),u=e(38),l=e(61),c=e(75),p=e(97),d=e(29),f=e(147),h=l.createFactory("input"),m={},v=u.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[o,a.Mixin,s],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=c.getID(e);delete m[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode();null!=this.props.checked&&i.setValueForProperty(r,"checked",this.props.checked||!1);var o=a.getValue(this);null!=o&&i.setValueForProperty(r,"value",""+o)},_handleChange:function(e){var t,n=a.getOnChange(this);n&&(t=n.call(this,e)),p.asap(r,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),s=i;s.parentNode;)s=s.parentNode;for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,d=u.length;d>l;l++){var h=u[l];if(h!==i&&h.form===i.form){var v=c.getID(h);f(v);var g=m[v];f(g),p.asap(r,g)}}}return t}});t.exports=v},{12:12,147:147,2:2,26:26,29:29,32:32,38:38,61:61,75:75,97:97}],54:[function(e,t,n){"use strict";var r=e(32),o=e(38),i=e(61),a=(e(166),i.createFactory("option")),s=o.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[r],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=s},{166:166,32:32,38:38,61:61}],55:[function(e,t,n){"use strict";function r(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=s.getValue(this);null!=e&&this.isMounted()&&i(this,e)}}function o(e,t,n){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var a=e(2),s=e(26),u=e(32),l=e(38),c=e(61),p=e(97),d=e(29),f=c.createFactory("select"),h=l.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,s.Mixin,u],propTypes:{defaultValue:o,value:o},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=s.getValue(this);null!=e?i(this,e):null!=this.props.defaultValue&&i(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=s.getValue(this);null!=t?(this._pendingUpdate=!1,i(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?i(this,this.props.defaultValue):i(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,n=s.getOnChange(this);return n&&(t=n.call(this,e)),this._pendingUpdate=!0,p.asap(r,this),t}});t.exports=h},{2:2,26:26,29:29,32:32,38:38,61:61,97:97}],56:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,s=t.getRangeAt(0),u=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=u?0:s.toString().length,c=s.cloneRange();c.selectNodeContents(e),c.setEnd(s.startContainer,s.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function s(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var s=l(e,o),u=l(e,i);if(s&&u){var p=document.createRange();p.setStart(s.node,s.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(u.node,u.offset)):(p.setEnd(u.node,u.offset),n.addRange(p))}}}var u=e(22),l=e(140),c=e(142),p=u.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:s};t.exports=d},{140:140,142:142,22:22}],57:[function(e,t,n){"use strict";var r=e(12),o=e(40),i=e(48),a=e(29),s=e(128),u=function(e){};a(u.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){this._rootNodeID=e;var o=s(this._stringText);return t.renderToStaticMarkup?o:"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;

n!==this._stringText&&(this._stringText=n,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,n))}},unmountComponent:function(){o.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=u},{12:12,128:128,29:29,40:40,48:48}],58:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(12),a=e(26),s=e(32),u=e(38),l=e(61),c=e(97),p=e(29),d=e(147),f=(e(166),l.createFactory("textarea")),h=u.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[o,a.Mixin,s],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this);if(null!=r){var o=this.getDOMNode();i.setValueForProperty(o,"value",""+r)}},_handleChange:function(e){var t,n=a.getOnChange(this);return n&&(t=n.call(this,e)),c.asap(r,this),t}});t.exports=h},{12:12,147:147,166:166,2:2,26:26,29:29,32:32,38:38,61:61,97:97}],59:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(97),i=e(113),a=e(29),s=e(126),u={initialize:s,close:function(){d.isBatchingUpdates=!1}},l={initialize:s,close:o.flushBatchedUpdates.bind(o)},c=[l,u];a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o):p.perform(e,null,t,n,r,o)}};t.exports=d},{113:113,126:126,29:29,97:97}],60:[function(e,t,n){"use strict";function r(e){return h.createClass({tagName:e.toUpperCase(),render:function(){return new P(e,null,null,null,null,this.props)}})}function o(){R.EventEmitter.injectReactEventListener(I),R.EventPluginHub.injectEventPluginOrder(u),R.EventPluginHub.injectInstanceHandle(w),R.EventPluginHub.injectMount(O),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:L,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,MobileSafariClickEventPlugin:d,SelectEventPlugin:A,BeforeInputEventPlugin:i}),R.NativeComponent.injectGenericComponentClass(g),R.NativeComponent.injectTextComponentClass(N),R.NativeComponent.injectAutoWrapper(r),R.Class.injectMixin(f),R.NativeComponent.injectComponentClasses({button:y,form:C,iframe:_,img:E,input:x,option:D,select:M,textarea:T,html:F("html"),head:F("head"),body:F("body")}),R.DOMProperty.injectDOMPropertyConfig(p),R.DOMProperty.injectDOMPropertyConfig(U),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(S),R.Updates.injectBatchingStrategy(v),R.RootIndex.injectCreateReactRootIndex(c.canUseDOM?s.createReactRootIndex:k.createReactRootIndex),R.Component.injectEnvironment(m),R.DOMComponent.injectIDOperations(b)}var i=e(3),a=e(8),s=e(9),u=e(14),l=e(15),c=e(22),p=e(24),d=e(28),f=e(32),h=e(38),m=e(40),v=e(59),g=e(48),y=e(47),C=e(49),E=e(52),b=e(50),_=e(51),x=e(53),D=e(54),M=e(55),T=e(58),N=e(57),P=e(61),I=e(66),R=e(68),w=e(70),O=e(75),S=e(86),A=e(99),k=e(100),L=e(101),U=e(98),F=e(122);t.exports={inject:o}},{100:100,101:101,122:122,14:14,15:15,22:22,24:24,28:28,3:3,32:32,38:38,40:40,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,57:57,58:58,59:59,61:61,66:66,68:68,70:70,75:75,8:8,86:86,9:9,98:98,99:99}],61:[function(e,t,n){"use strict";var r=e(44),o=e(45),i=e(29),a=(e(166),{key:!0,ref:!0}),s=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};s.prototype={_isReactElement:!0},s.createElement=function(e,t,n){var i,u={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(u[i]=t[i])}var p=arguments.length-2;if(1===p)u.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];u.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(i in h)"undefined"==typeof u[i]&&(u[i]=h[i])}return new s(e,l,c,o.current,r.current,u)},s.createFactory=function(e){var t=s.createElement.bind(null,e);return t.type=e,t},s.cloneAndReplaceProps=function(e,t){var n=new s(e.type,e.key,e.ref,e._owner,e._context,t);return n},s.cloneElement=function(e,t,n){var r,u=i({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=o.current),void 0!==t.key&&(l=""+t.key);for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(u[r]=t[r])}var d=arguments.length-2;if(1===d)u.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];u.children=f}return new s(e.type,l,c,p,e._context,u)},s.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=s},{166:166,29:29,44:44,45:45}],62:[function(e,t,n){"use strict";function r(){if(y.current){var e=y.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function i(){var e=y.current;return e&&o(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,u('Each child in an array or iterator should have a unique "key" prop.',e,t))}function s(e,t,n){D.test(e)&&u("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function u(e,t,n){var r=i(),a="string"==typeof n?n:n.displayName||n.name,s=r||a,u=_[e]||(_[e]={});if(!u.hasOwnProperty(s)){u[s]=!0;var l="";if(t&&t._owner&&t._owner!==y.current){var c=o(t._owner);l=" It was passed a child from "+c+"."}}}function l(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];m.isValidElement(r)&&a(r,t)}else if(m.isValidElement(e))e._store.validated=!0;else if(e){var o=E(e);if(o){if(o!==e.entries)for(var i,u=o.call(e);!(i=u.next()).done;)m.isValidElement(i.value)&&a(i.value,t)}else if("object"==typeof e){var l=v.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&s(c,l[c],t)}}}function c(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{b("function"==typeof t[i]),a=t[i](n,i,e,o)}catch(s){a=s}a instanceof Error&&!(a.message in x)&&(x[a.message]=!0,r(this))}}function p(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!M.hasOwnProperty(i)){M[i]=!0;var a="";r&&(a=" <"+r+" />");var s="";o&&(s=" The element was created by "+o+".")}}function d(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function f(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&d(t[r],n[r])||(p(r,e),t[r]=n[r]))}}function h(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,g.prop),"function"==typeof t.getDefaultProps}}var m=e(61),v=e(67),g=e(83),y=(e(82),e(45)),C=e(78),E=e(138),b=e(147),_=(e(166),{}),x={},D=/^\d+$/,M={},T={checkAndWarnForMutatedProps:f,createElement:function(e,t,n){var r=m.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)l(arguments[o],e);return h(r),r},createFactory:function(e){var t=T.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=m.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)l(arguments[o],r.type);return h(r),r}};t.exports=T},{138:138,147:147,166:166,45:45,61:61,67:67,78:78,82:82,83:83}],63:[function(e,t,n){"use strict";function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return!!c[e]}var a,s=e(61),u=e(71),l=e(147),c={},p={injectEmptyComponent:function(e){a=s.createFactory(e)}},d=function(){};d.prototype.componentDidMount=function(){var e=u.get(this);e&&r(e._rootNodeID)},d.prototype.componentWillUnmount=function(){var e=u.get(this);e&&o(e._rootNodeID)},d.prototype.render=function(){return l(a),a()};var f=s.createElement(d),h={emptyElement:f,injection:p,isNullComponentID:i};t.exports=h},{147:147,61:61,71:71}],64:[function(e,t,n){"use strict";var r={guard:function(e,t){return e}};t.exports=r},{}],65:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(18),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{18:18}],66:[function(e,t,n){"use strict";function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=p.getID(t)||"";v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window);e(t)}var s=e(17),u=e(22),l=e(30),c=e(70),p=e(75),d=e(97),f=e(29),h=e(137),m=e(143);f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:u.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?s.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?s.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);s.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{137:137,143:143,17:17,22:22,29:29,30:30,70:70,75:75,97:97}],67:[function(e,t,n){"use strict";var r=(e(61),e(166),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=r},{166:166,61:61}],68:[function(e,t,n){"use strict";var r=e(11),o=e(18),i=e(41),a=e(38),s=e(63),u=e(33),l=e(78),c=e(48),p=e(80),d=e(89),f=e(97),h={Component:i.injection,Class:a.injection,DOMComponent:c.injection,DOMProperty:r.injection,EmptyComponent:s.injection,EventPluginHub:o.injection,EventEmitter:u.injection,NativeComponent:l.injection,Perf:p.injection,RootIndex:d.injection,Updates:f.injection};t.exports=h},{11:11,18:18,33:33,38:38,41:41,48:48,63:63,78:78,80:80,89:89,97:97}],69:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(56),i=e(120),a=e(131),s=e(133),u={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=s();return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=s(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(u.hasSelectionCapabilities(n)&&u.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=u},{120:120,131:131,133:133,56:56}],70:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function s(e){return e?e.substr(0,e.lastIndexOf(f)):""}function u(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a;else if(e.charAt(a)!==t.charAt(a))break;var s=e.substr(0,r);return d(i(s)),s}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t);var l=a(t,e);d(l||a(e,t));for(var c=0,p=l?s:u,f=e;;f=p(f,t)){var h;if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break;d(c++<m)}}var p=e(89),d=e(147),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:u,isAncestorIDOf:a,SEPARATOR:f};t.exports=v},{147:147,89:89}],71:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],72:[function(e,t,n){"use strict";var r={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=r},{}],73:[function(e,t,n){"use strict";function r(e,t){this.value=e,this.requestChange=t}function o(e){var t={value:"undefined"==typeof e?i.PropTypes.any.isRequired:e.isRequired,requestChange:i.PropTypes.func.isRequired};return i.PropTypes.shape(t)}var i=e(31);r.PropTypes={link:o},t.exports=r},{31:31}],74:[function(e,t,n){"use strict";var r=e(116),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var i=r(e);return i===n}};t.exports=o},{116:116}],75:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){var t=I(e);return t&&K.getID(t)}function i(e){var t=a(e);if(t)if(L.hasOwnProperty(t)){var n=L[t];n!==e&&(w(!c(n,t)),L[t]=e)}else L[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(k)||""}function s(e,t){var n=a(e);n!==t&&delete L[n],e.setAttribute(k,t),L[t]=e}function u(e){return L.hasOwnProperty(e)&&c(L[e],e)||(L[e]=K.findReactNodeByID(e)),L[e]}function l(e){var t=b.get(e)._rootNodeID;return C.isNullComponentID(t)?null:(L.hasOwnProperty(t)&&c(L[t],t)||(L[t]=K.findReactNodeByID(t)),L[t])}function c(e,t){if(e){w(a(e)===t);var n=K.findReactContainerForID(t);if(n&&P(n,e))return!0}return!1}function p(e){delete L[e]}function d(e){var t=L[e];return t&&c(t,e)?void(W=t):!1}function f(e){W=null,E.traverseAncestors(e,d);var t=W;return W=null,t}function h(e,t,n,r,o){var i=D.mountComponent(e,t,r,N);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function m(e,t,n,r){var o=T.ReactReconcileTransaction.getPooled();o.perform(h,null,e,t,n,o,r),T.ReactReconcileTransaction.release(o)}var v=e(11),g=e(33),y=(e(45),e(61)),C=(e(62),e(63)),E=e(70),b=e(71),_=e(74),x=e(80),D=e(87),M=e(96),T=e(97),N=e(127),P=e(120),I=e(141),R=e(146),w=e(147),O=e(159),S=e(162),A=(e(166),E.SEPARATOR),k=v.ID_ATTRIBUTE_NAME,L={},U=1,F=9,B={},j={},V=[],W=null,K={_instancesByReactRootID:B,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),r&&M.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===U||t.nodeType===F)),g.ensureScrollValueMonitoring();var n=K.registerContainer(t);return B[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return T.batchedUpdates(m,r,o,t,n),r},render:function(e,t,n){w(y.isValidElement(e));var r=B[o(t)];if(r){var i=r._currentElement;if(S(i,e))return K._updateRootComponent(r,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=I(t),s=a&&K.isRenderedByReact(a),u=s&&!r,l=K._renderNewRootComponent(e,t,u).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=y.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=o(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),j[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===U||e.nodeType===F));var t=o(e),n=B[t];return n?(K.unmountComponentFromNode(n,e),delete B[t],delete j[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===F&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=j[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===A:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=V,r=0,o=f(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var s=K.getID(a);s?t===s?i=a:E.isAncestorIDOf(s,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,n){if(w(t&&(t.nodeType===U||t.nodeType===F)),n){var o=I(t);if(_.canReuseMarkup(e,o))return;var i=o.getAttribute(_.CHECKSUM_ATTR_NAME);o.removeAttribute(_.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(_.CHECKSUM_ATTR_NAME,i);var s=r(e,a);" (client) "+e.substring(s-20,s+20)+"\n (server) "+a.substring(s-20,s+20),w(t.nodeType!==F)}w(t.nodeType!==F),O(t,e)},getReactRootID:o,getID:i,setID:s,getNode:u,getNodeFromInstance:l,purgeID:p};x.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{11:11,120:120,127:127,141:141,146:146,147:147,159:159,162:162,166:166,33:33,45:45,61:61,62:62,63:63,70:70,71:71,74:74,80:80,87:87,96:96,97:97}],76:[function(e,t,n){"use strict";function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function s(){h.length&&(l.processChildrenUpdates(h,m),u())}function u(){h.length=0,m.length=0}var l=e(41),c=e(77),p=e(87),d=e(36),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t,n){var r=d.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a],u=this._rootNodeID+a,l=p.mountComponent(s,u,t,n);s._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;d.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?u():s())}},updateChildren:function(e,t,n){f++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{f--,f||(r?u():s())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=d.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,s=0;for(i in o)if(o.hasOwnProperty(i)){var u=r&&r[i],l=o[i];u===l?(this.moveChild(u,s,a),a=Math.max(u._mountIndex,a),u._mountIndex=s):(u&&(a=Math.max(u._mountIndex,a),this._unmountChildByName(u,i)),this._mountChildByNameAtIndex(l,i,s,t,n)),s++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;d.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=p.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null}}};t.exports=v},{36:36,41:41,77:77,87:87}],77:[function(e,t,n){"use strict";var r=e(153),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{153:153}],78:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return u(c),new c(e.type,e.props)}function i(e){return new d(e)}function a(e){return e instanceof d}var s=e(29),u=e(147),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){s(p,e)},injectAutoWrapper:function(e){l=e}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{147:147,29:29}],79:[function(e,t,n){"use strict";var r=e(147),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{147:147}],80:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],81:[function(e,t,n){"use strict";function r(e){return function(t,n,r){t.hasOwnProperty(n)?t[n]=e(t[n],r):t[n]=r}}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=l[n];r&&l.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var i=e(29),a=e(126),s=e(152),u=r(function(e,t){return i({},t,e)}),l={children:a,className:r(s),style:u},c={mergeProps:function(e,t){return o(i({},e),t)}};t.exports=c},{126:126,152:152,29:29}],82:[function(e,t,n){"use strict";var r={};t.exports=r},{}],83:[function(e,t,n){"use strict";var r=e(153),o=r({prop:null,context:null,childContext:null});t.exports=o},{153:153}],84:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,i){if(o=o||b,null==n[r]){var a=C[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i);if(a!==e){var s=C[o],u=v(i);return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return r(t)}function i(){return r(E.thatReturns(null))}function a(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=C[o],s=m(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<i.length;u++){var l=e(i,u,r,o);if(l instanceof Error)return l}return null}return r(t)}function s(){function e(e,t,n,r){if(!g.isValidElement(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return r(e)}function u(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=C[o],a=e.name||b;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var s=C[o],u=JSON.stringify(e);return new Error("Invalid "+s+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var s=C[o];return new Error("Invalid "+s+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var u in i)if(i.hasOwnProperty(u)){var l=e(i,u,r,o);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var s=C[o];return new Error("Invalid "+s+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var s=C[o];return new Error("Invalid "+s+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var l=e[u];if(l){var c=l(i,u,r,o);if(c)return c}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!h(e[t]))return!1;return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var g=e(61),y=e(67),C=e(82),E=e(126),b="<<anonymous>>",_=s(),x=d(),D={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:u,node:x,objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=D},{126:126,61:61,67:67,82:82}],85:[function(e,t,n){"use strict";function r(){this.listenersToPut=[]}var o=e(30),i=e(33),a=e(29);a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{29:29,30:30,33:33}],86:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=u.getPooled()}var o=e(7),i=e(30),a=e(33),s=e(69),u=e(85),l=e(113),c=e(29),p={initialize:s.getSelectionInformation,close:s.restoreSelection},d={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,u.release(this.putListenerQueue),this.putListenerQueue=null}};c(r.prototype,l.Mixin,v),i.addPoolingTo(r),t.exports=r},{113:113,29:29,30:30,33:33,69:69,7:7,85:85}],87:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(88),i=(e(62),{mountComponent:function(e,t,n,o){var i=e.mountComponent(t,n,o);return n.getReactMountReady().enqueue(r,e),i},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||null==t._owner){var s=o.shouldUpdateRefs(a,t);s&&o.detachRefs(e,a),e.receiveComponent(t,n,i),s&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=i},{62:62,88:88}],88:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(79),a={};a.attachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&o(n,e,t._owner)},t.exports=a},{79:79}],89:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],90:[function(e,t,n){"use strict";function r(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=u.getPooled(!1),t.perform(function(){var r=c(e,null),o=r.mountComponent(n,t,l);return s.addChecksumToMarkup(o)},null)}finally{u.release(t)}}function o(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=u.getPooled(!0),t.perform(function(){var r=c(e,null);return r.mountComponent(n,t,l)},null)}finally{u.release(t)}}var i=e(61),a=e(70),s=e(74),u=e(91),l=e(127),c=e(146),p=e(147);t.exports={renderToString:r,renderToStaticMarkup:o}},{127:127,146:146,147:147,61:61,70:70,74:74,91:91}],91:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=e(30),i=e(7),a=e(85),s=e(113),u=e(29),l=e(126),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};u(r.prototype,s.Mixin,f),o.addPoolingTo(r),t.exports=r},{113:113,126:126,29:29,30:30,7:7,85:85}],92:[function(e,t,n){"use strict";function r(e,t){var n={};return function(r){n[t]=r,e.setState(n)}}var o={createStateSetter:function(e,t){return function(n,r,o,i,a,s){var u=t.call(e,n,r,o,i,a,s);u&&e.setState(u)}},createStateKeySetter:function(e,t){var n=e.__keySetters||(e.__keySetters={});return n[t]||(n[t]=r(e,t))}};o.Mixin={createStateSetter:function(e){return o.createStateSetter(this,e)},createStateKeySetter:function(e){return o.createStateKeySetter(this,e)}},t.exports=o},{}],93:[function(e,t,n){"use strict";var r=e(37),o=e(67),i={getChildMapping:function(e){return e?o.extract(r.map(e,function(e){return e})):e},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a,s={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var l=r[u][a];s[r[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}};t.exports=i},{37:37,67:67}],94:[function(e,t,n){"use strict";function r(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete s.animationend.animation,"TransitionEvent"in window||delete s.transitionend.transition;for(var n in s){var r=s[n];for(var o in r)if(o in t){u.push(r[o]);break}}}function o(e,t,n){e.addEventListener(t,n,!1)}function i(e,t,n){e.removeEventListener(t,n,!1)}var a=e(22),s={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},u=[];a.canUseDOM&&r();var l={addEndEventListener:function(e,t){
return 0===u.length?void window.setTimeout(t,0):void u.forEach(function(n){o(e,n,t)})},removeEndEventListener:function(e,t){0!==u.length&&u.forEach(function(n){i(e,n,t)})}};t.exports=l},{22:22}],95:[function(e,t,n){"use strict";var r=e(31),o=e(93),i=e(29),a=e(119),s=e(126),u=r.createClass({displayName:"ReactTransitionGroup",propTypes:{component:r.PropTypes.any,childFactory:r.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:s.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidMount:function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},componentWillReceiveProps:function(e){var t=o.getChildMapping(e.children),n=this.state.children;this.setState({children:o.mergeChildMappings(n,t)});var r;for(r in t){var i=n&&n.hasOwnProperty(r);!t[r]||i||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performAppear:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillAppear?t.componentWillAppear(this._handleDoneAppearing.bind(this,e)):this._handleDoneAppearing(e)},_handleDoneAppearing:function(e){var t=this.refs[e];t.componentDidAppear&&t.componentDidAppear(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);if(n&&n.hasOwnProperty(e))this.performEnter(e);else{var r=i({},this.state.children);delete r[e],this.setState({children:r})}},render:function(){var e=[];for(var t in this.state.children){var n=this.state.children[t];n&&e.push(a(this.props.childFactory(n),{ref:t,key:t}))}return r.createElement(this.props.component,this.props,e)}});t.exports=u},{119:119,126:126,29:29,31:31,93:93}],96:[function(e,t,n){"use strict";function r(e){e!==i.currentlyMountingInstance&&l.enqueueUpdate(e)}function o(e,t){p(null==a.current);var n=u.get(e);return n?n===i.currentlyUnmountingInstance?null:n:null}var i=e(72),a=e(45),s=e(61),u=e(71),l=e(97),c=e(29),p=e(147),d=(e(166),{enqueueCallback:function(e,t){p("function"==typeof t);var n=o(e);return n&&n!==i.currentlyMountingInstance?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){p("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement,a=c({},i.props,t);n._pendingElement=s.cloneAndReplaceProps(i,a),r(n)}},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement;n._pendingElement=s.cloneAndReplaceProps(i,t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=d},{147:147,166:166,29:29,45:45,61:61,71:71,72:72,97:97}],97:[function(e,t,n){"use strict";function r(){v(T.ReactReconcileTransaction&&E)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=T.ReactReconcileTransaction.getPooled()}function i(e,t,n,o,i){r(),E.batchedUpdates(e,t,n,o,i)}function a(e,t){return e._mountOrder-t._mountOrder}function s(e){var t=e.dirtyComponentsLength;v(t===g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function u(e){return r(),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(u,e)}function l(e,t){v(E.isBatchingUpdates),y.enqueue(e,t),C=!0}var c=e(7),p=e(30),d=(e(45),e(80)),f=e(87),h=e(113),m=e(29),v=e(147),g=(e(166),[]),y=c.getPooled(),C=!1,E=null,b={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[b,_];m(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,T.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(s,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e),T.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e),v("function"==typeof e.batchedUpdates),v("boolean"==typeof e.isBatchingUpdates),E=e}},T={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:u,flushBatchedUpdates:D,injection:M,asap:l};t.exports=T},{113:113,147:147,166:166,29:29,30:30,45:45,7:7,80:80,87:87}],98:[function(e,t,n){"use strict";var r=e(11),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=i},{11:11}],99:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&s.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(y||null==m||m!==l())return null;var t=r(m);if(!g||!d(g,t)){g=t;var n=u.getPooled(h.select,v,e);return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}var i=e(16),a=e(21),s=e(69),u=e(105),l=e(133),c=e(150),p=e(154),d=e(161),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]}},m=null,v=null,g=null,y=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,g=null);break;case f.topBlur:m=null,v=null,g=null;break;case f.topMouseDown:y=!0;break;case f.topContextMenu:case f.topMouseUp:return y=!1,o(r);case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}};t.exports=C},{105:105,133:133,150:150,154:154,16:16,161:161,21:21,69:69}],100:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],101:[function(e,t,n){"use strict";var r=e(16),o=e(20),i=e(21),a=e(102),s=e(105),u=e(106),l=e(108),c=e(109),p=e(104),d=e(110),f=e(111),h=e(112),m=e(134),v=e(147),g=e(154),y=(e(166),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:g({onBlur:!0}),captured:g({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:g({onClick:!0}),captured:g({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:g({onContextMenu:!0}),captured:g({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:g({onCopy:!0}),captured:g({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:g({onCut:!0}),captured:g({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:g({onDoubleClick:!0}),captured:g({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:g({onDrag:!0}),captured:g({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:g({onDragEnd:!0}),captured:g({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:g({onDragEnter:!0}),captured:g({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:g({onDragExit:!0}),captured:g({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:g({onDragLeave:!0}),captured:g({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:g({onDragOver:!0}),captured:g({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:g({onDragStart:!0}),captured:g({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:g({onDrop:!0}),captured:g({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:g({onFocus:!0}),captured:g({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:g({onInput:!0}),captured:g({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:g({onKeyDown:!0}),captured:g({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:g({onKeyPress:!0}),captured:g({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:g({onKeyUp:!0}),captured:g({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:g({onLoad:!0}),captured:g({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:g({onError:!0}),captured:g({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:g({onMouseDown:!0}),captured:g({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:g({onMouseMove:!0}),captured:g({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:g({onMouseOut:!0}),captured:g({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:g({onMouseOver:!0}),captured:g({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:g({onMouseUp:!0}),captured:g({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:g({onPaste:!0}),captured:g({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:g({onReset:!0}),captured:g({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:g({onScroll:!0}),captured:g({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:g({onSubmit:!0}),captured:g({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:g({onTouchCancel:!0}),captured:g({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:g({onTouchEnd:!0}),captured:g({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:g({onTouchMove:!0}),captured:g({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:g({onTouchStart:!0}),captured:g({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:g({onWheel:!0}),captured:g({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var b in E)E[b].dependencies=[b];var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e];if(!o)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=s;break;case y.topKeyPress:if(0===m(r))return null;case y.topKeyDown:case y.topKeyUp:g=l;break;case y.topBlur:case y.topFocus:g=u;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=p;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=d;break;case y.topScroll:g=f;break;case y.topWheel:g=h;break;case y.topCopy:case y.topCut:case y.topPaste:g=a}v(g);var C=g.getPooled(o,n,r);return i.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{102:102,104:104,105:105,106:106,108:108,109:109,110:110,111:111,112:112,134:134,147:147,154:154,16:16,166:166,20:20,21:21}],102:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{105:105}],103:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i={data:null};o.augmentClass(r,i),t.exports=r},{105:105}],104:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(109),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{109:109}],105:[function(e,t,n){"use strict";function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i?this[o]=i(n):this[o]=n[o]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;s?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=e(30),i=e(29),a=e(126),s=e(137),u={type:null,target:s,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=u,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),t.exports=r},{126:126,137:137,29:29,30:30}],106:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{111:111}],107:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i={data:null};o.augmentClass(r,i),t.exports=r},{105:105}],108:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i=e(134),a=e(135),s=e(136),u={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:s,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,u),t.exports=r},{111:111,134:134,135:135,136:136}],109:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i=e(114),a=e(136),s={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,s),t.exports=r},{111:111,114:114,136:136}],110:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i=e(136),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{111:111,136:136}],111:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i=e(137),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{105:105,137:137}],112:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(109),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{109:109}],113:[function(e,t,n){"use strict";var r=e(147),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,s,u){r(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,s,u),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction());for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],s=this.wrapperInitData[n];try{o=!0,s!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,s),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(u){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{147:147}],114:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],115:[function(e,t,n){"use strict";function r(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(147);t.exports=r},{147:147}],116:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=r},{}],117:[function(e,t,n){function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],118:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(117),i=/^-ms-/;t.exports=r},{117:117}],119:[function(e,t,n){"use strict";function r(e,t){var n=i.mergeProps(t,e.props);return!n.hasOwnProperty(s)&&e.props.hasOwnProperty(s)&&(n.children=e.props.children),o.createElement(e.type,n)}var o=e(61),i=e(81),a=e(154),s=(e(166),a({children:null}));t.exports=r},{154:154,166:166,61:61,81:81}],120:[function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(151);t.exports=r},{151:151}],121:[function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=e(163);t.exports=o},{163:163}],122:[function(e,t,n){"use strict";function r(e){var t=i.createFactory(e),n=o.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}});return n}var o=e(38),i=e(61),a=e(147);t.exports=r},{147:147,38:38,61:61}],123:[function(e,t,n){function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;u(!!l);var o=r(e),i=o&&s(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(u(t),a(p).forEach(t));for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(22),a=e(121),s=e(139),u=e(147),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{121:121,139:139,147:147,22:22}],124:[function(e,t,n){"use strict";function r(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}e(166);t.exports=r},{166:166}],125:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(5),i=o.isUnitlessNumber;t.exports=r},{5:5}],126:[function(e,t,n){function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],127:[function(e,t,n){"use strict";var r={};t.exports=r},{}],128:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],129:[function(e,t,n){"use strict";function r(e){return null==e?null:s(e)?e:o.has(e)?i.getNodeFromInstance(e):(a(null==e.render||"function"!=typeof e.render),void a(!1))}{var o=(e(45),e(71)),i=e(75),a=e(147),s=e(149);e(166)}t.exports=r},{147:147,149:149,166:166,45:45,71:71,75:75}],130:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}{var i=e(164);e(166)}t.exports=o},{164:164,166:166}],131:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],132:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],133:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],134:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],135:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(134),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{134:134}],136:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],137:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],138:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],139:[function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),s.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",s[e]=!a.firstChild),s[e]?d[e]:null}var o=e(22),i=e(147),a=o.canUseDOM?document.createElement("div"):null,s={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},u=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:u,option:u,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,clipPath:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p};t.exports=r},{147:147,22:22}],140:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],141:[function(e,t,n){"use strict";function r(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=r},{}],142:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(22),i=null;t.exports=r},{22:22}],143:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],144:[function(e,t,n){function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],145:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(144),i=/^ms-/;t.exports=r},{144:144}],146:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e,t){var n;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;n=t===o.type&&"string"==typeof o.type?s.createInternalComponent(o):r(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?n=s.createInstanceForText(e):l(!1);return n.construct(e),n._mountIndex=0,n._mountImage=null,n}var i=e(43),a=e(63),s=e(78),u=e(29),l=e(147),c=(e(166),function(){});u(c.prototype,i.Mixin,{_instantiateReactComponent:o}),t.exports=o},{147:147,166:166,29:29,43:43,63:63,78:78}],147:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,s],c=0;u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw u.framesToPop=1,u}};t.exports=r},{}],148:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(22);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{22:22}],149:[function(e,t,n){function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],150:[function(e,t,n){"use strict";function r(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],151:[function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=e(149);t.exports=r},{149:149}],152:[function(e,t,n){"use strict";function r(e){e||(e="");var t,n=arguments.length;if(n>1)for(var r=1;n>r;r++)t=arguments[r],t&&(e=(e?e+" ":"")+t);return e}t.exports=r},{}],153:[function(e,t,n){"use strict";var r=e(147),o=function(e){var t,n={};r(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{147:147}],154:[function(e,t,n){var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],155:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],156:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],157:[function(e,t,n){"use strict";function r(e){return i(o.isValidElement(e)),e}var o=e(61),i=e(147);t.exports=r},{147:147,61:61}],158:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(128);t.exports=r},{128:128}],159:[function(e,t,n){"use strict";var r=e(22),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){
e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var s=document.createElement("div");s.innerHTML=" ",""===s.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{22:22}],160:[function(e,t,n){"use strict";var r=e(22),o=e(128),i=e(159),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{128:128,159:159,22:22}],161:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=r},{}],162:[function(e,t,n){"use strict";function r(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(166);t.exports=r},{166:166}],163:[function(e,t,n){function r(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e(147);t.exports=r},{147:147}],164:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(g,r)}function a(e){return"$"+i(e)}function s(e,t,n,r,i){var u=typeof e;if(("undefined"===u||"boolean"===u)&&(e=null),null===e||"string"===u||"number"===u||l.isValidElement(e))return r(i,e,""===t?h+o(e,0):t,n),1;var p,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)p=e[C],v=(""!==t?t+m:h)+o(p,C),g=n+y,y+=s(p,v,g,r,i);else{var E=d(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)p=b.value,v=(""!==t?t+m:h)+o(p,x++),g=n+y,y+=s(p,v,g,r,i);else for(;!(b=_.next()).done;){var D=b.value;D&&(p=D[1],v=(""!==t?t+m:h)+a(D[0])+m+o(p,0),g=n+y,y+=s(p,v,g,r,i))}}else if("object"===u){f(1!==e.nodeType);var M=c.extract(e);for(var T in M)M.hasOwnProperty(T)&&(p=M[T],v=(""!==t?t+m:h)+a(T)+m+o(p,0),g=n+y,y+=s(p,v,g,r,i))}}return y}function u(e,t,n){return null==e?0:s(e,"",0,t,n)}var l=e(61),c=e(67),p=e(70),d=e(138),f=e(147),h=(e(166),p.SEPARATOR),m=":",v={"=":"=0",".":"=1",":":"=2"},g=/[=.:]/g;t.exports=u},{138:138,147:147,166:166,61:61,67:67,70:70}],165:[function(e,t,n){"use strict";function r(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?a(new e.constructor,e):e}function o(e,t,n){u(Array.isArray(e));var r=t[n];u(Array.isArray(r))}function i(e,t){if(u("object"==typeof t),l.call(t,f))return u(1===Object.keys(t).length),t[f];var n=r(e);if(l.call(t,h)){var s=t[h];u(s&&"object"==typeof s),u(n&&"object"==typeof n),a(n,t[h])}l.call(t,c)&&(o(e,t,c),t[c].forEach(function(e){n.push(e)})),l.call(t,p)&&(o(e,t,p),t[p].forEach(function(e){n.unshift(e)})),l.call(t,d)&&(u(Array.isArray(e)),u(Array.isArray(t[d])),t[d].forEach(function(e){u(Array.isArray(e)),n.splice.apply(n,e)})),l.call(t,m)&&(u("function"==typeof t[m]),n=t[m](n));for(var v in t)g.hasOwnProperty(v)&&g[v]||(n[v]=i(e[v],t[v]));return n}var a=e(29),s=e(154),u=e(147),l={}.hasOwnProperty,c=s({$push:null}),p=s({$unshift:null}),d=s({$splice:null}),f=s({$set:null}),h=s({$merge:null}),m=s({$apply:null}),v=[c,p,d,f,h,m],g={};v.forEach(function(e){g[e]=!0}),t.exports=i},{147:147,154:154,29:29}],166:[function(e,t,n){"use strict";var r=e(126),o=r;t.exports=o},{126:126}]},{},[1])(1)});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.classnames=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function classNames() {
	var classes = '';
	var arg;

	for (var i = 0; i < arguments.length; i++) {
		arg = arguments[i];
		if (!arg) {
			continue;
		}

		if ('string' === typeof arg || 'number' === typeof arg) {
			classes += ' ' + arg;
		} else if (Object.prototype.toString.call(arg) === '[object Array]') {
			classes += ' ' + classNames.apply(null, arg);
		} else if ('object' === typeof arg) {
			for (var key in arg) {
				if (!arg.hasOwnProperty(key) || !arg[key]) {
					continue;
				}
				classes += ' ' + key;
			}
		}
	}
	return classes.substr(1);
}

// safely export classNames in case the script is included directly on a page
if (typeof module !== 'undefined' && module.exports) {
	module.exports = classNames;
}

},{}]},{},[1])(1)
});
/*
    json2.js
    2015-02-25

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 
                        ? '0' + n 
                        : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint 
    eval, for, this 
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 
        ? '0' + n 
        : n;
    }
    
    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
            ? this.getUTCFullYear() + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate()) + 'T' +
                    f(this.getUTCHours()) + ':' +
                    f(this.getUTCMinutes()) + ':' +
                    f(this.getUTCSeconds()) + 'Z'
            : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var cx,
        escapable,
        gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) 
        ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
            ? c
            : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' 
        : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) 
            ? String(value) 
            : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                ? '[]'
                : gap
                ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap 
                                ? ': ' 
                                : ':'
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap 
                                ? ': ' 
                                : ':'
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
            ? '{}'
            : gap
            ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
            : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (
                /^[\],:{}\s]*$/.test(
                    text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                ? walk({'': j}, '')
                : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*!
 * This file is part of cytoscape.js 2.2.14.
 * 
 * Cytoscape.js is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 * 
 * Cytoscape.js is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU Lesser General Public License along with
 * cytoscape.js. If not, see <http://www.gnu.org/licenses/>.
 */
var cytoscape;!function(e){"use strict";var t=cytoscape=function(){return cytoscape.init.apply(cytoscape,arguments)};t.init=function(e){return void 0===e&&(e={}),t.is.plainObject(e)?new t.Core(e):t.is.string(e)?t.extension.apply(t.extension,arguments):void 0},t.fn={},"undefined"!=typeof exports&&(exports=module.exports=cytoscape),"undefined"!=typeof define&&define("cytoscape",function(){return cytoscape}),e&&(e.cytoscape=cytoscape)}("undefined"==typeof window?null:window),function(e,t){"use strict";e.is={string:function(e){return null!=e&&"string"==typeof e},fn:function(e){return null!=e&&"function"==typeof e},array:function(e){return Array.isArray?Array.isArray(e):null!=e&&e instanceof Array},plainObject:function(t){return null!=t&&typeof t==typeof{}&&!e.is.array(t)&&t.constructor===Object},number:function(e){return null!=e&&"number"==typeof e&&!isNaN(e)},integer:function(t){return e.is.number(t)&&Math.floor(t)===t},color:function(e){return null!=e&&"string"==typeof e&&""!==$.Color(e).toString()},bool:function(e){return null!=e&&typeof e==typeof!0},elementOrCollection:function(t){return e.is.element(t)||e.is.collection(t)},element:function(t){return t instanceof e.Element&&t._private.single},collection:function(t){return t instanceof e.Collection&&!t._private.single},core:function(t){return t instanceof e.Core},style:function(t){return t instanceof e.Style},stylesheet:function(t){return t instanceof e.Stylesheet},event:function(t){return t instanceof e.Event},emptyString:function(t){return t?e.is.string(t)&&(""===t||t.match(/^\s+$/))?!0:!1:!0},nonemptyString:function(t){return t&&e.is.string(t)&&""!==t&&!t.match(/^\s+$/)?!0:!1},domElement:function(e){return"undefined"==typeof HTMLElement?!1:e instanceof HTMLElement},touch:function(){return t&&("ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch)}}}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";e.util={extend:function(){var t,r,n,i,a,o,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[1]||{},l=2),"object"==typeof s||e.is.fn(s)||(s={}),c===l&&(s=this,--l);c>l;l++)if(null!=(t=arguments[l]))for(r in t)n=s[r],i=t[r],s!==i&&(u&&i&&(e.is.plainObject(i)||(a=e.is.array(i)))?(a?(a=!1,o=n&&e.is.array(n)?n:[]):o=n&&e.is.plainObject(n)?n:{},s[r]=e.util.extend(u,o,i)):void 0!==i&&(s[r]=i));return s},throttle:function(t,r,n){var i=!0,a=!0;return n===!1?i=!1:e.is.plainObject(n)&&(i="leading"in n?n.leading:i,a="trailing"in n?n.trailing:a),n=n||{},n.leading=i,n.maxWait=r,n.trailing=a,e.util.debounce(t,r,n)},now:function(){return+new Date},debounce:function(t,r,n){var i,a,o,s,l,c,u,d=0,p=!1,h=!0;if(e.is.fn(t)){if(r=Math.max(0,r)||0,n===!0){var g=!0;h=!1}else e.is.plainObject(n)&&(g=n.leading,p="maxWait"in n&&(Math.max(r,n.maxWait)||0),h="trailing"in n?n.trailing:h);var v=function(){var n=r-(e.util.now()-s);if(0>=n){a&&clearTimeout(a);var p=u;a=c=u=void 0,p&&(d=e.util.now(),o=t.apply(l,i),c||a||(i=l=null))}else c=setTimeout(v,n)},f=function(){c&&clearTimeout(c),a=c=u=void 0,(h||p!==r)&&(d=e.util.now(),o=t.apply(l,i),c||a||(i=l=null))};return function(){if(i=arguments,s=e.util.now(),l=this,u=h&&(c||!g),p===!1)var n=g&&!c;else{a||g||(d=s);var y=p-(s-d),m=0>=y;m?(a&&(a=clearTimeout(a)),d=s,o=t.apply(l,i)):a||(a=setTimeout(f,y))}return m&&c?c=clearTimeout(c):c||r===p||(c=setTimeout(v,r)),n&&(m=!0,o=t.apply(l,i)),!m||c||a||(i=l=null),o}}},error:function(e){if(!console)throw e;if(console.error)console.error(e);else{if(!console.log)throw e;console.log(e)}},clone:function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},copy:function(t){return null==t?t:e.is.array(t)?t.slice():e.is.plainObject(t)?e.util.clone(t):t},mapEmpty:function(e){var t=!0;if(null!=e)for(var r in e){t=!1;break}return t},pushMap:function(t){var r=e.util.getMap(t);null==r?e.util.setMap($.extend({},t,{value:[t.value]})):r.push(t.value)},setMap:function(t){for(var r,n=t.map,i=t.keys,a=i.length,o=0;a>o;o++){var r=i[o];e.is.plainObject(r)&&e.util.error("Tried to set map with object key"),o<i.length-1?(null==n[r]&&(n[r]={}),n=n[r]):n[r]=t.value}},getMap:function(t){for(var r=t.map,n=t.keys,i=n.length,a=0;i>a;a++){var o=n[a];if(e.is.plainObject(o)&&e.util.error("Tried to get map with object key"),r=r[o],null==r)return r}return r},deleteMap:function(t){for(var r=t.map,n=t.keys,i=n.length,a=t.keepChildren,o=0;i>o;o++){var s=n[o];e.is.plainObject(s)&&e.util.error("Tried to delete map with object key");var l=o===t.keys.length-1;if(l)if(a)for(var c in r)a[c]||delete r[c];else delete r[s];else r=r[s]}},capitalize:function(t){return e.is.emptyString(t)?t:t.charAt(0).toUpperCase()+t.substring(1)},camel2dash:function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r],i=n.toLowerCase(),a=n!==i;a?(t.push("-"),t.push(i)):t.push(n)}var o=t.length===e.length;return o?e:t.join("")},dash2camel:function(e){for(var t=[],r=!1,n=0;n<e.length;n++){var i=e[n],a="-"===i;a?r=!0:(t.push(r?i.toUpperCase():i),r=!1)}return t.join("")},trim:function(e){var t,r;for(t=0;t<e.length&&" "===e[t];t++);for(r=e.length-1;r>t&&" "===e[r];r--);return e.substring(t,r+1)},hex2tuple:function(e){if((4===e.length||7===e.length)&&"#"===e[0]){var t,r,n,i=4===e.length,a=16;return i?(t=parseInt(e[1]+e[1],a),r=parseInt(e[2]+e[2],a),n=parseInt(e[3]+e[3],a)):(t=parseInt(e[1]+e[2],a),r=parseInt(e[3]+e[4],a),n=parseInt(e[5]+e[6],a)),[t,r,n]}},hsl2tuple:function(t){function r(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+(t-e)*(2/3-r)*6:e}var n,i,a,o,s,l,c,u,d=new RegExp("^"+e.util.regex.hsla+"$").exec(t);if(d){if(i=parseInt(d[1]),0>i?i=(360- -1*i%360)%360:i>360&&(i%=360),i/=360,a=parseFloat(d[2]),0>a||a>100)return;if(a/=100,o=parseFloat(d[3]),0>o||o>100)return;if(o/=100,s=d[4],void 0!==s&&(s=parseFloat(s),0>s||s>1))return;if(0===a)l=c=u=Math.round(255*o);else{var p=.5>o?o*(1+a):o+a-o*a,h=2*o-p;l=Math.round(255*r(h,p,i+1/3)),c=Math.round(255*r(h,p,i)),u=Math.round(255*r(h,p,i-1/3))}n=[l,c,u,s]}return n},rgb2tuple:function(t){var r,n=new RegExp("^"+e.util.regex.rgba+"$").exec(t);if(n){r=[];for(var i=[],a=1;3>=a;a++){var o=n[a];if("%"===o[o.length-1]&&(i[a]=!0),o=parseFloat(o),i[a]&&(o=o/100*255),0>o||o>255)return;r.push(Math.floor(o))}var s=i[1]||i[2]||i[3],l=i[1]&&i[2]&&i[3];if(s&&!l)return;var c=n[4];if(void 0!==c){if(c=parseFloat(c),0>c||c>1)return;r.push(c)}}return r},colorname2tuple:function(t){return e.util.colors[t.toLowerCase()]},color2tuple:function(t){return e.util.colorname2tuple(t)||e.util.hex2tuple(t)||e.util.rgb2tuple(t)||e.util.hsl2tuple(t)},tuple2hex:function(e){function t(e){var t=e.toString(16);return 1===t.length&&(t="0"+t),t}var r=e[0],n=e[1],i=e[2];return"#"+t(r)+t(n)+t(i)},colors:{transparent:[0,0,0,0],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},e.util.regex={},e.util.regex.number="(?:[-]?\\d*\\.\\d+|[-]?\\d+|[-]?\\d*\\.\\d+[eE]\\d+)",e.util.regex.rgba="rgb[a]?\\(("+e.util.regex.number+"[%]?)\\s*,\\s*("+e.util.regex.number+"[%]?)\\s*,\\s*("+e.util.regex.number+"[%]?)(?:\\s*,\\s*("+e.util.regex.number+"))?\\)",e.util.regex.rgbaNoBackRefs="rgb[a]?\\((?:"+e.util.regex.number+"[%]?)\\s*,\\s*(?:"+e.util.regex.number+"[%]?)\\s*,\\s*(?:"+e.util.regex.number+"[%]?)(?:\\s*,\\s*(?:"+e.util.regex.number+"))?\\)",e.util.regex.hsla="hsl[a]?\\(("+e.util.regex.number+")\\s*,\\s*("+e.util.regex.number+"[%])\\s*,\\s*("+e.util.regex.number+"[%])(?:\\s*,\\s*("+e.util.regex.number+"))?\\)",e.util.regex.hslaNoBackRefs="hsl[a]?\\((?:"+e.util.regex.number+")\\s*,\\s*(?:"+e.util.regex.number+"[%])\\s*,\\s*(?:"+e.util.regex.number+"[%])(?:\\s*,\\s*(?:"+e.util.regex.number+"))?\\)",e.util.regex.hex3="\\#[0-9a-fA-F]{3}",e.util.regex.hex6="\\#[0-9a-fA-F]{6}";var r=t?t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame:null;r=r||function(e){e&&setTimeout(e,1e3/60)},e.util.requestAnimationFrame=function(e){r(e)}}(cytoscape,"undefined"==typeof window?null:window),function(e){"use strict";e.math={},e.math.signum=function(e){return e>0?1:0>e?-1:0},e.math.distance=function(e,t){var r=t.x-e.x,n=t.y-e.y;return Math.sqrt(r*r+n*n)},e.math.qbezierAt=function(e,t,r,n){return(1-n)*(1-n)*e+2*(1-n)*n*t+n*n*r},e.math.qbezierPtAt=function(t,r,n,i){return{x:e.math.qbezierAt(t.x,r.x,n.x,i),y:e.math.qbezierAt(t.y,r.y,n.y,i)}},e.math.roundRectangleIntersectLine=function(e,t,r,n,i,a,o){var s,l=this.getRoundRectangleRadius(i,a),c=i/2,u=a/2,d=r-c+l-o,p=n-u-o,h=r+c-l+o,g=p;if(s=this.finiteLinesIntersect(e,t,r,n,d,p,h,g,!1),s.length>0)return s;var v=r+c+o,f=n-u+l-o,y=v,m=n+u-l+o;if(s=this.finiteLinesIntersect(e,t,r,n,v,f,y,m,!1),s.length>0)return s;var b=r-c+l-o,x=n+u+o,w=r+c-l+o,_=x;if(s=this.finiteLinesIntersect(e,t,r,n,b,x,w,_,!1),s.length>0)return s;var E=r-c-o,S=n-u+l-o,P=E,k=n+u-l+o;if(s=this.finiteLinesIntersect(e,t,r,n,E,S,P,k,!1),s.length>0)return s;var C,D=r-c+l,N=n-u+l;if(C=this.intersectLineCircle(e,t,r,n,D,N,l+o),C.length>0&&C[0]<=D&&C[1]<=N)return[C[0],C[1]];var M=r+c-l,T=n-u+l;if(C=this.intersectLineCircle(e,t,r,n,M,T,l+o),C.length>0&&C[0]>=M&&C[1]<=T)return[C[0],C[1]];var z=r+c-l,I=n+u-l;if(C=this.intersectLineCircle(e,t,r,n,z,I,l+o),C.length>0&&C[0]>=z&&C[1]>=I)return[C[0],C[1]];var B=r-c+l,R=n+u-l;return C=this.intersectLineCircle(e,t,r,n,B,R,l+o),C.length>0&&C[0]<=B&&C[1]>=R?[C[0],C[1]]:[]},e.math.roundRectangleIntersectBox=function(e,t,r,n,i,a,o,s,l){var c=this.getRoundRectangleRadius(i,a),u=o-i/2-l,d=s-a/2+c-l,p=o+i/2+l,h=s+a/2-c+l,g=o-i/2+c-l,v=s-a/2-l,f=o+i/2-c+l,y=s+a/2+l,m=Math.min(e,r),b=Math.max(e,r),x=Math.min(t,n),w=Math.max(t,n);return u>b?!1:m>p?!1:v>w?!1:x>y?!1:u>=m&&b>=u&&d>=x&&w>=d?!0:p>=m&&b>=p&&d>=x&&w>=d?!0:p>=m&&b>=p&&h>=x&&w>=h?!0:u>=m&&b>=u&&h>=x&&w>=h?!0:m>=u&&p>=m&&x>=d&&h>=x?!0:b>=u&&p>=b&&x>=d&&h>=x?!0:b>=u&&p>=b&&w>=d&&h>=w?!0:m>=u&&p>=m&&w>=d&&h>=w?!0:g>=m&&b>=g&&v>=x&&w>=v?!0:f>=m&&b>=f&&v>=x&&w>=v?!0:f>=m&&b>=f&&y>=x&&w>=y?!0:g>=m&&b>=g&&y>=x&&w>=y?!0:m>=g&&f>=m&&x>=v&&y>=x?!0:b>=g&&f>=b&&x>=v&&y>=x?!0:b>=g&&f>=b&&w>=v&&y>=w?!0:m>=g&&f>=m&&w>=v&&y>=w?!0:this.boxIntersectEllipse(m,x,b,w,l,2*c,2*c,g+l,d+l)?!0:this.boxIntersectEllipse(m,x,b,w,l,2*c,2*c,f-l,d+l)?!0:this.boxIntersectEllipse(m,x,b,w,l,2*c,2*c,f-l,h-l)?!0:this.boxIntersectEllipse(m,x,b,w,l,2*c,2*c,g+l,h-l)?!0:!1},e.math.checkInBoundingCircle=function(e,t,r,n,i,a,o,s){return e=(e-o)/(i+n),t=(t-s)/(a+n),r>=e*e+t*t},e.math.checkInBoundingBox=function(e,t,r,n,i,a,o,s){for(var l=r[0],c=r[1],u=r[0],d=r[1],p=1;p<r.length/2;p++)r[2*p]<l?l=r[2*p]:r[2*p]>u&&(u=r[2*p]),r[2*p+1]<c?c=r[2*p+1]:r[2*p+1]>d&&(d=r[2*p+1]);return e-=o,t-=s,e/=i,t/=a,l>e?!1:e>u?!1:c>t?!1:t>d?!1:!0},e.math.boxInBezierVicinity=function(e,t,r,n,i,a,o,s,l,c,u){var d=.25*i+.5*o+.25*l,p=.25*a+.5*s+.25*c,h=Math.min(e,r)-u,g=Math.min(t,n)-u,v=Math.max(e,r)+u,f=Math.max(t,n)+u;if(i>=h&&v>=i&&a>=g&&f>=a)return 1;if(l>=h&&v>=l&&c>=g&&f>=c)return 1;if(d>=h&&v>=d&&p>=g&&f>=p)return 1;if(o>=h&&v>=o&&s>=g&&f>=s)return 1;var y=Math.min(i,d,l),m=Math.min(a,p,c),b=Math.max(i,d,l),x=Math.max(a,p,c);return y>v||h>b||m>f||g>x?0:1},e.math.checkBezierInBox=function(t,r,n,i,a,o,s,l,c,u){function d(d){var p=e.math.qbezierAt(a,s,c,d),h=e.math.qbezierAt(o,l,u,d);return p>=t&&n>=p&&h>=r&&i>=h}for(var p=0;1>=p;p+=.25)if(!d(p))return!1;return!0},e.math.checkStraightEdgeInBox=function(e,t,r,n,i,a,o,s){return i>=e&&r>=i&&o>=e&&r>=o&&a>=t&&n>=a&&s>=t&&n>=s},e.math.checkStraightEdgeCrossesBox=function(e,t,r,n,i,a,o,s,l){var c,u,d=Math.min(e,r)-l,p=Math.min(t,n)-l,h=Math.max(e,r)+l,g=Math.max(t,n)+l,v=o-i,f=i,y=s-a,m=a;if(Math.abs(v)<1e-4)return i>=d&&h>=i&&Math.min(a,s)<=p&&Math.max(a,s)>=g;var b=(d-f)/v;if(b>0&&1>=b&&(c=y*b+m,c>=p&&g>=c))return!0;var x=(h-f)/v;if(x>0&&1>=x&&(c=y*x+m,c>=p&&g>=c))return!0;var w=(p-m)/y;if(w>0&&1>=w&&(u=v*w+f,u>=d&&h>=u))return!0;var _=(g-m)/y;return _>0&&1>=_&&(u=v*_+f,u>=d&&h>=u)?!0:!1},e.math.checkBezierCrossesBox=function(e,t,r,n,i,a,o,s,l,c,u){var d=Math.min(e,r)-u,p=Math.min(t,n)-u,h=Math.max(e,r)+u,g=Math.max(t,n)+u;if(i>=d&&h>=i&&a>=p&&g>=a)return!0;if(l>=d&&h>=l&&c>=p&&g>=c)return!0;var v=i-2*o+l,f=-2*i+2*o,y=i,m=[];if(Math.abs(v)<1e-4){var b=(d-i)/f,x=(h-i)/f;m.push(b,x)}else{var w,_,E=f*f-4*v*(y-d);if(E>0){var S=Math.sqrt(E);w=(-f+S)/(2*v),_=(-f-S)/(2*v),m.push(w,_)}var P,k,C=f*f-4*v*(y-h);if(C>0){var S=Math.sqrt(C);P=(-f+S)/(2*v),k=(-f-S)/(2*v),m.push(P,k)}}m.sort(function(e,t){return e-t});var D=a-2*s+c,N=-2*a+2*s,M=a,T=[];if(Math.abs(D)<1e-4){var z=(p-a)/N,I=(g-a)/N;T.push(z,I)}else{var B,R,X=N*N-4*D*(M-p);if(X>0){var S=Math.sqrt(X);B=(-N+S)/(2*D),R=(-N-S)/(2*D),T.push(B,R)}var O,L,Y=N*N-4*D*(M-g);if(Y>0){var S=Math.sqrt(Y);O=(-N+S)/(2*D),L=(-N-S)/(2*D),T.push(O,L)}}T.sort(function(e,t){return e-t});for(var V=0;V<m.length;V+=2)for(var A=1;A<T.length;A+=2)if(m[V]<T[A]&&T[A]>=0&&m[V]<=1&&m[V+1]>T[A-1]&&T[A-1]<=1&&m[V+1]>=0)return!0;return!1},e.math.inLineVicinity=function(e,t,r,n,i,a,o){var s=o,l=Math.min(r,i),c=Math.max(r,i),u=Math.min(n,a),d=Math.max(n,a);return e>=l-s&&c+s>=e&&t>=u-s&&d+s>=t},e.math.inBezierVicinity=function(e,t,r,n,i,a,o,s){var l={x1:Math.min(r,o,i),x2:Math.max(r,o,i),y1:Math.min(n,s,a),y2:Math.max(n,s,a)};return e<l.x1||e>l.x2||t<l.y1||t>l.y2?!1:!0},e.math.solveCubic=function(e,t,r,n,i){t/=e,r/=e,n/=e;var a,o,s,l,c,u,d,p;return o=(3*r-t*t)/9,s=-(27*n)+t*(9*r-2*t*t),s/=54,a=o*o*o+s*s,i[1]=0,d=t/3,a>0?(c=s+Math.sqrt(a),c=0>c?-Math.pow(-c,1/3):Math.pow(c,1/3),u=s-Math.sqrt(a),u=0>u?-Math.pow(-u,1/3):Math.pow(u,1/3),i[0]=-d+c+u,d+=(c+u)/2,i[4]=i[2]=-d,d=Math.sqrt(3)*(-u+c)/2,i[3]=d,void(i[5]=-d)):(i[5]=i[3]=0,0===a?(p=0>s?-Math.pow(-s,1/3):Math.pow(s,1/3),i[0]=-d+2*p,void(i[4]=i[2]=-(p+d))):(o=-o,l=o*o*o,l=Math.acos(s/Math.sqrt(l)),p=2*Math.sqrt(o),i[0]=-d+p*Math.cos(l/3),i[2]=-d+p*Math.cos((l+2*Math.PI)/3),void(i[4]=-d+p*Math.cos((l+4*Math.PI)/3))))},e.math.sqDistanceToQuadraticBezier=function(e,t,r,n,i,a,o,s){var l=1*r*r-4*r*i+2*r*o+4*i*i-4*i*o+o*o+n*n-4*n*a+2*n*s+4*a*a-4*a*s+s*s,c=9*r*i-3*r*r-3*r*o-6*i*i+3*i*o+9*n*a-3*n*n-3*n*s-6*a*a+3*a*s,u=3*r*r-6*r*i+r*o-r*e+2*i*i+2*i*e-o*e+3*n*n-6*n*a+n*s-n*t+2*a*a+2*a*t-s*t,d=1*r*i-r*r+r*e-i*e+n*a-n*n+n*t-a*t,p=[];this.solveCubic(l,c,u,d,p);for(var h=1e-7,g=[],v=0;6>v;v+=2)Math.abs(p[v+1])<h&&p[v]>=0&&p[v]<=1&&g.push(p[v]);g.push(1),g.push(0);for(var f,y,m,b,x=-1,w=0;w<g.length;w++)y=Math.pow(1-g[w],2)*r+2*(1-g[w])*g[w]*i+g[w]*g[w]*o,m=Math.pow(1-g[w],2)*n+2*(1-g[w])*g[w]*a+g[w]*g[w]*s,b=Math.pow(y-e,2)+Math.pow(m-t,2),x>=0?x>b&&(x=b,f=g[w]):(x=b,f=g[w]);return x},e.math.sqDistanceToFiniteLine=function(e,t,r,n,i,a){var o=[e-r,t-n],s=[i-r,a-n],l=s[0]*s[0]+s[1]*s[1],c=o[0]*o[0]+o[1]*o[1],u=o[0]*s[0]+o[1]*s[1],d=u*u/l;return 0>u?c:d>l?(e-i)*(e-i)+(t-a)*(t-a):c-d},e.math.pointInsidePolygon=function(e,t,r,n,i,a,o,s,l){var c=new Array(r.length),u=Math.asin(s[1]/Math.sqrt(s[0]*s[0]+s[1]*s[1]));s[0]<0?u+=Math.PI/2:u=-u-Math.PI/2;for(var d=Math.cos(-u),p=Math.sin(-u),h=0;h<c.length/2;h++)c[2*h]=a/2*(r[2*h]*d-r[2*h+1]*p),c[2*h+1]=o/2*(r[2*h+1]*d+r[2*h]*p),c[2*h]+=n,c[2*h+1]+=i;var g;if(l>0){var v=this.expandPolygon(c,-l);g=this.joinLines(v)}else g=c;for(var f,y,m,b,x,w=0,_=0,h=0;h<g.length/2;h++)if(f=g[2*h],y=g[2*h+1],h+1<g.length/2?(m=g[2*(h+1)],b=g[2*(h+1)+1]):(m=g[2*(h+1-g.length/2)],b=g[2*(h+1-g.length/2)+1]),f==e&&m==e);else{if(!(f>=e&&e>=m||e>=f&&m>=e))continue;x=(e-f)/(m-f)*(b-y)+y,x>t&&w++,t>x&&_++}return w%2===0?!1:!0},e.math.joinLines=function(e){for(var t,r,n,i,a,o,s,l,c=new Array(e.length/2),u=0;u<e.length/4;u++){t=e[4*u],r=e[4*u+1],n=e[4*u+2],i=e[4*u+3],u<e.length/4-1?(a=e[4*(u+1)],o=e[4*(u+1)+1],s=e[4*(u+1)+2],l=e[4*(u+1)+3]):(a=e[0],o=e[1],s=e[2],l=e[3]);var d=this.finiteLinesIntersect(t,r,n,i,a,o,s,l,!0);c[2*u]=d[0],c[2*u+1]=d[1]}return c},e.math.expandPolygon=function(e,t){for(var r,n,i,a,o=new Array(2*e.length),s=0;s<e.length/2;s++){r=e[2*s],n=e[2*s+1],s<e.length/2-1?(i=e[2*(s+1)],a=e[2*(s+1)+1]):(i=e[0],a=e[1]);var l=a-n,c=-(i-r),u=Math.sqrt(l*l+c*c),d=l/u,p=c/u;o[4*s]=r+d*t,o[4*s+1]=n+p*t,o[4*s+2]=i+d*t,o[4*s+3]=a+p*t}return o},e.math.intersectLineEllipse=function(e,t,r,n,i,a){var o=r-e,s=n-t;o/=i,s/=a;var l=Math.sqrt(o*o+s*s),c=l-1;if(0>c)return[];var u=c/l;return[(r-e)*u+e,(n-t)*u+t]},e.math.dotProduct=function(e,t){if(2!=e.length||2!=t.length)throw"dot product: arguments are not vectors";return e[0]*t[0]+e[1]*t[1]},e.math.intersectLineCircle=function(e,t,r,n,i,a,o){var s=[r-e,n-t],l=[i,a],c=[e-i,t-a],u=s[0]*s[0]+s[1]*s[1],d=2*(c[0]*s[0]+c[1]*s[1]),l=c[0]*c[0]+c[1]*c[1]-o*o,p=d*d-4*u*l;if(0>p)return[];var h=(-d+Math.sqrt(p))/(2*u),g=(-d-Math.sqrt(p))/(2*u),v=Math.min(h,g),f=Math.max(h,g),y=[];if(v>=0&&1>=v&&y.push(v),f>=0&&1>=f&&y.push(f),0===y.length)return[];var m=y[0]*s[0]+e,b=y[0]*s[1]+t;if(y.length>1){if(y[0]==y[1])return[m,b];var x=y[1]*s[0]+e,w=y[1]*s[1]+t;return[m,b,x,w]}return[m,b]},e.math.findCircleNearPoint=function(e,t,r,n,i){var a=n-e,o=i-t,s=Math.sqrt(a*a+o*o),l=a/s,c=o/s;return[e+l*r,t+c*r]},e.math.findMaxSqDistanceToOrigin=function(e){for(var t,r=1e-6,n=0;n<e.length/2;n++)t=e[2*n]*e[2*n]+e[2*n+1]*e[2*n+1],t>r&&(r=t);return r},e.math.finiteLinesIntersect=function(e,t,r,n,i,a,o,s,l){var c=(o-i)*(t-a)-(s-a)*(e-i),u=(r-e)*(t-a)-(n-t)*(e-i),d=(s-a)*(r-e)-(o-i)*(n-t);if(0!==d){var p=c/d,h=u/d;return p>=0&&1>=p&&h>=0&&1>=h?[e+p*(r-e),t+p*(n-t)]:l?[e+p*(r-e),t+p*(n-t)]:[]}return 0===c||0===u?[e,r,o].sort()[1]===o?[o,s]:[e,r,i].sort()[1]===i?[i,a]:[i,o,r].sort()[1]===r?[r,n]:[]:[]},e.math.boxIntersectEllipse=function(e,t,r,n,i,a,o,s,l){if(e>r){var c=e;e=r,r=c}if(t>n){var u=t;t=n,n=u}var d=[s-a/2-i,l],p=[s+a/2+i,l],h=[s,l-o/2-i],g=[s,l+o/2+i];return r<d[0]?!1:e>p[0]?!1:t>g[1]?!1:n<h[1]?!1:e<=p[0]&&p[0]<=r&&t<=p[1]&&p[1]<=n?!0:e<=d[0]&&d[0]<=r&&t<=d[1]&&d[1]<=n?!0:e<=h[0]&&h[0]<=r&&t<=h[1]&&h[1]<=n?!0:e<=g[0]&&g[0]<=r&&t<=g[1]&&g[1]<=n?!0:(e=(e-s)/(a/2+i),r=(r-s)/(a/2+i),t=(t-l)/(o/2+i),n=(n-l)/(o/2+i),1>=e*e+t*t?!0:1>=r*r+t*t?!0:1>=r*r+n*n?!0:1>=e*e+n*n?!0:!1)},e.math.boxIntersectPolygon=function(t,r,n,i,a,o,s,l,c,u,d){if(t>n){var p=t;t=n,n=p}if(r>i){var h=r;r=i,i=h}var g=new Array(a.length),v=Math.asin(u[1]/Math.sqrt(u[0]*u[0]+u[1]*u[1]));u[0]<0?v+=Math.PI/2:v=-v-Math.PI/2;for(var f=Math.cos(-v),y=Math.sin(-v),m=0;m<g.length/2;m++)g[2*m]=o/2*(a[2*m]*f-a[2*m+1]*y),g[2*m+1]=s/2*(a[2*m+1]*f+a[2*m]*y),g[2*m]+=l,g[2*m+1]+=c;for(var b=g[0],x=g[0],w=g[1],_=g[1],m=1;m<g.length/2;m++)g[2*m]>x&&(x=g[2*m]),g[2*m]<b&&(b=g[2*m]),g[2*m+1]>_&&(_=g[2*m+1]),g[2*m+1]<w&&(w=g[2*m+1]);if(b-d>n)return!1;if(t>x+d)return!1;if(w-d>i)return!1;if(r>_+d)return!1;var E;if(d>0){var S=e.math.expandPolygon(g,-d);E=e.math.joinLines(S)}else E=g;for(var m=0;m<g.length/2;m++)if(t<=g[2*m]&&g[2*m]<=n&&r<=g[2*m+1]&&g[2*m+1]<=i)return!0;for(var m=0;m<E.length/2;m++){var P,k,C=E[2*m],D=E[2*m+1];if(m<E.length/2-1?(P=E[2*(m+1)],k=E[2*(m+1)+1]):(P=E[0],k=E[1]),e.math.finiteLinesIntersect(C,D,P,k,t,r,n,r,!1).length>0)return!0;if(e.math.finiteLinesIntersect(C,D,P,k,t,i,n,i,!1).length>0)return!0;if(e.math.finiteLinesIntersect(C,D,P,k,t,r,t,i,!1).length>0)return!0;if(e.math.finiteLinesIntersect(C,D,P,k,n,r,n,i,!1).length>0)return!0}return!1},e.math.polygonIntersectLine=function(t,r,n,i,a,o,s,l){for(var c,u=[],d=new Array(n.length),p=0;p<d.length/2;p++)d[2*p]=n[2*p]*o+i,d[2*p+1]=n[2*p+1]*s+a;var h;if(l>0){var g=e.math.expandPolygon(d,-l);h=e.math.joinLines(g)}else h=d;for(var v,f,y,m,p=0;p<h.length/2;p++)v=h[2*p],f=h[2*p+1],p<h.length/2-1?(y=h[2*(p+1)],m=h[2*(p+1)+1]):(y=h[0],m=h[1]),c=this.finiteLinesIntersect(t,r,i,a,v,f,y,m),0!==c.length&&u.push(c[0],c[1]);return u},e.math.shortenIntersection=function(e,t,r){var n=[e[0]-t[0],e[1]-t[1]],i=Math.sqrt(n[0]*n[0]+n[1]*n[1]),a=(i-r)/i;return 0>a&&(a=1e-5),[t[0]+a*n[0],t[1]+a*n[1]]},e.math.generateUnitNgonPointsFitToSquare=function(t,r){var n=e.math.generateUnitNgonPoints(t,r);return n=e.math.fitPolygonToSquare(n)},e.math.fitPolygonToSquare=function(e){for(var t,r,n=e.length/2,i=1/0,a=1/0,o=-1/0,s=-1/0,l=0;n>l;l++)t=e[2*l],r=e[2*l+1],i=Math.min(i,t),o=Math.max(o,t),a=Math.min(a,r),s=Math.max(s,r);for(var c=2/(o-i),u=2/(s-a),l=0;n>l;l++)t=e[2*l]=e[2*l]*c,r=e[2*l+1]=e[2*l+1]*u,i=Math.min(i,t),o=Math.max(o,t),a=Math.min(a,r),s=Math.max(s,r);if(-1>a)for(var l=0;n>l;l++)r=e[2*l+1]=e[2*l+1]+(-1-a);return e},e.math.generateUnitNgonPoints=function(e,t){var r=1/e*2*Math.PI,n=e%2===0?Math.PI/2+r/2:Math.PI/2;n+=t;for(var i,a,o,s=new Array(2*e),l=0;e>l;l++)i=l*r+n,a=s[2*l]=Math.cos(i),o=s[2*l+1]=Math.sin(-i);return s},e.math.getRoundRectangleRadius=function(e,t){return Math.min(e/4,t/4,8)}}(cytoscape),function(e){"use strict";function t(t,r,n){var i={};switch(i[r]=n,t){case"core":case"collection":e.fn[t](i)}return e.util.setMap({map:a,keys:[t,r],value:n})}function r(t,r){return e.util.getMap({map:a,keys:[t,r]})}function n(t,r,n,i,a){return e.util.setMap({map:o,keys:[t,r,n,i],value:a})}function i(t,r,n,i){return e.util.getMap({map:o,keys:[t,r,n,i]})}var a={};e.extensions=a;var o={};e.modules=o,e.extension=function(){return 2==arguments.length?r.apply(this,arguments):3==arguments.length?t.apply(this,arguments):4==arguments.length?i.apply(this,arguments):5==arguments.length?n.apply(this,arguments):void $.error("Invalid extension access syntax")}}(cytoscape),function(e,t){"use strict";if(e){var r=function(e){var t=e[0]._cyreg=e[0]._cyreg||{};return t};e.fn.cytoscape=function(n){var i=e(this);if("get"===n)return r(i).cy;if(t.is.fn(n)){var a=n,o=r(i).cy;if(o&&o.ready())o.trigger("ready",[],a);else{var s=r(i),l=s.readies=s.readies||[];l.push(a)}}else if(t.is.plainObject(n))return i.each(function(){var t=e.extend({},n,{container:e(this)[0]});cytoscape(t)})},e.cytoscape=cytoscape,null==e.fn.cy&&null==e.cy&&(e.fn.cy=e.fn.cytoscape,e.cy=e.cytoscape)}}("undefined"!=typeof jQuery?jQuery:null,cytoscape),function(e){"use strict";function t(){return!1}function r(){return!0}e.Event=function(n,i){return this instanceof e.Event?(n&&n.type?(this.originalEvent=n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented||n.getPreventDefault&&n.getPreventDefault()?r:t):this.type=n,i&&e.util.extend(this,i),void(this.timeStamp=n&&n.timeStamp||+new Date)):new e.Event(n,i)},e.Event.prototype={preventDefault:function(){this.isDefaultPrevented=r;var e=this.originalEvent;e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){this.isPropagationStopped=r;var e=this.originalEvent;e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=r,this.stopPropagation()},isDefaultPrevented:t,isPropagationStopped:t,isImmediatePropagationStopped:t}}(cytoscape),function(e){"use strict";e.define={data:function(t){var r={field:"data",bindingEvent:"data",allowBinding:!1,allowSetting:!1,allowGetting:!1,settingEvent:"data",settingTriggersEvent:!1,triggerFnName:"trigger",immutableKeys:{},updateStyle:!1,onSet:function(){},canSet:function(){return!0}};return t=e.util.extend({},r,t),function(r,n){var i=t,a=this,o=void 0!==a.length,s=o?a:[a],l=o?a[0]:a;if(e.is.string(r)){if(i.allowGetting&&void 0===n){var c;return l&&(c=l._private[i.field][r]),c}if(i.allowSetting&&void 0!==n){var u=!i.immutableKeys[r];if(u){for(var d=0,p=s.length;p>d;d++)i.canSet(s[d])&&(s[d]._private[i.field][r]=n);i.updateStyle&&a.updateStyle(),i.onSet(a),i.settingTriggersEvent&&a[i.triggerFnName](i.settingEvent)}}}else if(i.allowSetting&&e.is.plainObject(r)){var h,g,v=r;for(h in v){g=v[h];var u=!i.immutableKeys[h];if(u)for(var d=0,p=s.length;p>d;d++)i.canSet(s[d])&&(s[d]._private[i.field][h]=g)}i.updateStyle&&a.updateStyle(),i.onSet(a),i.settingTriggersEvent&&a[i.triggerFnName](i.settingEvent)}else if(i.allowBinding&&e.is.fn(r)){var f=r;a.bind(i.bindingEvent,f)}else if(i.allowGetting&&void 0===r){var c;return l&&(c=l._private[i.field]),c}return a}},batchData:function(t){var r={field:"data",event:"data",triggerFnName:"trigger",immutableKeys:{},updateStyle:!1},n=e.util.extend({},r,t);return function(t){var r=this,i=void 0!==r.length,a=i?r:r._private.elements;if(0===a.length)return r;for(var o=i?a[0]._private.cy:r,s=0;s<a.length;s++){var l=a[s],c=l._private.data.id,u=t[c];if(void 0!==u&&null!==u){var d,p,h=u;for(d in h){p=h[d];var g=!n.immutableKeys[d];g&&(l._private[n.field][d]=p)}}}var v=new e.Collection(o,a);return n.updateStyle&&v.updateStyle(),v[n.triggerFnName](n.event),r}},removeData:function(t){var r={field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!1,immutableKeys:{}};return t=e.util.extend({},r,t),function(r){var n=t,i=this,a=void 0!==i.length,o=a?i:[i];if(e.is.string(r)){for(var s=r.split(/\s+/),l=s.length,c=0;l>c;c++){var u=s[c];if(!e.is.emptyString(u)){var d=!n.immutableKeys[u];if(d)for(var p=0,h=o.length;h>p;p++)delete o[p]._private[n.field][u]}}n.triggerEvent&&i[n.triggerFnName](n.event)}else if(void 0===r){for(var p=0,h=o.length;h>p;p++){var g=o[p]._private[n.field];for(var u in g){var v=!n.immutableKeys[u];v&&delete g[u]}}n.triggerEvent&&i[n.triggerFnName](n.event)}return i}},event:{regex:/(\w+)(\.\w+)?/,optionalTypeRegex:/(\w+)?(\.\w+)?/,falseCallback:function(){return!1}},on:function(t){var r={unbindSelfOnTrigger:!1,unbindAllBindersOnTrigger:!1};return t=e.util.extend({},r,t),function(r,n,i,a){var o=this,s=void 0!==o.length,l=s?o:[o],c=e.is.string(r),u=t;if(e.is.plainObject(n)?(a=i,i=n,n=void 0):(e.is.fn(n)||n===!1)&&(a=n,i=void 0,n=void 0),(e.is.fn(i)||i===!1)&&(a=i,i=void 0),!e.is.fn(a)&&a!==!1&&c)return o;if(c){var d={};d[r]=a,r=d}for(var p in r)if(a=r[p],a===!1&&(a=e.define.event.falseCallback),e.is.fn(a)){p=p.split(/\s+/);for(var h=0;h<p.length;h++){var g=p[h];if(!e.is.emptyString(g)){var v=g.match(e.define.event.regex);if(v)for(var f=v[1],y=v[2]?v[2]:void 0,m={callback:a,data:i,delegated:n?!0:!1,selector:n,selObj:new e.Selector(n),type:f,namespace:y,unbindSelfOnTrigger:u.unbindSelfOnTrigger,unbindAllBindersOnTrigger:u.unbindAllBindersOnTrigger,binders:l},b=0;b<l.length;b++)l[b]._private.listeners.push(m)}}}return o}},off:function(t){var r={};return t=e.util.extend({},r,t),function(t,r,n){var i=this,a=void 0!==i.length,o=a?i:[i],s=e.is.string(t);if(0===arguments.length){for(var l=0;l<o.length;l++)o[l]._private.listeners=[];return i}if((e.is.fn(r)||r===!1)&&(n=r,r=void 0),s){var c={};c[t]=n,t=c}for(var u in t){n=t[u],n===!1&&(n=e.define.event.falseCallback),u=u.split(/\s+/);for(var d=0;d<u.length;d++){var p=u[d];if(!e.is.emptyString(p)){var h=p.match(e.define.event.optionalTypeRegex);if(h)for(var g=h[1]?h[1]:void 0,v=h[2]?h[2]:void 0,l=0;l<o.length;l++)for(var f=o[l]._private.listeners,y=0;y<f.length;y++){var m=f[y],b=!v||v===m.namespace,x=!g||m.type===g,w=!n||n===m.callback,_=b&&x&&w;_&&(f.splice(y,1),y--)}}}}return i}},trigger:function(t){var r={};return t=e.util.extend({},r,t),function(t,r,n){var i=this,a=void 0!==i.length,o=a?i:[i],s=e.is.string(t),l=e.is.plainObject(t),c=e.is.event(t),u=this._private.cy||this;if(s){var d=t.split(/\s+/);t=[];for(var p=0;p<d.length;p++){var h=d[p];if(!e.is.emptyString(h)){var g=h.match(e.define.event.regex),v=g[1],f=g[2]?g[2]:void 0;t.push({type:v,namespace:f})}}}else if(l){var y=t;t=[y]}r?e.is.array(r)||(r=[r]):r=[];for(var p=0;p<t.length;p++)for(var m=t[p],b=0;b<o.length;b++){var h,x=o[b],w=x._private.listeners,_=e.is.element(x),E=_;if(c?(h=m,h.cyTarget=h.cyTarget||x,h.cy=h.cy||u,h.namespace=h.namespace||m.namespace):h=new e.Event(m,{cyTarget:x,cy:u,namespace:m.namespace}),h.cyPosition){var S=h.cyPosition,P=u.zoom(),k=u.pan();h.cyRenderedPosition={x:S.x*P+k.x,y:S.y*P+k.y}}n&&(w=[{namespace:h.namespace,type:h.type,callback:n}]);for(var C=0;C<w.length;C++){var D=w[C],N=!D.namespace||D.namespace===h.namespace,M=D.type===h.type,T=D.delegated?x!==h.cyTarget&&e.is.element(h.cyTarget)&&D.selObj.filter(h.cyTarget).length>0:!0,z=N&&M&&T;if(z){var I=[h];if(I=I.concat(r),h.data=D.data?D.data:void 0,(D.unbindSelfOnTrigger||D.unbindAllBindersOnTrigger)&&(w.splice(C,1),C--),D.unbindAllBindersOnTrigger)for(var B=D.binders,R=0;R<B.length;R++){var X=B[R];if(X&&X!==x)for(var O=X._private.listeners,L=0;L<O.length;L++){var Y=O[L];Y===D&&(O.splice(L,1),L--)}}var V=D.delegated?h.cyTarget:x,A=D.callback.apply(V,I);(A===!1||h.isPropagationStopped())&&(E=!1,A===!1&&(h.stopPropagation(),h.preventDefault()))}}if(E){var F=x.parent(),q=0!==F.length;q?(F=F[0],F.trigger(h)):u.trigger(h)}}return i}}}}(cytoscape),function(e){"use strict";e.fn.selector=function(t){for(var r in t){var n=t[r];e.Selector.prototype[r]=n}},e.Selector=function(t,r){if(!(this instanceof e.Selector))return new e.Selector(t,r);void 0===r&&void 0!==t&&(r=t,t=void 0);var n=this;if(n._private={selectorText:null,invalid:!0},!r||e.is.string(r)&&r.match(/^\s*$/))null==t?n.length=0:(n[0]=o(),n[0].group=t,n.length=1);else if(e.is.element(r)){var i=new e.Collection(n.cy(),[r]);n[0]=o(),n[0].collection=i,n.length=1}else if(e.is.collection(r))n[0]=o(),n[0].collection=r,n.length=1;else if(e.is.fn(r))n[0]=o(),n[0].filter=r,n.length=1;else{if(!e.is.string(r))return void e.util.error("A selector must be created from a string; found "+r);
var a=null,o=function(){return{classes:[],colonSelectors:[],data:[],group:null,ids:[],meta:[],collection:null,filter:null,parent:null,ancestor:null,subject:null,child:null,descendant:null}},s={metaChar:"[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",comparatorOp:"=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",boolOp:"\\?|\\!|\\^",string:'"(?:\\\\"|[^"])+"|'+"'(?:\\\\'|[^'])+'",number:e.util.regex.number,meta:"degree|indegree|outdegree",separator:"\\s*,\\s*",descendant:"\\s+",child:"\\s+>\\s+",subject:"\\$"};s.variable="(?:[\\w-]|(?:\\\\"+s.metaChar+"))+",s.value=s.string+"|"+s.number,s.className=s.variable,s.id=s.variable;for(var l=function(e){return e.replace(new RegExp("\\\\("+s.metaChar+")","g"),function(e,t){return t})},c=s.comparatorOp.split("|"),u=0;u<c.length;u++){var d=c[u];s.comparatorOp+="|@"+d}var p={group:{query:!0,regex:"(node|edge|\\*)",populate:function(e){this.group="*"==e?e:e+"s"}},state:{query:!0,regex:"(:selected|:unselected|:locked|:unlocked|:visible|:hidden|:transparent|:grabbed|:free|:removed|:inside|:grabbable|:ungrabbable|:animated|:unanimated|:selectable|:unselectable|:parent|:child|:loop|:simple|:active|:inactive|:touch)",populate:function(e){this.colonSelectors.push(e)}},id:{query:!0,regex:"\\#("+s.id+")",populate:function(e){this.ids.push(l(e))}},className:{query:!0,regex:"\\.("+s.className+")",populate:function(e){this.classes.push(l(e))}},dataExists:{query:!0,regex:"\\[\\s*("+s.variable+")\\s*\\]",populate:function(e){this.data.push({field:l(e)})}},dataCompare:{query:!0,regex:"\\[\\s*("+s.variable+")\\s*("+s.comparatorOp+")\\s*("+s.value+")\\s*\\]",populate:function(e,t,r){var n=null!=new RegExp("^"+s.string+"$").exec(r);r=n?r.substring(1,r.length-1):parseFloat(r),this.data.push({field:l(e),operator:t,value:r})}},dataBool:{query:!0,regex:"\\[\\s*("+s.boolOp+")\\s*("+s.variable+")\\s*\\]",populate:function(e,t){this.data.push({field:l(t),operator:e})}},metaCompare:{query:!0,regex:"\\[\\[\\s*("+s.meta+")\\s*("+s.comparatorOp+")\\s*("+s.number+")\\s*\\]\\]",populate:function(e,t,r){this.meta.push({field:l(e),operator:t,value:parseFloat(r)})}},nextQuery:{separator:!0,regex:s.separator,populate:function(){n[++u]=o(),a=null}},child:{separator:!0,regex:s.child,populate:function(){var e=o();e.parent=this,e.subject=a,n[u]=e}},descendant:{separator:!0,regex:s.descendant,populate:function(){var e=o();e.ancestor=this,e.subject=a,n[u]=e}},subject:{modifier:!0,regex:s.subject,populate:function(){return null!=a&&this.subject!=this?(e.util.error("Redefinition of subject in selector `"+r+"`"),!1):(a=this,void(this.subject=this))}}},h=0;for(var g in p)p[h]=p[g],p[h].name=g,h++;p.length=h,n._private.selectorText=r;var v=r,u=0,f=function(t){for(var r,n,i,a=0;a<p.length;a++){var o=p[a],s=o.name;if(!e.is.fn(t)||t(s,o)){var l=v.match(new RegExp("^"+o.regex));if(null!=l){n=l,r=o,i=s;var c=l[0];v=v.substring(c.length);break}}}return{expr:r,match:n,name:i}},y=function(){var e=v.match(/^\s+/);if(e){var t=e[0];v=v.substring(t.length)}};for(n[0]=o(),y();;){var m=f();if(null==m.expr)return void e.util.error("The selector `"+r+"`is invalid");for(var b=[],h=1;h<m.match.length;h++)b.push(m.match[h]);var x=m.expr.populate.apply(n[u],b);if(x===!1)return;if(v.match(/^\s*$/))break}for(n.length=u+1,h=0;h<n.length;h++){var w=n[h];if(null!=w.subject){for(;w.subject!=w;)if(null!=w.parent){var _=w.parent,E=w;E.parent=null,_.child=E,w=_}else{if(null==w.ancestor){e.util.error("When adjusting references for the selector `"+w+"`, neither parent nor ancestor was found");break}var S=w.ancestor,P=w;P.ancestor=null,S.descendant=P,w=S}n[h]=w.subject}}if(null!=t)for(var h=0;h<n.length;h++){if(null!=n[h].group&&n[h].group!=t)return void e.util.error("Group `"+n[h].group+"` conflicts with implicit group `"+t+"` in selector `"+r+"`");n[h].group=t}}n._private.invalid=!1},e.selfn=e.Selector.prototype,e.selfn.size=function(){return this.length},e.selfn.eq=function(e){return this[e]},e.selfn.find=function(){},e.selfn.filter=function(t){var r=this,n=t.cy();if(r._private.invalid)return new e.Collection(n);var i=function(t,r){if(null!=t.group&&"*"!=t.group&&t.group!=r._private.group)return!1;for(var n=!0,a=0;a<t.colonSelectors.length;a++){var o=t.colonSelectors[a];switch(o){case":selected":n=r.selected();break;case":unselected":n=!r.selected();break;case":selectable":n=r.selectable();break;case":unselectable":n=!r.selectable();break;case":locked":n=r.locked();break;case":unlocked":n=!r.locked();break;case":visible":n=r.visible();break;case":hidden":n=!r.visible();break;case":transparent":n=r.transparent();break;case":grabbed":n=r.grabbed();break;case":free":n=!r.grabbed();break;case":removed":n=r.removed();break;case":inside":n=!r.removed();break;case":grabbable":n=r.grabbable();break;case":ungrabbable":n=!r.grabbable();break;case":animated":n=r.animated();break;case":unanimated":n=!r.animated();break;case":parent":n=r.children().nonempty();break;case":child":n=r.parent().nonempty();break;case":loop":n=r.isEdge()&&r.data("source")===r.data("target");break;case":simple":n=r.isEdge()&&r.data("source")!==r.data("target");break;case":active":n=r.active();break;case":inactive":n=!r.active();break;case":touch":n=window&&document&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}if(!n)break}if(!n)return!1;for(var s=!0,a=0;a<t.ids.length;a++){var l=t.ids[a],c=r._private.data.id;if(s=s&&l==c,!s)break}if(!s)return!1;for(var u=!0,a=0;a<t.classes.length;a++){var d=t.classes[a];if(u=u&&r.hasClass(d),!u)break}if(!u)return!1;var p=function(r){for(var n=!0,i=0;i<t[r.name].length;i++){var a,o=t[r.name][i],s=o.operator,l=o.value,c=o.field;if(null!=s&&null!=l){var u=r.fieldValue(c),d=e.is.string(u)||e.is.number(u)?""+u:"",p=""+l,h=!1;switch("@"==s.charAt(0)&&(d=d.toLowerCase(),p=p.toLowerCase(),s=s.substring(1),h=!0),h&&(l=p.toLowerCase(),u=d.toLowerCase()),s){case"*=":a=d.search(p)>=0;break;case"$=":a=null!=new RegExp(p+"$").exec(d);break;case"^=":a=null!=new RegExp("^"+p).exec(d);break;case"=":a=u===l;break;case"!=":a=u!==l;break;case">":a=u>l;break;case">=":a=u>=l;break;case"<":a=l>u;break;case"<=":a=l>=u;break;default:a=!1}}else if(null!=s)switch(s){case"?":a=r.fieldTruthy(c);break;case"!":a=!r.fieldTruthy(c);break;case"^":a=r.fieldUndefined(c)}else a=!r.fieldUndefined(c);if(!a){n=!1;break}}return n},h=p({name:"data",fieldValue:function(e){return r._private.data[e]},fieldRef:function(e){return"element._private.data."+e},fieldUndefined:function(e){return void 0===r._private.data[e]},fieldTruthy:function(e){return r._private.data[e]?!0:!1}});if(!h)return!1;var g=p({name:"meta",fieldValue:function(e){return r[e]()},fieldRef:function(e){return"element."+e+"()"},fieldUndefined:function(e){return null==r[e]()},fieldTruthy:function(e){return r[e]()?!0:!1}});if(!g)return!1;if(null!=t.collection){var v=null!=t.collection._private.ids[r.id()];if(!v)return!1}if(null!=t.filter&&0===r.collection().filter(t.filter).size())return!1;var f=function(e,t){if(null!=e){var r=!1;t=t();for(var n=0;n<t.size();n++)if(i(e,t.eq(n))){r=!0;break}return r}return!0};return f(t.parent,function(){return r.parent()})?f(t.ancestor,function(){return r.parents()})?f(t.child,function(){return r.children()})?f(t.descendant,function(){return r.descendants()})?!0:!1:!1:!1:!1},a=function(e,t){for(var n=0;n<r.length;n++){var a=r[n];if(i(a,t))return!0}return!1};null==r._private.selectorText&&(a=function(){return!0});var o=t.filter(a);return o},e.selfn.toString=e.selfn.selector=function(){for(var t="",r=function(t){return e.is.string(t)?t:""},n=function(e){var t="",a=r(e.group);t+=a.substring(0,a.length-1);for(var o=0;o<e.data.length;o++){var s=e.data[o];t+=s.value?"["+s.field+r(s.operator)+r(s.value)+"]":"["+r(s.operator)+s.field+"]"}for(var o=0;o<e.meta.length;o++){var l=e.meta[o];t+="[["+l.field+r(l.operator)+r(l.value)+"]]"}for(var o=0;o<e.colonSelectors.length;o++){var c=e.colonSelectors[i];t+=c}for(var o=0;o<e.ids.length;o++){var c="#"+e.ids[i];t+=c}for(var o=0;o<e.classes.length;o++){var c="."+e.classes[i];t+=c}return null!=e.parent&&(t=n(e.parent)+" > "+t),null!=e.ancestor&&(t=n(e.ancestor)+" "+t),null!=e.child&&(t+=" > "+n(e.child)),null!=e.descendant&&(t+=" "+n(e.descendant)),t},i=0;i<this.length;i++){var a=this[i];t+=n(a),this.length>1&&i<this.length-1&&(t+=", ")}return t}}(cytoscape),function(e){"use strict";e.Style=function(t){return this instanceof e.Style?e.is.core(t)?(this._private={cy:t,coreStyle:{}},this.length=0,void this.addDefaultStylesheet()):void e.util.error("A style must have a core reference"):new e.Style(t)},e.style=e.Style,e.styfn=e.Style.prototype,e.fn.style=function(t){for(var r in t){var n=t[r];e.Style.prototype=n}},function(){var t=e.util.regex.number,r=e.util.regex.rgbaNoBackRefs,n=e.util.regex.hslaNoBackRefs,i=e.util.regex.hex3,a=e.util.regex.hex6,o=function(e){return"^"+e+"\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"},s=function(e){return"^"+e+"\\s*\\(([\\w\\.]+)\\s*\\,\\s*("+t+")\\s*\\,\\s*("+t+")\\s*,\\s*("+t+"|\\w+|"+r+"|"+n+"|"+i+"|"+a+")\\s*\\,\\s*("+t+"|\\w+|"+r+"|"+n+"|"+i+"|"+a+")\\)$"};e.style.types={time:{number:!0,min:0,units:"s"},percent:{number:!0,min:0,max:100,units:"%"},zeroOneNumber:{number:!0,min:0,max:1,unitless:!0},nOneOneNumber:{number:!0,min:-1,max:1,unitless:!0},nonNegativeInt:{number:!0,min:0,integer:!0,unitless:!0},size:{number:!0,min:0,enums:["auto"]},bgSize:{number:!0,min:0,allowPercent:!0},bgPos:{number:!0,allowPercent:!0},bgRepeat:{enums:["repeat","repeat-x","repeat-y","no-repeat"]},bgFit:{enums:["none","contain","cover"]},bgClip:{enums:["none","node"]},color:{color:!0},lineStyle:{enums:["solid","dotted","dashed"]},curveStyle:{enums:["bezier","haystack"]},fontFamily:{regex:"^([\\w- ]+(?:\\s*,\\s*[\\w- ]+)*)$"},fontVariant:{enums:["small-caps","normal"]},fontStyle:{enums:["italic","normal","oblique"]},fontWeight:{enums:["normal","bold","bolder","lighter","100","200","300","400","500","600","800","900",100,200,300,400,500,600,700,800,900]},textDecoration:{enums:["none","underline","overline","line-through"]},textTransform:{enums:["none","capitalize","uppercase","lowercase"]},nodeShape:{enums:["rectangle","roundrectangle","ellipse","triangle","square","pentagon","hexagon","heptagon","octagon","star"]},arrowShape:{enums:["tee","triangle","square","circle","diamond","none"]},arrowFill:{enums:["filled","hollow"]},display:{enums:["element","none"]},visibility:{enums:["hidden","visible"]},valign:{enums:["top","center","bottom"]},halign:{enums:["left","center","right"]},cursor:{enums:["auto","crosshair","default","e-resize","n-resize","ne-resize","nw-resize","pointer","progress","s-resize","sw-resize","text","w-resize","wait","grab","grabbing"]},text:{string:!0},data:{mapping:!0,regex:o("data")},layoutData:{mapping:!0,regex:o("layoutData")},mapData:{mapping:!0,regex:s("mapData")},mapLayoutData:{mapping:!0,regex:s("mapLayoutData")},url:{regex:"^url\\s*\\(\\s*([^\\s]+)\\s*\\s*\\)|none|(.+)$"},propList:{propList:!0}};var l=e.style.types;e.style.properties=[{name:"text-valign",type:l.valign},{name:"text-halign",type:l.halign},{name:"color",type:l.color},{name:"content",type:l.text},{name:"text-outline-color",type:l.color},{name:"text-outline-width",type:l.size},{name:"text-outline-opacity",type:l.zeroOneNumber},{name:"text-opacity",type:l.zeroOneNumber},{name:"text-decoration",type:l.textDecoration},{name:"text-transform",type:l.textTransform},{name:"font-family",type:l.fontFamily},{name:"font-style",type:l.fontStyle},{name:"font-variant",type:l.fontVariant},{name:"font-weight",type:l.fontWeight},{name:"font-size",type:l.size},{name:"min-zoomed-font-size",type:l.size},{name:"display",type:l.display},{name:"visibility",type:l.visibility},{name:"opacity",type:l.zeroOneNumber},{name:"z-index",type:l.nonNegativeInt},{name:"overlay-padding",type:l.size},{name:"overlay-color",type:l.color},{name:"overlay-opacity",type:l.zeroOneNumber},{name:"transition-property",type:l.propList},{name:"transition-duration",type:l.time},{name:"transition-delay",type:l.time},{name:"background-blacken",type:l.nOneOneNumber},{name:"background-color",type:l.color},{name:"background-opacity",type:l.zeroOneNumber},{name:"background-image",type:l.url},{name:"background-position-x",type:l.bgPos},{name:"background-position-y",type:l.bgPos},{name:"background-repeat",type:l.bgRepeat},{name:"background-fit",type:l.bgFit},{name:"background-clip",type:l.bgClip},{name:"pie-size",type:l.bgSize},{name:"pie-1-background-color",type:l.color},{name:"pie-2-background-color",type:l.color},{name:"pie-3-background-color",type:l.color},{name:"pie-4-background-color",type:l.color},{name:"pie-5-background-color",type:l.color},{name:"pie-6-background-color",type:l.color},{name:"pie-7-background-color",type:l.color},{name:"pie-8-background-color",type:l.color},{name:"pie-9-background-color",type:l.color},{name:"pie-10-background-color",type:l.color},{name:"pie-11-background-color",type:l.color},{name:"pie-12-background-color",type:l.color},{name:"pie-13-background-color",type:l.color},{name:"pie-14-background-color",type:l.color},{name:"pie-15-background-color",type:l.color},{name:"pie-16-background-color",type:l.color},{name:"pie-1-background-size",type:l.percent},{name:"pie-2-background-size",type:l.percent},{name:"pie-3-background-size",type:l.percent},{name:"pie-4-background-size",type:l.percent},{name:"pie-5-background-size",type:l.percent},{name:"pie-6-background-size",type:l.percent},{name:"pie-7-background-size",type:l.percent},{name:"pie-8-background-size",type:l.percent},{name:"pie-9-background-size",type:l.percent},{name:"pie-10-background-size",type:l.percent},{name:"pie-11-background-size",type:l.percent},{name:"pie-12-background-size",type:l.percent},{name:"pie-13-background-size",type:l.percent},{name:"pie-14-background-size",type:l.percent},{name:"pie-15-background-size",type:l.percent},{name:"pie-16-background-size",type:l.percent},{name:"border-color",type:l.color},{name:"border-opacity",type:l.zeroOneNumber},{name:"border-width",type:l.size},{name:"border-style",type:l.lineStyle},{name:"height",type:l.size},{name:"width",type:l.size},{name:"padding-left",type:l.size},{name:"padding-right",type:l.size},{name:"padding-top",type:l.size},{name:"padding-bottom",type:l.size},{name:"shape",type:l.nodeShape},{name:"source-arrow-shape",type:l.arrowShape},{name:"target-arrow-shape",type:l.arrowShape},{name:"source-arrow-color",type:l.color},{name:"target-arrow-color",type:l.color},{name:"source-arrow-fill",type:l.arrowFill},{name:"target-arrow-fill",type:l.arrowFill},{name:"line-style",type:l.lineStyle},{name:"line-color",type:l.color},{name:"control-point-step-size",type:l.size},{name:"control-point-distance",type:l.size},{name:"control-point-weight",type:l.zeroOneNumber},{name:"curve-style",type:l.curveStyle},{name:"selection-box-color",type:l.color},{name:"selection-box-opacity",type:l.zeroOneNumber},{name:"selection-box-border-color",type:l.color},{name:"selection-box-border-width",type:l.size},{name:"panning-cursor",type:l.cursor},{name:"active-bg-color",type:l.color},{name:"active-bg-opacity",type:l.zeroOneNumber},{name:"active-bg-size",type:l.size},{name:"outside-texture-bg-color",type:l.color},{name:"outside-texture-bg-opacity",type:l.zeroOneNumber}];for(var c=e.style.properties,u=0;u<c.length;u++){var d=c[u];c[d.name]=d}e.style.pieBackgroundN=16}(),e.styfn.addDefaultStylesheet=function(){var t="Helvetica",r="normal",n="normal",i="normal",a="#000",o="none",s=16;this.selector("node, edge").css({"text-valign":"top","text-halign":"center",color:a,"text-outline-color":"#000","text-outline-width":0,"text-outline-opacity":1,"text-opacity":1,"text-decoration":"none","text-transform":o,"font-family":t,"font-style":r,"font-variant":n,"font-weight":i,"font-size":s,"min-zoomed-font-size":0,visibility:"visible",display:"element",opacity:1,"z-index":0,content:"","overlay-opacity":0,"overlay-color":"#000","overlay-padding":10,"transition-property":"none","transition-duration":0,"transition-delay":0,"background-blacken":0,"background-color":"#888","background-opacity":1,"background-image":"none","background-position-x":"50%","background-position-y":"50%","background-repeat":"no-repeat","background-fit":"none","background-clip":"node","border-color":"#000","border-opacity":1,"border-width":0,"border-style":"solid",height:30,width:30,"padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0,shape:"ellipse","pie-size":"100%","pie-1-background-color":"black","pie-1-background-size":"0%","pie-2-background-color":"black","pie-2-background-size":"0%","pie-3-background-color":"black","pie-3-background-size":"0%","pie-4-background-color":"black","pie-4-background-size":"0%","pie-5-background-color":"black","pie-5-background-size":"0%","pie-6-background-color":"black","pie-6-background-size":"0%","pie-7-background-color":"black","pie-7-background-size":"0%","pie-8-background-color":"black","pie-8-background-size":"0%","pie-9-background-color":"black","pie-9-background-size":"0%","pie-10-background-color":"black","pie-10-background-size":"0%","pie-11-background-color":"black","pie-11-background-size":"0%","pie-12-background-color":"black","pie-12-background-size":"0%","pie-13-background-color":"black","pie-13-background-size":"0%","pie-14-background-color":"black","pie-14-background-size":"0%","pie-15-background-color":"black","pie-15-background-size":"0%","pie-16-background-color":"black","pie-16-background-size":"0%","source-arrow-shape":"none","target-arrow-shape":"none","source-arrow-color":"#bbb","target-arrow-color":"#bbb","source-arrow-fill":"filled","target-arrow-fill":"filled","line-style":"solid","line-color":"#bbb","control-point-step-size":40,"control-point-weight":.5,"curve-style":"bezier"}).selector("$node > node").css({width:"auto",height:"auto",shape:"rectangle","background-opacity":.5,"padding-top":10,"padding-right":10,"padding-left":10,"padding-bottom":10}).selector("edge").css({width:1}).selector(":active").css({"overlay-color":"black","overlay-padding":10,"overlay-opacity":.25}).selector("core").css({"selection-box-color":"#ddd","selection-box-opacity":.65,"selection-box-border-color":"#aaa","selection-box-border-width":1,"panning-cursor":"grabbing","active-bg-color":"black","active-bg-opacity":.15,"active-bg-size":e.is.touch()?40:15,"outside-texture-bg-color":"#000","outside-texture-bg-opacity":.125})},e.styfn.clear=function(){this._private.newStyle=!0;for(var e=0;e<this.length;e++)delete this[e];return this.length=0,this},e.styfn.resetToDefault=function(){return this.clear(),this.addDefaultStylesheet(),this},e.styfn.core=function(){return this._private.coreStyle},e.styfn.parse=function(t,r,n,i){t=e.util.camel2dash(t);var a=e.style.properties[t],o=r;if(!a)return null;if(void 0===r||null===r)return null;var s=e.is.string(r);s&&(r=e.util.trim(r));var l=a.type;if(!l)return null;if(n&&(""===r||null===r))return{name:t,value:r,bypass:!0,deleteBypass:!0};var c,u,d,p;if(!s||i);else{if((c=new RegExp(e.style.types.data.regex).exec(r))||(d=new RegExp(e.style.types.layoutData.regex).exec(r))){var h=void 0!==d;return c=c||d,{name:t,value:c,strValue:""+r,mapped:h?e.style.types.layoutData:e.style.types.data,field:c[1],bypass:n}}if((u=new RegExp(e.style.types.mapData.regex).exec(r))||(p=new RegExp(e.style.types.mapLayoutData.regex).exec(r))){var h=void 0!==p;if(u=u||p,!l.color&&!l.number)return!1;var g=this.parse(t,u[4]);if(!g||g.mapped)return!1;var v=this.parse(t,u[5]);if(!v||v.mapped)return!1;if(g.value===v.value)return!1;if(l.color){var f=g.value,y=v.value,m=!(f[0]!==y[0]||f[1]!==y[1]||f[2]!==y[2]||f[3]!==y[3]&&(null!=f[3]&&1!==f[3]||null!=y[3]&&1!==y[3]));if(m)return!1}return{name:t,value:u,strValue:""+r,mapped:h?e.style.types.mapLayoutData:e.style.types.mapData,field:u[1],fieldMin:parseFloat(u[2]),fieldMax:parseFloat(u[3]),valueMin:g.value,valueMax:v.value,bypass:n}}}if(l.number){var b,x="px";if(l.units&&(b=l.units),!l.unitless)if(s){var w="px|em"+(l.allowPercent?"|\\%":"");b&&(w=b);var _=r.match("^("+e.util.regex.number+")("+w+")?$");_&&(r=_[1],b=_[2]||x)}else b||(b=x);if(r=parseFloat(r),isNaN(r)&&void 0===l.enums)return null;if(isNaN(r)&&void 0!==l.enums){r=o;for(var E=0;E<l.enums.length;E++){var S=l.enums[E];if(S===r)return{name:t,value:r,strValue:""+r,bypass:n}}return null}if(l.integer&&!e.is.integer(r))return null;if(void 0!==l.min&&r<l.min||void 0!==l.max&&r>l.max)return null;var P={name:t,value:r,strValue:""+r+(b?b:""),units:b,bypass:n};return l.unitless||"px"!==b&&"em"!==b||(P.pxValue="px"!==b&&b?this.getEmSizeInPixels()*r:r),P}if(l.propList){var k=[],C=""+r;if("none"===C);else{for(var D=C.split(","),E=0;E<D.length;E++){var N=e.util.trim(D[E]);e.style.properties[N]&&k.push(N)}if(0===k.length)return null}return{name:t,value:k,strValue:0===k.length?"none":k.join(", "),bypass:n}}if(l.color){var M=e.util.color2tuple(r);return M?{name:t,value:M,strValue:""+r,bypass:n}:null}if(l.enums){for(var E=0;E<l.enums.length;E++){var S=l.enums[E];if(S===r)return{name:t,value:r,strValue:""+r,bypass:n}}return null}if(l.regex){var T=new RegExp(l.regex),z=T.exec(r);return z?{name:t,value:z,strValue:""+r,bypass:n}:null}return l.string?{name:t,value:r,strValue:""+r,bypass:n}:null},e.styfn.selector=function(t){var r="core"===t?null:new e.Selector(t),n=this.length++;return this[n]={selector:r,properties:[]},this},e.styfn.css=function(){var t=arguments;switch(t.length){case 1:for(var r=t[0],n=0;n<e.style.properties.length;n++){var i=e.style.properties[n],a=r[i.name];void 0===a&&(a=r[e.util.dash2camel(i.name)]),void 0!==a&&this.cssRule(i.name,a)}break;case 2:this.cssRule(t[0],t[1])}return this},e.styfn.cssRule=function(e,t){var r=this.parse(e,t);if(r){var n=this.length-1;this[n].properties.push(r);var i=!this[n].selector;i&&(this._private.coreStyle[r.name]=r)}return this}}(cytoscape),function(e){"use strict";e.styfn.apply=function(e){for(var t=this,r=0;r<e.length;r++){var n=e[r],i=n._private,a=[],o=[];t._private.newStyle&&(i.styleCxts=[],i.style={});for(var s=0;s<this.length;s++){var l=this[s],c=l.selector&&l.selector.filter(n).length>0,u=l.properties,d=!i.styleCxts[s];if(c){for(var p=0;p<u.length;p++){var h=u[p],g=i.style[h.name],v=g&&g.context===l,f=h.mapped&&v;(d||f)&&this.applyParsedProperty(n,h,l)}n._private.styleCxts[s]=l,t._private.newStyle===!1&&d&&a.push(l)}else i.styleCxts[s]&&(this.rollBackContext(n,l),o.push(l),delete i.styleCxts[s])}(a.length>0||o.length>0)&&this.updateTransitions(n,a,o),t.updateStyleHints(n)}t._private.newStyle=!1},e.styfn.updateStyleHints=function(t){var r=t._private,n=!1;if("nodes"===r.group)for(var i=1;i<=e.style.pieBackgroundN;i++){var a=r.style["pie-"+i+"-background-size"].value;if(a>0){n=!0;break}}r.hasPie=n;var o=r.style["text-transform"].strValue,s=r.style.content.strValue,l=r.style["font-style"].strValue,a=r.style["font-size"].pxValue+"px",c=r.style["font-family"].strValue,u=r.style["font-variant"].strValue,d=r.style["font-weight"].strValue;r.labelKey=l+"$"+a+"$"+c+"$"+u+"$"+d+"$"+s+"$"+o,r.fontKey=l+"$"+d+"$"+a+"$"+c},e.styfn.rollBackContext=function(e,t){for(var r=0;r<t.properties.length;r++){var n=t.properties[r],i=e._private.style[n.name];i.bypassed&&(i=i.bypassed);for(var a,o=!0,s=0;i.prev;){var l=i.prev;i.context===t&&(o?e._private.style[n.name]=l:a&&(a.prev=l)),a=i,i=l,o=!1,s++}}},e.styfn.applyParsedProperty=function(t,r,n){r=e.util.clone(r);var i,a,o=r,s=t._private.style,l=e.style.properties[o.name].type,c=o.bypass,u=s[o.name],d=u&&u.bypass;if(("height"===r.name||"width"===r.name)&&"auto"===r.value&&t.isNode()&&!t.isParent())return!1;if(c&&o.deleteBypass){var p=s[o.name];return p?p.bypass&&p.bypassed?(s[o.name]=p.bypassed,!0):!1:!0}switch(o.mapped){case e.style.types.mapData:case e.style.types.mapLayoutData:for(var h=o.mapped===e.style.types.mapLayoutData,g=o.field.split("."),i=h?t._private.layoutData:t._private.data,v=0;v<g.length&&i;v++){var f=g[v];i=i[f]}var y;if(y=e.is.number(i)?(i-o.fieldMin)/(o.fieldMax-o.fieldMin):0,0>y?y=0:y>1&&(y=1),l.color){var m=o.valueMin[0],b=o.valueMax[0],x=o.valueMin[1],w=o.valueMax[1],_=o.valueMin[2],E=o.valueMax[2],S=null==o.valueMin[3]?1:o.valueMin[3],P=null==o.valueMax[3]?1:o.valueMax[3],k=[Math.round(m+(b-m)*y),Math.round(x+(w-x)*y),Math.round(_+(E-_)*y),Math.round(S+(P-S)*y)];a={bypass:o.bypass,name:o.name,value:k,strValue:"rgb("+k[0]+", "+k[1]+", "+k[2]+")"}}else{if(!l.number)return!1;var C=o.valueMin+(o.valueMax-o.valueMin)*y;a=this.parse(o.name,C,o.bypass,!0)}a||(a=this.parse(o.name,u.strValue,o.bypass,!0)),a.mapping=o,o=a;break;case e.style.types.data:case e.style.types.layoutData:for(var h=o.mapped===e.style.types.layoutData,g=o.field.split("."),i=h?t._private.layoutData:t._private.data,v=0;v<g.length&&i;v++){var f=g[v];i=i[f]}a=this.parse(o.name,i,o.bypass,!0),a||(a=this.parse(o.name,u.strValue,o.bypass,!0)),a.mapping=o,o=a;break;case void 0:break;default:return!1}if(c)o.bypassed=d?u.bypassed:u,s[o.name]=o;else{var D;d?(D=u.bypassed,u.bypassed=o):(D=s[o.name],s[o.name]=o),D&&D.mapping&&o.mapping&&D.context===n&&(D=D.prev),D&&D!==o&&(o.prev=D)}return o.context=n,!0},e.styfn.update=function(){var e=this._private.cy,t=e.elements();t.updateStyle()},e.styfn.updateMappers=function(t){for(var r=0;r<t.length;r++){for(var n=t[r],i=n._private.style,a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],s=i[o.name];if(s&&s.mapping){var l=s.mapping;this.applyParsedProperty(n,l)}}this.updateStyleHints(n)}},e.styfn.updateTransitions=function(t,r,n){var i=this,a=t._private.style,o=a["transition-property"].value,s=1e3*a["transition-duration"].value,l=1e3*a["transition-delay"].value,c={};if(o.length>0&&s>0){for(var u=!1,d=0;d<o.length;d++){for(var p=o[d],h=a[p],g=h.prev,v=a[p],f=!1,y=!1,m=!1,b=0;b<r.length;b++){var x=r[b];if(x===v.context){y=!0;break}}for(var b=n.length-1;b>=0;b--){for(var x=n[b],w=0;w<x.properties.length;w++){var _=x.properties[w];if(_.name===p){m=!0,g=_;break}}if(m)break}(y||m)&&(e.is.number(g.pxValue)&&e.is.number(v.pxValue)?f=g.pxValue!==v.pxValue:e.is.number(g.value)&&e.is.number(v.value)?f=g.value!==v.value:e.is.array(g.value)&&e.is.array(v.value)&&(f=g.value[0]!==v.value[0]||g.value[1]!==v.value[1]||g.value[2]!==v.value[2]),f&&(c[p]=v.strValue,this.applyBypass(t,p,g.strValue),u=!0))}if(!u)return;t._private.transitioning=!0,t.stop(),l>0&&t.delay(l),t.animate({css:c},{duration:s,queue:!1,complete:function(){i.removeAllBypasses(t),t._private.transitioning=!1}})}else t._private.transitioning&&(t.stop(),this.removeAllBypasses(t),t._private.transitioning=!1)}}(cytoscape),function(e){"use strict";e.styfn.applyBypass=function(t,r,n){var i=[];if("*"===r||"**"===r){if(void 0!==n)for(var a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],r=o.name,s=this.parse(r,n,!0);s&&i.push(s)}}else if(e.is.string(r)){var s=this.parse(r,n,!0);s&&i.push(s)}else{if(!e.is.plainObject(r))return!1;for(var l=r,a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],r=o.name,n=l[r];if(void 0===n&&(n=l[e.util.dash2camel(r)]),void 0!==n){var s=this.parse(r,n,!0);s&&i.push(s)}}}if(0===i.length)return!1;for(var c=!1,a=0;a<t.length;a++)for(var u=t[a],d=0;d<i.length;d++){var o=i[d];c=this.applyParsedProperty(u,o)||c}return c},e.styfn.removeAllBypasses=function(t){for(var r=0;r<e.style.properties.length;r++)for(var n=e.style.properties[r],i=n.name,a="",o=this.parse(i,a,!0),s=0;s<t.length;s++){var l=t[s];this.applyParsedProperty(l,o)}}}(cytoscape),function(e,t){"use strict";e.styfn.getEmSizeInPixels=function(){var e=this._private.cy,r=e.container();if(t&&r&&t.getComputedStyle){var n=t.getComputedStyle(r).getPropertyValue("font-size"),i=parseFloat(n);return i}return 1},e.styfn.containerCss=function(e){var r=this._private.cy,n=r.container();return t&&n&&t.getComputedStyle?t.getComputedStyle(n).getPropertyValue(e):void 0},e.styfn.containerProperty=function(e){var t=this.containerCss(e),r=this.parse(e,t);return r},e.styfn.containerPropertyAsString=function(e){var t=this.containerProperty(e);return t?t.strValue:void 0}}(cytoscape,"undefined"==typeof window?null:window),function(e){"use strict";e.styfn.getRenderedStyle=function(t){var t=t[0];if(t){for(var r={},n=t._private.style,i=this._private.cy,a=i.zoom(),o=0;o<e.style.properties.length;o++){var s=e.style.properties[o],l=n[s.name];if(l){var c=l.unitless?l.strValue:l.pxValue*a+"px";r[s.name]=c,r[e.util.dash2camel(s.name)]=c}}return r}},e.styfn.getRawStyle=function(t){var t=t[0];if(t){for(var r={},n=t._private.style,i=0;i<e.style.properties.length;i++){var a=e.style.properties[i],o=n[a.name];o&&(r[a.name]=o.strValue,r[e.util.dash2camel(a.name)]=o.strValue)}return r}},e.styfn.getValueStyle=function(t){var r,n;if(e.is.element(t)?(r={},n=t._private.style):(r={},n=t),n)for(var i=0;i<e.style.properties.length;i++){var a=e.style.properties[i],o=n[a.name]||n[e.util.dash2camel(a.name)];if(void 0===o||e.is.plainObject(o)||(o=this.parse(a.name,o)),o){var s=void 0===o.value?o:o.value;r[a.name]=s,r[e.util.dash2camel(a.name)]=s}}return r}}(cytoscape),function(e){"use strict";e.style.applyFromJson=function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.selector,a=n.css;e.selector(i);for(var o in a){var s=a[o];e.css(o,s)}}return e},e.style.fromJson=function(t,r){var n=new e.Style(t);return e.style.applyFromJson(n,r),n},e.styfn.fromJson=function(t){var r=this;return r.resetToDefault(),e.style.applyFromJson(r,t),r},e.styfn.json=function(){for(var e=[],t=0;t<this.length;t++){for(var r=this[t],n=r.selector,i=r.properties,a={},o=0;o<i.length;o++){var s=i[o];a[s.name]=s.strValue}e.push({selector:n?n.toString():"core",css:a})}return e}}(cytoscape),function(e){"use strict";e.style.applyFromString=function(t,r){function n(){l=l.length>a.length?l.substr(a.length):""}function i(){o=o.length>s.length?o.substr(s.length):""}var a,o,s,l=""+r;for(l=l.replace(/[/][*](\s|.)+?[*][/]/g,"");;){var c=l.match(/^\s*$/);if(c)break;var u=l.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);if(!u){e.util.error("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: "+l);break}a=u[0];var d=u[1],p=new e.Selector(d);if(p._private.invalid)e.util.error("Skipping parsing of block: Invalid selector found in string stylesheet: "+d),n();else{var h=u[2],g=!1;o=h;for(var v=[];;){var c=o.match(/^\s*$/);if(c)break;var f=o.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);if(!f){e.util.error("Skipping parsing of block: Invalid formatting of style property and value definitions found in:"+h),g=!0;break}s=f[0];var y=f[1],m=f[2],b=e.style.properties[y];if(b){var x=t.parse(y,m);x?(v.push({name:y,val:m}),i()):(e.util.error("Skipping property: Invalid property definition in: "+s),i())}else e.util.error("Skipping property: Invalid property name in: "+s),i()}if(g){n();break}t.selector(d);for(var w=0;w<v.length;w++){var b=v[w];t.css(b.name,b.val)}n()}}return t},e.style.fromString=function(t,r){var n=new e.Style(t);return e.style.applyFromString(n,r),n},e.styfn.fromString=function(t){var r=this;return r.resetToDefault(),e.style.applyFromString(r,t),r}}(cytoscape),function(e){"use strict";e.stylesheet=e.Stylesheet=function(){return this instanceof e.Stylesheet?void(this.length=0):new e.Stylesheet},e.Stylesheet.prototype.selector=function(e){var t=this.length++;return this[t]={selector:e,properties:[]},this},e.Stylesheet.prototype.css=function(t,r){var n=this.length-1;if(e.is.string(t))this[n].properties.push({name:t,value:r});else if(e.is.plainObject(t))for(var i=t,a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],s=i[o.name];if(void 0===s&&(s=i[e.util.dash2camel(o.name)]),void 0!==s){var t=o.name,r=s;this[n].properties.push({name:t,value:r})}}return this},e.Stylesheet.prototype.generateStyle=function(t){for(var r=new e.Style(t),n=0;n<this.length;n++){var i=this[n],a=i.selector,o=i.properties;r.selector(a);for(var s=0;s<o.length;s++){var l=o[s];r.css(l.name,l.value)}}return r}}(cytoscape),function(e,t){"use strict";var r=e.is.touch(),n={hideEdgesOnViewport:!1},i=e.util.copy(n);e.defaults=function(t){n=e.util.extend({},i,t)},e.fn.core=function(t){for(var r in t){var n=t[r];e.Core.prototype[r]=n}},e.Core=function(i){if(!(this instanceof e.Core))return new e.Core(i);
var a=this;i=e.util.extend({},n,i);var o=i.container,s=o?o._cyreg:null;s=s||{},s&&s.cy&&(o&&(o.innerHTML=""),s.cy.notify({type:"destroy"}),s={});var l=s.readies=s.readies||[];o&&(o._cyreg=s),s.cy=a;var c=i;c.layout=e.util.extend({name:t&&o?"grid":"null"},c.layout),c.renderer=e.util.extend({name:t&&o?"canvas":"null"},c.renderer);var u=this._private={ready:!1,initrender:!1,options:c,elements:[],id2index:{},listeners:[],aniEles:[],scratch:{},layout:null,renderer:null,notificationsEnabled:!0,minZoom:1e-50,maxZoom:1e50,zoomingEnabled:void 0===c.zoomingEnabled?!0:c.zoomingEnabled,userZoomingEnabled:void 0===c.userZoomingEnabled?!0:c.userZoomingEnabled,panningEnabled:void 0===c.panningEnabled?!0:c.panningEnabled,userPanningEnabled:void 0===c.userPanningEnabled?!0:c.userPanningEnabled,boxSelectionEnabled:void 0===c.boxSelectionEnabled?!0:c.boxSelectionEnabled,autolockNodes:!1,autoungrabifyNodes:void 0===c.autoungrabifyNodes?!1:c.autoungrabifyNodes,zoom:e.is.number(c.zoom)?c.zoom:1,pan:{x:e.is.plainObject(c.pan)&&e.is.number(c.pan.x)?c.pan.x:0,y:e.is.plainObject(c.pan)&&e.is.number(c.pan.y)?c.pan.y:0},hasCompoundNodes:!1},d=c.selectionType;u.selectionType=void 0===d||"additive"!==d&&"single"!==d?r?"additive":"single":d,e.is.number(c.minZoom)&&e.is.number(c.maxZoom)&&c.minZoom<c.maxZoom?(u.minZoom=c.minZoom,u.maxZoom=c.maxZoom):e.is.number(c.minZoom)&&void 0===c.maxZoom?u.minZoom=c.minZoom:e.is.number(c.maxZoom)&&void 0===c.minZoom&&(u.maxZoom=c.maxZoom),u.style=e.is.stylesheet(c.style)?c.style.generateStyle(this):e.is.array(c.style)?e.style.fromJson(this,c.style):e.is.string(c.style)?e.style.fromString(this,c.style):new e.Style(a),a.initRenderer(e.util.extend({hideEdgesOnViewport:c.hideEdgesOnViewport,hideLabelsOnViewport:c.hideLabelsOnViewport,textureOnViewport:c.textureOnViewport},c.renderer)),c.initrender&&(a.on("initrender",c.initrender),a.on("initrender",function(){a._private.initrender=!0})),a.load(c.elements,function(){a.startAnimationLoop(),a._private.ready=!0,e.is.fn(c.ready)&&a.bind("ready",c.ready);for(var t=0;t<l.length;t++){var r=l[t];a.bind("ready",r)}s&&(s.readies=[]),a.trigger("ready")},c.done)},e.corefn=e.Core.prototype,e.fn.core({ready:function(){return this._private.ready},initrender:function(){return this._private.initrender},destroy:function(){this.notify({type:"destroy"});var e=this.container(),t=e.parentNode;return t&&t.removeChild(e),this},getElementById:function(t){var r=this._private.id2index[t];return void 0!==r?this._private.elements[r]:new e.Collection(this)},selectionType:function(){return this._private.selectionType},hasCompoundNodes:function(){return this._private.hasCompoundNodes},addToPool:function(e){for(var t=this._private.elements,r=this._private.id2index,n=0;n<e.length;n++){var i=e[n],a=i._private.data.id,o=r[a],s=void 0!==o;s||(o=t.length,t.push(i),r[a]=o,i._private.index=o)}return this},removeFromPool:function(e){for(var t=this._private.elements,r=this._private.id2index,n=0;n<e.length;n++){var i=e[n],a=i._private.data.id,o=r[a],s=void 0!==o;if(s){delete this._private.id2index[a],t.splice(o,1);for(var l=o;l<t.length;l++){var c=t[l]._private.data.id;r[c]--}}}},container:function(){return this._private.options.container},options:function(){return e.util.copy(this._private.options)},json:function(){var e={},t=this;return e.elements={},t.elements().each(function(t,r){var n=r.group();e.elements[n]||(e.elements[n]=[]),e.elements[n].push(r.json())}),e.style=t.style().json(),e.scratch=t.scratch(),e.zoomingEnabled=t._private.zoomingEnabled,e.userZoomingEnabled=t._private.userZoomingEnabled,e.zoom=t._private.zoom,e.minZoom=t._private.minZoom,e.maxZoom=t._private.maxZoom,e.panningEnabled=t._private.panningEnabled,e.userPanningEnabled=t._private.userPanningEnabled,e.pan=t._private.pan,e.boxSelectionEnabled=t._private.boxSelectionEnabled,e.layout=t._private.options.layout,e.renderer=t._private.options.renderer,e.hideEdgesOnViewport=t._private.options.hideEdgesOnViewport,e.hideLabelsOnViewport=t._private.options.hideLabelsOnViewport,e.textureOnViewport=t._private.options.textureOnViewport,e}})}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";function r(e){var t=!document||"interactive"!==document.readyState&&"complete"!==document.readyState?r:e;setTimeout(t,9,e)}e.fn.core({add:function(t){var r,n=this;if(e.is.elementOrCollection(t)){var i=t;if(i._private.cy===n)r=i.restore();else{for(var a=[],o=0;o<i.length;o++){var s=i[o];a.push(s.json())}r=new e.Collection(n,a)}}else if(e.is.array(t)){var a=t;r=new e.Collection(n,a)}else if(e.is.plainObject(t)&&(e.is.array(t.nodes)||e.is.array(t.edges))){for(var l=t,a=[],c=["nodes","edges"],o=0,u=c.length;u>o;o++){var d=c[o],p=l[d];if(e.is.array(p))for(var h=0,g=p.length;g>h;h++){var v=p[h],f=e.util.extend({},v,{group:d});a.push(f)}}r=new e.Collection(n,a)}else{var v=t;r=new e.Element(n,v).collection()}return r},remove:function(t){if(e.is.elementOrCollection(t))t=t;else if(e.is.string(t)){var r=t;t=this.$(r)}return t.remove()},load:function(n,i,a){function o(){s.one("layoutready",function(e){s.notifications(!0),s.trigger(e),s.notify({type:"load",collection:s.elements()}),s.one("load",i),s.trigger("load")}).one("layoutstop",function(){s.one("done",a),s.trigger("done")}),s.layout(s._private.options.layout)}var s=this,l=s.elements();return l.length>0&&l.remove(),s.notifications(!1),null!=n&&(e.is.plainObject(n)||e.is.array(n))&&s.add(n),t?r(o):o(),this}})}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";e.fn.core({addToAnimationPool:function(e){for(var t=this,r=t._private.aniEles,n=[],i=0;i<r.length;i++){var a=r[i]._private.data.id;n[a]=!0}for(var i=0;i<e.length;i++){var o=e[i],a=o._private.data.id;n[a]||r.push(o)}},startAnimationLoop:function(){function r(){function e(){d(function(e){n(e),r()},p)}c?setTimeout(function(){e()},l):e()}function n(t){t=+new Date;for(var r=s._private.aniEles,n=0;n<r.length;n++){var a=r[n],o=a._private.animation.current,l=a._private.animation.queue;if(0===o.length){var c=l,u=c.length>0?c.shift():null;null!=u&&(u.callTime=+new Date,o.push(u))}for(var d=[],p=0;p<o.length;p++){var h=o[p];i(a,h,t),o[p].done&&(d.push(h),o.splice(p,1),p--)}for(var p=0;p<d.length;p++){var h=d[p],g=h.params.complete;e.is.fn(g)&&g.apply(a,[t])}}r.length>0&&s.notify({type:"draw",collection:r});for(var p=0;p<r.length;p++){var a=r[p],l=a._private.animation.queue,o=a._private.animation.current,v=o.length>0||l.length>0;v||(r.splice(p,1),p--)}}function i(t,r,n){var i,l=s._private.style,c=r.properties,u=r.params,d=r.callTime;if(i=0===r.duration?1:Math.min(1,(n-d)/r.duration),0>i?i=0:i>1&&(i=1),null==c.delay){var p=r.startPosition,h=c.position,g=t._private.position;if(h&&(a(p.x,h.x)&&(g.x=o(p.x,h.x,i)),a(p.y,h.y)&&(g.y=o(p.y,h.y,i))),c.css)for(var v=e.style.properties,f=0;f<v.length;f++){var y=v[f].name,m=c.css[y];if(void 0!==m){var b=r.startStyle[y],x=o(b,m,i);l.applyBypass(t,y,x)}}}return e.is.fn(u.step)&&u.step.apply(t,[n]),i>=1&&(r.done=!0),i}function a(t,r){return null==t||null==r?!1:e.is.number(t)&&e.is.number(r)?!0:t&&r?!0:!1}function o(t,r,n){if(0>n?n=0:n>1&&(n=1),e.is.number(t)&&e.is.number(r))return t+(r-t)*n;if(e.is.number(t[0])&&e.is.number(r[0])){var i=t,a=r,o=function(e,t){var r=t-e,i=e;return Math.round(n*r+i)},s=o(i[0],a[0]),l=o(i[1],a[1]),c=o(i[2],a[2]);return"rgb("+s+", "+l+", "+c+")"}return void 0}var s=this,l=1e3/60,c=!1,u=!0;if(t){s._private.aniEles=[];var d=e.util.requestAnimationFrame;null!=d&&u||(d=function(e){t.setTimeout(function(){e(+new Date)},l)});var p=s.container();r()}}})}(cytoscape,"undefined"==typeof window?null:window),function(e){"use strict";e.fn.core({data:e.define.data({field:"data",bindingEvent:"data",allowBinding:!0,allowSetting:!0,settingEvent:"data",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0}),removeData:e.define.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!0}),batchData:e.define.batchData({field:"data",event:"data",triggerFnName:"trigger",immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),scratch:e.define.data({field:"scratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeScratch:e.define.removeData({field:"scratch",triggerEvent:!1})})}(cytoscape),function(e){"use strict";e.fn.core({on:e.define.on(),one:e.define.on({unbindSelfOnTrigger:!0}),once:e.define.on({unbindAllBindersOnTrigger:!0}),off:e.define.off(),trigger:e.define.trigger()}),e.corefn.bind=e.corefn.on,e.corefn.unbind=e.corefn.off}(cytoscape),function(e){"use strict";e.fn.core({png:function(e){var t=this._private.renderer;return e=e||{},t.png(e)}})}(cytoscape),function(e){"use strict";e.fn.core({layout:function(e){var t=this;return this._private.layoutRunning?this:(null==e&&(e=this._private.options.layout),this.initLayout(e),t.trigger("layoutstart"),this._private.layoutRunning=!0,this.one("layoutstop",function(){t._private.layoutRunning=!1}),this._private.layout.run(),this)},initLayout:function(t){if(null==t)return void e.util.error("Layout options must be specified to run a layout");if(null==t.name)return void e.util.error("A `name` must be specified to run a layout");var r=t.name,n=e.extension("layout",r);return null==n?void e.util.error("Can not apply layout: No such layout `%s` found; did you include its JS file?",r):(this._private.layout=new n(e.util.extend({},t,{renderer:this._private.renderer,cy:this})),void(this._private.options.layout=t))}})}(cytoscape),function(e){"use strict";e.fn.core({notify:function(t){if(this._private.notificationsEnabled){var r=this.renderer(),n=this;if(e.is.element(t.collection)){var i=t.collection;t.collection=new e.Collection(n,[i])}else if(e.is.array(t.collection)){var a=t.collection;t.collection=new e.Collection(n,a)}r.notify(t)}},notifications:function(e){var t=this._private;return void 0===e?t.notificationsEnabled:void(t.notificationsEnabled=e?!0:!1)},noNotifications:function(e){this.notifications(!1),e(),this.notifications(!0)}})}(cytoscape),function(e){"use strict";e.fn.core({renderTo:function(e,t,r,n){var i=this._private.renderer;return i.renderTo(e,t,r,n),this},renderer:function(){return this._private.renderer},forceRender:function(){return this.notify({type:"draw"}),this},resize:function(){return this.notify({type:"resize"}),this},initRenderer:function(t){var r=this,n=e.extension("renderer",t.name);return null==n?void e.util.error("Can not initialise: No such renderer `%s` found; did you include its JS file?",t.name):void(this._private.renderer=new n(e.util.extend({},t,{cy:r,style:r._private.style})))},recalculateRenderedStyle:function(){var e=this.renderer();e.recalculateRenderedStyle&&e.recalculateRenderedStyle()}})}(cytoscape),function(e){"use strict";e.fn.core({collection:function(t){return e.is.string(t)?this.$(t):e.is.elementOrCollection(t)?t.collection():new e.Collection(this)},nodes:function(e){var t=this.$("node");return e?t.filter(e):t},edges:function(e){var t=this.$("edge");return e?t.filter(e):t},$:function(t){var r=new e.Collection(this,this._private.elements);return t?r.filter(t):r}}),e.corefn.elements=e.corefn.filter=e.corefn.$}(cytoscape),function(e){"use strict";e.fn.core({style:function(){return this._private.style}})}(cytoscape),function(e){"use strict";e.fn.core({autolockNodes:function(e){return void 0===e?this._private.autolockNodes:(this._private.autolockNodes=e?!0:!1,this)},autoungrabifyNodes:function(e){return void 0===e?this._private.autoungrabifyNodes:(this._private.autoungrabifyNodes=e?!0:!1,this)},panningEnabled:function(e){return void 0===e?this._private.panningEnabled:(this._private.panningEnabled=e?!0:!1,this)},userPanningEnabled:function(e){return void 0===e?this._private.userPanningEnabled:(this._private.userPanningEnabled=e?!0:!1,this)},zoomingEnabled:function(e){return void 0===e?this._private.zoomingEnabled:(this._private.zoomingEnabled=e?!0:!1,this)},userZoomingEnabled:function(e){return void 0===e?this._private.userZoomingEnabled:(this._private.userZoomingEnabled=e?!0:!1,this)},boxSelectionEnabled:function(e){return void 0===e?this._private.boxSelectionEnabled:(this._private.boxSelectionEnabled=e?!0:!1,this)},pan:function(){var t,r,n,i,a,o=arguments,s=this._private.pan;switch(o.length){case 0:return s;case 1:if(!this._private.panningEnabled)return this;if(e.is.string(o[0]))return t=o[0],s[t];e.is.plainObject(o[0])&&(n=o[0],i=n.x,a=n.y,e.is.number(i)&&(s.x=i),e.is.number(a)&&(s.y=a),this.trigger("pan"));break;case 2:if(!this._private.panningEnabled)return this;t=o[0],r=o[1],"x"!==t&&"y"!==t||!e.is.number(r)||(s[t]=r),this.trigger("pan")}return this.notify({type:"viewport"}),this},panBy:function(){var t,r,n,i,a,o=arguments,s=this._private.pan;if(!this._private.panningEnabled)return this;switch(o.length){case 1:e.is.plainObject(o[0])&&(n=o[0],i=n.x,a=n.y,e.is.number(i)&&(s.x+=i),e.is.number(a)&&(s.y+=a),this.trigger("pan"));break;case 2:t=o[0],r=o[1],"x"!==t&&"y"!==t||!e.is.number(r)||(s[t]+=r),this.trigger("pan")}return this.notify({type:"viewport"}),this},fit:function(t,r){if(e.is.number(t)&&void 0===r&&(r=t,t=void 0),!this._private.panningEnabled||!this._private.zoomingEnabled)return this;if(e.is.string(t)){var n=t;t=this.$(n)}else e.is.elementOrCollection(t)||(t=this.elements());var i,a=t.boundingBox(),o=this.style(),s=parseFloat(o.containerCss("width")),l=parseFloat(o.containerCss("height"));return r=e.is.number(r)?r:0,!isNaN(s)&&!isNaN(l)&&t.length>0&&(i=this._private.zoom=Math.min((s-2*r)/a.w,(l-2*r)/a.h),i=i>this._private.maxZoom?this._private.maxZoom:i,i=i<this._private.minZoom?this._private.minZoom:i,this._private.pan={x:(s-i*(a.x1+a.x2))/2,y:(l-i*(a.y1+a.y2))/2},this.trigger("pan zoom"),this.notify({type:"viewport"})),this},minZoom:function(t){return void 0===t?this._private.minZoom:(e.is.number(t)&&(this._private.minZoom=t),this)},maxZoom:function(t){return void 0===t?this._private.maxZoom:(e.is.number(t)&&(this._private.maxZoom=t),this)},zoom:function(t){var r,n;if(void 0===t)return this._private.zoom;if(e.is.number(t))n=t;else if(e.is.plainObject(t)){if(n=t.level,t.position){var i=t.position,a=this._private.pan,o=this._private.zoom;r={x:i.x*o+a.x,y:i.y*o+a.y}}else t.renderedPosition&&(r=t.renderedPosition);if(r&&!this._private.panningEnabled)return this}if(!this._private.zoomingEnabled)return this;if(!e.is.number(n)||r&&(!e.is.number(r.x)||!e.is.number(r.y)))return this;if(n=n>this._private.maxZoom?this._private.maxZoom:n,n=n<this._private.minZoom?this._private.minZoom:n,r){var s=this._private.pan,l=this._private.zoom,c=n,u={x:-c/l*(r.x-s.x)+r.x,y:-c/l*(r.y-s.y)+r.y};this._private.zoom=n,this._private.pan=u;var d=s.x!==u.x||s.y!==u.y;this.trigger("zoom"+(d?" pan":""))}else this._private.zoom=n,this.trigger("zoom");return this.notify({type:"viewport"}),this},viewport:function(t){var r=this._private,n=!0,i=!0,a=[],o=!1,s=!1;if(!t)return this;if(e.is.number(t.zoom)||(n=!1),e.is.plainObject(t.pan)||(i=!1),!n&&!i)return this;if(n){var l=t.zoom;l<r.minZoom||l>r.maxZoom||!r.zoomingEnabled?o=!0:(r.zoom=l,a.push("zoom"))}if(i&&!o&&r.panningEnabled){var c=t.pan;e.is.number(c.x)&&(r.pan.x=c.x,s=!1),e.is.number(c.y)&&(r.pan.y=c.y,s=!1),s||a.push("pan")}return a.length>0&&this.trigger(a.join(" ")),this.notify({type:"viewport"}),this},boundingBox:function(e){var t=this.$(e);return t.boundingBox()},renderedBoundingBox:function(e){var t=this.$(e);return t.renderedBoundingBox()},center:function(t){if(!this._private.panningEnabled||!this._private.zoomingEnabled)return this;if(e.is.string(t)){var r=t;t=this.elements(r)}else e.is.elementOrCollection(t)||(t=this.elements());var n=t.boundingBox(),i=this.style(),a=parseFloat(i.containerCss("width")),o=parseFloat(i.containerCss("height")),s=this._private.zoom;return this.pan({x:(a-s*(n.x1+n.x2))/2,y:(o-s*(n.y1+n.y2))/2}),this.trigger("pan"),this.notify({type:"viewport"}),this},reset:function(){return this._private.panningEnabled&&this._private.zoomingEnabled?(this.pan({x:0,y:0}),this._private.maxZoom>1&&this._private.minZoom<1&&this.zoom(1),this.notify({type:"viewport"}),this):this}})}(cytoscape),function(e){"use strict";e.fn.collection=e.fn.eles=function(t){for(var r in t){var n=t[r];e.Collection.prototype[r]=n}};var t={prefix:{nodes:"n",edges:"e"},id:{nodes:0,edges:0},generate:function(t,r,n){var i=e.is.element(r)?r._private:r,a=i.group,o=null!=n?n:this.prefix[a]+this.id[a];if(t.getElementById(o).empty())this.id[a]++;else for(;!t.getElementById(o).empty();)o=this.prefix[a]+ ++this.id[a];return o}};e.Element=function(t,r,n){if(!(this instanceof e.Element))return new e.Element(t,r,n);var i=this;if(n=void 0===n||n?!0:!1,void 0===t||void 0===r||!e.is.core(t))return void e.util.error("An element must have a core reference and parameters set");if("nodes"!==r.group&&"edges"!==r.group)return void e.util.error("An element must be of type `nodes` or `edges`; you specified `"+r.group+"`");if(this.length=1,this[0]=this,this._private={cy:t,single:!0,data:r.data||{},layoutData:{},position:r.position||{},autoWidth:void 0,autoHeight:void 0,listeners:[],group:r.group,style:{},rstyle:{},styleCxts:[],removed:!0,selected:r.selected?!0:!1,selectable:void 0===r.selectable?!0:r.selectable?!0:!1,locked:r.locked?!0:!1,grabbed:!1,grabbable:void 0===r.grabbable?!0:r.grabbable?!0:!1,active:!1,classes:{},animation:{current:[],queue:[]},rscratch:{},scratch:{},edges:[],children:[]},r.renderedPosition){var a=r.renderedPosition,o=t.pan(),s=t.zoom();this._private.position={x:(a.x-o.x)/s,y:(a.y-o.y)/s}}if(e.is.string(r.classes))for(var l=r.classes.split(/\s+/),c=0,u=l.length;u>c;c++){var d=l[c];d&&""!==d&&(i._private.classes[d]=!0)}r.css&&t.style().applyBypass(this,r.css),(void 0===n||n)&&this.restore()},e.Collection=function(r,n){if(!(this instanceof e.Collection))return new e.Collection(r,n);if(void 0===r||!e.is.core(r))return void e.util.error("A collection must have a reference to the core");var i={},a=!1;if(n){if(n.length>0&&e.is.plainObject(n[0])&&!e.is.element(n[0])){a=!0;for(var o=[],s={},l=0,c=n.length;c>l;l++){var u=n[l];null==u.data&&(u.data={});var d=u.data;if(null==d.id)d.id=t.generate(r,u);else if(0!==r.getElementById(d.id).length||s[d.id])continue;var p=new e.Element(r,u,!1);o.push(p),s[d.id]=!0}n=o}}else n=[];this.length=0;for(var l=0,c=n.length;c>l;l++){var h=n[l];if(h){var g=h._private.data.id;i[g]||(i[g]=h,this[this.length]=h,this.length++)}}this._private={cy:r,ids:i},a&&this.restore()},e.elefn=e.elesfn=e.Element.prototype=e.Collection.prototype,e.elesfn.cy=function(){return this._private.cy},e.elesfn.element=function(){return this[0]},e.elesfn.collection=function(){return e.is.collection(this)?this:new e.Collection(this._private.cy,[this])},e.elesfn.json=function(){var t=this.element();if(null==t)return void 0;var r=t._private,n=e.util.copy({data:r.data,position:r.position,group:r.group,bypass:r.bypass,removed:r.removed,selected:r.selected,selectable:r.selectable,locked:r.locked,grabbed:r.grabbed,grabbable:r.grabbable,classes:""}),i=[];for(var a in r.classes)i.push(a);for(var o=0;o<i.length;o++){var a=i[o];n.classes+=a+(o<i.length-1?" ":"")}return n},e.elesfn.jsons=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t],n=r.json();e.push(n)}return e},e.elesfn.restore=function(r){var n=this,i=[],a=n.cy();void 0===r&&(r=!0);for(var o=[],s=[],l=[],c=0,u=0,d=0,p=n.length;p>d;d++){var h=n[d];h.isNode()?(s.push(h),c++):(l.push(h),u++)}o=s.concat(l);for(var d=0,p=o.length;p>d;d++){var h=o[d];if(h.removed()){var g=h._private,v=g.data;if(void 0===v.id)v.id=t.generate(a,h);else{if(e.is.emptyString(v.id)||!e.is.string(v.id)){e.util.error("Can not create element with invalid string ID `"+v.id+"`");continue}if(0!==a.getElementById(v.id).length){e.util.error("Can not create second element with ID `"+v.id+"`");continue}}var f=v.id;if(h.isEdge()){for(var y=h,m=["source","target"],b=m.length,x=!1,w=0;b>w;w++){var _=m[w],E=v[_];null==E||""===E?(e.util.error("Can not create edge `"+f+"` with unspecified "+_),x=!0):a.getElementById(E).empty()&&(e.util.error("Can not create edge `"+f+"` with nonexistant "+_+" `"+E+"`"),x=!0)}if(x)continue;var S=a.getElementById(v.source),P=a.getElementById(v.target);S._private.edges.push(y),P._private.edges.push(y),y._private.source=S,y._private.target=P}g.ids={},g.ids[f]=h,g.removed=!1,a.addToPool(h),i.push(h)}}for(var d=0;c>d;d++){var k=o[d],v=k._private.data,C=k._private.data.parent,D=null!=C;if(D){var N=a.getElementById(C);if(N.empty())delete v.parent;else{for(var M=!1,T=N;!T.empty();){if(k.same(T)){M=!0,delete v.parent;break}T=T.parent()}M||(N[0]._private.children.push(k),a._private.hasCompoundNodes=!0)}}}if(i=new e.Collection(a,i),i.length>0){var z=i.add(i.connectedNodes()).add(i.parent());z.updateStyle(r),r?i.rtrigger("add"):i.trigger("add")}return n},e.elesfn.removed=function(){var e=this[0];return e&&e._private.removed},e.elesfn.inside=function(){var e=this[0];return e&&!e._private.removed},e.elesfn.remove=function(t){function r(e){for(var t=e._private.edges,r=0;r<t.length;r++)i(t[r])}function n(e){for(var t=e._private.children,r=0;r<t.length;r++)i(t[r])}function i(e){var t=u[e.id()];t||(u[e.id()]=!0,e.isNode()?(c.push(e),r(e),n(e)):c.unshift(e))}function a(e,t){for(var r=e._private.edges,n=0;n<r.length;n++){var i=r[n];if(t===i){r.splice(n,1);break}}}function o(e,t){t=t[0],e=e[0];for(var r=e._private.children,n=0;n<r.length;n++)if(r[n][0]===t[0]){r.splice(n,1);break}}var s=this,l=[],c=[],u={},d=s._private.cy;void 0===t&&(t=!0);for(var p=0,h=s.length;h>p;p++){var g=s[p];i(g)}for(var p=0;p<c.length;p++){var g=c[p];if(g._private.removed=!0,d.removeFromPool(g),l.push(g),g.isEdge()){var v=g.source()[0],f=g.target()[0];a(v,g),a(f,g)}else{var y=g.parent();0!==y.length&&o(y,g)}}var m=d._private.elements;d._private.hasCompoundNodes=!1;for(var p=0;p<m.length;p++){var g=m[p];if(g.isParent()){d._private.hasCompoundNodes=!0;break}}var b=new e.Collection(this.cy(),l);b.size()>0&&(t&&this.cy().notify({type:"remove",collection:b}),b.trigger("remove"));for(var x={},p=0;p<c.length;p++){var g=c[p],w="nodes"===g._private.group,_=g._private.data.parent;if(w&&void 0!==_&&!x[_]){x[_]=!0;var y=d.getElementById(_);y&&0!==y.length&&!y._private.removed&&0===y.children().length&&y.updateStyle()}}return this}}(cytoscape),function(e){"use strict";e.fn.eles({breadthFirstSearch:function(t,r,n){n=2!==arguments.length||e.is.fn(r)?n:r,r=e.is.fn(r)?r:function(){};for(var i,a=this._private.cy,o=e.is.string(t)?this.filter(t):t,s=[],l=[],c={},u={},d={},p=0,h=this.nodes(),g=this.edges(),v=0;v<o.length;v++)o[v].isNode()&&(s.unshift(o[v]),d[o[v].id()]=!0,l.push(o[v]),u[o[v].id()]=0);for(;0!==s.length;){var o=s.shift(),f=u[o.id()],y=r.call(o,p++,f);if(y===!0){i=o;break}if(y===!1)break;for(var m=o.connectedEdges(n?function(){return this.data("source")===o.id()}:void 0).intersect(g),v=0;v<m.length;v++){var b=m[v],x=b.connectedNodes(function(){return this.id()!==o.id()}).intersect(h);0===x.length||d[x.id()]||(x=x[0],s.push(x),d[x.id()]=!0,u[x.id()]=u[o.id()]+1,l.push(x),c[x.id()]=b)}}for(var w=[],v=0;v<l.length;v++){var _=l[v],E=c[_.id()];E&&w.push(E),w.push(_)}return{path:new e.Collection(a,w),found:new e.Collection(a,i)}},depthFirstSearch:function(t,r,n){n=2!==arguments.length||e.is.fn(r)?n:r,r=e.is.fn(r)?r:function(){};for(var i,a=this._private.cy,o=e.is.string(t)?this.filter(t):t,s=[],l=[],c={},u={},d={},p=0,h=this.edges(),g=this.nodes(),v=0;v<o.length;v++)o[v].isNode()&&(s.push(o[v]),l.push(o[v]),u[o[v].id()]=0);for(;0!==s.length;){var o=s.pop();if(!d[o.id()]){d[o.id()]=!0;var f=u[o.id()],y=r.call(o,p++,f);if(y===!0){i=o;break}if(y===!1)break;for(var m=o.connectedEdges(n?function(){return this.data("source")===o.id()}:void 0).intersect(h),v=0;v<m.length;v++){var b=m[v],x=b.connectedNodes(function(){return this.id()!==o.id()}).intersect(g);0===x.length||d[x.id()]||(x=x[0],s.push(x),u[x.id()]=u[o.id()]+1,l.push(x),c[x.id()]=b)}}}for(var w=[],v=0;v<l.length;v++){var _=l[v],E=c[_.id()];E&&w.push(E),w.push(_)}return{path:new e.Collection(a,w),found:new e.Collection(a,i)}},kruskal:function(t){function r(e){for(var t=0;t<i.length;t++){var r=i[t];if(r.anySame(e))return{eles:r,index:t}}}t=e.is.fn(t)?t:function(){return 1};for(var n=new e.Collection(this._private.cy,[]),i=[],a=this.nodes(),o=0;o<a.length;o++)i.push(a[o].collection());for(var s=this.edges(),l=s.toArray().sort(function(e,r){var n=t.call(e),i=t.call(r);return n-i}),o=0;o<l.length;o++){var c=l[o],u=c.source()[0],d=c.target()[0],p=r(u),h=r(d);p.index!==h.index&&(n=n.add(c),i[p.index]=p.eles.add(h.eles),i.splice(h.index,1))}return a.add(n)},dijkstra:function(t,r,n){var i=this._private.cy;n=e.is.fn(r)?n:r,r=e.is.fn(r)?r:function(){return 1};for(var a=e.is.string(t)?this.filter(t).eq(0):t.eq(0),o={},s={},l={},c=this.edges().filter(function(){return!this.isLoop()}),u=this.nodes(),d=[],p=0;p<u.length;p++)o[u[p].id()]=u[p].same(a)?0:1/0,d.push(u[p]);var h=function(e){return o[e.id()]};d=new e.Collection(i,d);for(var g=e.Minheap(i,d,h),v=function(e,t){for(var i,a=(n?e.edgesTo(t):e.edgesWith(t)).intersect(c),o=1/0,s=0;s<a.length;s++){var l=a[s],u=r.call(l);(o>u||!i)&&(o=u,i=l)}return{edge:i,dist:o}};g.size()>0;){var f=g.pop(),y=f.value,m=f.id,b=i.getElementById(m);if(l[m]=y,y===Math.Infinite)break;for(var x=b.neighborhood().intersect(u),p=0;p<x.length;p++){var w=x[p],_=w.id(),E=v(b,w),S=y+E.dist;S<g.getValueById(_)&&(g.edit(_,S),s[_]={node:b,edge:E.edge})}}return{distanceTo:function(t){var r=e.is.string(t)?u.filter(t).eq(0):t.eq(0);return l[r.id()]},pathTo:function(t){var r=e.is.string(t)?u.filter(t).eq(0):t.eq(0),n=[],a=r;if(r.length>0)for(n.unshift(r);s[a.id()];){var o=s[a.id()];n.unshift(o.edge),n.unshift(o.node),a=o.node}return new e.Collection(i,n)}}}}),e.elesfn.bfs=e.elesfn.breadthFirstSearch,e.elesfn.dfs=e.elesfn.depthFirstSearch}(cytoscape),function(e){"use strict";e.fn.eles({animated:function(){var e=this[0];return e?e._private.animation.current.length>0:void 0},clearQueue:function(){for(var e=0;e<this.length;e++){var t=this[e];t._private.animation.queue=[]}return this},delay:function(e,t){return this.animate({delay:e},{duration:e,complete:t}),this},animate:function(e,t){var r,n=+new Date,i=this._private.cy,a=i.style();switch(void 0===t&&(t={}),void 0===t.duration&&(t.duration=400),t.duration){case"slow":t.duration=600;break;case"fast":t.duration=200}if(null==e||null==e.position&&null==e.renderedPosition&&null==e.css&&null==e.delay)return this;if(e.css&&(e.css=a.getValueStyle(e.css)),e.renderedPosition){var o=e.renderedPosition,s=i.pan(),l=i.zoom();e.position={x:(o.x-s.x)/l,y:(o.y-s.y)/l}}for(var c=0;c<this.length;c++){var u=this[c],d=u._private.position,p={x:d.x,y:d.y},h=a.getValueStyle(u);r=u.animated()&&(void 0===t.queue||t.queue)?u._private.animation.queue:u._private.animation.current,r.push({properties:e,duration:t.duration,params:t,callTime:n,startPosition:p,startStyle:h})}return i.addToAnimationPool(this),this},stop:function(e,t){for(var r=0;r<this.length;r++){for(var n=this[r],i=n._private.animation.current,a=0;a<i.length;a++){var o=i[a];t&&(o.duration=0)}e&&(n._private.animation.queue=[]),t||(n._private.animation.current=[])}return this.cy().notify({collection:this,type:"draw"}),this}})}(cytoscape),function(e){"use strict";e.fn.eles({addClass:function(t){t=t.split(/\s+/);for(var r=this,n=[],i=0;i<t.length;i++){var a=t[i];if(!e.is.emptyString(a))for(var o=0;o<r.length;o++){var s=r[o],l=s._private.classes[a];s._private.classes[a]=!0,l||n.push(s)}}return n.length>0&&new e.Collection(this._private.cy,n).updateStyle(),r.trigger("class"),r},hasClass:function(e){var t=this[0];return null!=t&&t._private.classes[e]?!0:!1},toggleClass:function(t,r){for(var n=t.split(/\s+/),i=this,a=[],o=0,s=i.length;s>o;o++)for(var l=i[o],c=0;c<n.length;c++){var u=n[c];if(!e.is.emptyString(u)){var d=l._private.classes[u],p=r||void 0===r&&!d;p?(l._private.classes[u]=!0,d||a.push(l)):(l._private.classes[u]=!1,d&&a.push(l))}}return a.length>0&&new e.Collection(this._private.cy,a).updateStyle(),i.trigger("class"),i},removeClass:function(t){t=t.split(/\s+/);for(var r=this,n=[],i=0;i<r.length;i++)for(var a=r[i],o=0;o<t.length;o++){var s=t[o];if(s&&""!==s){var l=a._private.classes[s];delete a._private.classes[s],l&&n.push(a)}}return n.length>0&&new e.Collection(r._private.cy,n).updateStyle(),r.trigger("class"),r}})}(cytoscape),function(e){"use strict";e.fn.eles({allAre:function(e){return this.filter(e).length===this.length},is:function(e){return this.filter(e).length>0},same:function(e){return e=this.cy().collection(e),this.length!==e.length?!1:this.intersect(e).length===this.length},anySame:function(e){return e=this.cy().collection(e),this.intersect(e).length>0},allAreNeighbors:function(e){return e=this.cy().collection(e),this.neighborhood().intersect(e).length===e.length}})}(cytoscape),function(e){"use strict";e.fn.eles({parent:function(t){for(var r=[],n=this._private.cy,i=0;i<this.length;i++){var a=this[i],o=n.getElementById(a._private.data.parent);o.size()>0&&r.push(o)}return new e.Collection(n,r).filter(t)},parents:function(t){for(var r=[],n=this.parent();n.nonempty();){for(var i=0;i<n.length;i++){var a=n[i];r.push(a)}n=n.parent()}return new e.Collection(this.cy(),r).filter(t)},children:function(t){for(var r=[],n=0;n<this.length;n++){var i=this[n];r=r.concat(i._private.children)}return new e.Collection(this.cy(),r).filter(t)},siblings:function(e){return this.parent().children().not(this).filter(e)},isParent:function(){var e=this[0];return e?0!==e._private.children.length:void 0},isChild:function(){var e=this[0];return e?void 0!==e._private.data.parent&&0!==e.parent().length:void 0},descendants:function(t){function r(e){for(var t=0;t<e.length;t++){var i=e[t];n.push(i),i.children().nonempty()&&r(i.children())}}var n=[];return r(this.children()),new e.Collection(this.cy(),n).filter(t)}}),e.elesfn.ancestors=e.elesfn.parents}(cytoscape),function(e){"use strict";var t=1,r=0;e.fn.eles({data:e.define.data({field:"data",bindingEvent:"data",allowBinding:!0,allowSetting:!0,settingEvent:"data",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),removeData:e.define.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),batchData:e.define.batchData({field:"data",event:"data",triggerFnName:"trigger",immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),scratch:e.define.data({field:"scratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeScratch:e.define.removeData({field:"scratch",triggerEvent:!1}),rscratch:e.define.data({field:"rscratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeRscratch:e.define.removeData({field:"rscratch",triggerEvent:!1}),id:function(){var e=this[0];return e?e._private.data.id:void 0},position:e.define.data({field:"position",bindingEvent:"position",allowBinding:!0,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!0,triggerFnName:"rtrigger",allowGetting:!0,validKeys:["x","y"],onSet:function(e){var t=e.updateCompoundBounds();t.rtrigger("position")},canSet:function(e){return!e.locked()}}),silentPosition:e.define.data({field:"position",bindingEvent:"position",allowBinding:!1,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!1,triggerFnName:"trigger",allowGetting:!0,validKeys:["x","y"],onSet:function(e){e.updateCompoundBounds()},canSet:function(e){return!e.locked()}}),positions:function(t,r){if(e.is.plainObject(t))this.position(t);else if(e.is.fn(t)){for(var n=t,i=0;i<this.length;i++){var a=this[i],t=n.apply(a,[i,a]);if(t&&!a.locked()){var o=a._private.position;o.x=t.x,o.y=t.y}}var s=this.updateCompoundBounds(),l=this.add(s);r?l.trigger("position"):l.rtrigger("position")}return this},updateCompoundBounds:function(){function t(e){var t=e.children(),r=e._private.style,i=t.boundingBox({includeLabels:!1,includeEdges:!1}),a={top:r["padding-top"].pxValue,bottom:r["padding-bottom"].pxValue,left:r["padding-left"].pxValue,right:r["padding-right"].pxValue},o=e._private.position,s=!1;
"auto"===r.width.value&&(e._private.autoWidth=i.w+a.left+a.right,o.x=(i.x1+i.x2-a.left+a.right)/2,s=!0),"auto"===r.height.value&&(e._private.autoHeight=i.h+a.top+a.bottom,o.y=(i.y1+i.y2-a.top+a.bottom)/2,s=!0),s&&n.push(e)}var r=this.cy();if(!r.hasCompoundNodes())return r.collection();for(var n=[],i=this.parent();i.nonempty();){for(var a=0;a<i.length;a++){var o=i[a];t(o)}i=i.parent()}return new e.Collection(r,n)},renderedPosition:function(t,r){var n=this[0],i=this.cy(),a=i.zoom(),o=i.pan(),s=e.is.plainObject(t)?t:void 0,l=void 0!==s||void 0!==r&&e.is.string(t);if(n&&n.isNode()){if(!l){var c=n._private.position;return s={x:c.x*a+o.x,y:c.y*a+o.y},void 0===t?s:s[t]}for(var u=0;u<this.length;u++){var n=this[u];void 0!==r?n._private.position[t]=(r-o[t])/a:void 0!==s&&(n._private.position={x:(s.x-o.x)/a,y:(s.y-o.y)/a})}this.rtrigger("position")}else if(!l)return void 0;return this},width:function(){var e=this[0];if(e){var t=e._private.style.width;return"auto"===t.strValue?e._private.autoWidth:t.pxValue}},outerWidth:function(){var e=this[0];if(e){var n=e._private.style,i="auto"===n.width.strValue?e._private.autoWidth:n.width.pxValue,a=n["border-width"]?n["border-width"].pxValue*t+r:0;return i+a}},renderedWidth:function(){var e=this[0];if(e){var t=e.width();return t*this.cy().zoom()}},renderedOuterWidth:function(){var e=this[0];if(e){var t=e.outerWidth();return t*this.cy().zoom()}},height:function(){var e=this[0];if(e&&e.isNode()){var t=e._private.style.height;return"auto"===t.strValue?e._private.autoHeight:t.pxValue}},outerHeight:function(){var e=this[0];if(e){var n=e._private.style,i="auto"===n.height.strValue?e._private.autoHeight:n.height.pxValue,a=n["border-width"]?n["border-width"].pxValue*t+r:0;return i+a}},renderedHeight:function(){var e=this[0];if(e){var t=e.height();return t*this.cy().zoom()}},renderedOuterHeight:function(){var e=this[0];if(e){var t=e.outerHeight();return t*this.cy().zoom()}},renderedBoundingBox:function(e){var t=this.boundingBox(e),r=this.cy(),n=r.zoom(),i=r.pan(),a=t.x1*n+i.x,o=t.x2*n+i.x,s=t.y1*n+i.y,l=t.y2*n+i.y;return{x1:a,x2:o,y1:s,y2:l,w:o-a,h:l-s}},boundingBox:function(t){var r=this;t=e.util.extend({includeNodes:!0,includeEdges:!0,includeLabels:!0},t),this.cy().recalculateRenderedStyle();for(var n=1/0,i=-1/0,a=1/0,o=-1/0,s=0;s<r.length;s++){var l,c,u,d,p,h,g=r[s],v=!1;if("none"!==g.css("display")){if(g.isNode()&&t.includeNodes){v=!0;var f=g._private.position;p=f.x,h=f.y;var y=g.outerWidth(),m=y/2,b=g.outerHeight(),x=b/2;l=p-m,c=p+m,u=h-x,d=h+x,n=n>l?l:n,i=c>i?c:i,a=a>u?u:a,o=d>o?d:o}else if(g.isEdge()&&t.includeEdges){v=!0;var w=g.source()[0]._private.position,_=g.target()[0]._private.position,E=g._private.rstyle||{};if(l=w.x,c=_.x,u=w.y,d=_.y,l>c){var S=l;l=c,c=S}if(u>d){var S=u;u=d,d=S}n=n>l?l:n,i=c>i?c:i,a=a>u?u:a,o=d>o?d:o;for(var P=E.bezierPts||[],y=g._private.style.width.pxValue,k=0;k<P.length;k++){var C=P[k];n=C.x-y<n?C.x-y:n,i=C.x+y>i?C.x+y:i,a=C.y-y<a?C.y-y:a,o=C.y+y>o?C.y+y:o}}var D=g._private.style,E=g._private.rstyle,N=D.content.strValue,M=D["font-size"],T=D["text-halign"],z=D["text-valign"],I=E.labelWidth,B=E.labelHeight,R=E.labelX,X=E.labelY;if(v&&t.includeLabels&&N&&M&&null!=B&&null!=I&&null!=R&&null!=X&&T&&z){var O,L,Y,V,A=B,F=I;if(g.isEdge())O=R-F/2,L=R+F/2,Y=X-A/2,V=X+A/2;else{switch(T.value){case"left":O=R-F,L=R;break;case"center":O=R-F/2,L=R+F/2;break;case"right":O=R,L=R+F}switch(z.value){case"top":Y=X-A,V=X;break;case"center":Y=X-A/2,V=X+A/2;break;case"bottom":Y=X,V=X+A}}n=n>O?O:n,i=L>i?L:i,a=a>Y?Y:a,o=V>o?V:o}}}return{x1:n,x2:i,y1:a,y2:o,w:i-n,h:o-a}}})}(cytoscape),function(e){"use strict";function t(e){return function(t){var r=this;if(void 0===t&&(t=!0),0!==r.length&&r.isNode()&&!r.removed()){for(var n=0,i=r[0],a=i._private.edges,o=0;o<a.length;o++){var s=a[o];(t||!s.isLoop())&&(n+=e(i,s))}return n}}}function r(e,t){return function(r){for(var n,i=this.nodes(),a=0;a<i.length;a++){var o=i[a],s=o[e](r);void 0===s||void 0!==n&&!t(s,n)||(n=s)}return n}}e.fn.eles({degree:t(function(e,t){return t.source().same(t.target())?2:1}),indegree:t(function(e,t){return t.target().same(e)?1:0}),outdegree:t(function(e,t){return t.source().same(e)?1:0})}),e.fn.eles({minDegree:r("degree",function(e,t){return t>e}),maxDegree:r("degree",function(e,t){return e>t}),minIndegree:r("indegree",function(e,t){return t>e}),maxIndegree:r("indegree",function(e,t){return e>t}),minOutdegree:r("outdegree",function(e,t){return t>e}),maxOutdegree:r("outdegree",function(e,t){return e>t})}),e.fn.eles({totalDegree:function(e){for(var t=0,r=this.nodes(),n=0;n<r.length;n++)t+=r[n].degree(e);return t}})}(cytoscape),function(e){"use strict";e.fn.eles({on:e.define.on(),one:e.define.on({unbindSelfOnTrigger:!0}),once:e.define.on({unbindAllBindersOnTrigger:!0}),off:e.define.off(),trigger:e.define.trigger(),rtrigger:function(e,t){return 0!==this.length?(this.cy().notify({type:e,collection:this.filter(function(){return!this.removed()})}),this.trigger(e,t),this):void 0}}),e.elesfn.bind=e.elesfn.on,e.elesfn.unbind=e.elesfn.off}(cytoscape),function(e){"use strict";e.fn.eles({nodes:function(e){return this.filter(function(e,t){return t.isNode()}).filter(e)},edges:function(e){return this.filter(function(e,t){return t.isEdge()}).filter(e)},filter:function(t){var r=this._private.cy;if(e.is.fn(t)){for(var n=[],i=0;i<this.length;i++){var a=this[i];t.apply(a,[i,a])&&n.push(a)}return new e.Collection(r,n)}return e.is.string(t)||e.is.elementOrCollection(t)?new e.Selector(t).filter(this):void 0===t?this:new e.Collection(r)},not:function(t){var r=this._private.cy;if(t){e.is.string(t)&&(t=this.filter(t));for(var n=[],i=0;i<this.length;i++){var a=this[i],o=t._private.ids[a.id()];o||n.push(a)}return new e.Collection(r,n)}return this},intersect:function(t){var r=this._private.cy;if(e.is.string(t)){var n=t;return this.filter(n)}var i=[],a=this,o=t,s=this.length<t.length,l=s?a._private.ids:o._private.ids,c=s?o._private.ids:a._private.ids;for(var u in l){var d=c[u];d&&i.push(d)}return new e.Collection(r,i)},add:function(t){var r=this._private.cy;if(!t)return this;if(e.is.string(t)){var n=t;t=r.elements(n)}for(var i=[],a=0;a<this.length;a++)i.push(this[a]);for(var a=0;a<t.length;a++){var o=!this._private.ids[t[a].id()];o&&i.push(t[a])}return new e.Collection(r,i)}})}(cytoscape),function(e){"use strict";e.fn.eles({isNode:function(){return"nodes"===this.group()},isEdge:function(){return"edges"===this.group()},isLoop:function(){return this.isEdge()&&this.source().id()===this.target().id()},group:function(){var e=this[0];return e?e._private.group:void 0}})}(cytoscape),function(e){"use strict";e.fn.eles({each:function(t){if(e.is.fn(t))for(var r=0;r<this.length;r++){var n=this[r],i=t.apply(n,[r,n]);if(i===!1)break}return this},toArray:function(){for(var e=[],t=0;t<this.length;t++)e.push(this[t]);return e},slice:function(t,r){var n=[],i=this.length;null==r&&(r=i),null==t&&(t=0),0>t&&(t=i+t),0>r&&(r=i+r);for(var a=t;a>=0&&r>a&&i>a;a++)n.push(this[a]);return new e.Collection(this.cy(),n)},size:function(){return this.length},eq:function(t){return this[t]||new e.Collection(this.cy())},empty:function(){return 0===this.length},nonempty:function(){return!this.empty()},sort:function(t){if(!e.is.fn(t))return this;var r=this.cy(),n=this.toArray().sort(t);return new e.Collection(r,n)},sortByZIndex:function(){return this.sort(e.Collection.zIndexSort)},zDepth:function(){var e=this[0];if(!e)return void 0;var t=e._private,r=t.group;if("nodes"===r)return t.data.parent?e.parents().size():0;var n=t.source,i=t.target,a=n._private.data.parent?n.parents().size():0,o=i._private.data.parent?i.parents().size():0;return Math.max(a-1,o-1,0)+.5}}),e.Collection.zIndexSort=function(e,t){var r=e.cy(),n=e._private,i=t._private,a=n.style["z-index"].value-i.style["z-index"].value,o=0,s=0,l=r.hasCompoundNodes(),c="nodes"===n.group,u="edges"===n.group,d="nodes"===i.group,p="edges"===i.group;l&&(o=e.zDepth(),s=t.zDepth());var h=o-s,g=0===h;return g?c&&p?1:u&&d?-1:0===a?n.index-i.index:a:h}}(cytoscape),function(e){"use strict";e.fn.eles({updateStyle:function(e){var t=this._private.cy,r=t.style();e=e||void 0===e?!0:!1,r.apply(this);var n=this.updateCompoundBounds();return e?this.add(n).rtrigger("style"):this.add(n).trigger("style"),this},updateMappers:function(e){var t=this._private.cy,r=t.style();e=e||void 0===e?!0:!1,r.updateMappers(this);var n=this.updateCompoundBounds();return e?this.add(n).rtrigger("style"):this.add(n).trigger("style"),this},renderedCss:function(e){var t=this[0];if(t){var r=t.cy().style().getRenderedStyle(t);return void 0===e?r:r[e]}},css:function(t,r){var n=this.cy().style();if(e.is.plainObject(t)){var i=t;n.applyBypass(this,i);var a=this.updateCompoundBounds();this.add(a).rtrigger("style")}else if(e.is.string(t)){if(void 0===r){var o=this[0];return o?o._private.style[t].strValue:void 0}n.applyBypass(this,t,r);var a=this.updateCompoundBounds();this.add(a).rtrigger("style")}else if(void 0===t){var o=this[0];return o?n.getRawStyle(o):void 0}return this},removeCss:function(){for(var e=this.cy().style(),t=this,r=0;r<t.length;r++){var n=t[r];e.removeAllBypasses(n)}var i=this.updateCompoundBounds();this.add(i).rtrigger("style")},show:function(){return this.css("display","element"),this},hide:function(){return this.css("display","none"),this},visible:function(){var e=this[0];if(e){var t=e._private.style;if("visible"!==t.visibility.value||"element"!==t.display.value)return!1;if("nodes"===e._private.group){var r=e._private.data.parent?e.parents():null;if(r)for(var n=0;n<r.length;n++){var i=r[n],a=i._private.style,o=a.visibility.value,s=a.display.value;if("visible"!==o||"element"!==s)return!1}return!0}var l=e._private.source,c=e._private.target;return l.visible()&&c.visible()}},hidden:function(){var e=this[0];return e?!e.visible():void 0},effectiveOpacity:function(){var e=this[0];if(e){var t=e._private.style.opacity.value,r=e._private.data.parent?e.parents():null;if(r)for(var n=0;n<r.length;n++){var i=r[n],a=i._private.style.opacity.value;t=a*t}return t}},transparent:function(){var e=this[0];return e?0===e.effectiveOpacity():void 0},isFullAutoParent:function(){var e=this[0];if(e){var t="auto"===e._private.style.width.value,r="auto"===e._private.style.height.value;return e.isParent()&&t&&r}}}),e.elesfn.style=e.elesfn.css,e.elesfn.renderedStyle=e.elesfn.renderedCss,e.elesfn.removeStyle=e.elesfn.removeCss}(cytoscape),function(e){"use strict";function t(e){return function(){var t=arguments;if(2===t.length){var r=t[0],n=t[1];this.bind(e.event,r,n)}else if(1===t.length){var n=t[0];this.bind(e.event,n)}else if(0===t.length){for(var i=0;i<this.length;i++){var a=this[i];(!e.ableField||a._private[e.ableField])&&(a._private[e.field]=e.value)}this.updateStyle(),this.trigger(e.event)}return this}}function r(r){e.elesfn[r.field]=function(){var e=this[0];if(e){if(r.altFieldFn){var t=r.altFieldFn(e);if(void 0!==t)return t}return e._private[r.field]}},e.elesfn[r.on]=t({event:r.on,field:r.field,ableField:r.ableField,value:!0}),e.elesfn[r.off]=t({event:r.off,field:r.field,ableField:r.ableField,value:!1})}r({field:"locked",altFieldFn:function(e){return e.cy().autolockNodes()?!0:void 0},on:"lock",off:"unlock"}),r({field:"grabbable",altFieldFn:function(e){return e.cy().autoungrabifyNodes()?!1:void 0},on:"grabify",off:"ungrabify"}),r({field:"selected",ableField:"selectable",on:"select",off:"unselect"}),r({field:"selectable",on:"selectify",off:"unselectify"}),e.elesfn.grabbed=function(){var e=this[0];return e?e._private.grabbed:void 0},r({field:"active",on:"activate",off:"unactivate"}),e.elesfn.inactive=function(){var e=this[0];return e?!e._private.active:void 0}}(cytoscape),function(e){"use strict";function t(t){return function(r){for(var n=[],i=this._private.cy,a=0;a<this.length;a++){var o=this[a],s=o._private[t.attr];s&&n.push(s)}return new e.Collection(i,n).filter(r)}}function r(t){return function(r){var n=[],i=this._private.cy,a=t||{};e.is.string(r)&&(r=i.$(r));for(var o=r.connectedEdges(),s=this._private.ids,l=0;l<o.length;l++){var c,u=o[l],d=u._private.data;if(a.thisIs){var p=d[a.thisIs];c=s[p]}else c=s[d.source]||s[d.target];c&&n.push(u)}return new e.Collection(i,n)}}function n(t){var r={codirected:!1};return t=e.util.extend({},r,t),function(r){for(var n=this._private.cy,i=[],a=this.edges(),o=t,s=0;s<a.length;s++)for(var l=a[s],c=l.source()[0],u=c.id(),d=l.target()[0],p=d.id(),h=c._private.edges,g=0;g<h.length;g++){var v=h[g],f=v._private.data,y=f.target,m=f.source,b=y===p&&m===u,x=u===y&&p===m;(o.codirected&&b||!o.codirected&&(b||x))&&i.push(v)}return new e.Collection(n,i).filter(r)}}e.fn.eles({roots:function(t){for(var r=this,n=[],i=0;i<r.length;i++){var a=r[i];if(a.isNode()){var o;!function(){o=a.connectedEdges(function(){return this.data("target")===a.id()&&this.data("source")!==a.id()}).length>0}(),o||n.push(a)}}return new e.Collection(this._private.cy,n).filter(t)},forwardNodes:function(t){for(var r=this,n=[],i=0;i<r.length;i++){var a=r[i],o=a.id();if(a.isNode())for(var s=a._private.edges,l=0;l<s.length;l++){var c=s[l],u=c._private.data.source,d=c._private.data.target;u===o&&d!==o&&n.push(c.target()[0])}}return new e.Collection(this._private.cy,n).filter(t)},backwardNodes:function(t){for(var r=this,n=[],i=0;i<r.length;i++){var a=r[i],o=a.id();if(a.isNode())for(var s=a._private.edges,l=0;l<s.length;l++){var c=s[l],u=c._private.data.source,d=c._private.data.target;d===o&&u!==o&&n.push(c.source()[0])}}return new e.Collection(this._private.cy,n).filter(t)}}),e.fn.eles({neighborhood:function(t){for(var r=[],n=this._private.cy,i=this.nodes(),a=0;a<i.length;a++)for(var o=i[a],s=o.connectedEdges(),l=0;l<s.length;l++){var c=s[l],u=c.connectedNodes().not(o);u.length>0&&r.push(u[0]),r.push(c[0])}return new e.Collection(n,r).filter(t)},closedNeighborhood:function(e){return this.neighborhood().add(this).filter(e)},openNeighborhood:function(e){return this.neighborhood(e)}}),e.fn.eles({source:function(t){var r,n=this[0];return n&&(r=n._private.source),new e.Collection(this.cy(),r).filter(t)},target:function(t){var r,n=this[0];return n&&(r=n._private.target),new e.Collection(this.cy(),r).filter(t)},sources:t({attr:"source"}),targets:t({attr:"target"})}),e.fn.eles({edgesWith:r(),edgesTo:r({thisIs:"source"})}),e.fn.eles({connectedEdges:function(t){for(var r=[],n=this._private.cy,i=this,a=0;a<i.length;a++){var o=i[a];if(o.isNode())for(var s=o._private.edges,l=0;l<s.length;l++){var c=s[l];r.push(c)}}return new e.Collection(n,r).filter(t)},connectedNodes:function(t){for(var r=[],n=this._private.cy,i=this,a=0;a<i.length;a++){var o=i[a];o.isEdge()&&(r.push(o.source()[0]),r.push(o.target()[0]))}return new e.Collection(n,r).filter(t)},parallelEdges:n(),codirectedEdges:n({codirected:!0})})}(cytoscape),function(e){"use strict";e.Minheap=function(t,r,n){return new e.Heap(t,r,e.Heap.minHeapComparator,n)},e.Maxheap=function(t,r,n){return new e.Heap(t,r,e.Heap.maxHeapComparator,n)},e.Heap=function(t,r,n,i){if("undefined"!=typeof n&&"undefined"!=typeof r){"undefined"==typeof i&&(i=e.Heap.idFn);var a,o,s,l=[],c={},u=[],d=0;for(r=this.getArgumentAsCollection(r,t),s=r.length,d=0;s>d;d+=1){if(l.push(i.call(t,r[d],d,r)),a=r[d].id(),c.hasOwnProperty(a))throw"ERROR: Multiple items with the same id found: "+a;c[a]=d,u.push(a)}for(this._private={cy:t,heap:l,pointers:c,elements:u,comparator:n,extractor:i,length:s},d=Math.floor(s/2);d>=0;d-=1)o=this.heapify(d);return o}},e.Heap.idFn=function(e){return e.id()},e.Heap.minHeapComparator=function(e,t){return e>=t},e.Heap.maxHeapComparator=function(e,t){return t>=e},e.fn.heap=function(t){for(var r in t){var n=t[r];e.Heap.prototype[r]=n}},e.heapfn=e.Heap.prototype,e.heapfn.size=function(){return this._private.length},e.heapfn.getArgumentAsCollection=function(t,r){var n;if("undefined"==typeof r&&(r=this._private.cy),e.is.elementOrCollection(t))n=t;else{for(var i=[],a=[].concat.apply([],[t]),o=0;o<a.length;o++){var s=a[o],l=r.getElementById(s);l.length>0&&i.push(l)}n=new e.Collection(r,i)}return n},e.heapfn.isHeap=function(){var e,t,r,n,i,a=this._private.heap,o=a.length,s=this._private.comparator;for(e=0;o>e;e+=1)if(t=2*e+1,r=t+1,n=o>t?s(a[t],a[e]):!0,i=o>r?s(a[r],a[e]):!0,!n||!i)return!1;return!0},e.heapfn.heapSwap=function(e,t){var r=this._private.heap,n=this._private.pointers,i=this._private.elements,a=r[e],o=i[e],s=i[e],l=i[t];r[e]=r[t],i[e]=i[t],n[s]=t,n[l]=e,r[t]=a,i[t]=o},e.heapfn.heapify=function(e,t){var r,n,i,a,o,s,l,c=0,u=!1;for("undefined"==typeof t&&(t=!0),r=this._private.heap,c=r.length,s=this._private.comparator,n=e;!u;)t?(i=2*n+1,a=i+1,o=n,c>i&&!s(r[i],r[o])&&(o=i),c>a&&!s(r[a],r[o])&&(o=a),u=o===n,u||(this.heapSwap(o,n),n=o)):(l=Math.floor((n-1)/2),o=n,u=0>l||s(r[o],r[l]),u||(this.heapSwap(o,l),n=l))},e.heapfn.insert=function(e){var t,r,n,i,a,o=this.getArgumentAsCollection(e),s=o.length;for(a=0;s>a;a+=1){if(t=o[a],r=this._private.heap.length,n=this._private.extractor(t),i=t.id(),this._private.pointers.hasOwnProperty(i))throw"ERROR: Multiple items with the same id found: "+i;this._private.heap.push(n),this._private.elements.push(i),this._private.pointers[i]=r,this.heapify(r,!1)}this._private.length=this._private.heap.length},e.heapfn.getValueById=function(e){if(this._private.pointers.hasOwnProperty(e)){var t=this._private.pointers[e];return this._private.heap[t]}},e.heapfn.contains=function(e){for(var t=this.getArgumentAsCollection(e),r=0;r<t.length;r+=1){var n=t[r].id();if(!this._private.pointers.hasOwnProperty(n))return!1}return!0},e.heapfn.top=function(){return this._private.length>0?{value:this._private.heap[0],id:this._private.elements[0]}:void 0},e.heapfn.pop=function(){if(this._private.length>0){var e,t,r,n=this.top(),i=this._private.length-1;return this.heapSwap(0,i),e=this._private.elements[i],t=this._private.heap[i],r=e,this._private.heap.pop(),this._private.elements.pop(),this._private.length=this._private.heap.length,delete this._private.pointers[r],this.heapify(0),n}},e.heapfn.findDirectionHeapify=function(e){var t=Math.floor((e-1)/2),r=this._private.heap,n=0>t||this._private.comparator(r[e],r[t]);this.heapify(e,n)},e.heapfn.edit=function(t,r){for(var n=this.getArgumentAsCollection(t),i=0;i<n.length;i+=1){var a=n[i].id(),o=this._private.pointers[a],s=this._private.heap[o];e.is.number(r)?this._private.heap[o]=r:e.is.fn(r)&&(this._private.heap[o]=r.call(this._private.cy,s,o)),this.findDirectionHeapify(o)}},e.heapfn.delete=function(e){for(var t=this.getArgumentAsCollection(e),r=0;r<t.length;r+=1){var n,i,a,o=t[r].id(),s=this._private.pointers[o],l=this._private.length-1;s!==l&&this.heapSwap(s,l),n=this._private.elements[l],i=this._private.heap[l],a=n,this._private.heap.pop(),this._private.elements.pop(),this._private.length=this._private.heap.length,delete this._private.pointers[a],this.findDirectionHeapify(s)}return i}}(cytoscape),function(e){"use strict";function t(e){t.CANVAS_LAYERS=5,t.SELECT_BOX=0,t.DRAG=2,t.NODE=4,t.TEXTURE_BUFFER=0,t.BUFFER_COUNT=2,this.options=e,this.data={select:[void 0,void 0,void 0,void 0,0],renderer:this,cy:e.cy,container:e.cy.container(),canvases:new Array(t.CANVAS_LAYERS),contexts:new Array(t.CANVAS_LAYERS),canvasNeedsRedraw:new Array(t.CANVAS_LAYERS),bufferCanvases:new Array(t.BUFFER_COUNT),bufferContexts:new Array(t.CANVAS_LAYERS)},this.hoverData={down:null,last:null,downTime:null,triggerMode:null,dragging:!1,initialPan:[null,null],capture:!1},this.timeoutData={panTimeout:null},this.dragData={possibleDragElements:[]},this.touchData={start:null,capture:!1,startPosition:[null,null,null,null,null,null],singleTouchStartTime:null,singleTouchMoved:!0,now:[null,null,null,null,null,null],earlier:[null,null,null,null,null,null]},this.zoomData={freeToZoom:!1,lastPointerX:null},this.redraws=0,this.bindings=[],this.data.canvasContainer=document.createElement("div");var r=this.data.canvasContainer.style;r.position="absolute",r.zIndex="0",r.overflow="hidden",this.data.container.appendChild(this.data.canvasContainer);for(var n=0;n<t.CANVAS_LAYERS;n++)this.data.canvases[n]=document.createElement("canvas"),this.data.contexts[n]=this.data.canvases[n].getContext("2d"),this.data.canvases[n].style.position="absolute",this.data.canvases[n].setAttribute("data-id","layer"+n),this.data.canvases[n].style.zIndex=String(t.CANVAS_LAYERS-n),this.data.canvasContainer.appendChild(this.data.canvases[n]),this.data.canvasNeedsRedraw[n]=!1;this.data.topCanvas=this.data.canvases[0],this.data.canvases[t.NODE].setAttribute("data-id","layer"+t.NODE+"-node"),this.data.canvases[t.SELECT_BOX].setAttribute("data-id","layer"+t.SELECT_BOX+"-selectbox"),this.data.canvases[t.DRAG].setAttribute("data-id","layer"+t.DRAG+"-drag");for(var n=0;n<t.BUFFER_COUNT;n++)this.data.bufferCanvases[n]=document.createElement("canvas"),this.data.bufferContexts[n]=this.data.bufferCanvases[n].getContext("2d"),this.data.bufferCanvases[n].style.position="absolute",this.data.bufferCanvases[n].setAttribute("data-id","buffer"+n),this.data.bufferCanvases[n].style.zIndex=String(-n-1),this.data.bufferCanvases[n].style.visibility="hidden",this.data.canvasContainer.appendChild(this.data.bufferCanvases[n]);this.hideEdgesOnViewport=e.hideEdgesOnViewport,this.hideLabelsOnViewport=e.hideLabelsOnViewport,this.textureOnViewport=e.textureOnViewport,this.load()}t.panOrBoxSelectDelay=400,t.isTouch=e.is.touch();var r="undefined"!=typeof Path2D;t.usePaths=function(){return r},t.prototype.notify=function(e){switch(e.type){case"destroy":return void this.destroy();case"add":case"remove":case"load":this.updateNodesCache(),this.updateEdgesCache();break;case"viewport":this.data.canvasNeedsRedraw[t.SELECT_BOX]=!0;break;case"style":this.updateCachedZSortedEles()}("load"===e.type||"resize"===e.type)&&(this.invalidateContainerClientCoordsCache(),this.matchCanvasSize(this.data.container)),this.data.canvasNeedsRedraw[t.NODE]=!0,this.redraw()},t.prototype.destroy=function(){this.destroyed=!0;for(var e=0;e<this.bindings.length;e++){var t=this.bindings[e],r=t;r.target.removeEventListener(r.event,r.handler,r.useCapture)}};for(var n in e.math)t.prototype[n]=e.math[n];e("renderer","canvas",t)}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype,n=t.arrowShapes={};t.arrowShapeHeight=.3;var i=function(e,t,r,n,i,a){var o=r-i/2,s=r+i/2,l=n-a/2,c=n+a/2;return e>=o&&s>=e&&t>=l&&c>=t};n.arrow={_points:[-.15,-.3,0,0,.15,-.3],collide:function(t,r,i,a,o,s,l,c){var u=n.arrow._points;return e.math.pointInsidePolygon(t,r,u,i,a,o,s,l,c)},roughCollide:i,draw:function(e){for(var t=n.arrow._points,r=0;r<t.length/2;r++)e.lineTo(t[2*r],t[2*r+1])},spacing:function(){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},n.triangle=n.arrow,n.none={collide:function(){return!1},roughCollide:function(){return!1},draw:function(){},spacing:function(){return 0},gap:function(){return 0}},n.circle={_baseRadius:.15,collide:function(e,t,r,i,a,o,s,l){if(a!=o){var c=(o+l)/(a+l);return t/=c,i/=c,Math.pow(r-e,2)+Math.pow(i-t,2)<=Math.pow((a+l)*n.circle._baseRadius,2)}return Math.pow(r-e,2)+Math.pow(i-t,2)<=Math.pow((a+l)*n.circle._baseRadius,2)},roughCollide:i,draw:function(e){e.arc(0,0,n.circle._baseRadius,0,2*Math.PI,!1)},spacing:function(e){return r.getArrowWidth(e._private.style.width.pxValue)*n.circle._baseRadius},gap:function(e){return 2*e._private.style.width.pxValue}},n.inhibitor={_points:[-.25,0,-.25,-.1,.25,-.1,.25,0],collide:function(t,r,i,a,o,s,l,c){var u=n.inhibitor._points;return e.math.pointInsidePolygon(t,r,u,i,a,o,s,l,c)},roughCollide:i,draw:function(e){for(var t=n.inhibitor._points,r=0;r<t.length/2;r++)e.lineTo(t[2*r],t[2*r+1])},spacing:function(){return 4},gap:function(){return 4}},n.tee=n.inhibitor,n.square={_points:[-.12,0,.12,0,.12,-.24,-.12,-.24],collide:function(t,r,i,a,o,s,l,c){var u=n.square._points;return e.math.pointInsidePolygon(t,r,u,i,a,o,s,l,c)},roughCollide:i,draw:function(e){for(var t=n.square._points,r=0;r<t.length/2;r++)e.lineTo(t[2*r],t[2*r+1])},spacing:function(){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},n.diamond={_points:[-.14,-.14,0,-.28,.14,-.14,0,0],collide:function(t,r,i,a,o,s,l,c){var u=n.diamond._points;return e.math.pointInsidePolygon(t,r,u,i,a,o,s,l,c)},roughCollide:i,draw:function(e){e.lineTo(-.14,-.14),e.lineTo(0,-.28),e.lineTo(.14,-.14),e.lineTo(0,0)},spacing:function(){return 0},gap:function(e){return 2*e._private.style.width.pxValue}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.getCachedNodes=function(){var e=this.data,t=this.data.cy;return null==e.cache&&(e.cache={}),null==e.cache.cachedNodes&&(e.cache.cachedNodes=t.nodes()),e.cache.cachedNodes},t.prototype.updateNodesCache=function(){var e=this.data,t=this.data.cy;null==e.cache&&(e.cache={}),e.cache.cachedNodes=t.nodes()},t.prototype.getCachedEdges=function(){var e=this.data,t=this.data.cy;return null==e.cache&&(e.cache={}),null==e.cache.cachedEdges&&(e.cache.cachedEdges=t.edges()),e.cache.cachedEdges},t.prototype.updateEdgesCache=function(){var e=this.data,t=this.data.cy;null==e.cache&&(e.cache={}),e.cache.cachedEdges=t.edges()}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.projectIntoViewport=function(e,t){var r=this.findContainerClientCoords(),n=r[0],i=r[1],a=e-n,o=t-i;return a-=this.data.cy.pan().x,o-=this.data.cy.pan().y,a/=this.data.cy.zoom(),o/=this.data.cy.zoom(),[a,o]},t.prototype.findContainerClientCoords=function(){var e=this.data.container,t=this.containerBB=this.containerBB||e.getBoundingClientRect();return[t.left,t.top,t.right-t.left,t.bottom-t.top]},t.prototype.invalidateContainerClientCoordsCache=function(){this.containerBB=null},t.prototype.findNearestElement=function(r,n,i){function a(e){var a=t.nodeShapes[s.getNodeShape(e)],o=e._private.style["border-width"].pxValue/2,l=s.getNodeWidth(e),u=s.getNodeHeight(e),d=l/2,p=u/2,h=e._private.position,v=e.visible()&&!e.transparent();(!i||v)&&h.x-d<=r&&r<=h.x+d&&h.y-p<=n&&n<=h.y+p&&a.checkPointRough(r,n,o,l+g,u+g,h.x,h.y)&&a.checkPoint(r,n,o,l+g,u+g,h.x,h.y)&&c.push(e)}function o(o){var l=o._private.rscratch,u=o._private.style,d=u.width.pxValue,g=d*d,v=2*d,f=o.visible()&&!o.transparent(),y=o._private.source,m=o._private.target;if(!i||f){if("self"===l.edgeType)(e.math.inBezierVicinity(r,n,l.startX,l.startY,l.cp2ax,l.cp2ay,l.selfEdgeMidX,l.selfEdgeMidY,g)&&g+h>e.math.sqDistanceToQuadraticBezier(r,n,l.startX,l.startY,l.cp2ax,l.cp2ay,l.selfEdgeMidX,l.selfEdgeMidY)||e.math.inBezierVicinity(r,n,l.selfEdgeMidX,l.selfEdgeMidY,l.cp2cx,l.cp2cy,l.endX,l.endY,g)&&g+h>e.math.sqDistanceToQuadraticBezier(r,n,l.selfEdgeMidX,l.selfEdgeMidY,l.cp2cx,l.cp2cy,l.endX,l.endY))&&c.push(o);else if("haystack"==l.edgeType){var b=m._private.position,x=m.width(),w=m.height(),_=y._private.position,E=y.width(),S=y.height(),P=_.x+l.source.x*E,k=_.y+l.source.y*S,C=b.x+l.target.x*x,D=b.y+l.target.y*w;e.math.inLineVicinity(r,n,P,k,C,D,v)&&g+h>e.math.sqDistanceToFiniteLine(r,n,P,k,C,D)&&c.push(o)}else"straight"===l.edgeType?e.math.inLineVicinity(r,n,l.startX,l.startY,l.endX,l.endY,v)&&g+h>e.math.sqDistanceToFiniteLine(r,n,l.startX,l.startY,l.endX,l.endY)&&c.push(o):"bezier"===l.edgeType&&e.math.inBezierVicinity(r,n,l.startX,l.startY,l.cp2x,l.cp2y,l.endX,l.endY,g)&&g+h>e.math.sqDistanceToQuadraticBezier(r,n,l.startX,l.startY,l.cp2x,l.cp2y,l.endX,l.endY)&&c.push(o);if(0===c.length||c[c.length-1]!==o){var N=t.arrowShapes[u["source-arrow-shape"].value],M=t.arrowShapes[u["target-arrow-shape"].value],y=y||o._private.source,m=m||o._private.target,b=m._private.position,_=y._private.position,T=s.getArrowWidth(u.width.pxValue),z=s.getArrowHeight(u.width.pxValue),I=T,B=z;(N.roughCollide(r,n,l.arrowStartX,l.arrowStartY,T,z,[l.arrowStartX-_.x,l.arrowStartY-_.y],0)&&N.collide(r,n,l.arrowStartX,l.arrowStartY,T,z,[l.arrowStartX-_.x,l.arrowStartY-_.y],0)||M.roughCollide(r,n,l.arrowEndX,l.arrowEndY,I,B,[l.arrowEndX-b.x,l.arrowEndY-b.y],0)&&M.collide(r,n,l.arrowEndX,l.arrowEndY,I,B,[l.arrowEndX-b.x,l.arrowEndY-b.y],0))&&c.push(o)}p&&c.length>0&&c[c.length-1]===o&&(a(y),a(m))}}for(var s=this,l=this.getCachedZSortedEles(),c=[],u=t.isTouch,d=this.data.cy.zoom(),p=this.data.cy.hasCompoundNodes(),h=(u?256:32)/d,g=(u?16:0)/d,v=l.length-1;v>=0;v--){var f=l[v];if(c.length>0)break;"nodes"===f._private.group?a(l[v]):o(l[v])}return c.length>0?c[c.length-1]:null},t.prototype.getAllInBox=function(r,n,i,a){var o=this.getCachedNodes(),s=this.getCachedEdges(),l=[],c=Math.min(r,i),u=Math.max(r,i),d=Math.min(n,a),p=Math.max(n,a);r=c,i=u,n=d,a=p;for(var h,g=0;g<o.length;g++){var v=o[g]._private.position,f=this.getNodeShape(o[g]),y=this.getNodeWidth(o[g]),m=this.getNodeHeight(o[g]),b=o[g]._private.style["border-width"].pxValue/2,x=t.nodeShapes[f];x.intersectBox(r,n,i,a,y,m,v.x,v.y,b)&&l.push(o[g])}for(var g=0;g<s.length;g++){var w=s[g]._private.rscratch;if("self"==s[g]._private.rscratch.edgeType&&((h=e.math.boxInBezierVicinity(r,n,i,a,w.startX,w.startY,w.cp2ax,w.cp2ay,w.endX,w.endY,s[g]._private.style.width.pxValue))&&(2==h||1==h&&e.math.checkBezierInBox(r,n,i,a,w.startX,w.startY,w.cp2ax,w.cp2ay,w.endX,w.endY,s[g]._private.style.width.pxValue))||(h=e.math.boxInBezierVicinity(r,n,i,a,w.startX,w.startY,w.cp2cx,w.cp2cy,w.endX,w.endY,s[g]._private.style.width.pxValue))&&(2==h||1==h&&e.math.checkBezierInBox(r,n,i,a,w.startX,w.startY,w.cp2cx,w.cp2cy,w.endX,w.endY,s[g]._private.style.width.pxValue)))&&l.push(s[g]),"bezier"==w.edgeType&&(h=e.math.boxInBezierVicinity(r,n,i,a,w.startX,w.startY,w.cp2x,w.cp2y,w.endX,w.endY,s[g]._private.style.width.pxValue))&&(2==h||1==h&&e.math.checkBezierInBox(r,n,i,a,w.startX,w.startY,w.cp2x,w.cp2y,w.endX,w.endY,s[g]._private.style.width.pxValue))&&l.push(s[g]),"straight"==w.edgeType&&(h=e.math.boxInBezierVicinity(r,n,i,a,w.startX,w.startY,.5*w.startX+.5*w.endX,.5*w.startY+.5*w.endY,w.endX,w.endY,s[g]._private.style.width.pxValue))&&(2==h||1==h&&e.math.checkStraightEdgeInBox(r,n,i,a,w.startX,w.startY,w.endX,w.endY,s[g]._private.style.width.pxValue))&&l.push(s[g]),"haystack"==w.edgeType){var _=s[g].target()[0],E=_.position(),S=s[g].source()[0],P=S.position(),k=P.x+w.source.x,C=P.y+w.source.y,D=E.x+w.target.x,N=E.y+w.target.y,M=k>=r&&i>=k&&C>=n&&a>=C,T=D>=r&&i>=D&&N>=n&&a>=N;M&&T&&l.push(s[g])}}return l},t.prototype.getNodeWidth=function(e){return e.width()},t.prototype.getNodeHeight=function(e){return e.height()},t.prototype.getNodeShape=function(e){var t=e._private.style.shape.value;return e.isParent()?"rectangle"===t||"roundrectangle"===t?t:"rectangle":t},t.prototype.getNodePadding=function(e){var t=e._private.style["padding-left"].pxValue,r=e._private.style["padding-right"].pxValue,n=e._private.style["padding-top"].pxValue,i=e._private.style["padding-bottom"].pxValue;return isNaN(t)&&(t=0),isNaN(r)&&(r=0),isNaN(n)&&(n=0),isNaN(i)&&(i=0),{left:t,right:r,top:n,bottom:i}},t.prototype.zOrderSort=e.Collection.zIndexSort,t.prototype.updateCachedZSortedEles=function(){this.getCachedZSortedEles(!0)},t.prototype.getCachedZSortedEles=function(e){var t=this.lastZOrderCachedNodes,r=this.lastZOrderCachedEdges,n=this.getCachedNodes(),i=this.getCachedEdges(),a=[];if(!e&&t&&r&&t===n&&r===i)a=this.cachedZSortedEles;else{for(var o=0;o<n.length;o++)a.push(n[o]);for(var o=0;o<i.length;o++)a.push(i[o]);a.sort(this.zOrderSort),this.cachedZSortedEles=a}return this.lastZOrderCachedNodes=n,this.lastZOrderCachedEdges=i,a},t.prototype.projectBezier=function(t){function r(e){a.push({x:n(e[0],e[2],e[4],.05),y:n(e[1],e[3],e[5],.05)}),a.push({x:n(e[0],e[2],e[4],.25),y:n(e[1],e[3],e[5],.25)}),a.push({x:n(e[0],e[2],e[4],.4),y:n(e[1],e[3],e[5],.4)}),a.push({x:n(e[0],e[2],e[4],.5),y:n(e[1],e[3],e[5],.5)}),a.push({x:n(e[0],e[2],e[4],.6),y:n(e[1],e[3],e[5],.6)}),a.push({x:n(e[0],e[2],e[4],.75),y:n(e[1],e[3],e[5],.75)}),a.push({x:n(e[0],e[2],e[4],.95),y:n(e[1],e[3],e[5],.95)})}var n=e.math.qbezierAt,i=t._private.rscratch,a=t._private.rstyle.bezierPts=[];"self"===i.edgeType?(r([i.startX,i.startY,i.cp2ax,i.cp2ay,i.selfEdgeMidX,i.selfEdgeMidY]),r([i.selfEdgeMidX,i.selfEdgeMidY,i.cp2cx,i.cp2cy,i.endX,i.endY])):"bezier"===i.edgeType&&r([i.startX,i.startY,i.cp2x,i.cp2y,i.endX,i.endY])},t.prototype.recalculateNodeLabelProjection=function(e){var t=e._private.style.content.strValue;
if(t&&!t.match(/^\s+$/)){var r,n,i=e.outerWidth(),a=e.outerHeight(),o=e._private.position,s=e._private.style["text-halign"].strValue,l=e._private.style["text-valign"].strValue,c=e._private.rscratch,u=e._private.rstyle;switch(s){case"left":r=o.x-i/2;break;case"right":r=o.x+i/2;break;default:r=o.x}switch(l){case"top":n=o.y-a/2;break;case"bottom":n=o.y+a/2;break;default:n=o.y}c.labelX=r,c.labelY=n,u.labelX=r,u.labelY=n,this.applyLabelDimensions(e)}},t.prototype.recalculateEdgeLabelProjection=function(t){var r=t._private.style.content.strValue;if(r&&!r.match(/^\s+$/)){var n,i,a,o,s=t._private.rscratch,l=t._private.rstyle;if("self"==s.edgeType)a=s.selfEdgeMidX,o=s.selfEdgeMidY;else if("straight"==s.edgeType)a=(s.startX+s.endX)/2,o=(s.startY+s.endY)/2;else if("bezier"==s.edgeType)a=e.math.qbezierAt(s.startX,s.cp2x,s.endX,.5),o=e.math.qbezierAt(s.startY,s.cp2y,s.endY,.5);else if("haystack"==s.edgeType){var c=t.source().position(),u=t.target().position();a=(c.x+s.source.x+u.x+s.target.x)/2,o=(c.y+s.source.y+u.y+s.target.y)/2}n=a,i=o,s.labelX=n,s.labelY=i,l.labelX=n,l.labelY=i,this.applyLabelDimensions(t)}},t.prototype.applyLabelDimensions=function(e){var t=e._private.rscratch,r=e._private.rstyle,n=this.getLabelText(e),i=this.calculateLabelDimensions(e,n);r.labelWidth=i.width,t.labelWidth=i.width,r.labelHeight=i.height,t.labelHeight=i.height},t.prototype.getLabelText=function(e){var t=e._private.style,r=e._private.style.content.strValue,n=t["text-transform"].value;return"none"==n||("uppercase"==n?r=r.toUpperCase():"lowercase"==n&&(r=r.toLowerCase())),r},t.prototype.calculateLabelDimensions=function(e,t){var r=e._private.style,n=r["font-style"].strValue,i=r["font-size"].pxValue+"px",a=r["font-family"].strValue,o=r["font-variant"].strValue,s=r["font-weight"].strValue,l=e._private.rscratch,c=e._private.labelKey,u=l.labelDimCache||(l.labelDimCache={});if(u[c])return u[c];var d=this.labelCalcDiv;d||(d=this.labelCalcDiv=document.createElement("div"),document.body.appendChild(d));var p=d.style;return p.fontFamily=a,p.fontStyle=n,p.fontSize=i,p.fontVariant=o,p.fontWeight=s,p.position="absolute",p.left="-9999px",p.top="-9999px",p.zIndex="-1",p.visibility="hidden",p.padding="0",p.lineHeight="1",d.innerText=t,u[c]={width:d.clientWidth,height:d.clientHeight},u[c]},t.prototype.recalculateRenderedStyle=function(){this.recalculateEdgeProjections(),this.recalculateLabelProjections()},t.prototype.recalculateLabelProjections=function(){for(var e=this.getCachedNodes(),t=0;t<e.length;t++)this.recalculateNodeLabelProjection(e[t]);for(var r=this.getCachedEdges(),t=0;t<r.length;t++)this.recalculateEdgeLabelProjection(r[t])},t.prototype.recalculateEdgeProjections=function(){var e=this.getCachedEdges();this.findEdgeControlPoints(e)},t.prototype.findEdgeControlPoints=function(r){for(var n,i={},a=this.data.cy,o=[],s=[],l=0;l<r.length;l++){var c=r[l],u=c._private.style;if("none"!==u.display.value)if("haystack"!==u["curve-style"].value){var d=c._private.data.source,p=c._private.data.target;n=d>p?p+"-"+d:d+"-"+p,null==i[n]&&(i[n]=[]),i[n].push(c),o.push(n)}else s.push(c)}for(var h,g,v,f,y,m,b,x,w,_,E,S,P,k,C=0;C<o.length;C++){if(n=o[C],h=a.getElementById(i[n][0]._private.data.source),g=a.getElementById(i[n][0]._private.data.target),v=h._private.position,f=g._private.position,y=this.getNodeWidth(h),m=this.getNodeHeight(h),b=this.getNodeWidth(g),x=this.getNodeHeight(g),w=t.nodeShapes[this.getNodeShape(h)],_=t.nodeShapes[this.getNodeShape(g)],E=h._private.style["border-width"].pxValue,S=g._private.style["border-width"].pxValue,k=!1,i[n].length>1&&h!==g){var D=w.intersectLine(v.x,v.y,y,m,f.x,f.y,E/2),N=_.intersectLine(f.x,f.y,b,x,v.x,v.y,S/2),M={x1:D[0],x2:N[0],y1:D[1],y2:N[1]},T=N[1]-D[1],z=N[0]-D[0],I=Math.sqrt(z*z+T*T),B={x:z,y:T},R={x:B.x/I,y:B.y/I};P={x:-R.y,y:R.x},(_.checkPoint(D[0],D[1],S/2,b,x,f.x,f.y)||w.checkPoint(N[0],N[1],E/2,y,m,v.x,v.y))&&(P={},k=!0)}for(var c,X,l=0;l<i[n].length;l++){c=i[n][l],X=c._private.rscratch;var O=X.lastEdgeIndex,L=l,Y=X.lastNumEdges,V=i[n].length,A=X.lastSrcCtlPtX,F=v.x,q=X.lastSrcCtlPtY,j=v.y,H=X.lastSrcCtlPtW,W=h.outerWidth(),Z=X.lastSrcCtlPtH,$=h.outerHeight(),U=X.lastTgtCtlPtX,G=f.x,K=X.lastTgtCtlPtY,J=f.y,Q=X.lastTgtCtlPtW,et=g.outerWidth(),tt=X.lastTgtCtlPtH,rt=g.outerHeight();if(X.badBezier=k?!0:!1,A!==F||q!==j||H!==W||Z!==$||U!==G||K!==J||Q!==et||tt!==rt||O!==L||Y!==V){X.lastSrcCtlPtX=F,X.lastSrcCtlPtY=j,X.lastSrcCtlPtW=W,X.lastSrcCtlPtH=$,X.lastTgtCtlPtX=G,X.lastTgtCtlPtY=J,X.lastTgtCtlPtW=et,X.lastTgtCtlPtH=rt,X.lastEdgeIndex=L,X.lastNumEdges=V;var nt=c._private.style,it=nt["control-point-step-size"].pxValue,at=void 0!==nt["control-point-distance"]?nt["control-point-distance"].pxValue:void 0,ot=nt["control-point-weight"].value;if(h.id()==g.id())X.edgeType="self",X.cp2ax=v.x,X.cp2ay=v.y-(1+Math.pow(m,1.12)/100)*it*(l/3+1),X.cp2cx=h._private.position.x-(1+Math.pow(y,1.12)/100)*it*(l/3+1),X.cp2cy=v.y,X.selfEdgeMidX=(X.cp2ax+X.cp2cx)/2,X.selfEdgeMidY=(X.cp2ay+X.cp2cy)/2;else if(i[n].length%2==1&&l==Math.floor(i[n].length/2))X.edgeType="straight";else{var st=(.5-i[n].length/2+l)*it,lt=void 0!==at?e.math.signum(st)*at:void 0,ct=void 0!==lt?lt:st,ut={x:M.x1*(1-ot)+M.x2*ot,y:M.y1*(1-ot)+M.y2*ot};X.edgeType="bezier",X.cp2x=ut.x+P.x*ct,X.cp2y=ut.y+P.y*ct}this.findEndpoints(c);var dt=!e.is.number(X.startX)||!e.is.number(X.startY),pt=!e.is.number(X.arrowStartX)||!e.is.number(X.arrowStartY),ht=!e.is.number(X.endX)||!e.is.number(X.endY),gt=!e.is.number(X.arrowEndX)||!e.is.number(X.arrowEndY),vt=3,ft=this.getArrowWidth(c._private.style.width.pxValue)*t.arrowShapeHeight,yt=vt*ft,mt=e.math.distance({x:X.cp2x,y:X.cp2y},{x:X.startX,y:X.startY}),bt=yt>mt,xt=e.math.distance({x:X.cp2x,y:X.cp2y},{x:X.endX,y:X.endY}),wt=yt>xt;if("bezier"===X.edgeType){var _t=!1;if(dt||pt||bt){_t=!0;var Et={x:X.cp2x-v.x,y:X.cp2y-v.y},St=Math.sqrt(Et.x*Et.x+Et.y*Et.y),Pt={x:Et.x/St,y:Et.y/St},kt=Math.max(y,m),Ct={x:X.cp2x+2*Pt.x*kt,y:X.cp2y+2*Pt.y*kt},Dt=w.intersectLine(v.x,v.y,y,m,Ct.x,Ct.y,E/2);bt?(X.cp2x=X.cp2x+Pt.x*(yt-mt),X.cp2y=X.cp2y+Pt.y*(yt-mt)):(X.cp2x=Dt[0]+Pt.x*yt,X.cp2y=Dt[1]+Pt.y*yt)}if(ht||gt||wt){_t=!0;var Et={x:X.cp2x-f.x,y:X.cp2y-f.y},St=Math.sqrt(Et.x*Et.x+Et.y*Et.y),Pt={x:Et.x/St,y:Et.y/St},kt=Math.max(y,m),Ct={x:X.cp2x+2*Pt.x*kt,y:X.cp2y+2*Pt.y*kt},Nt=_.intersectLine(f.x,f.y,b,x,Ct.x,Ct.y,S/2);wt?(X.cp2x=X.cp2x+Pt.x*(yt-xt),X.cp2y=X.cp2y+Pt.y*(yt-xt)):(X.cp2x=Nt[0]+Pt.x*yt,X.cp2y=Nt[1]+Pt.y*yt)}_t&&this.findEndpoints(c)}this.projectBezier(c)}}}for(var l=0;l<s.length;l++){var c=s[l],Mt=c._private.rscratch,Tt=.8;if(!Mt.haystack){var zt=.5*Tt,It=2*Math.random()*Math.PI;Mt.source={x:zt*Math.cos(It),y:zt*Math.sin(It)};var Bt=.5*Tt,It=2*Math.random()*Math.PI;Mt.target={x:Bt*Math.cos(It),y:Bt*Math.sin(It)},Mt.edgeType="haystack",Mt.haystack=!0}}return i},t.prototype.findEndpoints=function(r){var n,i=r.source()[0],a=r.target()[0],o=r._private.style["target-arrow-shape"].value,s=r._private.style["source-arrow-shape"].value,l=a._private.style["border-width"].pxValue,c=i._private.style["border-width"].pxValue,u=r._private.rscratch;if("self"==r._private.rscratch.edgeType){var d=[u.cp2cx,u.cp2cy];n=t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x,a._private.position.y,this.getNodeWidth(a),this.getNodeHeight(a),d[0],d[1],l/2);var p=e.math.shortenIntersection(n,d,t.arrowShapes[o].spacing(r)),h=e.math.shortenIntersection(n,d,t.arrowShapes[o].gap(r));u.endX=h[0],u.endY=h[1],u.arrowEndX=p[0],u.arrowEndY=p[1];var d=[u.cp2ax,u.cp2ay];n=t.nodeShapes[this.getNodeShape(i)].intersectLine(i._private.position.x,i._private.position.y,this.getNodeWidth(i),this.getNodeHeight(i),d[0],d[1],c/2);var g=e.math.shortenIntersection(n,d,t.arrowShapes[s].spacing(r)),v=e.math.shortenIntersection(n,d,t.arrowShapes[s].gap(r));u.startX=v[0],u.startY=v[1],u.arrowStartX=g[0],u.arrowStartY=g[1]}else if("straight"==u.edgeType){n=t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x,a._private.position.y,this.getNodeWidth(a),this.getNodeHeight(a),i.position().x,i.position().y,l/2),u.noArrowPlacement=0===n.length?!0:!1;var p=e.math.shortenIntersection(n,[i.position().x,i.position().y],t.arrowShapes[o].spacing(r)),h=e.math.shortenIntersection(n,[i.position().x,i.position().y],t.arrowShapes[o].gap(r));u.endX=h[0],u.endY=h[1],u.arrowEndX=p[0],u.arrowEndY=p[1],n=t.nodeShapes[this.getNodeShape(i)].intersectLine(i._private.position.x,i._private.position.y,this.getNodeWidth(i),this.getNodeHeight(i),a.position().x,a.position().y,c/2),u.noArrowPlacement=0===n.length?!0:!1;var g=e.math.shortenIntersection(n,[a.position().x,a.position().y],t.arrowShapes[s].spacing(r)),v=e.math.shortenIntersection(n,[a.position().x,a.position().y],t.arrowShapes[s].gap(r));u.startX=v[0],u.startY=v[1],u.arrowStartX=g[0],u.arrowStartY=g[1]}else if("bezier"==u.edgeType){var d=[u.cp2x,u.cp2y];n=t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x,a._private.position.y,this.getNodeWidth(a),this.getNodeHeight(a),d[0],d[1],l/2);var p=e.math.shortenIntersection(n,d,t.arrowShapes[o].spacing(r)),h=e.math.shortenIntersection(n,d,t.arrowShapes[o].gap(r));u.endX=h[0],u.endY=h[1],u.arrowEndX=p[0],u.arrowEndY=p[1],n=t.nodeShapes[this.getNodeShape(i)].intersectLine(i._private.position.x,i._private.position.y,this.getNodeWidth(i),this.getNodeHeight(i),d[0],d[1],c/2);var g=e.math.shortenIntersection(n,d,t.arrowShapes[s].spacing(r)),v=e.math.shortenIntersection(n,d,t.arrowShapes[s].gap(r));u.startX=v[0],u.startY=v[1],u.arrowStartX=g[0],u.arrowStartY=g[1]}else if(u.isArcEdge)return},t.prototype.findEdges=function(e){for(var t=this.getCachedEdges(),r={},n=[],i=0;i<e.length;i++)r[e[i]._private.data.id]=e[i];for(var i=0;i<t.length;i++)(r[t[i]._private.data.source]||r[t[i]._private.data.target])&&n.push(t[i]);return n},t.prototype.getArrowWidth=function(e){return Math.max(Math.pow(13.37*e,.9),29)},t.prototype.getArrowHeight=function(e){return Math.max(Math.pow(13.37*e,.9),29)}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.drawEdge=function(e,t,r){if(t.visible()){var n=t._private.rscratch;if(!n.badBezier){var i=t._private.style;if(!(i.width.pxValue<=0)){var a=i["overlay-padding"].pxValue,o=i["overlay-opacity"].value,s=i["overlay-color"].value;if(r){if(0===o)return;this.strokeStyle(e,s[0],s[1],s[2],o),e.lineCap="round","self"==t._private.rscratch.edgeType&&(e.lineCap="butt")}else{var l=i["line-color"].value;this.strokeStyle(e,l[0],l[1],l[2],i.opacity.value),e.lineCap="butt"}var c,u,d,p;d=c=t._private.source,p=u=t._private.target;var h=p._private.position,g=p.width(),v=p.height(),f=d._private.position,y=d.width(),m=d.height(),b=i.width.pxValue+(r?2*a:0),x=r?"solid":i["line-style"].value;if(e.lineWidth=b,"haystack"!==n.edgeType&&this.findEndpoints(t),"haystack"===n.edgeType)this.drawStyledEdge(t,e,[n.source.x*y+f.x,n.source.y*m+f.y,n.target.x*g+h.x,n.target.y*v+h.y],x,b);else if("self"===n.edgeType){var w=t._private.rscratch;this.drawStyledEdge(t,e,[w.startX,w.startY,w.cp2ax,w.cp2ay,w.selfEdgeMidX,w.selfEdgeMidY],x,b),this.drawStyledEdge(t,e,[w.selfEdgeMidX,w.selfEdgeMidY,w.cp2cx,w.cp2cy,w.endX,w.endY],x,b)}else if("straight"===n.edgeType){var _=u._private.position.x-c._private.position.x,E=u._private.position.y-c._private.position.y,S=n.endX-n.startX,P=n.endY-n.startY;if(0>_*S+E*P)n.straightEdgeTooShort=!0;else{var w=n;this.drawStyledEdge(t,e,[w.startX,w.startY,w.endX,w.endY],x,b),n.straightEdgeTooShort=!1}}else{var w=n;this.drawStyledEdge(t,e,[w.startX,w.startY,w.cp2x,w.cp2y,w.endX,w.endY],x,b)}"haystack"!==n.edgeType&&n.noArrowPlacement!==!0&&void 0!==n.startX&&this.drawArrowheads(e,t,r)}}}};var r=function(e,t){var r=Math.sqrt(Math.pow(e[4]-e[0],2)+Math.pow(e[5]-e[1],2));r+=Math.sqrt(Math.pow((e[4]+e[0])/2-e[2],2)+Math.pow((e[5]+e[1])/2-e[3],2));var n,i=Math.ceil(r/t);if(!(i>0))return null;n=new Array(2*i);for(var a=0;i>a;a++){var o=a/i;n[2*a]=e[0]*(1-o)*(1-o)+2*e[2]*(1-o)*o+e[4]*o*o,n[2*a+1]=e[1]*(1-o)*(1-o)+2*e[3]*(1-o)*o+e[5]*o*o}return n},n=function(e,t){var r,n=Math.sqrt(Math.pow(e[2]-e[0],2)+Math.pow(e[3]-e[1],2)),i=Math.ceil(n/t);if(!(i>0))return null;r=new Array(2*i);for(var a=[e[2]-e[0],e[3]-e[1]],o=0;i>o;o++){var s=o/i;r[2*o]=a[0]*s+e[0],r[2*o+1]=a[1]*s+e[1]}return r},i=0,a=0,o=0;t.prototype.drawStyledEdge=function(e,s,l,c,u){var d,p=+new Date,h=this.data.cy,g=h.zoom(),v=e._private.rscratch,f=s,y=!1,m=t.usePaths();if("solid"===c){if(m){for(var b=l,x=v.pathCacheKey&&b.length===v.pathCacheKey.length,w=x,_=0;w&&_<b.length;_++)v.pathCacheKey[_]!==b[_]&&(w=!1);w?(d=s=v.pathCache,y=!0):(d=s=new Path2D,v.pathCacheKey=b,v.pathCache=d)}y||(s.beginPath&&s.beginPath(),s.moveTo(l[0],l[1]),6==l.length?s.quadraticCurveTo(l[2],l[3],l[4],l[5]):s.lineTo(l[2],l[3])),s=f,m?s.stroke(d):s.stroke()}else if("dotted"===c){var E;if(E=6==l.length?r(l,16,!0):n(l,16,!0),!E)return;var S=Math.max(1.6*u,3.4)*g,P=2*S,k=2*S;P=Math.max(P,1),k=Math.max(k,1);var C=this.createBuffer(P,k),D=C[1];D.setTransform(1,0,0,1,0,0),D.clearRect(0,0,P,k),D.fillStyle=s.strokeStyle,D.beginPath(),D.arc(P/2,k/2,.5*S,0,2*Math.PI,!1),D.fill(),s.beginPath();for(var _=0;_<E.length/2;_++)s.drawImage(C[0],E[2*_]-P/2/g,E[2*_+1]-k/2/g,P/g,k/g);s.closePath()}else if("dashed"===c){var E;if(E=6==l.length?r(l,14,!0):n(l,14,!0),!E)return;var P=2*u*g,k=7.8*g;P=Math.max(P,1),k=Math.max(k,1);var C=this.createBuffer(P,k),D=C[1];D.setTransform(1,0,0,1,0,0),D.clearRect(0,0,P,k),s.strokeStyle&&(D.strokeStyle=s.strokeStyle),D.lineWidth=u*h.zoom(),D.beginPath(),D.moveTo(P/2,.2*k),D.lineTo(P/2,.8*k),D.stroke();var N,M,T=!1;4==l.length?(N=[l[2]-l[0],l[3]-E[1]],M=Math.acos((0*N[0]+-1*N[1])/Math.sqrt(N[0]*N[0]+N[1]*N[1])),N[0]<0&&(M=-M+2*Math.PI)):6==l.length&&(T=!0);for(var _=0;_<E.length/2;_++){var z=_/Math.max(E.length/2-1,1);T&&(N=[2*(1-z)*(l[2]-l[0])+2*z*(l[4]-l[2]),2*(1-z)*(l[3]-l[1])+2*z*(l[5]-l[3])],M=Math.acos((0*N[0]+-1*N[1])/Math.sqrt(N[0]*N[0]+N[1]*N[1])),N[0]<0&&(M=-M+2*Math.PI)),s.translate(E[2*_],E[2*_+1]),s.rotate(M),s.translate(-P/2/g,-k/2/g),s.drawImage(C[0],0,0,P/g,k/g),s.translate(P/2/g,k/2/g),s.rotate(-M),s.translate(-E[2*_],-E[2*_+1]),s.closePath()}}else this.drawStyledEdge(e,s,l,"solid",u);var I=+new Date;a+=I-p,o=a/++i,window.avg=o},t.prototype.drawArrowheads=function(e,t,r){if(!r){var n,i,a=t._private.rscratch.arrowStartX,o=t._private.rscratch.arrowStartY,s=t._private.style,l=t.source().position();if(n=a-l.x,i=o-l.y,!(isNaN(a)||isNaN(o)||isNaN(n)||isNaN(i))){var c=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",this.fillStyle(e,255,255,255,1),this.drawArrowShape(e,"filled",s["source-arrow-shape"].value,a,o,n,i),e.globalCompositeOperation=c;var u=s["source-arrow-color"].value;this.fillStyle(e,u[0],u[1],u[2],s.opacity.value),this.drawArrowShape(e,s["source-arrow-fill"].value,s["source-arrow-shape"].value,a,o,n,i)}var d=t._private.rscratch.arrowEndX,p=t._private.rscratch.arrowEndY,h=t.target().position();if(n=d-h.x,i=p-h.y,!(isNaN(d)||isNaN(p)||isNaN(n)||isNaN(i))){var c=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",this.fillStyle(e,255,255,255,1),this.drawArrowShape(e,"filled",s["target-arrow-shape"].value,d,p,n,i),e.globalCompositeOperation=c;var u=s["target-arrow-color"].value;this.fillStyle(e,u[0],u[1],u[2],s.opacity.value),this.drawArrowShape(e,s["target-arrow-fill"].value,s["target-arrow-shape"].value,d,p,n,i)}}},t.prototype.drawArrowShape=function(e,r,n,i,a,o,s){var l=Math.asin(s/Math.sqrt(o*o+s*s));0>o?l+=Math.PI/2:l=-(Math.PI/2+l),e.translate(i,a),e.moveTo(0,0),e.rotate(-l);var c=this.getArrowWidth(e.lineWidth);e.scale(c,c),e.beginPath(),t.arrowShapes[n].draw(e),e.closePath(),"hollow"===r?(e.lineWidth=1/c,e.stroke()):e.fill(),e.scale(1/c,1/c),e.rotate(l),e.translate(-i,-a)}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.getCachedImage=function(e,t){var r=this,n=r.imageCache=r.imageCache||{};if(n[e]&&n[e].image)return n[e].image;var i=n[e]=n[e]||{},a=i.image=new Image;return a.addEventListener("load",t),a.src=e,a},t.prototype.drawInscribedImage=function(e,r,n){var i=this,a=n._private.position.x,o=n._private.position.y,s=n._private.style,l=s["background-fit"].value,c=s["background-position-x"],u=s["background-position-y"],d=s["background-repeat"].value,p=n.width(),h=n.height(),g=n._private.rscratch,v=s["background-clip"].value,f="node"===v,y=r.width,m=r.height;if("contain"===l){var b=Math.min(p/y,h/m);y*=b,m*=b}else if("cover"===l){var b=Math.max(p/y,h/m);y*=b,m*=b}var x=a-p/2;x+="%"===c.units?(p-y)*c.value/100:c.pxValue;var w=o-h/2;if(w+="%"===u.units?(h-m)*u.value/100:u.pxValue,g.pathCache&&(x-=a,w-=o,a=0,o=0),"no-repeat"===d)f&&(e.save(),g.pathCache?e.clip(g.pathCache):(t.nodeShapes[i.getNodeShape(n)].drawPath(e,a,o,p,h),e.clip())),e.drawImage(r,0,0,r.width,r.height,x,w,y,m),f&&e.restore();else{var _=e.createPattern(r,d);e.fillStyle=_,t.nodeShapes[i.getNodeShape(n)].drawPath(e,a,o,p,h),e.translate(x,w),e.fill(),e.translate(-x,-w)}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.drawEdgeText=function(e,t){var r=t._private.style.content.strValue;if(t.visible()&&r&&!r.match(/^\s+$/)&&(!this.hideEdgesOnViewport||!(this.dragData.didDrag||this.pinching||this.hoverData.dragging||this.data.wheel||this.swipePanning))){var n=t._private.style["font-size"].pxValue*t.cy().zoom(),i=t._private.style["min-zoomed-font-size"].pxValue;if(!(i>n)){e.textAlign="center",e.textBaseline="middle",this.recalculateEdgeLabelProjection(t);var a=t._private.rscratch;this.drawText(e,t,a.labelX,a.labelY)}}},t.prototype.drawNodeText=function(e,t){var r=t._private.style.content.strValue;if(t.visible()&&r&&!r.match(/^\s+$/)){var n=t._private.style["font-size"].pxValue*t.cy().zoom(),i=t._private.style["min-zoomed-font-size"].pxValue;if(!(i>n)){this.recalculateNodeLabelProjection(t);var a=t._private.style["text-halign"].strValue,o=t._private.style["text-valign"].strValue,s=t._private.rscratch;switch(a){case"left":e.textAlign="right";break;case"right":e.textAlign="left";break;default:e.textAlign="center"}switch(o){case"top":e.textBaseline="bottom";break;case"bottom":e.textBaseline="top";break;default:e.textBaseline="middle"}this.drawText(e,t,s.labelX,s.labelY)}}},t.prototype.getFontCache=function(e){var t;this.fontCaches=this.fontCaches||[];for(var r=0;r<this.fontCaches.length;r++)if(t=this.fontCaches[r],t.context===e)return t;return t={context:e},this.fontCaches.push(t),t},t.prototype.setupTextStyle=function(e,t){var r=t.effectiveOpacity(),n=t._private.style,i=n["font-style"].strValue,a=n["font-size"].pxValue+"px",o=n["font-family"].strValue,s=n["font-weight"].strValue,l=n["text-opacity"].value*n.opacity.value*r,c=n.color.value,u=n["text-outline-color"].value,d=t._private.fontKey,p=this.getFontCache(e);p.key!==d&&(e.font=i+" "+s+" "+a+" "+o,p.key=d);var h=String(n.content.value),g=n["text-transform"].value;return"none"==g||("uppercase"==g?h=h.toUpperCase():"lowercase"==g&&(h=h.toLowerCase())),e.lineJoin="round",this.fillStyle(e,c[0],c[1],c[2],l),this.strokeStyle(e,u[0],u[1],u[2],l),h},t.prototype.drawText=function(e,t,r,n){var i=t._private.style,a=t.effectiveOpacity();if(0!==a){var o=this.setupTextStyle(e,t);if(null!=o&&!isNaN(r)&&!isNaN(n)){var s=2*i["text-outline-width"].value;s>0&&(e.lineWidth=s,e.strokeText(o,r,n)),e.fillText(o,r,n)}}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.drawNode=function(e,r,n){var i,a,o=this,s=r._private.style,l=r._private.rscratch;if(r.visible()){var c,u=t.usePaths(),d=e,p=!1,h=s["overlay-padding"].pxValue,g=s["overlay-opacity"].value,v=s["overlay-color"].value;if(!n||0!==g){var f=r.effectiveOpacity();if(0!==f)if(i=this.getNodeWidth(r),a=this.getNodeHeight(r),e.lineWidth=s["border-width"].pxValue,void 0!==n&&n)g>0&&(this.fillStyle(e,v[0],v[1],v[2],g),t.nodeShapes.roundrectangle.drawPath(e,r._private.position.x,r._private.position.y,i+2*h,a+2*h),e.fill());else{var y=s["background-color"].value,m=s["border-color"].value;this.fillStyle(e,y[0],y[1],y[2],s["background-opacity"].value*s.opacity.value*f),this.strokeStyle(e,m[0],m[1],m[2],s["border-opacity"].value*s.opacity.value*f),e.lineJoin="miter";var b=s["background-image"].value[2]||s["background-image"].value[1],x=s.shape.strValue,w=r._private.position;if(u){var _=x+"$"+i+"$"+a;e.translate(w.x,w.y),l.pathCacheKey===_?(c=e=l.pathCache,p=!0):(c=e=new Path2D,l.pathCacheKey=_,l.pathCache=c)}if(!p){var E=w;u&&(E={x:0,y:0}),t.nodeShapes[this.getNodeShape(r)].drawPath(e,E.x,E.y,i,a)}if(e=d,u?e.fill(c):e.fill(),void 0!==b){var S=this.getCachedImage(b,function(){o.data.canvasNeedsRedraw[t.NODE]=!0,o.data.canvasNeedsRedraw[t.DRAG]=!0,o.redraw()});S.complete&&this.drawInscribedImage(e,S,r)}var P=s["background-blacken"].value;this.hasPie(r)&&(this.drawPie(e,r),0!==P&&(u||t.nodeShapes[this.getNodeShape(r)].drawPath(e,w.x,w.y,i,a))),P>0?(this.fillStyle(e,0,0,0,P),u?e.fill(c):e.fill()):0>P&&(this.fillStyle(e,255,255,255,-P),u?e.fill(c):e.fill()),s["border-width"].pxValue>0&&(u?e.stroke(c):e.stroke()),u&&e.translate(-w.x,-w.y)}}}},t.prototype.hasPie=function(e){return e=e[0],e._private.hasPie},t.prototype.drawPie=function(r,n){n=n[0];var i=n._private.style["pie-size"],a=this.getNodeWidth(n),o=this.getNodeHeight(n),s=n._private.position.x,l=n._private.position.y,c=Math.min(a,o)/2,u=0,d=t.usePaths();"%"===i.units?c=c*i.value/100:void 0!==i.pxValue&&(c=i.pxValue/2),d&&(s=0,l=0);for(var p=1;p<=e.style.pieBackgroundN;p++){var h=n._private.style["pie-"+p+"-background-size"].value,g=n._private.style["pie-"+p+"-background-color"].value,v=h/100,f=1.5*Math.PI+2*Math.PI*u,y=2*Math.PI*v,m=f+y;0===h||u>=1||u+v>1||(r.beginPath(),r.moveTo(s,l),r.arc(s,l,c,f,m),r.closePath(),this.fillStyle(r,g[0],g[1],g[2],1),r.fill(),u+=v)}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r="undefined"!=typeof InstallTrigger;t.prototype.getPixelRatio=function(){var e=this.data.contexts[0],t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return r?1:(window.devicePixelRatio||1)/t},t.prototype.paintCache=function(e){for(var t,r=this.paintCaches=this.paintCaches||[],n=!0,i=0;i<r.length;i++)if(t=r[i],t.context===e){n=!1;break}return n&&(t={context:e},r.push(t)),t},t.prototype.fillStyle=function(e,t,r,n,i){e.fillStyle="rgba("+t+","+r+","+n+","+i+")"},t.prototype.strokeStyle=function(e,t,r,n,i){e.strokeStyle="rgba("+t+","+r+","+n+","+i+")"},t.prototype.matchCanvasSize=function(e){var r,n=this.data,i=e.clientWidth,a=e.clientHeight,o=this.getPixelRatio(),s=i*o,l=a*o;if(s!==this.canvasWidth||l!==this.canvasHeight){this.fontCaches=null;var c=n.canvasContainer;c.style.width=i+"px",c.style.height=a+"px";for(var u=0;u<t.CANVAS_LAYERS;u++)r=n.canvases[u],(r.width!==s||r.height!==l)&&(r.width=s,r.height=l,r.style.width=i+"px",r.style.height=a+"px");for(var u=0;u<t.BUFFER_COUNT;u++)r=n.bufferCanvases[u],(r.width!==s||r.height!==l)&&(r.width=s,r.height=l,r.style.width=i+"px",r.style.height=a+"px");this.textureMult=1,1>=o&&(r=n.bufferCanvases[t.TEXTURE_BUFFER],this.textureMult=2,r.width=s*this.textureMult,r.height=l*this.textureMult),this.canvasWidth=s,this.canvasHeight=l}},t.prototype.renderTo=function(e,t,r,n){this.redraw({forcedContext:e,forcedZoom:t,forcedPan:r,drawAllLayers:!0,forcedPxRatio:n})},t.prototype.timeToRender=function(){return this.redrawTotalTime/this.redrawCount},t.minRedrawLimit=1e3/60,t.maxRedrawLimit=1e3,t.prototype.redraw=function(r){function n(){function e(e,t){e.setTransform(1,0,0,1,0,0),i||void 0!==t&&!t||e.clearRect(0,0,c.canvasWidth,c.canvasHeight),a||(e.translate(m.x,m.y),e.scale(f,f)),l&&e.translate(l.x,l.y),s&&e.scale(s,s)}function r(e,t){for(var r=e.eles,n=0;n<r.length;n++){var i=r[n];i.isNode()?(c.drawNode(t,i),T||c.drawNodeText(t,i),c.drawNode(t,i,!0)):M||(c.drawEdge(t,i),T||c.drawEdgeText(t,i),c.drawEdge(t,i,!0))}}x=+new Date;var n=c.getCachedEdges(),g=d.style()._private.coreStyle,v=d.zoom(),f=void 0!==s?s:v,y=d.pan(),m={x:y.x,y:y.y};l&&(m=l),f*=u,m.x*=u,m.y*=u;var b={drag:{nodes:[],edges:[],eles:[]},nondrag:{nodes:[],edges:[],eles:[]}},w=c.textureOnViewport&&!i&&(c.pinching||c.hoverData.dragging||c.swipePanning||c.data.wheelZooming);if(w){var _;if(!c.textureCache){c.textureCache={},_=c.textureCache.bb=d.boundingBox(),c.textureCache.texture=c.data.bufferCanvases[t.TEXTURE_BUFFER];var E=c.data.bufferContexts[t.TEXTURE_BUFFER];E.setTransform(1,0,0,1,0,0),E.clearRect(0,0,c.canvasWidth*c.textureMult,c.canvasHeight*c.textureMult),c.redraw({forcedContext:E,drawOnlyNodeLayer:!0,forcedPxRatio:u*c.textureMult});var S=c.textureCache.viewport={zoom:d.zoom(),pan:d.pan(),width:c.canvasWidth,height:c.canvasHeight};S.mpan={x:(0-S.pan.x)/S.zoom,y:(0-S.pan.y)/S.zoom}}h[t.DRAG]=!1,h[t.NODE]=!1;var P=p.contexts[t.NODE],k=c.textureCache.texture,k=c.textureCache.texture,S=c.textureCache.viewport;_=c.textureCache.bb,P.setTransform(1,0,0,1,0,0),P.clearRect(0,0,S.width,S.height);var C=g["outside-texture-bg-color"].value,D=g["outside-texture-bg-opacity"].value;c.fillStyle(P,C[0],C[1],C[2],D),P.fillRect(0,0,S.width,S.height);var v=d.zoom();e(P,!1),P.clearRect(S.mpan.x,S.mpan.y,S.width/S.zoom/u,S.height/S.zoom/u),P.drawImage(k,S.mpan.x,S.mpan.y,S.width/S.zoom/u,S.height/S.zoom/u)}else c.textureOnViewport&&!i&&(c.textureCache=null);var N=c.pinching||c.hoverData.dragging||c.swipePanning||c.data.wheelZooming||c.hoverData.draggingEles,M=c.hideEdgesOnViewport&&N,T=c.hideLabelsOnViewport&&N;if(h[t.DRAG]||h[t.NODE]||a||o){M||c.findEdgeControlPoints(n);for(var z=c.getCachedZSortedEles(),I=0;I<z.length;I++){var B,R=z[I];B=R._private.rscratch.inDragLayer?b.drag:b.nondrag,B.eles.push(R)}}if(h[t.NODE]||a||o){var P=i||p.contexts[t.NODE];e(P),r(b.nondrag,P),a||(h[t.NODE]=!1)}if(!o&&(h[t.DRAG]||a)){var P=i||p.contexts[t.DRAG];e(P),r(b.drag,P),a||(h[t.DRAG]=!1)}if(!o&&h[t.SELECT_BOX]&&!a){var P=i||p.contexts[t.SELECT_BOX];if(e(P),1==p.select[4]){var v=p.cy.zoom(),X=g["selection-box-border-width"].value/v;P.lineWidth=X,P.fillStyle="rgba("+g["selection-box-color"].value[0]+","+g["selection-box-color"].value[1]+","+g["selection-box-color"].value[2]+","+g["selection-box-opacity"].value+")",P.fillRect(p.select[0],p.select[1],p.select[2]-p.select[0],p.select[3]-p.select[1]),X>0&&(P.strokeStyle="rgba("+g["selection-box-border-color"].value[0]+","+g["selection-box-border-color"].value[1]+","+g["selection-box-border-color"].value[2]+","+g["selection-box-opacity"].value+")",P.strokeRect(p.select[0],p.select[1],p.select[2]-p.select[0],p.select[3]-p.select[1]))}if(p.bgActivePosistion){var v=p.cy.zoom(),O=p.bgActivePosistion;P.fillStyle="rgba("+g["active-bg-color"].value[0]+","+g["active-bg-color"].value[1]+","+g["active-bg-color"].value[2]+","+g["active-bg-opacity"].value+")",P.beginPath(),P.arc(O.x,O.y,g["active-bg-size"].pxValue/v,0,2*Math.PI),P.fill()}a||(h[t.SELECT_BOX]=!1)}var L=+new Date;void 0===c.averageRedrawTime&&(c.averageRedrawTime=L-x),void 0===c.redrawCount&&(c.redrawCount=0),c.redrawCount++,void 0===c.redrawTotalTime&&(c.redrawTotalTime=0),c.redrawTotalTime+=L-x,c.averageRedrawTime=c.averageRedrawTime/2+(L-x)/2,c.currentlyDrawing=!1}r=r||{};var i=r.forcedContext,a=r.drawAllLayers,o=r.drawOnlyNodeLayer,s=r.forcedZoom,l=r.forcedPan,c=this,u=void 0===r.forcedPxRatio?this.getPixelRatio():r.forcedPxRatio,d=c.data.cy,p=c.data,h=p.canvasNeedsRedraw;this.redrawTimeout&&clearTimeout(this.redrawTimeout),this.redrawTimeout=null,void 0===this.averageRedrawTime&&(this.averageRedrawTime=0);var g=t.minRedrawLimit,v=t.maxRedrawLimit,f=this.averageRedrawTime;f=g>f?g:f,f=v>f?f:v,void 0===this.lastDrawTime&&(this.lastDrawTime=0);var y=+new Date,m=y-this.lastDrawTime,b=m>=f;if(!i){if(!b||this.currentlyDrawing)return void(this.redrawTimeout=setTimeout(function(){c.redraw()},f));this.lastDrawTime=y,this.currentlyDrawing=!0}var x;i?n():e.util.requestAnimationFrame(n),i||c.initrender||(c.initrender=!0,d.trigger("initrender"))}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.drawPolygonPath=function(e,t,r,n,i,a){var o=n/2,s=i/2;e.beginPath&&e.beginPath(),e.moveTo(t+o*a[0],r+s*a[1]);for(var l=1;l<a.length/2;l++)e.lineTo(t+o*a[2*l],r+s*a[2*l+1]);e.closePath()},t.prototype.drawPolygon=function(e,t,r,n,i,a){this.drawPolygonPath(e,t,r,n,i,a),e.fill()},t.prototype.drawRoundRectanglePath=function(t,r,n,i,a){var o=i/2,s=a/2,l=e.math.getRoundRectangleRadius(i,a);t.beginPath&&t.beginPath(),t.moveTo(r,n-s),t.arcTo(r+o,n-s,r+o,n,l),t.arcTo(r+o,n+s,r,n+s,l),t.arcTo(r-o,n+s,r-o,n,l),t.arcTo(r-o,n-s,r,n-s,l),t.lineTo(r,n-s),t.closePath()},t.prototype.drawRoundRectangle=function(e,t,r,n,i,a){this.drawRoundRectanglePath(e,t,r,n,i,a),e.fill()}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.createBuffer=function(e,t){var r=document.createElement("canvas");return r.width=e,r.height=t,[r,r.getContext("2d")]},t.prototype.bufferCanvasImage=function(e){var t=this.data,r=t.cy,n=r.boundingBox(),i=e.full?Math.ceil(n.w):this.data.container.clientWidth,a=e.full?Math.ceil(n.h):this.data.container.clientHeight,o=1;e.full&&void 0!==e.scale&&(i*=e.scale,a*=e.scale,o=e.scale);var s=document.createElement("canvas");s.width=i,s.height=a,s.style.width=i+"px",s.style.height=a+"px";var l=s.getContext("2d");return i>0&&a>0&&(l.clearRect(0,0,i,a),e.bg&&(l.fillStyle=e.bg,l.rect(0,0,i,a),l.fill()),l.globalCompositeOperation="source-over",this.redraw(e.full?{forcedContext:l,drawAllLayers:!0,forcedZoom:o,forcedPan:{x:-n.x1,y:-n.y1},forcedPxRatio:1}:{forcedContext:l,drawAllLayers:!0,forcedZoom:r.zoom(),forcedPan:r.pan(),forcedPxRatio:1})),s},t.prototype.png=function(e){return this.bufferCanvasImage(e).toDataURL("image/png")}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas");t.prototype.registerBinding=function(e,t,r,n){this.bindings.push({target:e,event:t,handler:r,useCapture:n}),e.addEventListener(t,r,n)},t.prototype.nodeIsDraggable=function(e){return 0!==e._private.style.opacity.value&&"visible"==e._private.style.visibility.value&&"element"==e._private.style.display.value&&!e.locked()&&e.grabbable()?!0:!1},t.prototype.load=function(){var r=this,n=function(e,t,r){if(!t)for(var n=e.parents(),i=0;i<n.size();i++)if(n[i]._private.selected)return;for(var a=e.descendants(),i=0;i<a.size();i++)if(t||!a[i]._private.selected){a[i]._private.rscratch.inDragLayer=!0,r.push(a[i]);for(var o=0;o<a[i]._private.edges.length;o++)a[i]._private.edges[o]._private.rscratch.inDragLayer=!0}},i=function(e,t){e._private.grabbed=!0,e._private.rscratch.inDragLayer=!0,t.push(e);for(var r=0;r<e._private.edges.length;r++)e._private.edges[r]._private.rscratch.inDragLayer=!0},a=function(e,t){for(var r=e;r.parent().nonempty();)r=r.parent()[0];if(r!=e||!t)for(var n=r.descendants().add(r),i=0;i<n.size();i++){n[i]._private.rscratch.inDragLayer=t;for(var a=0;a<n[i]._private.edges.length;a++)n[i]._private.edges[a]._private.rscratch.inDragLayer=t}};r.registerBinding(r.data.container,"DOMNodeRemoved",function(){r.destroy()}),r.registerBinding(window,"resize",e.util.debounce(function(){r.invalidateContainerClientCoordsCache(),r.matchCanvasSize(r.data.container),r.data.canvasNeedsRedraw[t.NODE]=!0,r.redraw()},100));for(var o=function(e){r.registerBinding(e,"scroll",function(){r.invalidateContainerClientCoordsCache()})},s=r.data.cy.container();o(s),s.parentNode;)s=s.parentNode;r.registerBinding(r.data.container,"contextmenu",function(e){e.preventDefault()});var l=function(){return 0!==r.data.select[4]};r.registerBinding(r.data.container,"mousedown",function(o){o.preventDefault(),r.hoverData.capture=!0,r.hoverData.which=o.which;var s=r.data.cy,l=r.projectIntoViewport(o.clientX,o.clientY),c=r.data.select,u=r.findNearestElement(l[0],l[1],!0),d=r.dragData.possibleDragElements,p=new e.Event("grab");if(3==o.which){r.hoverData.cxtStarted=!0;var h=new e.Event(o,{type:"cxttapstart",cyPosition:{x:l[0],y:l[1]}});u?(u.activate(),u.trigger(h),r.hoverData.down=u):s.trigger(h),r.hoverData.downTime=(new Date).getTime(),r.hoverData.cxtDragged=!1}else if(1==o.which){if(u&&u.activate(),null!=u){if(r.nodeIsDraggable(u)){if(u.isNode()&&!u.selected())d=r.dragData.possibleDragElements=[],i(u,d),u.trigger(p),("auto"==u._private.style.width.value||"auto"==u._private.style.height.value)&&n(u,!0,d),a(u,!0);
else if(u.isNode()&&u.selected()){d=r.dragData.possibleDragElements=[];for(var g=!1,v=s.$("node:selected"),f=0;f<v.length;f++)r.nodeIsDraggable(v[f])&&(i(v[f],d),g||(u.trigger(p),g=!0),("auto"==v[f]._private.style.width.value||"auto"==v[f]._private.style.height.value)&&n(v[f],!1,d),a(v[f],!0))}r.data.canvasNeedsRedraw[t.NODE]=!0,r.data.canvasNeedsRedraw[t.DRAG]=!0}u.trigger(new e.Event(o,{type:"mousedown",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(o,{type:"tapstart",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(o,{type:"vmousedown",cyPosition:{x:l[0],y:l[1]}}))}else null==u&&s.trigger(new e.Event(o,{type:"mousedown",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(o,{type:"tapstart",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(o,{type:"vmousedown",cyPosition:{x:l[0],y:l[1]}}));if(r.hoverData.down=u,r.hoverData.downTime=(new Date).getTime(),null==u||u.isEdge()){c[4]=1;var y=Math.max(0,t.panOrBoxSelectDelay-(+new Date-r.hoverData.downTime));clearTimeout(r.bgActiveTimeout),r.bgActiveTimeout=setTimeout(function(){u&&u.unactivate(),r.data.bgActivePosistion={x:l[0],y:l[1]},r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.redraw()},y)}}c[0]=c[2]=l[0],c[1]=c[3]=l[1]},!1),r.registerBinding(window,"mousemove",e.util.throttle(function(n){var i=!1,a=r.hoverData.capture;if(!a){var o=r.findContainerClientCoords();if(!(n.clientX>o[0]&&n.clientX<o[0]+r.canvasWidth&&n.clientY>o[1]&&n.clientY<o[1]+r.canvasHeight))return;for(var s=r.data.container,l=n.target,c=l.parentNode,u=!1;c;){if(c===s){u=!0;break}c=c.parentNode}if(!u)return}var d=r.data.cy,p=r.projectIntoViewport(n.clientX,n.clientY),h=r.data.select,g=null;r.hoverData.draggingEles||(g=r.findNearestElement(p[0],p[1],!0));var v=r.hoverData.last,f=r.hoverData.down,y=[p[0]-h[2],p[1]-h[3]],m=r.dragData.possibleDragElements;if(i=!0,null!=g?g.trigger(new e.Event(n,{type:"mousemove",cyPosition:{x:p[0],y:p[1]}})).trigger(new e.Event(n,{type:"vmousemove",cyPosition:{x:p[0],y:p[1]}})).trigger(new e.Event(n,{type:"tapdrag",cyPosition:{x:p[0],y:p[1]}})):null==g&&d.trigger(new e.Event(n,{type:"mousemove",cyPosition:{x:p[0],y:p[1]}})).trigger(new e.Event(n,{type:"vmousemove",cyPosition:{x:p[0],y:p[1]}})).trigger(new e.Event(n,{type:"tapdrag",cyPosition:{x:p[0],y:p[1]}})),3===r.hoverData.which){var b=new e.Event(n,{type:"cxtdrag",cyPosition:{x:p[0],y:p[1]}});f?f.trigger(b):d.trigger(b),r.hoverData.cxtDragged=!0,r.hoverData.cxtOver&&g===r.hoverData.cxtOver||(r.hoverData.cxtOver&&r.hoverData.cxtOver.trigger(new e.Event(n,{type:"cxtdragout",cyPosition:{x:p[0],y:p[1]}})),r.hoverData.cxtOver=g,g&&g.trigger(new e.Event(n,{type:"cxtdragover",cyPosition:{x:p[0],y:p[1]}})))}else if(r.hoverData.dragging){if(i=!0,d.panningEnabled()&&d.userPanningEnabled()){var x={x:y[0]*d.zoom(),y:y[1]*d.zoom()};d.panBy(x)}p=r.projectIntoViewport(n.clientX,n.clientY)}else if(1==h[4]&&(null==f||f.isEdge())&&(!d.boxSelectionEnabled()||+new Date-r.hoverData.downTime>=t.panOrBoxSelectDelay)&&Math.abs(h[3]-h[1])+Math.abs(h[2]-h[0])<4&&d.panningEnabled()&&d.userPanningEnabled())r.hoverData.dragging=!0,h[4]=0;else{if(d.boxSelectionEnabled()&&Math.pow(h[2]-h[0],2)+Math.pow(h[3]-h[1],2)>7&&h[4]&&(clearTimeout(r.bgActiveTimeout),r.data.bgActivePosistion=void 0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.redraw()),f&&f.isEdge()&&f.active()&&f.unactivate(),g!=v&&(v&&(v.trigger(new e.Event(n,{type:"mouseout",cyPosition:{x:p[0],y:p[1]}})),v.trigger(new e.Event(n,{type:"tapdragout",cyPosition:{x:p[0],y:p[1]}}))),g&&(g.trigger(new e.Event(n,{type:"mouseover",cyPosition:{x:p[0],y:p[1]}})),g.trigger(new e.Event(n,{type:"tapdragover",cyPosition:{x:p[0],y:p[1]}}))),r.hoverData.last=g),f&&f.isNode()&&r.nodeIsDraggable(f)){r.dragData.didDrag||(r.data.canvasNeedsRedraw[t.NODE]=!0),r.dragData.didDrag=!0,r.hoverData.draggingEles=!0;for(var w=[],_=0;_<m.length;_++){var E=m[_];if(E.isNode()&&r.nodeIsDraggable(E)){var S=E._private.position;w.push(E),e.is.number(y[0])&&e.is.number(y[1])&&(S.x+=y[0],S.y+=y[1])}}var P=new e.Collection(d,w);P.updateCompoundBounds(),P.trigger("position drag"),r.data.canvasNeedsRedraw[t.DRAG]=!0,r.redraw()}i=!0}return h[2]=p[0],h[3]=p[1],i?(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault(),!1):void 0},1e3/30),!1),r.registerBinding(window,"mouseup",function(n){var i=r.hoverData.capture;if(i){r.hoverData.capture=!1;var o=r.data.cy,s=r.projectIntoViewport(n.clientX,n.clientY),l=r.data.select,c=r.findNearestElement(s[0],s[1],!0),u=r.dragData.possibleDragElements,d=r.hoverData.down,p=n.shiftKey;if(r.data.bgActivePosistion&&(r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.redraw()),r.data.bgActivePosistion=void 0,clearTimeout(r.bgActiveTimeout),r.hoverData.cxtStarted=!1,r.hoverData.draggingEles=!1,d&&d.unactivate(),3===r.hoverData.which){var h=new e.Event(n,{type:"cxttapend",cyPosition:{x:s[0],y:s[1]}});if(d?d.trigger(h):o.trigger(h),!r.hoverData.cxtDragged){var g=new e.Event(n,{type:"cxttap",cyPosition:{x:s[0],y:s[1]}});d?d.trigger(g):o.trigger(g)}r.hoverData.cxtDragged=!1,r.hoverData.which=null}else{if(null!=d||r.dragData.didDrag||Math.pow(l[2]-l[0],2)+Math.pow(l[3]-l[1],2)>7&&l[4]||r.hoverData.dragging||(o.$(":selected").unselect(),u.length>0&&(r.data.canvasNeedsRedraw[t.NODE]=!0),r.dragData.possibleDragElements=u=[]),null!=c?c.trigger(new e.Event(n,{type:"mouseup",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"tapend",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"vmouseup",cyPosition:{x:s[0],y:s[1]}})):null==c&&o.trigger(new e.Event(n,{type:"mouseup",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"tapend",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"vmouseup",cyPosition:{x:s[0],y:s[1]}})),Math.pow(l[2]-l[0],2)+Math.pow(l[3]-l[1],2)===0&&(null!=c?c.trigger(new e.Event(n,{type:"click",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"tap",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"vclick",cyPosition:{x:s[0],y:s[1]}})):null==c&&o.trigger(new e.Event(n,{type:"click",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"tap",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(n,{type:"vclick",cyPosition:{x:s[0],y:s[1]}}))),c!=d||r.dragData.didDrag){if(c==d&&null!=c&&c._private.grabbed){for(var v=o.$(":grabbed"),f=0;f<v.length;f++){var y=v[f];y._private.grabbed=!1;for(var m=y._private.edges,b=0;b<m.length;b++)m[b]._private.rscratch.inDragLayer=!1;a(y,!1)}c.trigger("free")}}else null!=c&&c._private.selectable&&("additive"===o.selectionType()||p?c.selected()?c.unselect():c.select():p||(o.$(":selected").not(c).unselect(),c.select()),a(c,!1),r.data.canvasNeedsRedraw[t.NODE]=!0);if(o.boxSelectionEnabled()&&Math.pow(l[2]-l[0],2)+Math.pow(l[3]-l[1],2)>7&&l[4]){var x=[],w=r.getAllInBox(l[0],l[1],l[2],l[3]);r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,w.length>0&&(r.data.canvasNeedsRedraw[t.NODE]=!0);for(var f=0;f<w.length;f++)w[f]._private.selectable&&x.push(w[f]);var _=new e.Collection(o,x);"additive"===o.selectionType()?_.select():(p||o.$(":selected").not(_).unselect(),_.select()),0===x.length&&r.redraw()}if(r.hoverData.dragging&&(r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.redraw()),r.hoverData.dragging=!1,!l[4]){r.data.canvasNeedsRedraw[t.DRAG]=!0,r.data.canvasNeedsRedraw[t.NODE]=!0;for(var f=0;f<u.length;f++)if("nodes"==u[f]._private.group){u[f]._private.rscratch.inDragLayer=!1,u[f]._private.grabbed=!1;for(var m=u[f]._private.edges,b=0;b<m.length;b++)m[b]._private.rscratch.inDragLayer=!1;a(u[f],!1)}else"edges"==u[f]._private.group&&(u[f]._private.rscratch.inDragLayer=!1);d&&d.trigger("free")}}l[4]=0,r.hoverData.down=null,r.dragData.didDrag=!1}},!1);var c=function(e){var n=r.data.cy,i=r.projectIntoViewport(e.clientX,e.clientY),a=[i[0]*n.zoom()+n.pan().x,i[1]*n.zoom()+n.pan().y];if(r.hoverData.draggingEles||r.hoverData.dragging||r.hoverData.cxtStarted||l())return void e.preventDefault();if(n.panningEnabled()&&n.userPanningEnabled()&&n.zoomingEnabled()&&n.userZoomingEnabled()){e.preventDefault(),r.data.wheelZooming=!0,clearTimeout(r.data.wheelTimeout),r.data.wheelTimeout=setTimeout(function(){r.data.wheelZooming=!1,r.data.canvasNeedsRedraw[t.NODE]=!0,r.redraw()},150);var o=e.wheelDeltaY/1e3||e.wheelDelta/1e3||e.detail/-32||-e.deltaY/500;n.zoom({level:n.zoom()*Math.pow(10,o),renderedPosition:{x:a[0],y:a[1]}})}};r.registerBinding(r.data.container,"wheel",c,!0),r.registerBinding(r.data.container,"mousewheel",c,!0),r.registerBinding(r.data.container,"DOMMouseScroll",c,!0),r.registerBinding(r.data.container,"MozMousePixelScroll",function(){},!1),r.registerBinding(r.data.container,"mouseout",function(t){var n=r.projectIntoViewport(t.clientX,t.clientY);r.data.cy.trigger(new e.Event(t,{type:"mouseout",cyPosition:{x:n[0],y:n[1]}}))},!1),r.registerBinding(r.data.container,"mouseover",function(t){var n=r.projectIntoViewport(t.clientX,t.clientY);r.data.cy.trigger(new e.Event(t,{type:"mouseover",cyPosition:{x:n[0],y:n[1]}}))},!1);var u,d,p,h,g,v,f,y,m,b,x,w,_=function(e,t,r,n){return Math.sqrt((r-e)*(r-e)+(n-t)*(n-t))};r.registerBinding(r.data.container,"touchstart",function(o){clearTimeout(this.threeFingerSelectTimeout),o.target!==r.data.link&&o.preventDefault(),r.touchData.capture=!0,r.data.bgActivePosistion=void 0;var s=r.data.cy,l=r.getCachedNodes(),c=r.getCachedEdges(),E=r.touchData.now,S=r.touchData.earlier;if(o.touches[0]){var P=r.projectIntoViewport(o.touches[0].clientX,o.touches[0].clientY);E[0]=P[0],E[1]=P[1]}if(o.touches[1]){var P=r.projectIntoViewport(o.touches[1].clientX,o.touches[1].clientY);E[2]=P[0],E[3]=P[1]}if(o.touches[2]){var P=r.projectIntoViewport(o.touches[2].clientX,o.touches[2].clientY);E[4]=P[0],E[5]=P[1]}if(o.touches[1]){var k=function(e){for(var t=0;t<e.length;t++)e[t]._private.grabbed=!1,e[t]._private.rscratch.inDragLayer=!1,e[t].active()&&e[t].unactivate()};k(l),k(c);var C=r.findContainerClientCoords();y=C[0],m=C[1],b=C[2],x=C[3],u=o.touches[0].clientX-y,d=o.touches[0].clientY-m,p=o.touches[1].clientX-y,h=o.touches[1].clientY-m,w=u>=0&&b>=u&&p>=0&&b>=p&&d>=0&&x>=d&&h>=0&&x>=h;var D=s.pan(),N=s.zoom();if(g=_(u,d,p,h),v=[(u+p)/2,(d+h)/2],f=[(v[0]-D.x)/N,(v[1]-D.y)/N],200>g&&!o.touches[2]){var M=r.findNearestElement(E[0],E[1],!0),T=r.findNearestElement(E[2],E[3],!0);return M&&M.isNode()?(M.activate().trigger(new e.Event(o,{type:"cxttapstart",cyPosition:{x:E[0],y:E[1]}})),r.touchData.start=M):T&&T.isNode()?(T.activate().trigger(new e.Event(o,{type:"cxttapstart",cyPosition:{x:E[0],y:E[1]}})),r.touchData.start=T):(s.trigger(new e.Event(o,{type:"cxttapstart",cyPosition:{x:E[0],y:E[1]}})),r.touchData.start=null),r.touchData.start&&(r.touchData.start._private.grabbed=!1),r.touchData.cxt=!0,r.touchData.cxtDragged=!1,r.data.bgActivePosistion=void 0,void r.redraw()}}if(o.touches[2]);else if(o.touches[1]);else if(o.touches[0]){var z=r.findNearestElement(E[0],E[1],!0);if(null!=z){if(z.activate(),r.touchData.start=z,"nodes"==z._private.group&&r.nodeIsDraggable(z)){var I=r.dragData.touchDragEles=[];if(i(z,I),z.trigger("grab"),r.data.canvasNeedsRedraw[t.NODE]=!0,r.data.canvasNeedsRedraw[t.DRAG]=!0,z.selected()){I=r.dragData.touchDragEles=[];for(var B=s.$("node:selected"),R=0;R<B.length;R++){var X=B[R];if(r.nodeIsDraggable(X)){I.push(X),X._private.rscratch.inDragLayer=!0;for(var O=X._private.edges,L=0;L<O.length;L++)O[L]._private.rscratch.inDragLayer=!0;("auto"==X._private.style.width.value||"auto"==X._private.style.height.value)&&n(X,!1,I),a(X,!0)}}}else("auto"==z._private.style.width.value||"auto"==z._private.style.height.value)&&n(z,!0,I),a(z,!0)}z.trigger(new e.Event(o,{type:"touchstart",cyPosition:{x:E[0],y:E[1]}})).trigger(new e.Event(o,{type:"tapstart",cyPosition:{x:E[0],y:E[1]}})).trigger(new e.Event(o,{type:"vmousdown",cyPosition:{x:E[0],y:E[1]}}))}null==z&&(s.trigger(new e.Event(o,{type:"touchstart",cyPosition:{x:E[0],y:E[1]}})).trigger(new e.Event(o,{type:"tapstart",cyPosition:{x:E[0],y:E[1]}})).trigger(new e.Event(o,{type:"vmousedown",cyPosition:{x:E[0],y:E[1]}})),r.data.bgActivePosistion={x:P[0],y:P[1]},r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.redraw());for(var Y=0;Y<E.length;Y++)S[Y]=E[Y],r.touchData.startPosition[Y]=E[Y];r.touchData.singleTouchMoved=!1,r.touchData.singleTouchStartTime=+new Date,setTimeout(function(){r.touchData.singleTouchMoved===!1&&+new Date-r.touchData.singleTouchStartTime>250&&(r.touchData.start?r.touchData.start.trigger(new e.Event(o,{type:"taphold",cyPosition:{x:E[0],y:E[1]}})):(r.data.cy.trigger(new e.Event(o,{type:"taphold",cyPosition:{x:E[0],y:E[1]}})),s.$(":selected").unselect()))},1e3)}},!1),r.registerBinding(window,"touchmove",e.util.throttle(function(n){var i=r.data.select,a=r.touchData.capture;a&&n.preventDefault();var o=r.data.cy,s=r.touchData.now,l=r.touchData.earlier;if(n.touches[0]){var c=r.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);s[0]=c[0],s[1]=c[1]}if(n.touches[1]){var c=r.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);s[2]=c[0],s[3]=c[1]}if(n.touches[2]){var c=r.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);s[4]=c[0],s[5]=c[1]}for(var v=[],b=0;b<s.length;b++)v[b]=s[b]-l[b];if(a&&r.touchData.cxt){var x=n.touches[0].clientX-y,E=n.touches[0].clientY-m,S=n.touches[1].clientX-y,P=n.touches[1].clientY-m,k=_(x,E,S,P),C=k/g;if(C>=1.5||k>=150){r.touchData.cxt=!1,r.touchData.start&&(r.touchData.start.unactivate(),r.touchData.start=null),r.data.bgActivePosistion=void 0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0;var D=new e.Event(n,{type:"cxttapend",cyPosition:{x:s[0],y:s[1]}});r.touchData.start?r.touchData.start.trigger(D):o.trigger(D)}}if(a&&r.touchData.cxt){var D=new e.Event(n,{type:"cxtdrag",cyPosition:{x:s[0],y:s[1]}});r.data.bgActivePosistion=void 0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.touchData.start?r.touchData.start.trigger(D):o.trigger(D),r.touchData.start&&(r.touchData.start._private.grabbed=!1),r.touchData.cxtDragged=!0;var N=r.findNearestElement(s[0],s[1],!0);r.touchData.cxtOver&&N===r.touchData.cxtOver||(r.touchData.cxtOver&&r.touchData.cxtOver.trigger(new e.Event(n,{type:"cxtdragout",cyPosition:{x:s[0],y:s[1]}})),r.touchData.cxtOver=N,N&&N.trigger(new e.Event(n,{type:"cxtdragover",cyPosition:{x:s[0],y:s[1]}})))}else if(a&&n.touches[2]&&o.boxSelectionEnabled())r.data.bgActivePosistion=void 0,clearTimeout(this.threeFingerSelectTimeout),this.lastThreeTouch=+new Date,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,i&&0!==i.length&&void 0!==i[0]?(i[2]=(s[0]+s[2]+s[4])/3,i[3]=(s[1]+s[3]+s[5])/3):(i[0]=(s[0]+s[2]+s[4])/3,i[1]=(s[1]+s[3]+s[5])/3,i[2]=(s[0]+s[2]+s[4])/3+1,i[3]=(s[1]+s[3]+s[5])/3+1),i[4]=1,r.redraw();else if(a&&n.touches[1]&&o.zoomingEnabled()&&o.panningEnabled()&&o.userZoomingEnabled()&&o.userPanningEnabled()){r.data.bgActivePosistion=void 0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0;var M=r.dragData.touchDragEles;if(M){r.data.canvasNeedsRedraw[t.DRAG]=!0;for(var T=0;T<M.length;T++)M[T]._private.grabbed=!1,M[T]._private.rscratch.inDragLayer=!1}var x=n.touches[0].clientX-y,E=n.touches[0].clientY-m,S=n.touches[1].clientX-y,P=n.touches[1].clientY-m,k=_(x,E,S,P),C=k/g;if(1!=C&&w){var z=x-u,I=E-d,B=S-p,R=P-h,X=(z+B)/2,O=(I+R)/2,L=o.zoom(),Y=L*C,V=o.pan(),A=f[0]*L+V.x,F=f[1]*L+V.y,q={x:-Y/L*(A-V.x-X)+A,y:-Y/L*(F-V.y-O)+F};if(r.touchData.start){var M=r.dragData.touchDragEles;if(M)for(var T=0;T<M.length;T++)M[T]._private.grabbed=!1,M[T]._private.rscratch.inDragLayer=!1;r.touchData.start._private.active=!1,r.touchData.start._private.grabbed=!1,r.touchData.start._private.rscratch.inDragLayer=!1,r.data.canvasNeedsRedraw[t.DRAG]=!0,r.touchData.start.trigger("free").trigger("unactivate")}o.viewport({zoom:Y,pan:q}),g=k,u=x,d=E,p=S,h=P,r.pinching=!0}if(n.touches[0]){var c=r.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);s[0]=c[0],s[1]=c[1]}if(n.touches[1]){var c=r.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);s[2]=c[0],s[3]=c[1]}if(n.touches[2]){var c=r.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);s[4]=c[0],s[5]=c[1]}}else if(n.touches[0]){var j=r.touchData.start,H=r.touchData.last,N=N||r.findNearestElement(s[0],s[1],!0);if(null!=j&&"nodes"==j._private.group&&r.nodeIsDraggable(j)){for(var M=r.dragData.touchDragEles,W=0;W<M.length;W++){var Z=M[W];if(r.nodeIsDraggable(Z)){r.dragData.didDrag=!0;var $=Z._private.position;$.x+=v[0],$.y+=v[1]}}var U=new e.Collection(o,Z);U.updateCompoundBounds(),U.trigger("position drag"),r.hoverData.draggingEles=!0,r.data.canvasNeedsRedraw[t.DRAG]=!0,r.touchData.startPosition[0]==l[0]&&r.touchData.startPosition[1]==l[1]&&(r.data.canvasNeedsRedraw[t.NODE]=!0),r.redraw()}null!=j&&(j.trigger(new e.Event(n,{type:"touchmove",cyPosition:{x:s[0],y:s[1]}})),j.trigger(new e.Event(n,{type:"tapdrag",cyPosition:{x:s[0],y:s[1]}})),j.trigger(new e.Event(n,{type:"vmousemove",cyPosition:{x:s[0],y:s[1]}}))),null==j&&(null!=N&&(N.trigger(new e.Event(n,{type:"touchmove",cyPosition:{x:s[0],y:s[1]}})),N.trigger(new e.Event(n,{type:"tapdrag",cyPosition:{x:s[0],y:s[1]}})),N.trigger(new e.Event(n,{type:"vmousemove",cyPosition:{x:s[0],y:s[1]}}))),null==N&&(o.trigger(new e.Event(n,{type:"touchmove",cyPosition:{x:s[0],y:s[1]}})),o.trigger(new e.Event(n,{type:"tapdrag",cyPosition:{x:s[0],y:s[1]}})),o.trigger(new e.Event(n,{type:"vmousemove",cyPosition:{x:s[0],y:s[1]}})))),N!=H&&(H&&H.trigger(new e.Event(n,{type:"tapdragout",cyPosition:{x:s[0],y:s[1]}})),N&&N.trigger(new e.Event(n,{type:"tapdragover",cyPosition:{x:s[0],y:s[1]}}))),r.touchData.last=N;for(var T=0;T<s.length;T++)s[T]&&r.touchData.startPosition[T]&&Math.abs(s[T]-r.touchData.startPosition[T])>4&&(r.touchData.singleTouchMoved=!0);if(a&&(null==j||j.isEdge())&&o.panningEnabled()&&o.userPanningEnabled()){j&&(j.unactivate(),r.data.bgActivePosistion||(r.data.bgActivePosistion={x:s[0],y:s[1]}),r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,r.touchData.start=null),o.panBy({x:v[0]*o.zoom(),y:v[1]*o.zoom()}),r.swipePanning=!0;var c=r.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);s[0]=c[0],s[1]=c[1]}}for(var b=0;b<s.length;b++)l[b]=s[b]},1e3/30),!1),r.registerBinding(window,"touchcancel",function(){var e=r.touchData.start;r.touchData.capture=!1,e&&e.unactivate()}),r.registerBinding(window,"touchend",function(n){var i=r.touchData.start,o=r.touchData.capture;if(o){r.touchData.capture=!1,n.preventDefault();var s=r.data.select;r.swipePanning=!1,r.hoverData.draggingEles=!1;var l=r.data.cy,c=r.touchData.now,u=r.touchData.earlier;if(n.touches[0]){var d=r.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);c[0]=d[0],c[1]=d[1]}if(n.touches[1]){var d=r.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);c[2]=d[0],c[3]=d[1]}if(n.touches[2]){var d=r.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);c[4]=d[0],c[5]=d[1]}i&&i.unactivate();var p;if(r.touchData.cxt){if(p=new e.Event(n,{type:"cxttapend",cyPosition:{x:c[0],y:c[1]}}),i?i.trigger(p):l.trigger(p),!r.touchData.cxtDragged){var h=new e.Event(n,{type:"cxttap",cyPosition:{x:c[0],y:c[1]}});i?i.trigger(h):l.trigger(h)}return r.touchData.start&&(r.touchData.start._private.grabbed=!1),r.touchData.cxt=!1,r.touchData.start=null,void r.redraw()}if(!n.touches[2]&&l.boxSelectionEnabled()){clearTimeout(this.threeFingerSelectTimeout);var g=[],v=r.getAllInBox(s[0],s[1],s[2],s[3]);s[0]=void 0,s[1]=void 0,s[2]=void 0,s[3]=void 0,s[4]=0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0;for(var f=0;f<v.length;f++)v[f]._private.selectable&&g.push(v[f]);var y=new e.Collection(l,g);"single"===l.selectionType()&&l.$(":selected").not(y).unselect(),y.select(),y.length>0?r.data.canvasNeedsRedraw[t.NODE]=!0:r.redraw()}n.touches.length<2&&(r.pinching=!1,r.data.canvasNeedsRedraw[t.NODE]=!0,r.redraw());var m=!1;if(null!=i&&(i._private.active=!1,m=!0,i.unactivate()),n.touches[2])r.data.bgActivePosistion=void 0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0;else if(n.touches[1]);else if(n.touches[0]);else if(!n.touches[0]){if(r.data.bgActivePosistion=void 0,r.data.canvasNeedsRedraw[t.SELECT_BOX]=!0,null!=i){i._private.grabbed&&(i._private.grabbed=!1,i.trigger("free"),i._private.rscratch.inDragLayer=!1);for(var b=i._private.edges,x=0;x<b.length;x++)b[x]._private.rscratch.inDragLayer=!1;if(a(i,!1),i.selected())for(var w=l.$("node:selected"),_=0;_<w.length;_++){var E=w[_];E._private.rscratch.inDragLayer=!1,E._private.grabbed=!1;for(var b=E._private.edges,x=0;x<b.length;x++)b[x]._private.rscratch.inDragLayer=!1;a(E,!1)}r.data.canvasNeedsRedraw[t.DRAG]=!0,r.data.canvasNeedsRedraw[t.NODE]=!0,i.trigger(new e.Event(n,{type:"touchend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"tapend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"vmouseup",cyPosition:{x:c[0],y:c[1]}})),i.unactivate(),r.touchData.start=null}else{var S=r.findNearestElement(c[0],c[1],!0);null!=S&&S.trigger(new e.Event(n,{type:"touchend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"tapend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"vmouseup",cyPosition:{x:c[0],y:c[1]}})),null==S&&l.trigger(new e.Event(n,{type:"touchend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"tapend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"vmouseup",cyPosition:{x:c[0],y:c[1]}}))}null!=i&&!r.dragData.didDrag&&i._private.selectable&&Math.sqrt(Math.pow(r.touchData.startPosition[0]-c[0],2)+Math.pow(r.touchData.startPosition[1]-c[1],2))<6&&("single"===l.selectionType()?(l.$(":selected").not(i).unselect(),i.select()):i.selected()?i.unselect():i.select(),m=!0,r.data.canvasNeedsRedraw[t.NODE]=!0),r.touchData.singleTouchMoved===!1&&(i?i.trigger(new e.Event(n,{type:"tap",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"vclick",cyPosition:{x:c[0],y:c[1]}})):l.trigger(new e.Event(n,{type:"tap",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(n,{type:"vclick",cyPosition:{x:c[0],y:c[1]}}))),r.touchData.singleTouchMoved=!0}for(var x=0;x<c.length;x++)u[x]=c[x];r.dragData.didDrag=!1,m&&i&&i.updateStyle(!1)}},!1)}}(cytoscape),function(e){"use strict";for(var t=e("renderer","canvas"),r=t.prototype,n=t.usePaths(),i=t.nodeShapes={},a=Math.sin(0),o=Math.cos(0),s={},l={},c=.1,u=0*Math.PI;u<2*Math.PI;u+=c)s[u]=Math.sin(u),l[u]=Math.cos(u);i.ellipse={draw:function(e,t,r,n,a){i.ellipse.drawPath(e,t,r,n,a),e.fill()},drawPath:function(e,t,r,i,u){if(n){e.beginPath&&e.beginPath();for(var d,p,h=i/2,g=u/2,v=0*Math.PI;v<2*Math.PI;v+=c)d=t-h*s[v]*a+h*l[v]*o,p=r+g*l[v]*a+g*s[v]*o,0===v?e.moveTo(d,p):e.lineTo(d,p);e.closePath()}else e.beginPath&&e.beginPath(),e.translate(t,r),e.scale(i/2,u/2),e.arc(0,0,1,0,2*Math.PI*.999,!1),e.closePath(),e.scale(2/i,2/u),e.translate(-t,-r)},intersectLine:function(t,r,n,i,a,o,s){var l=e.math.intersectLineEllipse(a,o,t,r,n/2+s,i/2+s);return l},intersectBox:function(t,r,n,i,a,o,s,l,c){return e.math.boxIntersectEllipse(t,r,n,i,c,a,o,s,l)},checkPointRough:function(){return!0},checkPoint:function(e,t,r,n,i,a,o){return e-=a,t-=o,e/=n/2+r,t/=i/2+r,Math.pow(e,2)+Math.pow(t,2)<=1}},i.triangle={points:e.math.generateUnitNgonPointsFitToSquare(3,0),draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.triangle.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.triangle.points)},intersectLine:function(t,r,n,a,o,s,l){return e.math.polygonIntersectLine(o,s,i.triangle.points,t,r,n/2,a/2,l)},intersectBox:function(t,r,n,a,o,s,l,c,u){var d=i.triangle.points;return e.math.boxIntersectPolygon(t,r,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.triangle.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.triangle.points,s,l,a,o,[0,-1],n)}},i.square={points:e.math.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.square.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.square.points)},intersectLine:function(t,r,n,a,o,s,l){return e.math.polygonIntersectLine(o,s,i.square.points,t,r,n/2,a/2,l)},intersectBox:function(t,r,n,a,o,s,l,c,u){var d=i.square.points;return e.math.boxIntersectPolygon(t,r,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.square.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.square.points,s,l,a,o,[0,-1],n)}},i.rectangle=i.square,i.octogon={},i.roundrectangle={points:e.math.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,i,a){r.drawRoundRectangle(e,t,n,i,a,10)},drawPath:function(e,t,n,i,a){r.drawRoundRectanglePath(e,t,n,i,a,10)},intersectLine:function(t,r,n,i,a,o,s){return e.math.roundRectangleIntersectLine(a,o,t,r,n,i,s)},intersectBox:function(t,r,n,i,a,o,s,l,c){return e.math.roundRectangleIntersectBox(t,r,n,i,a,o,s,l,c)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.roundrectangle.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){var c=e.math.getRoundRectangleRadius(a,o);if(e.math.pointInsidePolygon(t,r,i.roundrectangle.points,s,l,a,o-2*c,[0,-1],n))return!0;if(e.math.pointInsidePolygon(t,r,i.roundrectangle.points,s,l,a-2*c,o,[0,-1],n))return!0;var u=function(e,t,r,n,i,a,o){return e-=r,t-=n,e/=i/2+o,t/=a/2+o,Math.pow(e,2)+Math.pow(t,2)<=1};return u(t,r,s-a/2+c,l-o/2+c,2*c,2*c,n)?!0:u(t,r,s+a/2-c,l-o/2+c,2*c,2*c,n)?!0:u(t,r,s+a/2-c,l+o/2-c,2*c,2*c,n)?!0:u(t,r,s-a/2+c,l+o/2-c,2*c,2*c,n)?!0:!1}},i.pentagon={points:e.math.generateUnitNgonPointsFitToSquare(5,0),draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.pentagon.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.pentagon.points)},intersectLine:function(e,t,n,a,o,s,l){return r.polygonIntersectLine(o,s,i.pentagon.points,e,t,n/2,a/2,l)},intersectBox:function(t,r,n,a,o,s,l,c,u){var d=i.pentagon.points;return e.math.boxIntersectPolygon(t,r,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.pentagon.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.pentagon.points,s,l,a,o,[0,-1],n)}},i.hexagon={points:e.math.generateUnitNgonPointsFitToSquare(6,0),draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.hexagon.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.hexagon.points)},intersectLine:function(t,r,n,a,o,s,l){return e.math.polygonIntersectLine(o,s,i.hexagon.points,t,r,n/2,a/2,l)},intersectBox:function(t,r,n,a,o,s,l,c,u){var d=i.hexagon.points;return e.math.boxIntersectPolygon(t,r,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.hexagon.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.hexagon.points,s,l,a,o,[0,-1],n)}},i.heptagon={points:e.math.generateUnitNgonPointsFitToSquare(7,0),draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.heptagon.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.heptagon.points)},intersectLine:function(e,t,n,a,o,s,l){return r.polygonIntersectLine(o,s,i.heptagon.points,e,t,n/2,a/2,l)},intersectBox:function(e,t,n,a,o,s,l,c,u){var d=i.heptagon.points;return r.boxIntersectPolygon(e,t,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.heptagon.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.heptagon.points,s,l,a,o,[0,-1],n)}},i.octagon={points:e.math.generateUnitNgonPointsFitToSquare(8,0),draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.octagon.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.octagon.points)},intersectLine:function(e,t,n,a,o,s,l){return r.polygonIntersectLine(o,s,i.octagon.points,e,t,n/2,a/2,l)},intersectBox:function(e,t,n,a,o,s,l,c,u){var d=i.octagon.points;return r.boxIntersectPolygon(e,t,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.octagon.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.octagon.points,s,l,a,o,[0,-1],n)}};var d=new Array(20),p=e.math.generateUnitNgonPoints(5,0),h=e.math.generateUnitNgonPoints(5,Math.PI/5),g=.5*(3-Math.sqrt(5));g*=1.57;for(var u=0;u<h.length/2;u++)h[2*u]*=g,h[2*u+1]*=g;for(var u=0;5>u;u++)d[4*u]=p[2*u],d[4*u+1]=p[2*u+1],d[4*u+2]=h[2*u],d[4*u+3]=h[2*u+1];d=e.math.fitPolygonToSquare(d),i.star5=i.star={points:d,draw:function(e,t,n,a,o){r.drawPolygon(e,t,n,a,o,i.star5.points)},drawPath:function(e,t,n,a,o){r.drawPolygonPath(e,t,n,a,o,i.star5.points)},intersectLine:function(e,t,n,a,o,s,l){return r.polygonIntersectLine(o,s,i.star5.points,e,t,n/2,a/2,l)},intersectBox:function(e,t,n,a,o,s,l,c,u){var d=i.star5.points;return r.boxIntersectPolygon(e,t,n,a,d,o,s,l,c,[0,-1],u)},checkPointRough:function(t,r,n,a,o,s,l){return e.math.checkInBoundingBox(t,r,i.star5.points,n,a,o,s,l)},checkPoint:function(t,r,n,a,o,s,l){return e.math.pointInsidePolygon(t,r,i.star5.points,s,l,a,o,[0,-1],n)}}}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={liveUpdate:!0,ready:void 0,stop:void 0,maxSimulationTime:4e3,fit:!0,padding:[50,50,50,50],simulationBounds:void 0,ungrabifyWhileSimulating:!0,repulsion:void 0,stiffness:void 0,friction:void 0,gravity:!0,fps:void 0,precision:void 0,nodeMass:void 0,edgeLength:void 0,stepSize:1,stableEnergy:function(e){var t=e;return t.max<=.5||t.mean<=.3}};t.prototype.run=function(){function t(e,t){return null==t?void 0:"function"==typeof t?t.apply(e,[e._private.data,{nodes:o.length,edges:s.length,element:e}]):t}function r(e){var t=e.x,r=e.y,n=c,i=u,a=-2,o=2,s=4;return{x:t/n*s+a,y:r/i*s+o}}function n(e){i.fit&&a.fit(),e()}var i=this.options,a=i.cy,o=a.nodes(),s=a.edges(),l=a.container(),c=l.clientWidth,u=l.clientHeight,d=i.simulationBounds;i.simulationBounds?(c=d[2]-d[0],u=d[3]-d[1]):i.simulationBounds=[0,0,c,u];var p=i.simulationBounds;if(p.x1=p[0],p.y1=p[1],p.x2=p[2],p.y2=p[3],a.nodes().size()<=1)return i.fit&&a.reset(),a.nodes().position({x:Math.round((p.x1+p.x2)/2),y:Math.round((p.y1+p.y2)/2)}),a.one("layoutready",i.ready),a.trigger("layoutready"),a.one("layoutstop",i.stop),void a.trigger("layoutstop");var h=this.system=arbor.ParticleSystem(i.repulsion,i.stiffness,i.friction,i.gravity,i.fps,i.dt,i.precision);this.system=h,i.liveUpdate&&i.fit&&a.reset();var g,v=250,f=!1,y=+new Date,m={init:function(){},redraw:function(){var t=h.energy();if(null!=i.stableEnergy&&null!=t&&t.n>0&&i.stableEnergy(t))return void h.stop();clearTimeout(g),g=setTimeout(w,v);var r=[];h.eachNode(function(e,t){var n=e.data,i=n.element;null!=i&&(i.locked()||i.grabbed()||(i.silentPosition({x:p.x1+t.x,y:p.y1+t.y}),r.push(i)))});var n=+new Date-y>=16;i.liveUpdate&&r.length>0&&n&&(new e.Collection(a,r).rtrigger("position"),y=+new Date),f||(f=!0,a.one("layoutready",i.ready),a.trigger("layoutready"))}};h.renderer=m,h.screenSize(c,u),h.screenPadding(i.padding[0],i.padding[1],i.padding[2],i.padding[3]),h.screenStep(i.stepSize);var b=function(e){var t=h.fromScreen(this.position()),r=arbor.Point(t.x,t.y);switch(this.scratch().arbor.p=r,e.type){case"grab":this.scratch().arbor.fixed=!0;break;case"free":this.scratch().arbor.fixed=!1}};o.bind("grab drag free",b),o.each(function(e,n){if(!this.isFullAutoParent()){var a=this._private.data.id,o=t(this,i.nodeMass),s=this._private.locked;if(!n.isFullAutoParent()){var l=r({x:n.position().x,y:n.position().y});n.locked()||(this.scratch().arbor=h.addNode(a,{element:this,mass:o,fixed:s,x:s?l.x:void 0,y:s?l.y:void 0}))}}}),s.each(function(){var e=this.source().id(),r=this.target().id(),n=t(this,i.edgeLength);this.scratch().arbor=h.addEdge(e,r,{length:n})});var x=o.filter(":grabbable");i.ungrabifyWhileSimulating&&x.ungrabify();var w=function(){function e(){i.liveUpdate||(i.fit&&a.reset(),a.nodes().rtrigger("position")),o.unbind("grab drag free",b),i.ungrabifyWhileSimulating&&x.grabify(),a.one("layoutstop",i.stop),a.trigger("layoutstop")}window.isIE?n(function(){e()}):e()};h.start(),null!=i.maxSimulationTime&&i.maxSimulationTime>0&&1/0!==i.maxSimulationTime&&setTimeout(function(){h.stop()},i.maxSimulationTime)},t.prototype.stop=function(){null!=this.system&&system.stop()},e("layout","arbor",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,ready:void 0,stop:void 0,directed:!1,padding:30,circle:!1,roots:void 0,maximalAdjustments:0};
t.prototype.run=function(){var t,r=this.options,n=r,i=r.cy,a=i.nodes(),o=i.edges(),s=a.add(o),l=i.container(),c=l.clientWidth,u=l.clientHeight;if(e.is.elementOrCollection(n.roots))t=n.roots;else if(e.is.array(n.roots)){for(var d=[],p=0;p<n.roots.length;p++){var h=n.roots[p],g=i.getElementById(h);d.push(g)}t=new e.Collection(i,d)}else if(e.is.string(n.roots))t=i.$(n.roots);else if(n.directed)t=a.roots();else{var v=a.maxDegree(!1);t=a.filter(function(){return this.degree()===v})}var f=[],y={},m={};s.bfs(t,function(e,t){var r=this[0];f[t]||(f[t]=[]),f[t].push(r),y[r.id()]=!0,m[r.id()]=t},n.directed);for(var b=[],p=0;p<a.length;p++){var g=a[p];y[g.id()]||b.push(g)}for(var x=3*b.length,w=0;0!==b.length&&x>w;){for(var _=b.shift(),E=_.neighborhood().nodes(),S=!1,p=0;p<E.length;p++){var P=m[E[p].id()];if(void 0!==P){f[P].push(_),S=!0;break}}S||b.push(_),w++}for(;0!==b.length;){var _=b.shift(),S=!1;S||(0===f.length&&f.push([]),f[0].push(_))}var k=function(){for(var e=0;e<f.length;e++)for(var t=f[e],r=0;r<t.length;r++){var n=t[r];n._private.scratch.BreadthFirstLayout={depth:e,index:r}}};k();for(var C=function(e){for(var t,r=e.connectedEdges(function(){return this.data("target")===e.id()}),n=e._private.scratch.BreadthFirstLayout,i=0,a=0;a<r.length;a++){var o=r[a],s=o.source()[0],l=s._private.scratch.BreadthFirstLayout;n.depth<=l.depth&&i<l.depth&&(i=l.depth,t=s)}return t},D=0;D<n.maximalAdjustments;D++){for(var N=f.length,M=[],p=0;N>p;p++)for(var P=f[p],T=P.length,z=0;T>z;z++){var g=P[z],I=g._private.scratch.BreadthFirstLayout,B=C(g);B&&(I.intEle=B,M.push(g))}for(var p=0;p<M.length;p++){var g=M[p],I=g._private.scratch.BreadthFirstLayout,B=I.intEle,R=B._private.scratch.BreadthFirstLayout;f[I.depth].splice(I.index,1);for(var X=R.depth+1;X>f.length-1;)f.push([]);f[X].push(g),I.depth=X,I.index=f[X].length-1}k()}for(var O=0,p=0;p<a.length;p++){var L=a[p].outerWidth(),Y=a[p].outerHeight();O=Math.max(O,L,Y)}O*=1.75;for(var V={},A=function(e){if(V[e.id()])return V[e.id()];for(var t=e._private.scratch.BreadthFirstLayout.depth,r=e.neighborhood().nodes(),n=0,i=0,a=0;a<r.length;a++){var o=r[a],s=o._private.scratch.BreadthFirstLayout.index,l=o._private.scratch.BreadthFirstLayout.depth,c=f[l].length;(t>l||0===t)&&(n+=s/c,i++)}return i=Math.max(1,i),n/=i,0===i&&(n=void 0),V[e.id()]=n,n},F=function(e,t){var r=A(e),n=A(t);return r-n},q=0;3>q;q++){for(var p=0;p<f.length;p++)f[p]=f[p].sort(F);k()}var j={x:c/2,y:u/2};a.positions(function(){var e=this[0],t=e._private.scratch.BreadthFirstLayout,r=t.depth,i=t.index,a=f[r].length,o=Math.max(c/(a+1),O),s=Math.max(u/(f.length+1),O),l=Math.min(c/2/f.length,u/2/f.length);if(l=Math.max(l,O),n.circle){var d=l*r+l-(f.length>0&&f[0].length<=3?l/2:0),p=2*Math.PI/f[r].length*i;return 0===r&&1===f[0].length&&(d=1),{x:j.x+d*Math.cos(p),y:j.y+d*Math.sin(p)}}return{x:j.x+(i+1-(a+1)/2)*o,y:(r+1)*s}}),r.fit&&i.fit(n.padding),i.one("layoutready",r.ready),i.trigger("layoutready"),i.one("layoutstop",r.stop),i.trigger("layoutstop")},t.prototype.stop=function(){},e("layout","breadthfirst",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,ready:void 0,stop:void 0,rStepSize:10,padding:30,startAngle:1.5*Math.PI,counterclockwise:!1};t.prototype.run=function(){function e(){var e=0,t=u,r={x:l.x+g*Math.cos(e),y:l.y+g*Math.sin(e)},n={x:l.x+g*Math.cos(t),y:l.y+g*Math.sin(t)},i=Math.sqrt((n.x-r.x)*(n.x-r.x)+(n.y-r.y)*(n.y-r.y));return i}for(var t=this.options,r=t,n=t.cy,i=n.nodes().filter(function(){return!this.isFullAutoParent()}),a=n.container(),o=a.clientWidth,s=a.clientHeight,l={x:o/2,y:s/2},c=r.startAngle,u=2*Math.PI/i.length,d=0,p=0;p<i.length;p++){var h=i[p];d=Math.max(h.outerWidth(),h.outerHeight())}for(var g=o/2-d;e()<d&&i.length>=2;)g+=r.rStepSize;var p=0;i.positions(function(){var e=g*Math.cos(c),t=g*Math.sin(c),n={x:l.x+e,y:l.y+t};return p++,c=r.counterclockwise?c-u:c+u,n}),t.fit&&n.fit(r.padding),n.one("layoutready",t.ready),n.trigger("layoutready"),n.one("layoutstop",t.stop),n.trigger("layoutstop")},t.prototype.stop=function(){},e("layout","circle",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,ready:void 0,stop:void 0,padding:30,startAngle:1.5*Math.PI,counterclockwise:!1,minNodeSpacing:10,height:void 0,width:void 0,concentric:function(){return this.degree()},levelWidth:function(e){return e.maxDegree()/4}};t.prototype.run=function(){for(var e=this.options,t=e,r=e.cy,n=r.nodes().filter(function(){return!this.isFullAutoParent()}),i=r.container(),a=void 0!==t.width?t.width:i.clientWidth,o=void 0!==t.height?t.height:i.clientHeight,s={x:a/2,y:o/2},l=[],c=t.startAngle,u=0,d=0;d<n.length;d++){var p,h=n[d];p=t.concentric.call(h),l.push({value:p,node:h}),h._private.layoutData.concentric=p}n.updateStyle();for(var d=0;d<n.length;d++){var h=n[d];u=Math.max(u,h.outerWidth(),h.outerHeight())}l.sort(function(e,t){return t.value-e.value});for(var g=t.levelWidth(n),v=[[]],f=v[0],d=0;d<l.length;d++){var y=l[d];if(f.length>0){var m=Math.abs(f[0].value-y.value);m>=g&&(f=[],v.push(f))}f.push(y)}for(var b={},x=0,w=u+t.minNodeSpacing,d=0;d<v.length;d++){var _=v[d],E=2*Math.PI/_.length;if(_.length>1){var S=Math.cos(E)-Math.cos(0),P=Math.sin(E)-Math.sin(0),k=Math.sqrt(w*w/(S*S+P*P));x=Math.max(k,x)}for(var C=0;C<_.length;C++){var y=_[C],c=t.startAngle+(t.counterclockwise?1:-1)*E*C,D={x:s.x+x*Math.cos(c),y:s.y+x*Math.sin(c)};b[y.node.id()]=D}x+=w}n.positions(function(){var e=this.id();return b[e]}),e.fit&&r.fit(t.padding),r.one("layoutready",e.ready),r.trigger("layoutready"),r.one("layoutstop",e.stop),r.trigger("layoutstop")},t.prototype.stop=function(){},e("layout","concentric",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},n,t)}var r,n={ready:function(){},stop:function(){},refresh:0,fit:!0,padding:30,randomize:!0,debug:!1,nodeRepulsion:1e4,nodeOverlap:10,idealEdgeLength:10,edgeElasticity:100,nestingFactor:5,gravity:250,numIter:100,initialTemp:200,coolingFactor:.95,minTemp:1};t.prototype.run=function(){var e=this.options,t=e.cy;r=!0===e.debug?!0:!1;var n=new Date,a=i(t,e);r&&s(a),!0===e.randomize&&(l(a,t),0<e.refresh&&c(a,t,e)),m(a,t,e);for(var o=0;o<e.numIter;o++)if(u(a,t,e,o),0<e.refresh&&0===o%e.refresh&&c(a,t,e),a.temperature=a.temperature*e.coolingFactor,w("New temperature: "+a.temperature),a.temperature<e.minTemp){w("Temperature drop below minimum threshold. Stopping computation in step "+o);break}c(a,t,e),!0===e.fit&&t.fit(e.padding);var d=new Date;console.info("Layout took "+(d-n)+" ms"),t.one("layoutstop",e.stop),t.trigger("layoutstop")},t.prototype.stop=function(){var e=this.options;cy.one("layoutstop",e.stop),cy.trigger("layoutstop")};var i=function(e,t){for(var r={layoutNodes:[],idToIndex:{},nodeSize:e.nodes().size(),graphSet:[],indexToGraph:[],layoutEdges:[],edgeSize:e.edges().size(),temperature:t.initialTemp,clientWidth:e.container().clientWidth,clientHeight:e.container().clientHeight},n=e.nodes(),i=0;i<r.nodeSize;i++){var o={};o.id=n[i].data("id"),o.parentId=n[i].data("parent"),o.children=[],o.positionX=n[i].position("x"),o.positionY=n[i].position("y"),o.offsetX=0,o.offsetY=0,o.height=n[i].height(),o.width=n[i].width(),o.maxX=o.positionX+o.width/2,o.minX=o.positionX-o.width/2,o.maxY=o.positionY+o.height/2,o.minY=o.positionY-o.height/2,o.padLeft=n[i]._private.style["padding-left"].pxValue,o.padRight=n[i]._private.style["padding-right"].pxValue,o.padTop=n[i]._private.style["padding-top"].pxValue,o.padBottom=n[i]._private.style["padding-bottom"].pxValue,r.layoutNodes.push(o),r.idToIndex[o.id]=i}for(var s=[],l=0,c=-1,u=[],i=0;i<r.nodeSize;i++){var d=r.layoutNodes[i],p=d.parentId;null!=p?r.layoutNodes[r.idToIndex[p]].children.push(d.id):(s[++c]=d.id,u.push(d.id))}for(r.graphSet.push(u);c>=l;){var h=s[l++],g=r.idToIndex[h],v=r.layoutNodes[g],f=v.children;if(f.length>0){r.graphSet.push(f);for(var i=0;i<f.length;i++)s[++c]=f[i]}}for(var i=0;i<r.graphSet.length;i++)for(var y=r.graphSet[i],m=0;m<y.length;m++){var b=r.idToIndex[y[m]];r.indexToGraph[b]=i}for(var x=e.edges(),i=0;i<r.edgeSize;i++){var _=x[i],E={};E.id=_.data("id"),E.sourceId=_.data("source"),E.targetId=_.data("target");var S=t.idealEdgeLength,P=r.idToIndex[E.sourceId],k=r.idToIndex[E.targetId],C=r.indexToGraph[P],D=r.indexToGraph[k];if(C!=D){for(var N=a(E.sourceId,E.targetId,r),M=r.graphSet[N],T=0,o=r.layoutNodes[P];-1===$.inArray(o.id,M);)o=r.layoutNodes[r.idToIndex[o.parentId]],T++;for(o=r.layoutNodes[k];-1===$.inArray(o.id,M);)o=r.layoutNodes[r.idToIndex[o.parentId]],T++;w("LCA of nodes "+E.sourceId+" and "+E.targetId+". Index: "+N+" Contents: "+M.toString()+". Depth: "+T),S*=T*t.nestingFactor}E.idealLength=S,r.layoutEdges.push(E)}return r},a=function(e,t,r){var n=o(e,t,0,r);return 2>n.count?0:n.graph},o=function(e,t,r,n){var i=n.graphSet[r];if(-1<$.inArray(e,i)&&-1<$.inArray(t,i))return{count:2,graph:r};for(var a=0,s=0;s<i.length;s++){var l=i[s],c=n.idToIndex[l],u=n.layoutNodes[c].children;if(0!==u.length){var d=n.indexToGraph[n.idToIndex[u[0]]],p=o(e,t,d,n);if(0!==p.count){if(1!==p.count)return p;if(a++,2===a)break}}}return{count:a,graph:r}},s=function(e){if(r){console.debug("layoutNodes:");for(var t=0;t<e.nodeSize;t++){var n=e.layoutNodes[t],i="\nindex: "+t+"\nId: "+n.id+"\nChildren: "+n.children.toString()+"\nparentId: "+n.parentId+"\npositionX: "+n.positionX+"\npositionY: "+n.positionY+"\nOffsetX: "+n.offsetX+"\nOffsetY: "+n.offsetY+"\npadLeft: "+n.padLeft+"\npadRight: "+n.padRight+"\npadTop: "+n.padTop+"\npadBottom: "+n.padBottom;console.debug(i)}console.debug("idToIndex");for(var t in e.idToIndex)console.debug("Id: "+t+"\nIndex: "+e.idToIndex[t]);console.debug("Graph Set");for(var a=e.graphSet,t=0;t<a.length;t++)console.debug("Set : "+t+": "+a[t].toString());for(var i="IndexToGraph",t=0;t<e.indexToGraph.length;t++)i+="\nIndex : "+t+" Graph: "+e.indexToGraph[t];console.debug(i),i="Layout Edges";for(var t=0;t<e.layoutEdges.length;t++){var o=e.layoutEdges[t];i+="\nEdge Index: "+t+" ID: "+o.id+" SouceID: "+o.sourceId+" TargetId: "+o.targetId+" Ideal Length: "+o.idealLength}console.debug(i),i="nodeSize: "+e.nodeSize,i+="\nedgeSize: "+e.edgeSize,i+="\ntemperature: "+e.temperature,console.debug(i)}},l=function(e){for(var t=e.clientWidth,r=e.clientHeight,n=0;n<e.nodeSize;n++){var i=e.layoutNodes[n];i.positionX=Math.random()*t,i.positionY=Math.random()*r}},c=function(e,t,r){var n="Refreshing positions";w(n),t.nodes().positions(function(t,r){var i=e.layoutNodes[e.idToIndex[r.data("id")]];return n="Node: "+i.id+". Refreshed position: ("+i.positionX+", "+i.positionY+").",w(n),{x:i.positionX,y:i.positionY}}),!0!==e.ready&&(n="Triggering layoutready",w(n),e.ready=!0,t.one("layoutready",r.ready),t.trigger("layoutready"))},u=function(e,t,r,n){var i="\n\n###############################";i+="\nSTEP: "+n,i+="\n###############################\n",w(i),d(e,t,r),v(e,t,r),f(e,t,r),y(e,t,r),m(e,t,r)},d=function(e,t,r){var n="calculateNodeForces";w(n);for(var i=0;i<e.graphSet.length;i++){var a=e.graphSet[i],o=a.length;n="Set: "+a.toString(),w(n);for(var s=0;o>s;s++)for(var l=e.layoutNodes[e.idToIndex[a[s]]],c=s+1;o>c;c++){var u=e.layoutNodes[e.idToIndex[a[c]]];p(l,u,e,t,r)}}},p=function(e,t,r,n,i){var a="Node repulsion. Node1: "+e.id+" Node2: "+t.id,o=t.positionX-e.positionX,s=t.positionY-e.positionY;if(a+="\ndirectionX: "+o+", directionY: "+s,0===o&&0===s)return void(a+="\nNodes have the same position.");var l=g(e,t,o,s);if(l>0){a+="\nNodes DO overlap.",a+="\nOverlap: "+l;var c=i.nodeOverlap*l,u=Math.sqrt(o*o+s*s);a+="\nDistance: "+u;var d=c*o/u,p=c*s/u}else{a+="\nNodes do NOT overlap.";var v=h(e,o,s),f=h(t,-1*o,-1*s),y=f.x-v.x,m=f.y-v.y,b=y*y+m*m,u=Math.sqrt(b);a+="\nDistance: "+u;var c=i.nodeRepulsion/b,d=c*y/u,p=c*m/u}e.offsetX-=d,e.offsetY-=p,t.offsetX+=d,t.offsetY+=p,a+="\nForceX: "+d+" ForceY: "+p,w(a)},h=function(e,t,r){var n=e.positionX,i=e.positionY,a=e.height,o=e.width,s=r/t,l=a/o,c="Computing clipping point of node "+e.id+" . Height:  "+a+", Width: "+o+"\nDirection "+t+", "+r,u={};do{if(0===t&&r>0){u.x=n,c+="\nUp direction",u.y=i+a/2;break}if(0===t&&0>r){u.x=n,u.y=i+a/2,c+="\nDown direction";break}if(t>0&&s>=-1*l&&l>=s){u.x=n+o/2,u.y=i+o*r/2/t,c+="\nRightborder";break}if(0>t&&s>=-1*l&&l>=s){u.x=n-o/2,u.y=i-o*r/2/t,c+="\nLeftborder";break}if(r>0&&(-1*l>=s||s>=l)){u.x=n+a*t/2/r,u.y=i+a/2,c+="\nTop border";break}if(0>r&&(-1*l>=s||s>=l)){u.x=n-a*t/2/r,u.y=i-a/2,c+="\nBottom border";break}}while(!1);return c+="\nClipping point found at "+u.x+", "+u.y,w(c),u},g=function(e,t,r,n){if(r>0)var i=e.maxX-t.minX;else var i=t.maxX-e.minX;if(n>0)var a=e.maxY-t.minY;else var a=t.maxY-e.minY;return i>=0&&a>=0?Math.sqrt(i*i+a*a):0},v=function(e,t,r){for(var n=0;n<e.edgeSize;n++){var i=e.layoutEdges[n],a=e.idToIndex[i.sourceId],o=e.layoutNodes[a],s=e.idToIndex[i.targetId],l=e.layoutNodes[s],c=l.positionX-o.positionX,u=l.positionY-o.positionY;if(0===c&&0===u)return;var d=h(o,c,u),p=h(l,-1*c,-1*u),g=p.x-d.x,v=p.y-d.y,f=Math.sqrt(g*g+v*v),y=Math.pow(i.idealLength-f,2)/r.edgeElasticity;if(0!==f)var m=y*g/f,b=y*v/f;else var m=0,b=0;o.offsetX+=m,o.offsetY+=b,l.offsetX-=m,l.offsetY-=b;var x="Edge force between nodes "+o.id+" and "+l.id;x+="\nDistance: "+f+" Force: ("+m+", "+b+")",w(x)}},f=function(e,t,r){var n="calculateGravityForces";w(n);for(var i=0;i<e.graphSet.length;i++){var a=e.graphSet[i],o=a.length;if(n="Set: "+a.toString(),w(n),0===i)var s=e.clientHeight/2,l=e.clientWidth/2;else var c=e.layoutNodes[e.idToIndex[a[0]]],u=e.layoutNodes[e.idToIndex[c.parentId]],s=u.positionX,l=u.positionY;n="Center found at: "+s+", "+l,w(n);for(var d=0;o>d;d++){var p=e.layoutNodes[e.idToIndex[a[d]]];n="Node: "+p.id;var h=s-p.positionX,g=l-p.positionY,v=Math.sqrt(h*h+g*g);if(v>1){var f=r.gravity*h/v,y=r.gravity*g/v;p.offsetX+=f,p.offsetY+=y,n+=": Applied force: "+f+", "+y}else n+=": skypped since it's too close to center";w(n)}}},y=function(e){var t=[],r=0,n=-1;for(w("propagateForces"),t.push.apply(t,e.graphSet[0]),n+=e.graphSet[0].length;n>=r;){var i=t[r++],a=e.idToIndex[i],o=e.layoutNodes[a],s=o.children;if(0<s.length){var l=o.offsetX,c=o.offsetY,u="Propagating offset from parent node : "+o.id+". OffsetX: "+l+". OffsetY: "+c;u+="\n Children: "+s.toString(),w(u);for(var d=0;d<s.length;d++){var p=e.layoutNodes[e.idToIndex[s[d]]];p.offsetX+=l,p.offsetY+=c,t[++n]=s[d]}o.offsetX=0,o.offsetY=0}}},m=function(e){var t="Updating positions";w(t);for(var r=0;r<e.nodeSize;r++){var n=e.layoutNodes[r];0<n.children.length&&(w("Resetting boundaries of compound node: "+n.id),n.maxX=void 0,n.minX=void 0,n.maxY=void 0,n.minY=void 0)}for(var r=0;r<e.nodeSize;r++){var n=e.layoutNodes[r];if(0<n.children.length)w("Skipping position update of node: "+n.id);else{t="Node: "+n.id+" Previous position: ("+n.positionX+", "+n.positionY+").";var i=b(n.offsetX,n.offsetY,e.temperature);n.positionX+=i.x,n.positionY+=i.y,n.offsetX=0,n.offsetY=0,n.minX=n.positionX-n.width,n.maxX=n.positionX+n.width,n.minY=n.positionY-n.height,n.maxY=n.positionY+n.height,t+=" New Position: ("+n.positionX+", "+n.positionY+").",w(t),x(n,e)}}for(var r=0;r<e.nodeSize;r++){var n=e.layoutNodes[r];0<n.children.length&&(n.positionX=(n.maxX+n.minX)/2,n.positionY=(n.maxY+n.minY)/2,n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,t="Updating position, size of compound node "+n.id,t+="\nPositionX: "+n.positionX+", PositionY: "+n.positionY,t+="\nWidth: "+n.width+", Height: "+n.height,w(t))}},b=function(e,t,r){var n="Limiting force: ("+e+", "+t+"). Max: "+r,i=Math.sqrt(e*e+t*t);if(i>r)var a={x:r*e/i,y:r*t/i};else var a={x:e,y:t};return n+=".\nResult: ("+a.x+", "+a.y+")",w(n),a},x=function(e,t){var r="Propagating new position/size of node "+e.id,n=e.parentId;if(null==n)return r+=". No parent node.",void w(r);var i=t.layoutNodes[t.idToIndex[n]],a=!1;return(null==i.maxX||e.maxX+i.padRight>i.maxX)&&(i.maxX=e.maxX+i.padRight,a=!0,r+="\nNew maxX for parent node "+i.id+": "+i.maxX),(null==i.minX||e.minX-i.padLeft<i.minX)&&(i.minX=e.minX-i.padLeft,a=!0,r+="\nNew minX for parent node "+i.id+": "+i.minX),(null==i.maxY||e.maxY+i.padBottom>i.maxY)&&(i.maxY=e.maxY+i.padBottom,a=!0,r+="\nNew maxY for parent node "+i.id+": "+i.maxY),(null==i.minY||e.minY-i.padTop<i.minY)&&(i.minY=e.minY-i.padTop,a=!0,r+="\nNew minY for parent node "+i.id+": "+i.minY),a?(w(r),x(i,t)):(r+=". No changes in boundaries/position of parent node "+i.id,void w(r))},w=function(e){r&&console.debug(e)};e("layout","cose",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,padding:30,rows:void 0,columns:void 0,position:function(){},ready:void 0,stop:void 0};t.prototype.run=function(){var e=this.options,t=e,r=e.cy,n=r.nodes(),i=r.container(),a=i.clientWidth,o=i.clientHeight;if(0===o||0===a)n.positions(function(){return{x:0,y:0}});else{var s=n.size(),l=Math.sqrt(s*o/a),c=Math.round(l),u=Math.round(a/o*l),d=function(e){if(null==e)return Math.min(c,u);var t=Math.min(c,u);t==c?c=e:u=e},p=function(e){if(null==e)return Math.max(c,u);var t=Math.max(c,u);t==c?c=e:u=e};if(null!=t.rows&&null!=t.columns)c=t.rows,u=t.columns;else if(null!=t.rows&&null==t.columns)c=t.rows,u=Math.ceil(s/c);else if(null==t.rows&&null!=t.columns)u=t.columns,c=Math.ceil(s/u);else if(u*c>s){var h=d(),g=p();(h-1)*g>=s?d(h-1):(g-1)*h>=s&&p(g-1)}else for(;s>u*c;){var h=d(),g=p();(g+1)*h>=s?p(g+1):d(h+1)}for(var v=a/u,f=o/c,y=0;y<n.length;y++){var m=n[y],b=m.outerWidth(),x=m.outerHeight();v=Math.max(v,b),f=Math.max(f,x)}for(var w={},_=function(e,t){return w["c-"+e+"-"+t]?!0:!1},E=function(e,t){w["c-"+e+"-"+t]=!0},S=0,P=0,k=function(){P++,P>=u&&(P=0,S++)},C={},y=0;y<n.length;y++){var m=n[y],D=t.position(m);if(D&&(void 0!==D.row||void 0!==D.col)){var N={row:D.row,col:D.col};if(void 0===N.col)for(N.col=0;_(N.row,N.col);)N.col++;else if(void 0===N.row)for(N.row=0;_(N.row,N.col);)N.row++;C[m.id()]=N,E(N.row,N.col)}}n.positions(function(e,t){var r,n;if(t.locked()||t.isFullAutoParent())return!1;var i=C[t.id()];if(i)r=i.col*v+v/2,n=i.row*f+f/2;else{for(;_(S,P);)k();r=P*v+v/2,n=S*f+f/2,E(S,P),k()}return{x:r,y:n}})}e.fit&&r.fit(t.padding),r.one("layoutready",e.ready),r.trigger("layoutready"),r.one("layoutstop",e.stop),r.trigger("layoutstop")},t.prototype.stop=function(){},e("layout","grid",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={ready:function(){},stop:function(){}};t.prototype.run=function(){var e=this.options,t=e.cy;t.nodes().positions(function(){return{x:0,y:0}}),t.one("layoutready",e.ready),t.trigger("layoutready"),t.one("layoutstop",e.stop),t.trigger("layoutstop")},t.prototype.stop=function(){var e=this.options,t=e.cy;t.one("layoutstop",e.stop),t.trigger("layoutstop")},e("layout","null",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={fit:!0,ready:void 0,stop:void 0,positions:void 0,zoom:void 0,pan:void 0,padding:30};t.prototype.run=function(){function e(e){return null==t.positions?null:null==t.positions[e._private.data.id]?null:t.positions[e._private.data.id]}var t=this.options,r=t.cy,n=r.nodes();n.positions(function(t,r){var n=e(r);return r.locked()||null==n?!1:n}),null!=t.pan&&r.pan(t.pan),null!=t.zoom&&r.zoom(t.zoom),r.one("layoutready",t.ready),r.trigger("layoutready"),t.fit&&r.fit(t.padding),r.one("layoutstop",t.stop),r.trigger("layoutstop")},e("layout","preset",t),e("core","presetLayout",function(){var e=this,t={},r={};return e.nodes().each(function(e,t){r[t.data("id")]=t.position()}),t.positions=r,t.name="preset",t.zoom=e.zoom(),t.pan=e.pan(),t})}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={ready:void 0,stop:void 0,fit:!0,padding:30};t.prototype.run=function(){var e=this.options,t=e.cy,r=t.nodes(),n=t.container(),i=n.clientWidth,a=n.clientHeight;r.positions(function(e,t){return t.locked()?!1:{x:Math.round(Math.random()*i),y:Math.round(Math.random()*a)}}),t.one("layoutready",e.ready),t.trigger("layoutready"),e.fit&&t.fit(e.padding),t.one("layoutstop",e.stop),t.trigger("layoutstop")},t.prototype.stop=function(){},e("layout","random",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={maxSimulationTime:1e3,ungrabifyWhileSimulating:!0,fit:!0,random:!1};t.prototype.run=function(){function e(e){var t=e.scratch("springy").model.id,r=b.layout.nodePoints[t].p,n=e.position(),i=null!=n.x&&null!=n.y?v(e.position()):{x:4*Math.random()-2,y:4*Math.random()-2};r.x=i.x,r.y=i.y}function t(){i.ungrabifyWhileSimulating&&x.ungrabify(),b.start()}function r(e){d.filterNodes(function(){return!1}),setTimeout(function(){i.ungrabifyWhileSimulating&&x.grabify(),e()},100)}var n=this,i=this.options,a=i.cy,o=a.nodes(),s=a.edges(),l=a.container(),c=l.clientWidth,u=l.clientHeight,d=new Springy.Graph;o.each(function(e,t){t.scratch("springy",{model:d.newNode({element:t})})}),s.each(function(e,t){var r=t.source().scratch("springy").model,n=t.target().scratch("springy").model;t.scratch("springy",{model:d.newEdge(r,n,{element:t})})});var p=new Springy.Layout.ForceDirected(d,400,400,.5),h=p.getBoundingBox(),g=function(e){var t=h.topright.subtract(h.bottomleft),r=e.subtract(h.bottomleft).divide(t.x).x*c,n=e.subtract(h.bottomleft).divide(t.y).y*u;return new Springy.Vector(r,n)},v=function(e){var t=h.topright.subtract(h.bottomleft),r=e.x/c*t.x+h.bottomleft.x,n=e.y/u*t.y+h.bottomleft.y;return new Springy.Vector(r,n)},f=a.collection(),y=a.nodes().size(),m=1,b=new Springy.Renderer(p,function(){},function(){},function(t,r){var n=g(r),o=t.data.element;window.p=r,window.n=t,o.locked()?e(o):(o._private.position={x:n.x,y:n.y},f=f.add(o)),m==y&&(a.one("layoutready",i.ready),a.trigger("layoutready")),m++});o.each(function(t,r){i.random||e(r)}),setInterval(function(){f.size()>0&&(f.rtrigger("position"),f=a.collection())},50),o.bind("drag",function(){e(this)});var x=o.filter(":grabbable"),w=n.stopSystem=function(){r(function(){i.fit&&a.fit(),a.one("layoutstop",i.stop),a.trigger("layoutstop"),n.stopSystem=null})};t(),setTimeout(function(){w()},i.maxSimulationTime)},t.prototype.stop=function(){null!=this.stopSystem&&this.stopSystem()},e("layout","springy",t)}(cytoscape),function(e){"use strict";function t(e){this.options=e}t.prototype.notify=function(){},e("renderer","null",t)}(cytoscape);
/**
 * Springy v2.5.0
 *
 * Copyright (c) 2010-2013 Dennis Hotson
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {
	// Enable strict mode for EC5 compatible browsers
	"use strict";

	// Establish the root object, `window` in the browser, or `global` on the server.
	var root = this;

	// The top-level namespace. All public Springy classes and modules will
	// be attached to this. Exported for both CommonJS and the browser.
	var Springy;
	if (typeof exports !== 'undefined') {
		Springy = exports;
	} else {
		Springy = root.Springy = {};
	}

	var Graph = Springy.Graph = function() {
		this.nodeSet = {};
		this.nodes = [];
		this.edges = [];
		this.adjacency = {};

		this.nextNodeId = 0;
		this.nextEdgeId = 0;
		this.eventListeners = [];
	};

	var Node = Springy.Node = function(id, data) {
		this.id = id;
		this.data = (data !== undefined) ? data : {};

	// Data fields used by layout algorithm in this file:
	// this.data.mass
	// Data used by default renderer in springyui.js
	// this.data.label
	};

	var Edge = Springy.Edge = function(id, source, target, data) {
		this.id = id;
		this.source = source;
		this.target = target;
		this.data = (data !== undefined) ? data : {};

	// Edge data field used by layout alorithm
	// this.data.length
	// this.data.type
	};

	Graph.prototype.addNode = function(node) {
		if (!(node.id in this.nodeSet)) {
			this.nodes.push(node);
		}

		this.nodeSet[node.id] = node;

		this.notify();
		return node;
	};

	Graph.prototype.addNodes = function() {
		// accepts variable number of arguments, where each argument
		// is a string that becomes both node identifier and label
		for (var i = 0; i < arguments.length; i++) {
			var name = arguments[i];
			var node = new Node(name, {label:name});
			this.addNode(node);
		}
	};

	Graph.prototype.addEdge = function(edge) {
		var exists = false;
		this.edges.forEach(function(e) {
			if (edge.id === e.id) { exists = true; }
		});

		if (!exists) {
			this.edges.push(edge);
		}

		if (!(edge.source.id in this.adjacency)) {
			this.adjacency[edge.source.id] = {};
		}
		if (!(edge.target.id in this.adjacency[edge.source.id])) {
			this.adjacency[edge.source.id][edge.target.id] = [];
		}

		exists = false;
		this.adjacency[edge.source.id][edge.target.id].forEach(function(e) {
				if (edge.id === e.id) { exists = true; }
		});

		if (!exists) {
			this.adjacency[edge.source.id][edge.target.id].push(edge);
		}

		this.notify();
		return edge;
	};

	Graph.prototype.addEdges = function() {
		// accepts variable number of arguments, where each argument
		// is a triple [nodeid1, nodeid2, attributes]
		for (var i = 0; i < arguments.length; i++) {
			var e = arguments[i];
			var node1 = this.nodeSet[e[0]];
			if (node1 == undefined) {
				throw new TypeError("invalid node name: " + e[0]);
			}
			var node2 = this.nodeSet[e[1]];
			if (node2 == undefined) {
				throw new TypeError("invalid node name: " + e[1]);
			}
			var attr = e[2];

			this.newEdge(node1, node2, attr);
		}
	};

	Graph.prototype.newNode = function(data) {
		var node = new Node(this.nextNodeId++, data);
		this.addNode(node);
		return node;
	};

	Graph.prototype.newEdge = function(source, target, data) {
		var edge = new Edge(this.nextEdgeId++, source, target, data);
		this.addEdge(edge);
		return edge;
	};


	// add nodes and edges from JSON object
	Graph.prototype.loadJSON = function(json) {
	/**
	Springy's simple JSON format for graphs.

	historically, Springy uses separate lists
	of nodes and edges:

		{
			"nodes": [
				"center",
				"left",
				"right",
				"up",
				"satellite"
			],
			"edges": [
				["center", "left"],
				["center", "right"],
				["center", "up"]
			]
		}

	**/
		// parse if a string is passed (EC5+ browsers)
		if (typeof json == 'string' || json instanceof String) {
			json = JSON.parse( json );
		}

		if ('nodes' in json || 'edges' in json) {
			this.addNodes.apply(this, json['nodes']);
			this.addEdges.apply(this, json['edges']);
		}
	}


	// find the edges from node1 to node2
	Graph.prototype.getEdges = function(node1, node2) {
		if (node1.id in this.adjacency
			&& node2.id in this.adjacency[node1.id]) {
			return this.adjacency[node1.id][node2.id];
		}

		return [];
	};

	// remove a node and it's associated edges from the graph
	Graph.prototype.removeNode = function(node) {
		if (node.id in this.nodeSet) {
			delete this.nodeSet[node.id];
		}

		for (var i = this.nodes.length - 1; i >= 0; i--) {
			if (this.nodes[i].id === node.id) {
				this.nodes.splice(i, 1);
			}
		}

		this.detachNode(node);
	};

	// removes edges associated with a given node
	Graph.prototype.detachNode = function(node) {
		var tmpEdges = this.edges.slice();
		tmpEdges.forEach(function(e) {
			if (e.source.id === node.id || e.target.id === node.id) {
				this.removeEdge(e);
			}
		}, this);

		this.notify();
	};

	// remove a node and it's associated edges from the graph
	Graph.prototype.removeEdge = function(edge) {
		for (var i = this.edges.length - 1; i >= 0; i--) {
			if (this.edges[i].id === edge.id) {
				this.edges.splice(i, 1);
			}
		}

		for (var x in this.adjacency) {
			for (var y in this.adjacency[x]) {
				var edges = this.adjacency[x][y];

				for (var j=edges.length - 1; j>=0; j--) {
					if (this.adjacency[x][y][j].id === edge.id) {
						this.adjacency[x][y].splice(j, 1);
					}
				}

				// Clean up empty edge arrays
				if (this.adjacency[x][y].length == 0) {
					delete this.adjacency[x][y];
				}
			}

			// Clean up empty objects
			if (isEmpty(this.adjacency[x])) {
				delete this.adjacency[x];
			}
		}

		this.notify();
	};

	/* Merge a list of nodes and edges into the current graph. eg.
	var o = {
		nodes: [
			{id: 123, data: {type: 'user', userid: 123, displayname: 'aaa'}},
			{id: 234, data: {type: 'user', userid: 234, displayname: 'bbb'}}
		],
		edges: [
			{from: 0, to: 1, type: 'submitted_design', directed: true, data: {weight: }}
		]
	}
	*/
	Graph.prototype.merge = function(data) {
		var nodes = [];
		data.nodes.forEach(function(n) {
			nodes.push(this.addNode(new Node(n.id, n.data)));
		}, this);

		data.edges.forEach(function(e) {
			var from = nodes[e.from];
			var to = nodes[e.to];

			var id = (e.directed)
				? (id = e.type + "-" + from.id + "-" + to.id)
				: (from.id < to.id) // normalise id for non-directed edges
					? e.type + "-" + from.id + "-" + to.id
					: e.type + "-" + to.id + "-" + from.id;

			var edge = this.addEdge(new Edge(id, from, to, e.data));
			edge.data.type = e.type;
		}, this);
	};

	Graph.prototype.filterNodes = function(fn) {
		var tmpNodes = this.nodes.slice();
		tmpNodes.forEach(function(n) {
			if (!fn(n)) {
				this.removeNode(n);
			}
		}, this);
	};

	Graph.prototype.filterEdges = function(fn) {
		var tmpEdges = this.edges.slice();
		tmpEdges.forEach(function(e) {
			if (!fn(e)) {
				this.removeEdge(e);
			}
		}, this);
	};


	Graph.prototype.addGraphListener = function(obj) {
		this.eventListeners.push(obj);
	};

	Graph.prototype.notify = function() {
		this.eventListeners.forEach(function(obj){
			obj.graphChanged();
		});
	};

	// -----------
	var Layout = Springy.Layout = {};
	Layout.ForceDirected = function(graph, stiffness, repulsion, damping, minEnergyThreshold) {
		this.graph = graph;
		this.stiffness = stiffness; // spring stiffness constant
		this.repulsion = repulsion; // repulsion constant
		this.damping = damping; // velocity damping factor
		this.minEnergyThreshold = minEnergyThreshold || 0.01; //threshold used to determine render stop 

		this.nodePoints = {}; // keep track of points associated with nodes
		this.edgeSprings = {}; // keep track of springs associated with edges
	};

	Layout.ForceDirected.prototype.point = function(node) {
		if (!(node.id in this.nodePoints)) {
			var mass = (node.data.mass !== undefined) ? node.data.mass : 1.0;
			this.nodePoints[node.id] = new Layout.ForceDirected.Point(Vector.random(), mass);
		}

		return this.nodePoints[node.id];
	};

	Layout.ForceDirected.prototype.spring = function(edge) {
		if (!(edge.id in this.edgeSprings)) {
			var length = (edge.data.length !== undefined) ? edge.data.length : 1.0;

			var existingSpring = false;

			var from = this.graph.getEdges(edge.source, edge.target);
			from.forEach(function(e) {
				if (existingSpring === false && e.id in this.edgeSprings) {
					existingSpring = this.edgeSprings[e.id];
				}
			}, this);

			if (existingSpring !== false) {
				return new Layout.ForceDirected.Spring(existingSpring.point1, existingSpring.point2, 0.0, 0.0);
			}

			var to = this.graph.getEdges(edge.target, edge.source);
			from.forEach(function(e){
				if (existingSpring === false && e.id in this.edgeSprings) {
					existingSpring = this.edgeSprings[e.id];
				}
			}, this);

			if (existingSpring !== false) {
				return new Layout.ForceDirected.Spring(existingSpring.point2, existingSpring.point1, 0.0, 0.0);
			}

			this.edgeSprings[edge.id] = new Layout.ForceDirected.Spring(
				this.point(edge.source), this.point(edge.target), length, this.stiffness
			);
		}

		return this.edgeSprings[edge.id];
	};

	// callback should accept two arguments: Node, Point
	Layout.ForceDirected.prototype.eachNode = function(callback) {
		var t = this;
		this.graph.nodes.forEach(function(n){
			callback.call(t, n, t.point(n));
		});
	};

	// callback should accept two arguments: Edge, Spring
	Layout.ForceDirected.prototype.eachEdge = function(callback) {
		var t = this;
		this.graph.edges.forEach(function(e){
			callback.call(t, e, t.spring(e));
		});
	};

	// callback should accept one argument: Spring
	Layout.ForceDirected.prototype.eachSpring = function(callback) {
		var t = this;
		this.graph.edges.forEach(function(e){
			callback.call(t, t.spring(e));
		});
	};


	// Physics stuff
	Layout.ForceDirected.prototype.applyCoulombsLaw = function() {
		this.eachNode(function(n1, point1) {
			this.eachNode(function(n2, point2) {
				if (point1 !== point2)
				{
					var d = point1.p.subtract(point2.p);
					var distance = d.magnitude() + 0.1; // avoid massive forces at small distances (and divide by zero)
					var direction = d.normalise();

					// apply force to each end point
					point1.applyForce(direction.multiply(this.repulsion).divide(distance * distance * 0.5));
					point2.applyForce(direction.multiply(this.repulsion).divide(distance * distance * -0.5));
				}
			});
		});
	};

	Layout.ForceDirected.prototype.applyHookesLaw = function() {
		this.eachSpring(function(spring){
			var d = spring.point2.p.subtract(spring.point1.p); // the direction of the spring
			var displacement = spring.length - d.magnitude();
			var direction = d.normalise();

			// apply force to each end point
			spring.point1.applyForce(direction.multiply(spring.k * displacement * -0.5));
			spring.point2.applyForce(direction.multiply(spring.k * displacement * 0.5));
		});
	};

	Layout.ForceDirected.prototype.attractToCentre = function() {
		this.eachNode(function(node, point) {
			var direction = point.p.multiply(-1.0);
			point.applyForce(direction.multiply(this.repulsion / 50.0));
		});
	};


	Layout.ForceDirected.prototype.updateVelocity = function(timestep) {
		this.eachNode(function(node, point) {
			// Is this, along with updatePosition below, the only places that your
			// integration code exist?
			point.v = point.v.add(point.a.multiply(timestep)).multiply(this.damping);
			point.a = new Vector(0,0);
		});
	};

	Layout.ForceDirected.prototype.updatePosition = function(timestep) {
		this.eachNode(function(node, point) {
			// Same question as above; along with updateVelocity, is this all of
			// your integration code?
			point.p = point.p.add(point.v.multiply(timestep));
		});
	};

	// Calculate the total kinetic energy of the system
	Layout.ForceDirected.prototype.totalEnergy = function(timestep) {
		var energy = 0.0;
		this.eachNode(function(node, point) {
			var speed = point.v.magnitude();
			energy += 0.5 * point.m * speed * speed;
		});

		return energy;
	};

	var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }; // stolen from coffeescript, thanks jashkenas! ;-)

	Springy.requestAnimationFrame = __bind(root.requestAnimationFrame ||
		root.webkitRequestAnimationFrame ||
		root.mozRequestAnimationFrame ||
		root.oRequestAnimationFrame ||
		root.msRequestAnimationFrame ||
		(function(callback, element) {
			root.setTimeout(callback, 10);
		}), root);


	/**
	 * Start simulation if it's not running already.
	 * In case it's running then the call is ignored, and none of the callbacks passed is ever executed.
	 */
	Layout.ForceDirected.prototype.start = function(render, onRenderStop, onRenderStart) {
		var t = this;

		if (this._started) return;
		this._started = true;
		this._stop = false;

		if (onRenderStart !== undefined) { onRenderStart(); }

		Springy.requestAnimationFrame(function step() {
			t.tick(0.03);

			if (render !== undefined) {
				render();
			}

			// stop simulation when energy of the system goes below a threshold
			if (t._stop || t.totalEnergy() < t.minEnergyThreshold) {
				t._started = false;
				if (onRenderStop !== undefined) { onRenderStop(); }
			} else {
				Springy.requestAnimationFrame(step);
			}
		});
	};

	Layout.ForceDirected.prototype.stop = function() {
		this._stop = true;
	}

	Layout.ForceDirected.prototype.tick = function(timestep) {
		this.applyCoulombsLaw();
		this.applyHookesLaw();
		this.attractToCentre();
		this.updateVelocity(timestep);
		this.updatePosition(timestep);
	};

	// Find the nearest point to a particular position
	Layout.ForceDirected.prototype.nearest = function(pos) {
		var min = {node: null, point: null, distance: null};
		var t = this;
		this.graph.nodes.forEach(function(n){
			var point = t.point(n);
			var distance = point.p.subtract(pos).magnitude();

			if (min.distance === null || distance < min.distance) {
				min = {node: n, point: point, distance: distance};
			}
		});

		return min;
	};

	// returns [bottomleft, topright]
	Layout.ForceDirected.prototype.getBoundingBox = function() {
		var bottomleft = new Vector(-2,-2);
		var topright = new Vector(2,2);

		this.eachNode(function(n, point) {
			if (point.p.x < bottomleft.x) {
				bottomleft.x = point.p.x;
			}
			if (point.p.y < bottomleft.y) {
				bottomleft.y = point.p.y;
			}
			if (point.p.x > topright.x) {
				topright.x = point.p.x;
			}
			if (point.p.y > topright.y) {
				topright.y = point.p.y;
			}
		});

		var padding = topright.subtract(bottomleft).multiply(0.07); // ~5% padding

		return {bottomleft: bottomleft.subtract(padding), topright: topright.add(padding)};
	};


	// Vector
	var Vector = Springy.Vector = function(x, y) {
		this.x = x;
		this.y = y;
	};

	Vector.random = function() {
		return new Vector(10.0 * (Math.random() - 0.5), 10.0 * (Math.random() - 0.5));
	};

	Vector.prototype.add = function(v2) {
		return new Vector(this.x + v2.x, this.y + v2.y);
	};

	Vector.prototype.subtract = function(v2) {
		return new Vector(this.x - v2.x, this.y - v2.y);
	};

	Vector.prototype.multiply = function(n) {
		return new Vector(this.x * n, this.y * n);
	};

	Vector.prototype.divide = function(n) {
		return new Vector((this.x / n) || 0, (this.y / n) || 0); // Avoid divide by zero errors..
	};

	Vector.prototype.magnitude = function() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	};

	Vector.prototype.normal = function() {
		return new Vector(-this.y, this.x);
	};

	Vector.prototype.normalise = function() {
		return this.divide(this.magnitude());
	};

	// Point
	Layout.ForceDirected.Point = function(position, mass) {
		this.p = position; // position
		this.m = mass; // mass
		this.v = new Vector(0, 0); // velocity
		this.a = new Vector(0, 0); // acceleration
	};

	Layout.ForceDirected.Point.prototype.applyForce = function(force) {
		this.a = this.a.add(force.divide(this.m));
	};

	// Spring
	Layout.ForceDirected.Spring = function(point1, point2, length, k) {
		this.point1 = point1;
		this.point2 = point2;
		this.length = length; // spring length at rest
		this.k = k; // spring constant (See Hooke's law) .. how stiff the spring is
	};

	// Layout.ForceDirected.Spring.prototype.distanceToPoint = function(point)
	// {
	// 	// hardcore vector arithmetic.. ohh yeah!
	// 	// .. see http://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment/865080#865080
	// 	var n = this.point2.p.subtract(this.point1.p).normalise().normal();
	// 	var ac = point.p.subtract(this.point1.p);
	// 	return Math.abs(ac.x * n.x + ac.y * n.y);
	// };

	/**
	 * Renderer handles the layout rendering loop
	 * @param onRenderStop optional callback function that gets executed whenever rendering stops.
	 * @param onRenderStart optional callback function that gets executed whenever rendering starts.
	 */
	var Renderer = Springy.Renderer = function(layout, clear, drawEdge, drawNode, onRenderStop, onRenderStart) {
		this.layout = layout;
		this.clear = clear;
		this.drawEdge = drawEdge;
		this.drawNode = drawNode;
		this.onRenderStop = onRenderStop;
		this.onRenderStart = onRenderStart;

		this.layout.graph.addGraphListener(this);
	}

	Renderer.prototype.graphChanged = function(e) {
		this.start();
	};

	/**
	 * Starts the simulation of the layout in use.
	 *
	 * Note that in case the algorithm is still or already running then the layout that's in use
	 * might silently ignore the call, and your optional <code>done</code> callback is never executed.
	 * At least the built-in ForceDirected layout behaves in this way.
	 *
	 * @param done An optional callback function that gets executed when the springy algorithm stops,
	 * either because it ended or because stop() was called.
	 */
	Renderer.prototype.start = function(done) {
		var t = this;
		this.layout.start(function render() {
			t.clear();

			t.layout.eachEdge(function(edge, spring) {
				t.drawEdge(edge, spring.point1.p, spring.point2.p);
			});

			t.layout.eachNode(function(node, point) {
				t.drawNode(node, point.p);
			});
		}, this.onRenderStart, this.onRenderStop);
	};

	Renderer.prototype.stop = function() {
		this.layout.stop();
	};

	// Array.forEach implementation for IE support..
	//https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
	if ( !Array.prototype.forEach ) {
		Array.prototype.forEach = function( callback, thisArg ) {
			var T, k;
			if ( this == null ) {
				throw new TypeError( " this is null or not defined" );
			}
			var O = Object(this);
			var len = O.length >>> 0; // Hack to convert O.length to a UInt32
			if ( {}.toString.call(callback) != "[object Function]" ) {
				throw new TypeError( callback + " is not a function" );
			}
			if ( thisArg ) {
				T = thisArg;
			}
			k = 0;
			while( k < len ) {
				var kValue;
				if ( k in O ) {
					kValue = O[ k ];
					callback.call( T, kValue, k, O );
				}
				k++;
			}
		};
	}

	var isEmpty = function(obj) {
		for (var k in obj) {
			if (obj.hasOwnProperty(k)) {
				return false;
			}
		}
		return true;
	};
}).call(this);
