(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(10),o=a.n(s),u=a(1),i=a.n(u),l=a(2),c=a(3),m=a(4),d=a(6),p=a(5),f="SIGNIN",h="SIGNUP",E="SIGNEDIN_MAIN",v="SIGNEDIN_UPDATENAME",g="SIGNEDIN_UPDATEAVATAR",b="FORGOT_PASSWORD",w="CREATE_NEW_FORUM",y="VIEW_FORUM",k=function(e){var t=e.setField,a=e.submitForm,r=e.values,s=e.fields;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:a},s.map((function(e){var a=e.key,s=e.name;return n.a.createElement("div",{key:a,id:"form_entry"},n.a.createElement("span",null,s,": "),n.a.createElement("input",{value:r[a],name:a,onChange:t,type:"password"===a||"passwordConf"===a?"password":""}))})),n.a.createElement("input",{id:"submit_button",type:"submit",value:"Submit"})))},S="https://api.comtalk.tech",C={users:"/v1/Seattle/users",myuser:"/v1/Seattle/users/me",myuserAvatar:"/v1/Seattle/users/me/avatar",sessions:"/v1/Seattle/sessions",sessionsMine:"/v1/Seattle/sessions/mine",resetPasscode:"/v1/Seattle/resetcodes",passwords:"/v1/Seattle/passwords/",forum:"/v1/Seattle/forum",specificForum:"/v1/Seattle/forum/"},O=(a(17),function(e){var t=e.error,a=e.setError;switch(t){case"":return n.a.createElement(n.a.Fragment,null);default:return n.a.createElement("div",{className:"error"},n.a.createElement("span",{className:"error-hide",onClick:function(){return a("")}},"x"),"Error: ",t)}}),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).setField=function(e){r.setState({[e.target.name]:e.target.value})},r.setError=function(e){r.setState({error:e})},r.submitForm=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,s,o,u,l,c,m,d,p,f,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.state,n=a.email,s=a.userName,o=a.firstName,u=a.lastName,l=a.password,c=a.passwordConf,m={email:n,userName:s,firstName:o,lastName:u,password:l,passwordConf:c},e.next=5,fetch(S+C.users,{method:"POST",body:JSON.stringify(m),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((d=e.sent).status>=300)){e.next=12;break}return e.next=9,d.text();case 9:return p=e.sent,r.setError(p),e.abrupt("return");case 12:return f=d.headers.get("Authorization"),localStorage.setItem("Authorization",f),r.setError(""),r.props.setAuthToken(f),e.next=18,d.json();case 18:h=e.sent,r.props.setUser(h);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={email:"",userName:"",firstName:"",lastName:"",password:"",passwordConf:"",error:""},r.fields=[{name:"Email",key:"email"},{name:"Username",key:"userName"},{name:"First name",key:"firstName"},{name:"Last name",key:"lastName"},{name:"Password",key:"password"},{name:"Password Confirmation",key:"passwordConf"}],r}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{error:a,setError:this.setError}),n.a.createElement(k,{setField:this.setField,submitForm:this.submitForm,values:t,fields:this.fields}),n.a.createElement("button",{id:"submit_button",onClick:function(t){return e.props.setPage(t,f)}},"Sign in instead"))}}]),a}(r.Component),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).setField=function(e){r.setState({[e.target.name]:e.target.value})},r.setError=function(e){r.setState({error:e})},r.submitForm=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,s,o,u,l,c,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.state,n=a.email,s=a.password,o={email:n,password:s},e.next=5,fetch(S+C.sessions,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((u=e.sent).status>=300)){e.next=12;break}return e.next=9,u.text();case 9:return l=e.sent,r.setError(l),e.abrupt("return");case 12:return c=u.headers.get("Authorization"),localStorage.setItem("Authorization",c),r.setError(""),r.props.setAuthToken(c),e.next=18,u.json();case 18:m=e.sent,r.props.setUser(m);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={email:"",password:"",error:""},r.fields=[{name:"Email",key:"email"},{name:"Password",key:"password"}],r}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{error:a,setError:this.setError}),n.a.createElement("h1",null,"ComTalk"),n.a.createElement("div",{id:"form_entry"},n.a.createElement(k,{setField:this.setField,submitForm:this.submitForm,values:t,fields:this.fields})),n.a.createElement("button",{id:"sign_up",onClick:function(t){return e.props.setPage(t,h)}},"Sign Up"),n.a.createElement("button",{id:"forgot_password",onClick:function(t){return e.props.setPage(t,b)}},"Forgot Password"),n.a.createElement("footer",null,n.a.createElement("p",null,"Andy | Jay | Rayna | Wanyu | Copyright \xa9 2020")))}}]),a}(r.Component),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).sendResetCode=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.state.email,n={email:a},e.next=5,fetch(S+C.resetPasscode,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((s=e.sent).status>=300)){e.next=12;break}return e.next=9,s.text();case 9:return o=e.sent,r.setError(o),e.abrupt("return");case 12:r.setError(""),alert("A reset code has been sent to your email"),r.setState({resetCodeSent:!0});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.updatePassword=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,s,o,u,l,c,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.state,n=a.email,s=a.password,o=a.passwordConf,u=a.resetCode,l={password:s,passwordConf:o,resetCode:u},e.next=5,fetch(S+C.passwords+n,{method:"PUT",body:JSON.stringify(l),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((c=e.sent).status>=300)){e.next=12;break}return e.next=9,c.text();case 9:return m=e.sent,r.setError(m),e.abrupt("return");case 12:r.setError(""),alert("Your password has been updated");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.setValue=function(e){r.setState({[e.target.name]:e.target.value})},r.setError=function(e){r.setState({error:e})},r.state={email:"",password:"",passwordConf:"",resetCode:"",resetCodeSent:!1,error:""},r}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,r=t.password,s=t.passwordConf,o=t.resetCode,u=t.resetCodeSent,i=t.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{error:i,setError:this.setError}),u?n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(t){return e.updatePassword(t)}},n.a.createElement("div",{id:"form_entry"},n.a.createElement("span",null,"Password: "),n.a.createElement("input",{name:"password",type:"password",onChange:this.setValue,value:r})),n.a.createElement("div",{id:"form_entry"},n.a.createElement("span",null,"Password Confirmation: "),n.a.createElement("input",{name:"passwordConf",type:"password",onChange:this.setValue,value:s})),n.a.createElement("div",{id:"form_entry"},n.a.createElement("span",null,"Reset Code: "),n.a.createElement("input",{name:"resetCode",onChange:this.setValue,value:o})),n.a.createElement("input",{id:"submit_button",type:"submit",value:"Update my password"}))):n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(t){return e.sendResetCode(t)}},n.a.createElement("div",null,n.a.createElement("span",null,"Email: "),n.a.createElement("input",{name:"email",onChange:this.setValue,value:a})),n.a.createElement("input",{id:"reset_button",type:"submit",value:"Send Reset Code"}))),n.a.createElement("button",{onClick:function(t){return e.props.setPage(t,f)}},"Back to sign in"))}}]),a}(r.Component),j=function(e){var t=e.page,a=e.setPage,r=e.setAuthToken,s=e.setUser;switch(t){case h:return n.a.createElement(F,{setPage:a,setAuthToken:r,setUser:s});case f:return n.a.createElement(N,{setPage:a,setAuthToken:r,setUser:s});case b:return n.a.createElement(x,{setPage:a});default:return n.a.createElement(n.a.Fragment,null,"Error, invalid path reached")}},A=a(7),P=(a(9),function(e){e.user;var t=e.setPage,a=Object(r.useState)(null),s=Object(A.a)(a,2);s[0],s[1];function o(){return(o=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S+C.forum,{method:"GET",headers:new Headers({Authorization:localStorage.getItem("Authorization")})});case 2:if(!((t=e.sent).status>=300)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.json();case 7:a=e.sent,console.log(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("main",null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",null,"Your Subscribed Channels")," "),n.a.createElement("div",{id:"subscribed_channels"},"There will be a list of buttons representing subscribed channels here once Jay can call endpoints",n.a.createElement("div",null,n.a.createElement("button",{onClick:function(e){t(e,y)}},"View a Forum (Broken)"))),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(e){t(e,w)}},"New Forum")))))}),T=function(e){var t=e.setAuthToken,a=e.setUser,s=Object(r.useState)(""),o=Object(A.a)(s,2),u=o[0],c=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{id:"sign_out",onClick:function(){var e=Object(l.a)(i.a.mark((function e(r){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,fetch(S+C.sessionsMine,{method:"DELETE"});case 3:if(!((n=e.sent).status>=300)){e.next=10;break}return e.next=7,n.text();case 7:return s=e.sent,c(s),e.abrupt("return");case 10:localStorage.removeItem("Authorization"),c(""),t(""),a(null);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"Sign Out"),u&&n.a.createElement("div",null,n.a.createElement(O,{error:u,setError:c})))},_=(r.Component,r.Component,function(e){e.user,e.setPage;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",null,"Hiking for the Win!")),n.a.createElement("div",null,n.a.createElement("div",{id:"posts"},n.a.createElement("p",null,"There's some posts here, it's a general forum."),n.a.createElement("div",{id:"rendered_messages"},n.a.createElement("div",{id:"post"},n.a.createElement("div",{id:"username"},n.a.createElement("p",null,"John Doe")),n.a.createElement("div",{id:"timestamp"},n.a.createElement("p",null,"10/7/2020 5:00 pm")),n.a.createElement("div",{id:"mesage"},n.a.createElement("p",null,"Hey! Does anyone want to go on a hike in the PNW?"))),n.a.createElement("div",{id:"post"},n.a.createElement("div",{id:"username"},n.a.createElement("p",null,"Jill Donovan")),n.a.createElement("div",{id:"timestamp"},n.a.createElement("p",null,"10/7/2020 7:12 pm")),n.a.createElement("div",{id:"mesage"},n.a.createElement("p",null,"Hiya! I am so down! Saturday? PS. Our initials match *Heart*!")))))),n.a.createElement("div",{id:"new_message_container"},n.a.createElement("label",{for:"new_message"}),n.a.createElement("textarea",{id:"new_message"}),n.a.createElement("button",{"aria-label":"Send"},"Send"))))}),U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).setField=function(e){r.setState({[e.target.name]:e.target.value})},r.setError=function(e){r.setState({error:e})},r.submitForum=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,s,o,u,l,c,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.state,n=a.forumName,s=a.description,o={forumName:n,description:s},e.next=5,fetch(S+C.forum,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});case 5:if(!((u=e.sent).status>=300)){e.next=12;break}return e.next=9,u.text();case 9:return l=e.sent,r.setError(l),e.abrupt("return");case 12:return c=u.headers.get("Authorization"),localStorage.setItem("Authorization",c),r.setError(""),r.props.setAuthToken(c),e.next=18,u.json();case 18:m=e.sent,r.props.setUser(m);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={forumName:"",description:"",error:""},r.fields=[{name:"Forum Name",key:"forumName"},{name:"Description",key:"description"}],r}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.forumName,r=t.description,s=t.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{error:s,setError:this.setError}),n.a.createElement("div",null,n.a.createElement("h2",null,"Enter a New Forum")),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.submitForum},n.a.createElement("div",{id:"form_entry"},n.a.createElement("span",null,"Forum Name: "),n.a.createElement("input",{name:"forumName",value:a,onChange:this.setField})),n.a.createElement("div",{id:"form_entry"},n.a.createElement("span",null,"Description: "),n.a.createElement("input",{name:"description",value:r,onChange:this.setField}))),n.a.createElement("button",{id:"forum_submit_button",onClick:function(t){return e.props.setPage(t,E)}},"Submit"),n.a.createElement("br",null))}}]),a}(r.Component),I=function(e){var t=e.page,a=e.setPage,r=e.setAuthToken,s=e.setUser,o=e.user,u=n.a.createElement(n.a.Fragment,null),i=!0;switch(t){case E:u=n.a.createElement(P,{user:o,setPage:a});break;case v:u=n.a.createElement(n.a.Fragment,null,"If you're seeing this, Jay successfully removed the updateName page");break;case g:u=n.a.createElement(n.a.Fragment,null,"If you're seeing this, Jay successfully removed the updateAvatar page");break;case y:u=n.a.createElement(_,{user:o,setUser:s});break;case w:u=n.a.createElement(U,{user:o,setPage:s});break;default:u=n.a.createElement(n.a.Fragment,null,"Error, invalid path reached"),i=!1}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",null,n.a.createElement("h1",null,"ComTalk")," "),n.a.createElement("div",{id:"landing_title"},"Hello, ",o.firstName," ",o.lastName))),u,i&&n.a.createElement("button",{id:"back_home",onClick:function(e){return a(e,E)}},"Back to Main"),n.a.createElement(T,{setUser:s,setAuthToken:r}),n.a.createElement("footer",null,n.a.createElement("p",null,"Andy | Jay | Rayna | Wanyu | Copyright \xa9 2020")))},D=(a(18),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getCurrentUser=Object(l.a)(i.a.mark((function t(){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.authToken){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch(S+C.myuser,{headers:new Headers({Authorization:e.state.authToken})});case 4:if(!((a=t.sent).status>=300)){t.next=11;break}return alert("Unable to verify login. Logging out..."),localStorage.setItem("Authorization",""),e.setAuthToken(""),e.setUser(null),t.abrupt("return");case 11:return t.next=13,a.json();case 13:r=t.sent,e.setUser(r);case 15:case"end":return t.stop()}}),t)}))),e.setPageToSignIn=function(t){t.preventDefault(),e.setState({page:f})},e.setPageToSignUp=function(t){t.preventDefault(),e.setState({page:h})},e.setPage=function(t,a){t.preventDefault(),e.setState({page:a})},e.setAuthToken=function(t){e.setState({authToken:t,page:""===t?f:E})},e.setUser=function(t){e.setState({user:t})},e.state={page:localStorage.getItem("Authorization")?E:f,authToken:localStorage.getItem("Authorization")||null,user:null},e.getCurrentUser(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.page,a=e.user;return n.a.createElement("div",null,a?n.a.createElement(I,{page:t,setPage:this.setPage,setAuthToken:this.setAuthToken,user:a,setUser:this.setUser}):n.a.createElement(j,{page:t,setPage:this.setPage,setAuthToken:this.setAuthToken,setUser:this.setUser}))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.2529bfc4.chunk.js.map