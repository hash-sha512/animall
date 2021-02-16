(this.webpackJsonpanimall=this.webpackJsonpanimall||[]).push([[0],{272:function(e,a,t){},273:function(e,a,t){},395:function(e,a,t){"use strict";t.r(a);var l=t(17),r=t.n(l),i=t(0),c=t.n(i),n=(t(272),t(273),t(44)),o=t(24),s=t(468),d=t(471),j=t(489),b=t(480),u=t(475),h=t(474),m=t(491),y=t(477),p=t(492),g=t(476),f=t(484),O=t(479),x=t(488),v=t(493),C=t(88);var E=t(11),k=Object(s.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),R=Object(s.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function T(){var e=Object(C.c)(),a=Object(i.useReducer)((function(e,a){switch(a.type){case"TIMEFRAME":return Object(n.a)(Object(n.a)({},e),{},{timeframe:a.payload});case"CATEGORY":return Object(n.a)(Object(n.a)({},e),{},{category:a.payload});case"VALUE":return Object(n.a)(Object(n.a)({},e),{},{value:parseInt(a.payload)});case"RECURRING":return Object(n.a)(Object(n.a)({},e),{},{recurring:!e.recurring});case"SUBMIT":return{timeframe:"",category:"",value:0,recurring:""};default:throw new Error}}),{timeframe:"",category:"",value:0,recurring:!1}),t=Object(o.a)(a,2),l=t[0],r=t[1],s=R(),T=k(),I=c.a.useState(!1),L=Object(o.a)(I,2),S=L[0],A=L[1],w=function(){A(!1)};return Object(E.jsxs)("div",{children:[Object(E.jsx)(d.a,{onClick:function(){A(!0)},children:"Add Expense"}),Object(E.jsxs)(j.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:S,onClose:w,children:[Object(E.jsx)(h.a,{children:"Fill the form"}),Object(E.jsx)(u.a,{children:Object(E.jsxs)("form",{className:T.root,style:{display:"flex",flexDirection:"column"},children:[Object(E.jsxs)(g.a,{className:s.formControl,children:[Object(E.jsx)(m.a,{id:"demo-dialog-select-label",children:"Timeframe"}),Object(E.jsxs)(f.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:l.timeframe,onChange:function(e){return r({type:"TIMEFRAME",payload:e.target.value})},input:Object(E.jsx)(y.a,{}),children:[Object(E.jsx)(p.a,{value:"daily",children:"Daily"}),Object(E.jsx)(p.a,{value:"monthly",children:"Monthly"}),Object(E.jsx)(p.a,{value:"yearly",children:"Yearly"})]})]}),Object(E.jsx)(v.a,{id:"standard-basic",onChange:function(e){return r({type:"CATEGORY",payload:e.target.value})},label:"Category",value:l.category}),Object(E.jsx)(v.a,{id:"standard-basic",onChange:function(e){return r({type:"VALUE",payload:e.target.value})},label:"Expense",value:l.value}),Object(E.jsx)(O.a,{control:Object(E.jsx)(x.a,{checked:l.recurring,onChange:function(e){return r({type:"RECURRING",payload:e.target.value})},name:"recurring",color:"primary"}),label:"Recurring"})]})}),Object(E.jsxs)(b.a,{children:[Object(E.jsx)(d.a,{onClick:w,color:"primary",children:"Cancel"}),Object(E.jsx)(d.a,{onClick:function(a){A(!1),e({type:"NEW_ENTRY",payload:{timeframe:l.timeframe,category:l.category,value:parseInt(l.value),recurring:l.recurring}}),r({type:"SUBMIT"})},color:"primary",children:"Ok"})]})]})]})}var I=t(486),L=t(490),S=t(242),A=t(123),w={daily:[{id:"filler1",label:"filler1",value:522,color:"hsl(15, 70%, 50%)"},{id:"filler2",label:"filler2",value:129,color:"hsl(269, 70%, 50%)"},{id:"filler3",label:"filler3",value:138,color:"hsl(125, 70%, 50%)"}],monthly:[{id:"filler",label:"filler",value:328,color:"hsl(100, 70%, 50%)"}],yearly:[{id:"filler",label:"filler",value:259,color:"hsl(209, 70%, 50%)"}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"NEW_ENTRY":var t=e;return t[a.payload.timeframe].push({id:a.payload.category,label:a.payload.category,value:parseInt(a.payload.value),color:"hsl(40, 70%, 50%)"}),Object(n.a)({},t);default:return e}},M=Object(A.b)(F),N=Object(C.b)((function(e){return{data:e}}))((function(e){return Object(E.jsx)(c.a.Fragment,{children:Object(E.jsx)(S.a,{data:e.data[e.scale],margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:{scheme:"nivo"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},radialLabelsSkipAngle:10,radialLabelsTextColor:"#333333",radialLabelsLinkColor:{from:"color"},sliceLabelsSkipAngle:10,sliceLabelsTextColor:"#333333",defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"ruby"},id:"dots"},{match:{id:"c"},id:"dots"},{match:{id:"go"},id:"dots"},{match:{id:"python"},id:"dots"},{match:{id:"scala"},id:"lines"},{match:{id:"lisp"},id:"lines"},{match:{id:"elixir"},id:"lines"},{match:{id:"javascript"},id:"lines"}],legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:100,itemHeight:18,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})})})),W=t(483);function D(){var e=c.a.useState("daily"),a=Object(o.a)(e,2),t=a[0],l=a[1],r=c.a.useState(!1),i=Object(o.a)(r,2),n=i[0],s=i[1];return Object(E.jsx)(W.a,{maxWidth:"sm",children:Object(E.jsxs)("div",{children:[Object(E.jsx)(d.a,{style:{},onClick:function(){return s(!n)},children:"GUI Toggle"}),n&&Object(E.jsx)("div",{style:{display:"flex",height:"60vh",border:"3px solid black"},children:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(g.a,{component:"fieldset",style:{marginLeft:"6px"},children:Object(E.jsxs)(L.a,{"aria-label":"scale",name:"scale",value:t,onChange:function(e){l(e.target.value)},children:[Object(E.jsx)(O.a,{value:"daily",control:Object(E.jsx)(I.a,{color:"primary"}),label:"Daily"}),Object(E.jsx)(O.a,{value:"monthly",control:Object(E.jsx)(I.a,{color:"primary"}),label:"Monthly"}),Object(E.jsx)(O.a,{value:"yearly",control:Object(E.jsx)(I.a,{color:"primary"}),label:"Yearly"})]})}),Object(E.jsx)(N,{scale:t,style:{}})]})})]})})}var U=function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(T,{}),Object(E.jsx)(D,{})]})},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,496)).then((function(a){var t=a.getCLS,l=a.getFID,r=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),l(e),r(e),i(e),c(e)}))};r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(C.a,{store:M,children:Object(E.jsx)(U,{})})}),document.getElementById("root")),Y()}},[[395,1,2]]]);
//# sourceMappingURL=main.594b6a94.chunk.js.map