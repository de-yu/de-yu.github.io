!function(t){function e(e){for(var n,l,i=e[0],u=e[1],c=e[2],s=0,p=[];s<i.length;s++)l=i[s],a[l]&&p.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(f&&f(e);p.length;)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={1:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/js/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var f=u;o.push([2,0]),r()}({2:function(t,e,r){var n=r(0);!function(){var t=n.range(1e3).map(n.randomNormal(.5,.1)),e=n.scaleLinear().domain([0,1]).range([0,960]),r=n.histogram().domain(e.domain()).thresholds(e.ticks(20))(t),a=n.scaleLinear().domain([0,n.max(r,function(t){return t.length})]).range([0,500]),o=n.axisBottom(e),l=n.select("body").append("svg").attr("width",990).attr("height",530).append("g").attr("transform","translate(12,6)");l.selectAll(".bar").data(r).enter().append("g").attr("class","bar").attr("transform",function(t,r){return"translate("+e(.05*r)+","+(500-a(t.length))+")"}).append("rect").attr("width",960/r.length).attr("height",function(t){return a(t.length)+5}).attr("fill",function(t,e){return n.interpolateRdYlGn(e/r.length)}),l.append("g").attr("class","x axis").attr("transform","translate(6,500)").call(o)}()}});