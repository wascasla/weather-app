(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{35:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(15),i=n.n(c),o=(n(35),n(13)),u=n(12),d=n(30),s=n(11),l=n(9);var j,b="GET_CURRENT_WEATHER",O="GET_CURRENT_WEATHER_SUCCESS",f="GET_CURRENT_WEATHER_ERROR",v="GET_FORECAST_WEATHER",p="GET_FORECAST_WEATHER_SUCCESS",h="GET_FORECAST_WEATHER_ERROR",x=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(r.type)?t[r.type](n,r):n}}({currentWeather:void 0,forecatsWeather:[],loadingCurrent:!1,loadingForecast:!1,errorCurrent:void 0,errorForecast:void 0},(j={},Object(s.a)(j,b,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loadingCurrent:!0,currentWeather:void 0,errorCurrent:void 0})})),Object(s.a)(j,O,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{loadingCurrent:!1,currentWeather:t.payload})})),Object(s.a)(j,f,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loadingCurrent:!1,errorCurrent:"Error al obtener el clima actual, intente m\xe1s tarde por favor"})})),Object(s.a)(j,v,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loadingForecast:!0,forecatsWeather:[],errorForecast:void 0})})),Object(s.a)(j,p,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{loadingForecast:!1,forecatsWeather:n.slice(0,5)})})),Object(s.a)(j,h,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loadingForecast:!1,errorForecast:"Error al obtener el clima para los pr\xf3ximos d\xedas, intente m\xe1s tarde por favor"})})),j)),m=Object(u.b)({weather:x}),g=n(6),E=n.n(g),C=n(7),w=function(e,t){return{type:e,payload:t}},R=function(e){return w(f,e)},T=function(e){return w(h,e)},y=n(28),F=n.n(y).a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),W="f1542c7b0d493e2cef682df5a1a98108",S=function(e,t){return F.get("weather/?lat=".concat(e,"&lon=").concat(t,"&units=metric&appid=").concat(W))},_=function(e,t){return F.get("onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=current,hourly,minutely,alerts&units=metric&appid=").concat(W))},A=E.a.mark(H),N=E.a.mark(P),k=E.a.mark(U),M=E.a.mark(D),G=E.a.mark(L);function H(e){var t,n,r,a;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,n=t.latitude,r=t.longitude,c.next=4,Object(C.b)(S,n,r);case 4:return a=c.sent,c.next=7,Object(C.d)((i=a.data,w(O,i)));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(0),c.next=13,Object(C.d)(R(c.t0));case 13:case"end":return c.stop()}var i}),A,null,[[0,9]])}function P(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.e)(b,H);case 2:case"end":return e.stop()}}),N)}function U(e){var t,n,r,a;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,n=t.latitude,r=t.longitude,c.next=4,Object(C.b)(_,n,r);case 4:return a=c.sent,c.next=7,Object(C.d)((i=a.data.daily,w(p,i)));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(0),c.next=13,Object(C.d)(T(c.t0));case 13:case"end":return c.stop()}var i}),k,null,[[0,9]])}function D(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.e)(v,U);case 2:case"end":return e.stop()}}),M)}function L(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.c)(P),Object(C.c)(D)]);case 2:case"end":return e.stop()}}),G)}var I=L,B=E.a.mark(J);function J(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([I()]);case 2:case"end":return e.stop()}}),B)}var V=Object(d.a)(),Y=Object(u.d)(m,Object(u.c)(Object(u.a)(V)));V.run(J);var q=Y,z=(n(61),n(14)),K=(n(62),n(3)),Q=function(){return Object(K.jsx)("div",{className:"spinner"})},X=(n(64),function(e){var t,n=e.data,r=e.loading,a=e.error;return Object(K.jsxs)("div",{className:"card",children:[Object(K.jsx)("h3",{children:"Actual"}),n?Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{children:[Math.round(null===n||void 0===n||null===(t=n.main)||void 0===t?void 0:t.temp),"\xb0C"]})}):null,r&&Object(K.jsx)(Q,{}),a||null]})}),Z=(n(65),function(e){var t=e.getWeather,n=Object(r.useState)([{id:1,name:"Miami",latitude:25.774269,longitude:-80.193657},{id:2,name:"Porto Alegre",latitude:-30.03306,longitude:-51.23},{id:3,name:"Tilcara",latitude:-23.57757,longitude:-65.350899},{id:4,name:"Villa del Prado",latitude:40.26915,longitude:-4.3046},{id:5,name:"New York City",latitude:40.714272,longitude:-74.005966}]),a=Object(z.a)(n,1)[0],c=Object(r.useState)(0),i=Object(z.a)(c,2),o=i[0],u=i[1];return Object(K.jsx)("div",{className:"select-city",children:Object(K.jsxs)("form",{className:"form-select-city",onSubmit:function(e){e.preventDefault(),o?t(o):alert("Debe seleccionar una ciudad!!!")},children:[Object(K.jsx)("label",{children:"Elige una ciudad para consultar el clima:"}),Object(K.jsxs)("select",{name:"city",value:null===o||void 0===o?void 0:o.id,defaultValue:"none",onChange:function(e){var t=a.find((function(t){return t.id===parseInt(e.target.value)}));u(t)},children:[Object(K.jsx)("option",{value:"none",disabled:!0,hidden:!0,children:"Seleccione una Ciudad"}),a.map((function(e){return Object(K.jsxs)("option",{value:e.id,children:[e.name," "]},e.id)}))]}),Object(K.jsx)("input",{type:"submit",value:"Consultar"})]})})}),$=n(29),ee=n.n($),te=(n(67),function(e){var t,n,r=e.data,a=e.index;return Object(K.jsx)("div",{className:"box",children:Object(K.jsxs)("div",{className:"card-for",children:[Object(K.jsx)("h5",{children:ee()().add(a+1,"d").format("DD/MM")}),Object(K.jsxs)("div",{children:[Math.round(null===r||void 0===r||null===(t=r.temp)||void 0===t?void 0:t.max),"\xb0C"]}),Object(K.jsxs)("div",{children:[Math.round(null===r||void 0===r||null===(n=r.temp)||void 0===n?void 0:n.min),"\xb0C"]})]},null===r||void 0===r?void 0:r.dt)})}),ne=(n(68),function(e){var t=e.forecatsWeatherList,n=e.loading,r=e.error;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{children:"Clima para los pr\xf3ximos 5 d\xedas "}),t?Object(K.jsx)("div",{className:"box-forecast",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(K.jsx)(te,{data:e,index:t},e.sunset)}))}):null,n?Object(K.jsx)(Q,{}):null,r||null]})}),re=function(){var e=Object(o.b)(),t=Object(r.useState)(),n=Object(z.a)(t,2),a=n[0],c=n[1],i=Object(o.c)((function(e){return e.weather})),u=i.currentWeather,d=i.forecatsWeather,s=i.loadingCurrent,l=i.loadingForecast,j=i.errorCurrent,O=i.errorForecast;Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){c(e.coords)}))}),[]),Object(r.useEffect)((function(){a&&f(a)}),[a]);var f=function(t){e(w(b,t)),e(function(e){return w(v,e)}(t))};return Object(K.jsxs)("div",{children:[Object(K.jsxs)("h1",{children:["Clima en ",s?"...":null===u||void 0===u?void 0:u.name," "]}),Object(K.jsx)(Z,{getWeather:f}),Object(K.jsx)(X,{data:u,loading:s,error:j}),Object(K.jsx)(ne,{forecatsWeatherList:d,loading:l,error:O})]})};var ae=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsx)(re,{})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(o.a,{store:q,children:Object(K.jsx)(ae,{})})}),document.getElementById("root")),ce()}},[[69,1,2]]]);
//# sourceMappingURL=main.7319217a.chunk.js.map