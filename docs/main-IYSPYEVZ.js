import{N as a,O as c,P as f,R as d,U as n,X as l,Y as u,g as e,i as m,j as i,v as p}from"./chunk-FJFUZSK7.js";var g=[{path:"countries",loadChildren:()=>import("./chunk-JXFORQZD.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],M=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i({type:t}),t.\u0275inj=e({imports:[n.forRoot(g),n]});let o=t;return o})();var C=(()=>{let t=class t{constructor(){this.title="country-app"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(r,b){r&1&&p(0,"shared-sidebar")(1,"router-outlet")},dependencies:[d,l]});let o=t;return o})();var y=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i({type:t,bootstrap:[C]}),t.\u0275inj=e({imports:[f,M,a,u]});let o=t;return o})();c().bootstrapModule(y).catch(o=>console.error(o));