(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),u=a(1),i=a.n(u),l=a(2),c=a(3),m=a(4),p=a(6),d=a(5),f=a(7),h={signIn:"SIGNIN",signUp:"SIGNUP",signedInMain:"SIGNEDIN_MAIN",signedInUpdateName:"SIGNEDIN_UPDATENAME",signedInUpdateAvatar:"SIGNEDIN_UPDATEAVATAR",forgotPassword:"FORGOT_PASSWORD",createNewForum:"CREATE_NEW_FORUM",viewForum:"VIEW_FORUM"},E=a(8),g=function(e){var t=e.setField,a=e.submitForm,n=e.values,s=e.fields;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a},s.map(function(e){var a=e.key,s=e.name;return r.a.createElement("div",{key:a},r.a.createElement("span",null,s,": "),r.a.createElement("input",{value:n[a],name:a,onChange:t,type:"password"===a||"passwordConf"===a?"password":""}))}),r.a.createElement("input",{type:"submit",value:"Submit"})))},b={base:"https://api.comtalk.tech",testbase:"https://localhost:4000",handlers:{users:"/v1/Seattle/users",myuser:"/v1/Seattle/users/me",myuserAvatar:"/v1/Seattle/users/me/avatar",sessions:"/v1/Seattle/sessions",sessionsMine:"/v1/Seattle/sessions/mine",resetPasscode:"/v1/Seattle/resetcodes",passwords:"/v1/Seattle/passwords/",forum:"/v1/Seattle/forum",specificForum:"/v1/Seattle/forum/"}},v=(a(21),function(e){var t=e.error,a=e.setError;switch(t){case"":return r.a.createElement(r.a.Fragment,null);default:return r.a.createElement("div",{className:"error"},r.a.createElement("span",{className:"error-hide",onClick:function(){return a("")}},"x"),"Error: ",t)}}),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setField=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.submitForm=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,s,o,u,l,c,m,p,d,f,h;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,s=n.userName,o=n.firstName,u=n.lastName,l=n.password,c=n.passwordConf,m={email:r,userName:s,firstName:o,lastName:u,password:l,passwordConf:c},e.next=5,fetch(b.base+b.handlers.users,{method:"POST",body:JSON.stringify(m),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((p=e.sent).status>=300)){e.next=12;break}return e.next=9,p.text();case 9:return d=e.sent,a.setError(d),e.abrupt("return");case 12:return f=p.headers.get("Authorization"),localStorage.setItem("Authorization",f),a.setError(""),a.props.setAuthToken(f),e.next=18,p.json();case 18:h=e.sent,a.props.setUser(h);case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",userName:"",firstName:"",lastName:"",password:"",passwordConf:"",error:""},a.fields=[{name:"Email",key:"email"},{name:"Username",key:"userName"},{name:"First name",key:"firstName"},{name:"Last name",key:"lastName"},{name:"Password",key:"password"},{name:"Password Confirmation",key:"passwordConf"}],a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{error:a,setError:this.setError}),r.a.createElement(g,{setField:this.setField,submitForm:this.submitForm,values:t,fields:this.fields}),r.a.createElement("button",{onClick:function(t){return e.props.setPage(t,h.signIn)}},"Sign in instead"))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setField=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.submitForm=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,s,o,u,l,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,s=n.password,o={email:r,password:s},e.next=5,fetch(b.base+b.handlers.sessions,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((u=e.sent).status>=300)){e.next=12;break}return e.next=9,u.text();case 9:return l=e.sent,a.setError(l),e.abrupt("return");case 12:return c=u.headers.get("Authorization"),localStorage.setItem("Authorization",c),a.setError(""),a.props.setAuthToken(c),e.next=18,u.json();case 18:m=e.sent,a.props.setUser(m);case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",error:""},a.fields=[{name:"Email",key:"email"},{name:"Password",key:"password"}],a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{error:a,setError:this.setError}),r.a.createElement(g,{setField:this.setField,submitForm:this.submitForm,values:t,fields:this.fields}),r.a.createElement("button",{onClick:function(t){return e.props.setPage(t,h.signUp)}},"Sign up instead"),r.a.createElement("button",{onClick:function(t){return e.props.setPage(t,h.forgotPassword)}},"Forgot password"))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).sendResetCode=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state.email,r={email:n},e.next=5,fetch(b.base+b.handlers.resetPasscode,{method:"POST",body:JSON.stringify(r),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((s=e.sent).status>=300)){e.next=12;break}return e.next=9,s.text();case 9:return o=e.sent,a.setError(o),e.abrupt("return");case 12:a.setError(""),alert("A reset code has been sent to your email"),a.setState({resetCodeSent:!0});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.updatePassword=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,s,o,u,l,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,s=n.password,o=n.passwordConf,u=n.resetCode,l={password:s,passwordConf:o,resetCode:u},e.next=5,fetch(b.base+b.handlers.passwords+r,{method:"PUT",body:JSON.stringify(l),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((c=e.sent).status>=300)){e.next=12;break}return e.next=9,c.text();case 9:return m=e.sent,a.setError(m),e.abrupt("return");case 12:a.setError(""),alert("Your password has been updated");case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.setValue=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.state={email:"",password:"",passwordConf:"",resetCode:"",resetCodeSent:!1,error:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,s=t.passwordConf,o=t.resetCode,u=t.resetCodeSent,i=t.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{error:i,setError:this.setError}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(t){return e.updatePassword(t)}},r.a.createElement("div",null,r.a.createElement("span",null,"Password: "),r.a.createElement("input",{name:"password",type:"password",onChange:this.setValue,value:n})),r.a.createElement("div",null,r.a.createElement("span",null,"Password Confirmation: "),r.a.createElement("input",{name:"passwordConf",type:"password",onChange:this.setValue,value:s})),r.a.createElement("div",null,r.a.createElement("span",null,"Reset Code: "),r.a.createElement("input",{name:"resetCode",onChange:this.setValue,value:o})),r.a.createElement("input",{type:"submit",value:"Update my password"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(t){return e.sendResetCode(t)}},r.a.createElement("div",null,r.a.createElement("span",null,"Email: "),r.a.createElement("input",{name:"email",onChange:this.setValue,value:a})),r.a.createElement("input",{type:"submit",value:"Send me a reset code"}))),r.a.createElement("button",{onClick:function(t){return e.props.setPage(t,h.signIn)}},"Back to sign in"))}}]),t}(n.Component),S=function(e){var t=e.page,a=e.setPage,n=e.setAuthToken,s=e.setUser;switch(t){case h.signUp:return r.a.createElement(w,{setPage:a,setAuthToken:n,setUser:s});case h.signIn:return r.a.createElement(k,{setPage:a,setAuthToken:n,setUser:s});case h.forgotPassword:return r.a.createElement(y,{setPage:a});default:return r.a.createElement(r.a.Fragment,null,"Error, invalid path reached")}},O=a(9),j=(a(11),function(e){e.user;var t=e.setPage,a=Object(n.useState)(null),s=Object(O.a)(a,2),o=s[0],u=s[1],c=Object(n.useState)(null),m=Object(O.a)(c,2),p=m[0],d=m[1],f=Object(n.useState)(null),E=Object(O.a)(f,2),g=E[0],v=E[1],w=Object(n.useState)(null),k=Object(O.a)(w,2),y=k[0],S=k[1],j=Object(n.useState)(null),C=Object(O.a)(j,2),F=C[0],x=C[1];function N(){return(N=Object(l.a)(i.a.mark(function e(){var t,a,n,r,s,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b.base+b.handlers.forum,{method:"GET",headers:new Headers({Authorization:localStorage.getItem("Authorization")})});case 2:if(!((t=e.sent).status>=300)){e.next=5;break}return e.abrupt("return");case 5:return console.log("I am in the mainpage content"),e.next=8,t.json();case 8:a=e.sent,console.log(a),console.log(a[0]),console.log(a[0].name),console.log("Confirming that Jay's code has changed to bad code"),n="";try{n=a[0].name}finally{u(n)}r="";try{r=a[1].name}finally{d(r)}s="";try{s=a[2].name}finally{v(s)}o="";try{o=a[3].name}finally{S(o)}l="";try{l=a[4].name}finally{x(l)}case 23:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){N.apply(this,arguments)}()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Your Subscribed Channels")," "),r.a.createElement("div",{id:"subscribed_channels"},"There will be a list of buttons for each channel here once Jay can call endpoints",r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){t(e,h.viewForum)}},o)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){t(e,h.viewForum)}},p)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){t(e,h.viewForum)}},g)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){t(e,h.viewForum)}},y)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){t(e,h.viewForum)}},F))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){t(e,h.createNewForum)}},"New Forum")))))}),C=function(e){var t=e.setAuthToken,a=e.setUser,s=Object(n.useState)(""),o=Object(O.a)(s,2),u=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){var e=Object(l.a)(i.a.mark(function e(n){var r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch(b.base+b.handlers.sessionsMine,{method:"DELETE"});case 3:if(!((r=e.sent).status>=300)){e.next=10;break}return e.next=7,r.text();case 7:return s=e.sent,c(s),e.abrupt("return");case 10:localStorage.removeItem("Authorization"),c(""),t(""),a(null);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"Sign out"),u&&r.a.createElement("div",null,r.a.createElement(v,{error:u,setError:c})))},F=(n.Component,n.Component,function(e){e.user,e.setPage;var t=Object(n.useState)(null),a=Object(O.a)(t,2);a[0],a[1];function s(){return(s=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b.base+b.handlers.specificForum+"1",{method:"GET",headers:new Headers({Authorization:localStorage.getItem("Authorization")})});case 2:if(!((t=e.sent).status>=300)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.json();case 7:a=e.sent,console.log(a);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){s.apply(this,arguments)}()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Channel name here")," "),r.a.createElement("div",null,"There's some posts here, it's a general forum "))))}),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setField=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.submitForum=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,s,o,u,l,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.forumName,s=n.description,o={forumName:r,description:s},e.next=5,fetch(b.base+b.handlers.forum,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((u=e.sent).status>=300)){e.next=12;break}return e.next=9,u.text();case 9:return l=e.sent,a.setError(l),e.abrupt("return");case 12:return c=u.headers.get("Authorization"),localStorage.setItem("Authorization",c),a.setError(""),a.props.setAuthToken(c),e.next=18,u.json();case 18:m=e.sent,a.props.setUser(m);case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={forumName:"",description:"",error:""},a.fields=[{name:"Forum Name",key:"forumName"},{name:"Description",key:"description"}],a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.forumName,n=t.description,s=t.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{error:s,setError:this.setError}),r.a.createElement("div",null,"Enter a new forum"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.submitForum},r.a.createElement("div",null,r.a.createElement("span",null,"Forum Name: "),r.a.createElement("input",{name:"forumName",value:a,onChange:this.setField})),r.a.createElement("div",null,r.a.createElement("span",null,"Description: "),r.a.createElement("input",{name:"description",value:n,onChange:this.setField}))),r.a.createElement("button",{onClick:function(t){return e.props.setPage(t,h.signedInMain)}},"Submit"),r.a.createElement("br",null))}}]),t}(n.Component),N=function(e){var t=e.page,a=e.setPage,n=e.setAuthToken,s=e.setUser,o=e.user,u=r.a.createElement(r.a.Fragment,null),i=!0;switch(t){case h.signedInMain:u=r.a.createElement(j,{user:o,setPage:a});break;case h.signedInUpdateName:u=r.a.createElement(r.a.Fragment,null,"If you're seeing this, Jay successfully removed the updateName page");break;case h.signedInUpdateAvatar:u=r.a.createElement(r.a.Fragment,null,"If you're seeing this, Jay successfully removed the updateAvatar page");break;case h.viewForum:u=r.a.createElement(F,{user:o,setUser:s});break;case h.createNewForum:u=r.a.createElement(x,{user:o,setPage:s});break;default:u=r.a.createElement(r.a.Fragment,null,"Error, invalid path reached"),i=!1}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h1",null,"ComTalk")," "),r.a.createElement("div",{id:"landing_title"},"Hello, ",o.firstName," ",o.lastName))),u,i&&r.a.createElement("button",{onClick:function(e){return a(e,h.signedInMain)}},"Back to main"),r.a.createElement(C,{setUser:s,setAuthToken:n}),r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 2020")))},A=(a(24),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).getCurrentUser=Object(l.a)(i.a.mark(function t(){var a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.authToken){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch(b.base+b.handlers.myuser,{headers:new Headers({Authorization:e.state.authToken})});case 4:if(!((a=t.sent).status>=300)){t.next=11;break}return alert("Unable to verify login. Logging out..."),localStorage.setItem("Authorization",""),e.setAuthToken(""),e.setUser(null),t.abrupt("return");case 11:return t.next=13,a.json();case 13:n=t.sent,e.setUser(n);case 15:case"end":return t.stop()}},t,this)})),e.setPageToSignIn=function(t){t.preventDefault(),e.setState({page:h.signIn})},e.setPageToSignUp=function(t){t.preventDefault(),e.setState({page:h.signUp})},e.setPage=function(t,a){t.preventDefault(),e.setState({page:a})},e.setAuthToken=function(t){e.setState({authToken:t,page:""===t?h.signIn:h.signedInMain})},e.setUser=function(t){e.setState({user:t})},e.state={page:localStorage.getItem("Authorization")?h.signedInMain:h.signIn,authToken:localStorage.getItem("Authorization")||null,user:null},e.getCurrentUser(),e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.page,a=e.user;return r.a.createElement("div",null,a?r.a.createElement(N,{page:t,setPage:this.setPage,setAuthToken:this.setAuthToken,user:a,setUser:this.setUser}):r.a.createElement(S,{page:t,setPage:this.setPage,setAuthToken:this.setAuthToken,setUser:this.setUser}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.1f988547.chunk.js.map