(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(12),o=a.n(s),u=a(1),i=a.n(u),l=a(2),c=a(3),m=a(4),p=a(6),d=a(5),h=a(7),f={signIn:"SIGNIN",signUp:"SIGNUP",signedInMain:"SIGNEDIN_MAIN",signedInUpdateName:"SIGNEDIN_UPDATENAME",signedInUpdateAvatar:"SIGNEDIN_UPDATEAVATAR",forgotPassword:"FORGOT_PASSWORD",createNewForum:"CREATE_NEW_FORUM",viewForum:"VIEW_FORUM"},E=a(8),g=function(e){var t=e.setField,a=e.submitForm,r=e.values,s=e.fields;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:a},s.map(function(e){var a=e.key,s=e.name;return n.a.createElement("div",{key:a},n.a.createElement("span",null,s,": "),n.a.createElement("input",{value:r[a],name:a,onChange:t,type:"password"===a||"passwordConf"===a?"password":""}))}),n.a.createElement("input",{type:"submit",value:"Submit"})))},b={base:"https://api.comtalk.tech",testbase:"https://localhost:4000",handlers:{users:"/v1/Seattle/users",myuser:"/v1/Seattle/users/me",myuserAvatar:"/v1/Seattle/users/me/avatar",sessions:"/v1/Seattle/sessions",sessionsMine:"/v1/Seattle/sessions/mine",resetPasscode:"/v1/Seattle/resetcodes",passwords:"/v1/Seattle/passwords/",forum:"/v1/Seattle/forum",specificForum:"/v1/Seattle/forum/"}},v=(a(21),function(e){var t=e.error,a=e.setError;switch(t){case"":return n.a.createElement(n.a.Fragment,null);default:return n.a.createElement("div",{className:"error"},n.a.createElement("span",{className:"error-hide",onClick:function(){return a("")}},"x"),"Error: ",t)}}),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setField=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.submitForm=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,n,s,o,u,l,c,m,p,d,h,f;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=a.state,n=r.email,s=r.userName,o=r.firstName,u=r.lastName,l=r.password,c=r.passwordConf,m={email:n,userName:s,firstName:o,lastName:u,password:l,passwordConf:c},e.next=5,fetch(b.base+b.handlers.users,{method:"POST",body:JSON.stringify(m),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((p=e.sent).status>=300)){e.next=12;break}return e.next=9,p.text();case 9:return d=e.sent,a.setError(d),e.abrupt("return");case 12:return h=p.headers.get("Authorization"),localStorage.setItem("Authorization",h),a.setError(""),a.props.setAuthToken(h),e.next=18,p.json();case 18:f=e.sent,a.props.setUser(f);case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",userName:"",firstName:"",lastName:"",password:"",passwordConf:"",error:""},a.fields=[{name:"Email",key:"email"},{name:"Username",key:"userName"},{name:"First name",key:"firstName"},{name:"Last name",key:"lastName"},{name:"Password",key:"password"},{name:"Password Confirmation",key:"passwordConf"}],a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{error:a,setError:this.setError}),n.a.createElement(g,{setField:this.setField,submitForm:this.submitForm,values:t,fields:this.fields}),n.a.createElement("button",{onClick:function(t){return e.props.setPage(t,f.signIn)}},"Sign in instead"))}}]),t}(r.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setField=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.submitForm=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,n,s,o,u,l,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=a.state,n=r.email,s=r.password,o={email:n,password:s},e.next=5,fetch(b.base+b.handlers.sessions,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((u=e.sent).status>=300)){e.next=12;break}return e.next=9,u.text();case 9:return l=e.sent,a.setError(l),e.abrupt("return");case 12:return c=u.headers.get("Authorization"),localStorage.setItem("Authorization",c),a.setError(""),a.props.setAuthToken(c),e.next=18,u.json();case 18:m=e.sent,a.props.setUser(m);case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",error:""},a.fields=[{name:"Email",key:"email"},{name:"Password",key:"password"}],a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{error:a,setError:this.setError}),n.a.createElement(g,{setField:this.setField,submitForm:this.submitForm,values:t,fields:this.fields}),n.a.createElement("button",{onClick:function(t){return e.props.setPage(t,f.signUp)}},"Sign up instead"),n.a.createElement("button",{onClick:function(t){return e.props.setPage(t,f.forgotPassword)}},"Forgot password"))}}]),t}(r.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).sendResetCode=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,n,s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=a.state.email,n={email:r},e.next=5,fetch(b.base+b.handlers.resetPasscode,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((s=e.sent).status>=300)){e.next=12;break}return e.next=9,s.text();case 9:return o=e.sent,a.setError(o),e.abrupt("return");case 12:a.setError(""),alert("A reset code has been sent to your email"),a.setState({resetCodeSent:!0});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.updatePassword=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,n,s,o,u,l,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=a.state,n=r.email,s=r.password,o=r.passwordConf,u=r.resetCode,l={password:s,passwordConf:o,resetCode:u},e.next=5,fetch(b.base+b.handlers.passwords+n,{method:"PUT",body:JSON.stringify(l),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((c=e.sent).status>=300)){e.next=12;break}return e.next=9,c.text();case 9:return m=e.sent,a.setError(m),e.abrupt("return");case 12:a.setError(""),alert("Your password has been updated");case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.setValue=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.state={email:"",password:"",passwordConf:"",resetCode:"",resetCodeSent:!1,error:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,r=t.password,s=t.passwordConf,o=t.resetCode,u=t.resetCodeSent,i=t.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{error:i,setError:this.setError}),u?n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(t){return e.updatePassword(t)}},n.a.createElement("div",null,n.a.createElement("span",null,"Password: "),n.a.createElement("input",{name:"password",type:"password",onChange:this.setValue,value:r})),n.a.createElement("div",null,n.a.createElement("span",null,"Password Confirmation: "),n.a.createElement("input",{name:"passwordConf",type:"password",onChange:this.setValue,value:s})),n.a.createElement("div",null,n.a.createElement("span",null,"Reset Code: "),n.a.createElement("input",{name:"resetCode",onChange:this.setValue,value:o})),n.a.createElement("input",{type:"submit",value:"Update my password"}))):n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(t){return e.sendResetCode(t)}},n.a.createElement("div",null,n.a.createElement("span",null,"Email: "),n.a.createElement("input",{name:"email",onChange:this.setValue,value:a})),n.a.createElement("input",{type:"submit",value:"Send me a reset code"}))),n.a.createElement("button",{onClick:function(t){return e.props.setPage(t,f.signIn)}},"Back to sign in"))}}]),t}(r.Component),y=function(e){var t=e.page,a=e.setPage,r=e.setAuthToken,s=e.setUser;switch(t){case f.signUp:return n.a.createElement(w,{setPage:a,setAuthToken:r,setUser:s});case f.signIn:return n.a.createElement(k,{setPage:a,setAuthToken:r,setUser:s});case f.forgotPassword:return n.a.createElement(S,{setPage:a});default:return n.a.createElement(n.a.Fragment,null,"Error, invalid path reached")}},O=a(9),C=(a(11),function(e){e.user;var t=e.setPage,a=Object(r.useState)(null),s=Object(O.a)(a,2);s[0],s[1];function o(){return(o=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b.base+b.handlers.forum,{method:"GET",headers:new Headers({Authorization:localStorage.getItem("Authorization")})});case 2:if(!((t=e.sent).status>=300)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.json();case 7:a=e.sent,console.log(a);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(){o.apply(this,arguments)}()},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("main",null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",null,"Your Subscribed Channels")," "),n.a.createElement("div",{id:"subscribed_channels"},"There will be a list of buttons for each channel here once Jay can call endpoints",n.a.createElement("div",null,n.a.createElement("button",{onClick:function(e){t(e,f.viewForum)}},"View a Forum - broken"))),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(e){t(e,f.createNewForum)}},"New Forum")))))}),j=function(e){var t=e.setAuthToken,a=e.setUser,s=Object(r.useState)(""),o=Object(O.a)(s,2),u=o[0],c=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:function(){var e=Object(l.a)(i.a.mark(function e(r){var n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,fetch(b.base+b.handlers.sessionsMine,{method:"DELETE"});case 3:if(!((n=e.sent).status>=300)){e.next=10;break}return e.next=7,n.text();case 7:return s=e.sent,c(s),e.abrupt("return");case 10:localStorage.removeItem("Authorization"),c(""),t(""),a(null);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"Sign out"),u&&n.a.createElement("div",null,n.a.createElement(v,{error:u,setError:c})))},F=(r.Component,r.Component,function(e){e.user,e.setPage;var t=Object(r.useState)(null),a=Object(O.a)(t,2);a[0],a[1];function s(){return(s=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b.base+b.handlers.specificForum+"1",{method:"GET",headers:new Headers({Authorization:localStorage.getItem("Authorization")})});case 2:if(!((t=e.sent).status>=300)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.json();case 7:a=e.sent,console.log(a);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(){s.apply(this,arguments)}()},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("main",null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",null,"Channel name here")," "),n.a.createElement("div",null,"There's some posts here, it's a general forum "))))}),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setField=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.setError=function(e){a.setState({error:e})},a.submitForum=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,n,s,o,u,l,c,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=a.state,n=r.forumName,s=r.description,o={forumName:n,description:s},e.next=5,fetch(b.base+b.handlers.forum,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((u=e.sent).status>=300)){e.next=12;break}return e.next=9,u.text();case 9:return l=e.sent,a.setError(l),e.abrupt("return");case 12:return c=u.headers.get("Authorization"),localStorage.setItem("Authorization",c),a.setError(""),a.props.setAuthToken(c),e.next=18,u.json();case 18:m=e.sent,a.props.setUser(m);case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={forumName:"",description:"",error:""},a.fields=[{name:"Forum Name",key:"forumName"},{name:"Description",key:"description"}],a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.forumName,r=t.description,s=t.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{error:s,setError:this.setError}),n.a.createElement("div",null,"Enter a new forum"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.submitForum},n.a.createElement("div",null,n.a.createElement("span",null,"Forum Name: "),n.a.createElement("input",{name:"forumName",value:a,onChange:this.setField})),n.a.createElement("div",null,n.a.createElement("span",null,"Description: "),n.a.createElement("input",{name:"description",value:r,onChange:this.setField}))),n.a.createElement("button",{onClick:function(t){return e.props.setPage(t,f.signedInMain)}},"Submit"),n.a.createElement("br",null))}}]),t}(r.Component),N=function(e){var t=e.page,a=e.setPage,r=e.setAuthToken,s=e.setUser,o=e.user,u=n.a.createElement(n.a.Fragment,null),i=!0;switch(t){case f.signedInMain:u=n.a.createElement(C,{user:o,setPage:a});break;case f.signedInUpdateName:u=n.a.createElement(n.a.Fragment,null,"If you're seeing this, Jay successfully removed the updateName page");break;case f.signedInUpdateAvatar:u=n.a.createElement(n.a.Fragment,null,"If you're seeing this, Jay successfully removed the updateAvatar page");break;case f.viewForum:u=n.a.createElement(F,{user:o,setUser:s});break;case f.createNewForum:u=n.a.createElement(x,{user:o,setPage:s});break;default:u=n.a.createElement(n.a.Fragment,null,"Error, invalid path reached"),i=!1}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",null,n.a.createElement("h1",null,"ComTalk")," "),n.a.createElement("div",{id:"landing_title"},"Hello, ",o.firstName," ",o.lastName))),u,i&&n.a.createElement("button",{onClick:function(e){return a(e,f.signedInMain)}},"Back to main"),n.a.createElement(j,{setUser:s,setAuthToken:r}),n.a.createElement("footer",null,n.a.createElement("p",null,"Copyright \xa9 2020")))},A=(a(24),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).getCurrentUser=Object(l.a)(i.a.mark(function t(){var a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.authToken){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch(b.base+b.handlers.myuser,{headers:new Headers({Authorization:e.state.authToken})});case 4:if(!((a=t.sent).status>=300)){t.next=11;break}return alert("Unable to verify login. Logging out..."),localStorage.setItem("Authorization",""),e.setAuthToken(""),e.setUser(null),t.abrupt("return");case 11:return t.next=13,a.json();case 13:r=t.sent,e.setUser(r);case 15:case"end":return t.stop()}},t,this)})),e.setPageToSignIn=function(t){t.preventDefault(),e.setState({page:f.signIn})},e.setPageToSignUp=function(t){t.preventDefault(),e.setState({page:f.signUp})},e.setPage=function(t,a){t.preventDefault(),e.setState({page:a})},e.setAuthToken=function(t){e.setState({authToken:t,page:""===t?f.signIn:f.signedInMain})},e.setUser=function(t){e.setState({user:t})},e.state={page:localStorage.getItem("Authorization")?f.signedInMain:f.signIn,authToken:localStorage.getItem("Authorization")||null,user:null},e.getCurrentUser(),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.page,a=e.user;return n.a.createElement("div",null,a?n.a.createElement(N,{page:t,setPage:this.setPage,setAuthToken:this.setAuthToken,user:a,setUser:this.setUser}):n.a.createElement(y,{page:t,setPage:this.setPage,setAuthToken:this.setAuthToken,setUser:this.setUser}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.333d3a69.chunk.js.map