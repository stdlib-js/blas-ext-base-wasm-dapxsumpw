"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=o(function(H,c){
var W=require("path").resolve,A=require('@stdlib/fs-read-wasm/dist').sync,O=A(W(__dirname,"..","src","main.wasm"));c.exports=O
});var d=o(function(I,f){
var S=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=y();function s(e){if(!(this instanceof s))return new s(e);if(!S(e))throw new TypeError(j('nullH0',e));return m.call(this,z,e,{env:{memory:e}}),this}g(s,m);q(s.prototype,"main",function(r,i,a,t){return this._instance.exports.stdlib_strided_dapxsumpw(r,i,a,t)});q(s.prototype,"ndarray",function(r,i,a,t,p){return this._instance.exports.stdlib_strided_dapxsumpw_ndarray(r,i,a,t,p)});f.exports=s
});var x=o(function(J,h){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/strided-base-stride2offset/dist'),T=require('@stdlib/wasm-memory/dist'),V=require('@stdlib/wasm-base-arrays2ptrs/dist'),k=require('@stdlib/wasm-base-strided2object/dist'),v=d();function n(){return this instanceof n?(v.call(this,new T({initial:0})),this):new n}B(n,v);w(n.prototype,"main",function(r,i,a,t){return this.ndarray(r,i,a,t,E(r,t))});w(n.prototype,"ndarray",function(r,i,a,t,p){var l,u;return l=V(this,[k(r,a,t,p)]),u=l[0],v.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});h.exports=n
});var b=o(function(K,_){
var C=x(),M=new C;M.initializeSync();_.exports=M
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=b(),F=d();D(R,"Module",F);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
