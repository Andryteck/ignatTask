(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){e.exports={activeLink:"PreJunior_activeLink__KzkKH"}},21:function(e,t,n){e.exports={container:"Todo_container__o74FW",todoItem:"Todo_todoItem__S36JN"}},31:function(e,t,n){e.exports={buttonNya:"ButtonNya_buttonNya__2H2sM"}},32:function(e,t,n){e.exports={inputNya:"InputNya_inputNya__1FUxv"}},34:function(e,t,n){e.exports=n.p+"static/media/PreLouder.2c51a000.svg"},36:function(e,t,n){e.exports=n(50)},41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),o=(n(41),n(42),function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"messageBlock"},r.a.createElement("img",{className:"photo",src:"https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg",alt:"photo"}),r.a.createElement("div",{className:"messageBody"},r.a.createElement("h1",{className:"title"},"Andrei"),["sportsman","foodLover","animalLover"].map((function(e){return r.a.createElement("span",{className:"foodLover"===e?"subTitleFoodLover":"subTitle"},e)})))))}),i=n(7),u=n(21),m=n.n(u);var s=function(){var e=Object(a.useState)([{id:1,n:"work",p:"hight"},{id:2,n:"anime",p:"low"},{id:3,n:"games",p:"middle"},{id:4,n:"react",p:"hight"},{id:5,n:"html",p:"low"}]),t=Object(i.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:m.a.container},r.a.createElement("ul",null,n.map((function(e){if("hight"===e.p)return r.a.createElement("li",{key:e.id},e.n,r.a.createElement("span",{className:m.a.todoItem},e.p),r.a.createElement("button",{onClick:function(){!function(e){var t=n.filter((function(t){return t.id!==e}));l(t)}(e.id)}},"x"))}))))},p=n(22),d=function(e){var t=[{name:"Andrei",id:Object(p.v1)()},{name:"Andrei",id:Object(p.v1)()}];return r.a.createElement("div",null,r.a.createElement("span",{className:"counterSpan"},t.length))},E=n(31),v=n.n(E);var f=function(e){return r.a.createElement("button",Object.assign({className:v.a.buttonNya},e))},b=n(35),g=n(32),_=n.n(g);var N=function(e){var t=e.onEnter,n=e.error,a=Object(b.a)(e,["onEnter","error"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({className:_.a.inputNya,onKeyPress:function(e){(e.charCode=13)&&t&&t(e)},onBlur:e.deactivateViewMode},a,{type:"text"})),n?r.a.createElement("span",null,n):null)},h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2);t[0],t[1];return r.a.createElement("div",{className:"counterWrapper"},r.a.createElement(d,null),r.a.createElement(N,null),r.a.createElement(f,null))},O=n(2),y=n(19),j=n.n(y);var w=function(){return r.a.createElement("div",{className:j.a.item},r.a.createElement("span",null,"3333"))},J=n(8),k=n.n(J);var I=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),l=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(N,{deactivateViewMode:function(){c(!1)},onEnter:function(){}}):r.a.createElement("span",{onDoubleClick:function(){c(!0)}},"Test"))};var T=function(e){return r.a.createElement("select",{name:"select"},e.select.map((function(t){return r.a.createElement("option",{value:"item"},e.value)})))};var S=function(e){return r.a.createElement(r.a.Fragment,null,e.select.map((function(t){return r.a.createElement("input",{type:"radio",name:e.name,value:e.value,onChange:e.onChange})})))},C=n(10),L=n(26),D=[{id:"2",name:"Yoda",age:18},{id:"3",name:"Froga",age:.9},{id:"4",name:"Sveta",age:31},{id:"1",name:"Andrei",age:28}],x=n(15),A={loading:!1};var B=function(){var e=new Date,t=Object(a.useState)(0),n=Object(i.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(e),u=Object(i.a)(o,2),m=u[0],s=u[1],p=Object(a.useState)(!1),d=Object(i.a)(p,2),E=(d[0],d[1],Object(a.useState)("value")),v=Object(i.a)(E,2),f=v[0],b=(v[1],Object(C.c)((function(e){return e.peoples}))),g=Object(C.b)(),_=[1,2,3,4,5];function N(){}return m.getDate(),r.a.createElement("div",{className:k.a.item},r.a.createElement(I,null),r.a.createElement(T,{select:_,value:f,onChange:N}),r.a.createElement(S,{name:"name",select:_,value:f,onChange:N}),r.a.createElement("div",{className:k.a.peoples},b.map((function(e){return r.a.createElement("span",{className:k.a.peoplesItem,key:e.id},e.name)})),r.a.createElement("div",{className:k.a.btns},r.a.createElement("button",{className:k.a.btn,onClick:function(){g({type:"SORT",payload:"up"})}},"UP"),r.a.createElement("button",{className:k.a.btn,onClick:function(){g({type:"SORT",payload:"down"})}},"DOWN"),r.a.createElement("button",{className:k.a.btn,onClick:function(){g({type:"CHECK",payload:18})}},"CHECK"))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:k.a.dateItem},m.getHours(),": ",m.getMinutes(),": ",m.getSeconds(),r.a.createElement("span",{className:k.a.dateItemTooltip},m.getDate(),". 0",m.getMonth(),". ",m.getFullYear()))),r.a.createElement("button",{onClick:function(){clearInterval(l);var e=setInterval((function(){return s(new Date)}),1e3);c(e)}},"Update Time"),r.a.createElement("button",{onClick:function(){return clearInterval(l)}},"Reset Time")),r.a.createElement("button",{onClick:function(){g({type:"SET_LOADING",payload:!0}),setTimeout((function(){g({type:"DELETE_LOADING",payload:!1})}),3e3)},className:k.a.loadingButton},"SET LOADING"))};var F=function(){return r.a.createElement("div",{className:j.a.item},r.a.createElement("span",null,"11111"))},H=n(9);var P=function(){return r.a.createElement("div",null,r.a.createElement("nav",{role:"navigation"},r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},r.a.createElement("li",null,r.a.createElement(H.b,{to:"/PreJunior"},"PreJunior")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/Junior"}," Junior")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/Junior+"}," Junior+"))))))},W=n(34),K=n.n(W);var M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:K.a}))};var G=function(){return Object(C.c)((function(e){return e.loading.loading}))?r.a.createElement(M,null):r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(O.a,{path:"/PreJunior",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(O.a,{path:"/Junior",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(O.a,{path:"/Junior+",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(o,null),r.a.createElement(s,null),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(14),U=Object(R.b)({peoples:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT":if("up"===t.payload)return Object(L.a)(e.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})));if("down"===t.payload)return Object(L.a)(e.sort((function(e,t){return e.name<t.name?1:t.name<e.name?-1:0})));case"CHECK":return[e.find((function(e){return e.age==t.payload}))];default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":case"DELETE_LOADING":return Object(x.a)(Object(x.a)({},e),{},{loading:t.payload});default:return e}}}),V=Object(R.c)(U);window.store=V,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H.a,null,r.a.createElement(C.a,{store:V},r.a.createElement(G,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports={activeLink:"Junior_activeLink__2J9BA",item:"Junior_item__hTHti",peoples:"Junior_peoples__1W4SS",loadingButton:"Junior_loadingButton__1wDb3",hide:"Junior_hide__3TN91",dateItem:"Junior_dateItem__DkWaa",dateItemTooltip:"Junior_dateItemTooltip__1p0_N",peoplesItem:"Junior_peoplesItem__ZrcLV",btns:"Junior_btns__1sb-7",btn:"Junior_btn__2mBZJ"}}},[[36,1,2]]]);
//# sourceMappingURL=main.9582d433.chunk.js.map