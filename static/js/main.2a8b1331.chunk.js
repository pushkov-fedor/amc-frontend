(this["webpackJsonpamc-frontend"]=this["webpackJsonpamc-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(14),r=n.n(l),u=(n(22),n(23),n(6)),o=(n(24),n(1)),m="https://amcbackend.avocadoonline.company";function i(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],f=i[1],d=Object(a.useState)(1),b=Object(u.a)(d,2),p=b[0],E=b[1],h=Object(a.useState)(20),v=Object(u.a)(h,2),g=v[0],j=v[1],x=Object(a.useState)(35),N=Object(u.a)(x,2),O=N[0],w=N[1],q=window.AndroidFunction?window.AndroidFunction.getId():"5f53cb41900ab5746f165089",I=Object(o.f)();return c.a.createElement("div",{className:"queueForm d-flex flex-column"},c.a.createElement("form",{className:"queueForm__form d-flex flex-column justify-content-center"},c.a.createElement("h1",{className:"text-center big-header bold pb-3"},"\u0425\u043e\u0447\u0443 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),c.a.createElement("label",{htmlFor:"name"},"\u0418\u041c\u042f"),c.a.createElement("input",{className:"mb-3",type:"text",id:"name",placeholder:"\u0418\u0432\u0430\u043d",value:n,onChange:function(e){return l(e.target.value)}}),c.a.createElement("label",{htmlFor:"phone"},"\u0422\u0415\u041b\u0415\u0424\u041e\u041d"),c.a.createElement("input",{className:"mb-3",type:"tel",id:"phone",placeholder:"89139036130",value:s,onChange:function(e){return f(e.target.value)}}),c.a.createElement("label",{htmlFor:"people-counter"},"\u0421\u041a\u041e\u041b\u042c\u041a\u041e \u0412\u0410\u0421 \u0411\u0423\u0414\u0415\u0422?"),c.a.createElement("div",{id:"people-counter",className:"d-flex align-items-center mb-3"},c.a.createElement("button",{className:"mr-3 border-purple text-purple bg-white d-flex align-items-center justify-content-center",onClick:function(e){e.preventDefault(),E((function(e){return e-1}))}},c.a.createElement("i",{class:"fas fa-minus fa-2x"})),c.a.createElement("input",{className:"text-center",type:"number",name:"",id:"",value:p,onChange:function(e){return E(e.target.value)}}),c.a.createElement("button",{className:"ml-3 bg-purple text-white d-flex align-items-center justify-content-center",onClick:function(e){e.preventDefault(),E((function(e){return e+1}))}},c.a.createElement("i",{class:"fas fa-plus fa-lg"}))),c.a.createElement("label",{htmlFor:"people-counter"},"\u0412\u0420\u0415\u041c\u042f \u041f\u041e\u0421\u0415\u0429\u0415\u041d\u0418\u042f"),c.a.createElement("div",{id:"visit-time"},c.a.createElement("input",{className:"text-center mr-2",type:"number",name:"timeH",id:"timeH",min:"0",max:"23",step:"1",value:g,onChange:function(e){return e.target.value>=0&&e.target.value<=23?j(e.target.value):null}}),c.a.createElement("span",null,":"),c.a.createElement("input",{className:"text-center ml-2",type:"number",name:"timeM",id:"timeM",min:"0",max:"59",step:"1",value:O,onChange:function(e){return e.target.value>=0&&e.target.value<=59?w(e.target.value):null}}))),c.a.createElement("div",{className:"queueForm__controls d-flex flex-column"},c.a.createElement("button",{className:"mt-3 btn bg-purple text-white medium",onClick:function(){fetch("".concat(m,"/queue/join?queueId=").concat(q),{headers:{Accept:"application/json"},method:"POST"}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){var t=e.response,n=t.queueInnerId,a=t.beforeYou;I.push({pathname:"/queue-info",state:{queueInnerId:n,beforeYou:a}})})).catch((function(e){return console.error(e)}))}},"\u0412\u0421\u0422\u0410\u0422\u042c \u0412 \u041e\u0427\u0415\u0420\u0415\u0414\u0418"),c.a.createElement("button",{className:"mt-2 btn bg-white text-purple border-purple medium",onClick:function(){window.AndroidFunction&&window.AndroidFunction.back()}},"\u041d\u0410\u0417\u0410\u0414")))}var s=n(16),f=function(e){var t=e.label,n=e.value;return c.a.createElement("div",{className:"queueLineContainer"},c.a.createElement("div",{className:"left w-50"},c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"right w-50"},c.a.createElement("h3",null,n)))},d=function(e){var t=e.number;return c.a.createElement("div",{className:"queueNumberContainer text-center my-5"},c.a.createElement("h3",null,"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440"),c.a.createElement("h1",null,t))},b=function(e,t,n,a,c){e&&fetch("".concat(m,"/queue/getStatus?innerQueueId=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var l=e.response,r=l.beforeYou,u=l.code,o=l.place,m=l.waitingTime;t(r),n(u),a(m),c(o)})).catch((function(e){return console.error(e)}))},p=Object(o.g)((function(e){var t=Object(o.f)(),n=e.location&&e.location.state?e.location.state.queueInnerId:null,l=Object(a.useState)(e.location&&e.location.state?e.location.state.beforeYou:-1),r=Object(u.a)(l,2),i=r[0],s=r[1],p=Object(a.useState)(""),E=Object(u.a)(p,2),h=E[0],v=E[1],g=Object(a.useState)(0),j=Object(u.a)(g,2),x=j[0],N=j[1],O=Object(a.useState)(""),w=Object(u.a)(O,2),q=w[0],I=w[1];return Object(a.useEffect)((function(){b(n,s,v,N,I);var e=setInterval((function(){return b(n,s,v,N,I)}),5e3);return function(){clearInterval(e)}}),[n]),c.a.createElement("div",{className:"queueInfoContainer d-flex flex-column"},c.a.createElement("div",{className:"queueInfoContainer__container d-flex flex-column justify-content-center align-itesms-center"},c.a.createElement("h1",{className:"text-center big-header bold"},"\u0412\u044b \u0437\u0430\u043d\u044f\u043b\u0438 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435"),c.a.createElement(d,{number:h}),c.a.createElement(f,{label:"\u0417\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",value:q}),c.a.createElement(f,{label:"\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f",value:"~ ".concat(x," \u043c\u0438\u043d.")}),c.a.createElement(f,{label:"\u041f\u0435\u0440\u0435\u0434 \u0432\u0430\u043c\u0438",value:"".concat(i," \u0447\u0435\u043b.")})),c.a.createElement("div",{className:"queueInfoContainer__controls"},c.a.createElement("button",{className:"btn bg-purple text-white w-100 mt-3 medium",onClick:function(){fetch("".concat(m,"/queue/leave?innerQueueId=").concat(n),{headers:{Accept:"application/json"},method:"POST"}),t.push("/queue-form")}},"\u041f\u041e\u041a\u0418\u041d\u0423\u0422\u042c \u041e\u0427\u0415\u0420\u0415\u0414\u042c")))}));var E=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/queue-form"},c.a.createElement(i,null)),c.a.createElement(o.a,{path:"/queue-info"},c.a.createElement(p,null))))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2a8b1331.chunk.js.map