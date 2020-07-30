(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{103:function(e,t,a){e.exports={container:"Chart_container__xwRTw"}},104:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1N_N0"}},107:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},117:function(e,t,a){e.exports=a(235)},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),u=a(11),s=a.n(u),i=a(14),l=a(93),d=a(94),p=a(109),f=a(108),m=a(269),v=a(273),h=a(274),b=a(275),_=a(95),g=a.n(_),y=a(96),C=a.n(y),E=a(97),x=a.n(E),O=function(e){var t=e.className,a=e.cardTitle,n=e.value,c=e.lastUpdate,o=e.cardSubtitle;return r.a.createElement(m.a,{item:!0,xs:12,md:3,component:v.a,className:C()(x.a.card,t)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},a),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:n,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},o)))},j=a(36),w=a.n(j),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:w.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(O,{className:w.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Number of active cases from COVID-19."}),r.a.createElement(O,{className:w.a.recovered,cardTitle:"Recovered",value:n.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),r.a.createElement(O,{className:w.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."}))):"Loading..."},N=a(48),D=a(50),S=a.n(D),I="https://covid19.mathdro.id/api",U=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log("error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(60),B=a(103),J=a.n(B),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(N.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=p.length?r.a.createElement(V.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:J.a.container},u?v:m)},M=a(279),R=a(277),G=a(278),P=a(104),W=a.n(P),z=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(N.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(M.a,{className:W.a.formControl},r.a.createElement(G.a,{id:"combo-countries",onChange:function(e,a){t(a)},options:o,getOptionLabel:function(e){return e},renderInput:function(e){return r.a.createElement(R.a,Object.assign({},e,{label:"Global",variant:"outlined"}))}}))},F=a(61),Q=a.n(F),Y=a(107),q=a.n(Y),H=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:Q.a.container},r.a.createElement("img",{className:Q.a.image,src:q.a,alt:"COVID-19"}),r.a.createElement(k,{data:t}),r.a.createElement(z,{handleCountryChange:this.handleCountryChange}),r.a.createElement(L,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(H,null),document.getElementById("root"))},36:function(e,t,a){e.exports={container:"Cards_container__37daz",card:"Cards_card__3naAk",infected:"Cards_infected__1G1ys",recovered:"Cards_recovered__2YLpW",deaths:"Cards_deaths__3JMjU"}},61:function(e,t,a){e.exports={container:"App_container__1BNcI",image:"App_image__M_W5Q"}},97:function(e,t,a){e.exports={card:"Card_card__2pjAF"}}},[[117,1,2]]]);
//# sourceMappingURL=main.0193a499.chunk.js.map