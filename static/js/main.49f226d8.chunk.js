(this["webpackJsonpmind-tracking"]=this["webpackJsonpmind-tracking"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/mind-toon.d86f34f6.png"},function(e,t,a){e.exports=a.p+"static/media/baby-groot-meditation.6f4dc16d.jpeg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(13),a(3)),s=(a(14),a(15),a(6)),u=a.n(s);var l=function(){return r.a.createElement("header",{className:"hero-header"},r.a.createElement("div",{className:"left-header"},r.a.createElement("h1",null,"Mind Tracking"),r.a.createElement("p",null,"Keep track of your meditation habit and see your progress. Simply click on the meditation panel to add an entry")),r.a.createElement("div",{className:"right-header"},r.a.createElement("img",{className:"brain-toon",src:u.a,alt:"Large brain cartoon"})))},d=a(1),m=a.n(d),f=a(2),p=(a(17),a(7)),h=a.n(p),v=function(){var e=new Date;g(e);var t=e.getDate()-e.getDay()+(0===e.getDay()?-6:1);return new Date(e.setDate(t))},y=function(){var e=v();return e.setDate(e.getDate()+6),e},g=function(e){e.setHours(0,0,0,0)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("-"),a=Object(o.a)(t,3),n=a[0],r=a[1],c=a[2],i=new Date(n,r-1,c);return i},b="https://mind-tracker-api.herokuapp.com/meditation";function w(){return(w=Object(f.a)(m.a.mark((function e(){var t,a,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",(a=new URL(b)).searchParams.append("userName",t),e.next=5,fetch(a.toString());case 5:return n=e.sent,e.abrupt("return",n.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(m.a.mark((function e(){var t,a,n,r,c,i=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",a=i.length>1&&void 0!==i[1]?i[1]:null,n=new URL(b),r={userName:t,date:a},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.abrupt("return",fetch(n.toString(),c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(m.a.mark((function e(){var t,a,n,r,c,i=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",a=i.length>1&&void 0!==i[1]?i[1]:-1,n=new URL(b),r={userName:t,id:a},c={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.abrupt("return",fetch(n.toString(),c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(m.a.mark((function e(){var t,a,n,r,c,i,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:-1,n=o.length>2&&void 0!==o[2]?o[2]:"",r=new URL(b),c={userName:t,id:a,date:n},console.log(c),i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},e.abrupt("return",fetch(r.toString(),i));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(18);var S=function(e){var t=e.isGreen,a=void 0!==t&&t;return r.a.createElement("span",{className:"day-dot  ".concat(a?"day-dot-filled":""," ")})},T=function(e){var t=e.weekEntries,a=void 0===t?[]:t,n=e.name,c=void 0===n?"habit":n,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={count:0,monday:!1,tuesday:!1,wednesday:!1,thursday:!1,friday:!1,saturday:!1,sunday:!1};return e.forEach((function(e){switch(E(e.date).getUTCDay()){case 0:t.sunday||(t.sunday=!0,t.count++);break;case 1:t.monday||(t.monday=!0,t.count++);break;case 2:t.tuesday||(t.tuesday=!0,t.count++);break;case 3:t.wednesday||(t.wednesday=!0,t.count++);break;case 4:t.thursday||(t.thursday=!0,t.count++);break;case 5:t.friday||(t.friday=!0,t.count++);break;case 6:t.saturday||(t.saturday=!0,t.count++)}})),t}(a),o=i.monday,s=i.tuesday,u=i.wednesday,l=i.thursday,d=i.friday,m=i.saturday,f=i.sunday,p=i.count;return r.a.createElement("div",{className:"week-report"},r.a.createElement("div",{className:"left-report"},r.a.createElement("h1",null,c),r.a.createElement("div",{className:"day-dot-list"},r.a.createElement(S,{isGreen:o}),r.a.createElement(S,{isGreen:s}),r.a.createElement(S,{isGreen:u}),r.a.createElement(S,{isGreen:l}),r.a.createElement(S,{isGreen:d}),r.a.createElement(S,{isGreen:m}),r.a.createElement(S,{isGreen:f})),r.a.createElement("p",{className:"report-text"}," ","".concat(p,"/7"))),r.a.createElement("div",{className:"right-report"},r.a.createElement("p",null,"Total"),r.a.createElement("p",null,a.length)))},C=function(e){var t=e.habitEntries,a=e.userName,n=e.refreshData,c=function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(a);case 2:e.sent.ok?n():console.log("Post error");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=v(),a=y(),n=e.filter((function(e){var n=E(e.date);return n.getTime()>=t.getTime()&&n.getTime()<=a.getTime()}));return n}(t);return r.a.createElement("button",{className:"habit-overview",onClick:c},r.a.createElement("div",{className:"logo-img-container"},r.a.createElement("img",{className:"logo-img",src:h.a,alt:"".concat("Meditation"," logo")})),r.a.createElement(T,{weekEntries:i,name:"Meditation"}))};a(19);function U(e){var t=e.date,a=void 0===t?"2020-01-01":t,c=e.togglePanel,i=e.entry,s=void 0===i?{}:i,u=e.refreshData,l=Object(n.useState)(a),d=Object(o.a)(l,2),p=d[0],h=d[1],v=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),t=s.userName,a=s.id,e.next=4,O(t,a,p);case 4:e.sent.ok?u():console.log("Update error");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"edit-panel"},r.a.createElement("label",{htmlFor:"newDate"},"New Date",r.a.createElement("input",{type:"date",name:"date",id:"newDate",value:p,min:"2020-01-01",onChange:function(e){h(e.target.value)}})),r.a.createElement("button",{className:"entry-btn entry-btn-update",onClick:v},"Update"))}var G=function(e){var t=e.name,a=void 0===t?"Meditation":t,c=e.entry,i=void 0===c?{}:c,s=e.refreshData,u=Object(n.useState)(!1),l=Object(o.a)(u,2),d=l[0],p=l[1],h=function(){p((function(){p(!d)}))},v=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.userName,a=i.id,e.next=3,j(t,a);case 3:e.sent.ok?s():console.log("Delete error");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("-"),a=Object(o.a)(t,3),n=a[0],r=a[1],c=a[2];return"".concat(r,"-").concat(c,"-").concat(n)}(i.date);return r.a.createElement("div",{className:"habit-entry-container"},r.a.createElement("div",{className:"habit-entry"},r.a.createElement("h3",null,a),r.a.createElement("p",null," ",y," "),r.a.createElement("div",{className:"entry-btn-group"},r.a.createElement("button",{className:"entry-btn entry-btn-update",onClick:h},"edit"),r.a.createElement("button",{className:"entry-btn entry-btn-delete",onClick:v},"delete"))),d&&r.a.createElement(U,{date:y,togglePanel:h,refreshData:s,entry:i}))};var L=function(e){e.name;var t=e.habitEntries,a=void 0===t?[]:t,n=e.refreshData,c=a.map((function(e){return r.a.createElement(G,{key:e.id,refreshData:n,entry:e})}));return r.a.createElement("div",{className:"habit-entry-list"},r.a.createElement("h2",null,"Habit list"),r.a.createElement("div",{className:"entries-container"},c))};var P=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("demoUser"),s=Object(o.a)(i,2),u=s[0];s[1],Object(n.useEffect)((function(){d()}),[]);var d=function(){(function(){return w.apply(this,arguments)})(u).then((function(e){return c(e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement("div",{className:"weekly-overview-list"},r.a.createElement("h2",null,"This weeks overview "),r.a.createElement(C,{habitEntries:a,userName:u,refreshData:d})),r.a.createElement(L,{refreshData:d,habitEntries:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.49f226d8.chunk.js.map