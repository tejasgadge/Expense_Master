(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=function(){return r.a.createElement("h2",{className:"appname"},"Expense Master")},u=n(2);var m=function(){var e=Object(u.c)(function(e){return e.expensereducer});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"balance"},r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,function(e){var t=e.toFixed(2).split(".");return"\u20b9 "+("-"===t[0].split("")[0]?"-":"")+t[0].split("").reverse().reduce(function(e,t,n,a){return"-"===t?e:t+(!n||n%3?"":",")+e},"")+"."+t[1]}(e.income+e.expense))))};function i(e){return"\u20b9 "+e}var s=function(){var e=Object(u.c)(function(e){return e.expensereducer});return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},i(e.income))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},i(e.expense))))},d=n(4),p=Object(d.b)({name:"pocket",initialState:{income:0,expense:0,transaction:[]},reducers:{updatepocket:function(e,t){var n=parseInt(t.payload);n>0?e.income+=n:e.expense+=n},addtransaction:function(e,t){e.transaction.push(t.payload)},deletetransaction:function(e,t){t.payload.amount<0?e.expense-=t.payload.amount:e.income-=t.payload.amount,e.transaction=e.transaction.filter(function(e){return e.id!==t.payload.id})}}}),E=p.actions,f=E.updatepocket,v=E.addtransaction,b=E.deletetransaction,x=p.reducer;var h=function(e){var t,n=e.id,a=e.text,c=e.amount,l=Object(u.b)(),o=c<0?"-":"+";return r.a.createElement("li",{className:c<0?"minus":"plus"},a," ",r.a.createElement("span",null,o,(t=c,console.log(t),"\u20b9"+Math.abs(t))),r.a.createElement("button",{onClick:function(){l(b({id:n,amount:c}))},className:"delete-btn"},"x"))},N=function(){var e=Object(u.c)(function(e){return e.expensereducer});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),console.log(e),r.a.createElement("ul",{className:"list"},e.transaction.map(function(e){return r.a.createElement(h,e)})))},g=n(5),j=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(g.a)(l,2),m=o[0],i=o[1],s=Object(u.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"addtransaction"},r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(d.c)(),text:n,amount:m};s(v(t)),s(f(t.amount))}},r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter transaction details..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:m,onChange:function(e){return i(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction"))))};var y=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(N,null)))},O=Object(d.a)({reducer:{expensereducer:x}});n(27);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{store:O},r.a.createElement(y,null))))}},[[15,2,1]]]);
//# sourceMappingURL=main.5db3b996.chunk.js.map