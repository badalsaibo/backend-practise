(this["webpackJsonpfullstack-practise"]=this["webpackJsonpfullstack-practise"]||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return o.a.createElement("li",null,e.content,o.a.createElement("button",{onClick:n},r))},f=n(3),s=n.n(f),m=function(){var t=s.a.get("/notes"),e={id:1e3,content:"This is not saved to the server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},p=function(t){return s.a.post("/notes",t).then((function(t){return t.data}))},b=function(t,e){return s.a.put("".concat("/notes","/").concat(t),e).then((function(t){return t.data}))};n(37);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var O=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},v=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},g=function(t){var e=Object(r.useState)([]),n=Object(i.a)(e,2),a=n[0],c=n[1],f=Object(r.useState)("Type your note here..."),s=Object(i.a)(f,2),g=s[0],h=s[1],E=Object(r.useState)(!0),y=Object(i.a)(E,2),j=y[0],S=y[1],k=Object(r.useState)(null),w=Object(i.a)(k,2),P=w[0],D=w[1];Object(r.useEffect)((function(){m().then((function(t){c(t)}))}),[]);var C=j?a:a.filter((function(t){return t.important})),I=function(t){console.log("importance of "+t+" needs to be toggled");var e=a.find((function(e){return e.id===t})),n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{important:!e.important});b(t,n).then((function(e){c(a.map((function(n){return n.id!==t?n:e})))})).catch((function(n){D("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){D(null)}),5e3),c(a.filter((function(e){return e.id!==t})))}))};return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(O,{message:P}),o.a.createElement("button",{onClick:function(){S(!j)}},"show ",j?"important":"all"),o.a.createElement("ul",null,C.map((function(t){return o.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return I(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:g,date:(new Date).toISOString(),important:Math.random()>.5,id:a.length+1};p(e).then((function(t){c(a.concat(t)),h("")}))}},o.a.createElement("input",{value:g,onChange:function(t){h(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement(v,null))};c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eb3310aa.chunk.js.map