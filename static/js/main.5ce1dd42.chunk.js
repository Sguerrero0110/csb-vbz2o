(this["webpackJsonpproject-pre-59-19-2021"]=this["webpackJsonpproject-pre-59-19-2021"]||[]).push([[0],{20:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(11),c=r.n(n),l=r(7),o=r(1),s=r(3),u=r(9),b=r(6),d=r(4),i=r.n(d),j=r(12),p=r(0);var O=function(e){var t=e.columns,r=e.data,a=e.setSelectedRow,n=e.selectedRow,c=Object(j.useTable)({columns:t,data:r}),l=c.getTableProps,s=c.getTableBodyProps,u=c.headerGroups,b=c.rows,d=c.prepareRow;return Object(p.jsxs)("table",Object(o.a)(Object(o.a)({},l()),{},{children:[Object(p.jsx)("thead",{children:u.map((function(e){return Object(p.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(p.jsx)("tbody",Object(o.a)(Object(o.a)({},s()),{},{children:b.map((function(e,t){return d(e),Object(p.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{onClick:function(e){return a(t)},className:n===t?"bg-yellow-700":"hover:bg-yellow-700",children:e.cells.map((function(e){return Object(p.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))};var f=function(e){var t=e.className,r=e.clickHandler,a=e.disabled,n=e.buttonLabel;return Object(p.jsx)("button",{onClick:r,disabled:a,className:t,children:n})};var h=function(e){var t=e.label,r=e.changeHandler,a=e.value,n=e.placeholder,c=e.type,l=e.className,o=e.name;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:o,children:t}),Object(p.jsx)("input",{onChange:r,value:a,className:l,name:o,placeholder:n,type:c})]})};var m=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(null),d=Object(b.a)(c,2),j=d[0],m=d[1],v=Object(a.useState)({}),g=Object(b.a)(v,2),x=g[0],w=g[1],y=Object(a.useState)([]),k=Object(b.a)(y,2),N=k[0],H=k[1],R=[{label:"edit Selected Row",handler:function(){var e=r[j];console.log("editRow",r,e),w(e)},className:"border-2 border-black bg-green-700"},{label:"Add edited Selected Row",handler:function(){if(null===j)n((function(e){return[].concat(Object(s.a)(e),[x])}));else{var e=Object(s.a)(r);e[j]=x,n(e)}},className:"border-2 border-black bg-white"},{label:"add Data",handler:function(){return C.apply(this,arguments)},className:"border-2 border-black bg-green-300"},{label:"Remove First",handler:function(){var e=Object(s.a)(r);e.shift(),n((function(){return Object(s.a)(e)})),m(null)},className:"border-2 border-black bg-yellow-700"},{label:"delete by Index",handler:function(){var e=Object(s.a)(r);e.splice(j,1),n((function(){return Object(s.a)(e)})),m(null)},className:"border-2 border-black bg-purple-400"}];function S(){return P.apply(this,arguments)}function P(){return P=Object(u.a)(i.a.mark((function e(){var t,r,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.round(9*Math.random()),a=t>0?t:1,e.next=4,S(a);case 4:c=e.sent,console.log("add",c,a,r),n((function(e){return[].concat(Object(s.a)(e),[c])}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t,r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,console.log("respData",t),r=Object.keys(t),a=r.filter((function(e){return"object"!==typeof t[e]})),c=a.map((function(e){return{Header:e,accessor:e}})),console.log("columns",c),H(c),n([t]);case 10:case"end":return e.stop()}}),e)})))()}),[]),Object(p.jsxs)("div",{children:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=R.slice(0,e).map((function(e){var t=e.handler,r=e.className,a=e.label;return Object(p.jsx)(f,{className:r,buttonLabel:a,clickHandler:function(){return t()}})}));return t}(6)," ",N.map((function(e){return Object(p.jsx)(h,{label:e.Header,changeHandler:function(t){return function(e,t){var r=e.currentTarget.value;w(Object(o.a)(Object(o.a)({},x),{},Object(l.a)({},t,r)))}(t,"".concat(e.accessor))},value:x[e.accessor],placeholder:e.Header,type:"text",className:"border-2 border-black",name:e.accessor})})),Object(p.jsx)(O,{columns:N,data:r,selectedRow:j,setSelectedRow:m})]})},v=function(){return Object(p.jsx)(m,{})};c.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5ce1dd42.chunk.js.map