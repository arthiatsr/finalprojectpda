(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,a,t){e.exports=t(234)},132:function(e,a,t){},183:function(e,a){},184:function(e,a){},192:function(e,a){},194:function(e,a){},234:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),l=t.n(o),i=(t(132),t(59)),c=t(27),s=t(20),u=t(273),m=t(235),p=t(276),d=t(284),g=t(278),h=Object(u.a)((function(e){return{root:{flexGrow:1},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function b(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),o=t[0],l=t[1],i=Object(n.useState)(""),c=Object(s.a)(i,2),u=c[0],b=c[1],E=h();return r.a.createElement("div",{className:E.root},r.a.createElement(p.a,{container:!0,direction:"column",spacing:3},r.a.createElement(p.a,{item:!0,xs:8,sm:4},r.a.createElement(m.a,{className:E.paper},r.a.createElement("h3",null,"Sign in"),r.a.createElement("form",{className:E.root,noValidate:!0,autoComplete:"off"},r.a.createElement(d.a,{id:"standard-basic",required:!0,fullWidth:!0,label:"Enter Email",type:"email",onChange:function(e){return l(e.target.value)},name:"email",value:o}),r.a.createElement(d.a,{id:"standard-basic",required:!0,fullWidth:!0,label:"Enter Password",type:"password",onChange:function(e){return b(e.target.value)},name:"password",value:u}),r.a.createElement(g.a,{onClick:function(e){e.preventDefault()},className:E.button,fullWidth:!0,variant:"contained",color:"primary"},"Log in"))))))}var E=t(19),f=t(11),v=t(281),w=t(282),y=t(279),k=t(283),x=t(285),C=t(280),j=t(286),O=t(118),S=t(109),N=t.n(S),I=t(110),F=t.n(I),A=t(75),D=t.n(A),R=t(73),B=t.n(R),L=t(74),M=t.n(L),W=t(111),P=t.n(W),_=t(47),G=t.n(_),T=Object(u.a)((function(e){return{}}));function q(e){T();return r.a.createElement("div",null,(e.photoItems.photoArray||[]).map((function(e,a){return r.a.createElement("img",{key:a,src:e.urls.regular,alt:e.alt_description})})))}t(152),t(153);var z={getAuth:function(e,a){return G.a.get("/api/auth/"+e+"/"+a)},saveAuth:function(e){return console.log("authData",e),G.a.post("/api/auth",e)},findData:function(){return console.log("i ma in find data"),G.a.get("/api/test/new")}},J=Object(u.a)((function(e){return{button:{marginLeft:e.spacing(1),background:"linear-gradient(45deg, #FE6B8B 3%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",width:150},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(E.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(E.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(E.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));function U(e){var a=J(),t=r.a.useState(null),n=Object(s.a)(t,2),o=n[0],l=n[1],i=r.a.useState(null),c=Object(s.a)(i,2),u=c[0],m=c[1],p=r.a.useState(""),d=Object(s.a)(p,2),h=(d[0],d[1],r.a.useState([])),b=Object(s.a)(h,2),E=b[0],f=b[1],S=(Boolean(o),Boolean(u)),I=function(e){l(e.currentTarget)},A=function(){m(null)},R=function(){l(null)};function L(){e.history.push("/email")}var W=r.a.createElement(O.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:S,onClose:A},r.a.createElement(j.a,null,r.a.createElement(y.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(C.a,{badgeContent:4,color:"secondary"},r.a.createElement(B.a,{onClick:L}))),r.a.createElement("p",null,"Messages")),r.a.createElement(j.a,null,r.a.createElement(y.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(C.a,{badgeContent:11,color:"secondary"},r.a.createElement(M.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(j.a,{onClick:I},r.a.createElement(y.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(D.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:a.grow},r.a.createElement(v.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement("div",null,r.a.createElement(g.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},r.a.createElement(y.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(N.a,null),r.a.createElement(k.a,{className:a.title,variant:"h6",noWrap:!0},"Click-Me"))),r.a.createElement(O.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:R},r.a.createElement(j.a,{onClick:function(e){console.log("i am inside photo"),z.findData().then((function(e){f({photoArray:e.data.results},console.log("res",e.data))})).catch((function(e){return console.log(e)}))}},"MyPassion"),r.a.createElement(j.a,{onClick:R},"Balance Sheet"),r.a.createElement(j.a,{onClick:R},"Reminders"),r.a.createElement(j.a,{onClick:R},"Daily News"),r.a.createElement(j.a,{onClick:R},"Movies Trending in Theater"),r.a.createElement(j.a,{onClick:R},"Journal"))),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(F.a,null)),r.a.createElement(x.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.sectionDesktop},r.a.createElement(y.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(C.a,{badgeContent:4,color:"secondary"},r.a.createElement(B.a,{onClick:L}))),r.a.createElement(y.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(C.a,{badgeContent:17,color:"secondary"},r.a.createElement(M.a,null))),r.a.createElement(y.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:I,color:"inherit"},r.a.createElement(D.a,null))),r.a.createElement("div",{className:a.sectionMobile},r.a.createElement(y.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement(P.a,null))),r.a.createElement(g.a,{onClick:function(){e.history.push("/")},className:a.button,fullWidth:!0,variant:"contained",color:"primary"},"Log out"))),W,function(){if(console.log(Object.keys(E).length,E),Object.keys(E).length>0)return console.log("i am inside",E),r.a.createElement("div",null,r.a.createElement(q,{photoItems:E}))}())}var V=t(112),H=t(113),Y=t(119),K=t(114),Q=t(120),X=t(4);function Z(){return r.a.createElement("div",{align:"center"},"Copyright \xa9 ",(new Date).getFullYear())}var $=function(e){function a(){var e,t;Object(V.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(Y.a)(this,(e=Object(K.a)(a)).call.apply(e,[this].concat(r)))).state={Authen:[],email:"",password:"",valid:!1},t.signInChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(E.a)({},n,r))},t.signUpSubmit=function(e){e.preventDefault(),t.state.email&&t.state.password&&(console.log(t.state.email,t.state.password),z.saveAuth({email:t.state.email,password:t.state.password}).then((function(e){return t.setState({Authen:e.data,email:"",password:""})}),t.props.history.push("/loggedin")).catch((function(e){return console.log(e)})))},t.signInSubmit=function(e){e.preventDefault(),t.state.email&&t.state.password&&z.getAuth(t.state.email,t.state.password).then((function(e){e.data.length>0?t.props.history.push("/loggedin"):alert("Login Failed")})).catch((function(e){return alert("Login Failed")}))},t}return Object(Q.a)(a,e),Object(H.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{className:e.image,container:!0,direction:"column",spacing:3},r.a.createElement(p.a,{item:!0,xs:8,sm:4},r.a.createElement(m.a,{className:e.paper},r.a.createElement("h3",null,"Authentication Please"),r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(d.a,{id:"emainsignup",required:!0,fullWidth:!0,label:"Enter Email",type:"email",value:this.state.email,onChange:this.signInChange,name:"email"}),r.a.createElement(d.a,{id:"passwordsignup",required:!0,fullWidth:!0,label:"Enter Password",type:"password",onChange:this.signInChange,name:"password",value:this.state.password}),r.a.createElement(g.a,{onClick:this.signInSubmit,className:e.signinbutton,fullWidth:!0,variant:"contained",color:"primary"},"Sign In"),r.a.createElement(g.a,{onClick:this.signUpSubmit,className:e.signupbutton,fullWidth:!0,variant:"contained",color:"primary"},"Sign Up"))))),r.a.createElement(p.a,null,r.a.createElement(Z,{className:e.copyRig})))}}]),a}(n.Component),ee=Object(X.a)((function(e){return{root:{flexGrow:1},image:{padding:60,margin:10,backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundPosition:"center"},signinbutton:{background:"linear-gradient(45deg, green, 95%, #FF8E53 5%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},signupbutton:{background:"linear-gradient(45deg, red, 95%, #FF8E53 5%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},copyRig:{padding:60}}}))($),ae=t(115),te=t.n(ae),ne=function(e){var a=Object(n.useState)(e),t=Object(s.a)(a,2),r=t[0],o=t[1];return{value:r,setValue:o,reset:function(){return o("")},bind:{value:r,onChange:function(e){o(e.target.value)}}}},re=Object(u.a)((function(e){return{root:{flexGrow:1},paper:Object(E.a)({padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},"padding",30),image:{padding:60,margin:30,backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundPosition:"right"}}}));function oe(e){var a=ne(""),t=(a.value,a.bind),n=a.reset,o=ne(""),l=(o.value,o.bind),i=o.reset,c=ne(""),s=(c.value,c.bind),u=c.reset,m=re();return r.a.createElement("div",null,r.a.createElement(g.a,{onClick:function(){e.history.push("/")},className:m.button,variant:"contained",color:"primary"},"Log out"),r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),te.a.sendForm("default_service","reach_friend",e.target,"user_6E17hEsOwkfjk6uHyijD7").then((function(e){console.log(e.text),n(),i(),u()}),(function(e){console.log(e.text)}))}},r.a.createElement("label",null,"name"),r.a.createElement("input",Object.assign({type:"text"},t,{name:"user_name"})),r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("input",Object.assign({type:"email"},l,{name:"user_email"})),r.a.createElement("br",null),r.a.createElement("label",null,"Message"),r.a.createElement("textarea",Object.assign({},s,{name:"message"})),r.a.createElement("input",{type:"submit",value:"Send"})))}var le=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("i",null,"Go Digital!!!")),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/home",component:b}),r.a.createElement(c.a,{exact:!0,path:"/loggedin",component:U}),r.a.createElement(c.a,{exact:!0,path:"/",component:ee}),r.a.createElement(c.a,{exact:!0,path:"/email",component:oe}))))};t(232).config(),l.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.e1533db6.chunk.js.map