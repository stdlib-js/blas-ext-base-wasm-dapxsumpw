"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(H,y){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));y.exports=A
});var d=o(function(I,w){
var O=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),f=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=q();function s(e){if(!(this instanceof s))return new s(e);if(!O(e))throw new TypeError(g('29jH0',e));return f.call(this,j,e,{env:{memory:e}}),this}S(s,f);m(s.prototype,"main",function(r,i,a,t){return this._instance.exports.stdlib_strided_dapxsumpw(r,i,a,t)});m(s.prototype,"ndarray",function(r,i,a,t,p){return this._instance.exports.stdlib_strided_dapxsumpw_ndarray(r,i,a,t,p)});w.exports=s
});var M=o(function(J,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),v=d();function n(){return this instanceof n?(v.call(this,new E({initial:0})),this):new n}z(n,v);h(n.prototype,"main",function(r,i,a,t){return this.ndarray(r,i,a,t,B(r,t))});h(n.prototype,"ndarray",function(r,i,a,t,p){var c,u;return c=T(this,[V(r,a,t,p)]),u=c[0],v.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});x.exports=n
});var b=o(function(K,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=M(),D=d(),l=new C;l.initializeSync();k(l,"Module",D.bind(null));_.exports=l
});var F=b();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
