(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{245:function(e,t,n){},371:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return Ue}));var r=n(0),a=n(48),o=n.n(a),c=(n(242),n(243),n(244),n(245),n(382)),i=n(14),s=n(25),l=n(223),u=n(226),j=n(384),d=n(16),p=n.n(d),b=n(35),h=n(11),f=n(13),O=n(10),x=n(31),m=n.n(x),g=n(113);m.a.interceptors.response.use(function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){var t=e.response,n=t.data,r=t.status,a=t.config;switch(r){case 400:if("string"===typeof n&&g.b.error(n),"get"===a.method&&n.errors.hasOwnProperty("id")&&Ue.push("not-found"),n.errors){var o=[];for(var c in n.errors)n.errors[c]&&o.push(n.errors[c]);throw o.flat()}break;case 401:g.b.error("unauthorized");break;case 404:Ue.push("/not-found");break;case 500:N.commonStore.setServerError(n),Ue.push("server-error")}return Promise.reject(e)})),m.a.defaults.baseURL="/api",m.a.interceptors.request.use((function(e){var t=N.commonStore.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}));var v=function(e){return e.data},w=function(e){return m.a.get(e).then(v)},y=function(e,t){return m.a.post(e,t).then(v)},S=function(e,t){return m.a.put(e,t).then(v)},k=function(e){return m.a.delete(e).then(v)},C={Applications:{list:function(){return w("/apps")},details:function(e){return w("/apps/".concat(e))},create:function(e){return y("/apps",e)},update:function(e){return S("/apps",e)},delele:function(e){return k("/apps/".concat(e))}},Account:{current:function(){return w("/account")},login:function(e){return y("/account/login",e)},register:function(e){return y("/account/register",e)}},Profiles:{get:function(e){return w("/profiles/".concat(e))},updateProfile:function(e){return S("/profiles",e)},uploadPhoto:function(e){var t=new FormData;return t.append("File",e),m.a.post("photos",t,{headers:{"Content-type":"multipart/form-data"}})},setMainPhoto:function(e){return y("/photos/".concat(e,"/setMain"),{})},deletePhoto:function(e){return k("/photos/".concat(e))}}},P=function(){function e(){var t=this;Object(h.a)(this,e),this.appsRegistry=new Map,this.selectedApp=void 0,this.loading=!1,this.loadingInitial=!1,this.loadApps=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingInitial(!0),e.prev=1,e.next=4,C.Applications.list();case 4:e.sent.forEach((function(e){t.appsRegistry.set(e.id,e)})),t.setSelectedapp(t.apps[0]),t.setLoadingInitial(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t.setLoadingInitial(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),this.loadApp=function(){var e=Object(b.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.getApp(n))){e.next=5;break}t.selectedApp=r,e.next=19;break;case 5:return t.loadingInitial=!0,e.prev=6,e.next=9,C.Applications.details(n);case 9:r=e.sent,t.setApp(r),t.setSelectedapp(r),t.setLoadingInitial(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),console.log(e.t0),t.setLoadingInitial(!1);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}(),this.getApp=function(e){return t.appsRegistry.get(e)},this.setApp=function(e){t.appsRegistry.set(e.id,e)},this.setLoadingInitial=function(e){return t.loadingInitial=e},this.setSelectedapp=function(e){return t.selectedApp=e},Object(O.d)(this)}return Object(f.a)(e,[{key:"apps",get:function(){return Array.from(this.appsRegistry.values())}}]),e}(),I=n(27),A=function(){function e(){var t=this;Object(h.a)(this,e),this.profile=null,this.loadingProfile=!1,this.uploading=!1,this.loading=!1,this.loadProfile=function(){var e=Object(b.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingProfile=!0,e.prev=1,e.next=4,C.Profiles.get(n);case 4:r=e.sent,Object(O.h)((function(){t.profile=r,t.loadingProfile=!1})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),Object(O.h)((function(){return t.loadingProfile=!1}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateProfile=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,C.Profiles.updateProfile(n);case 4:Object(O.h)((function(){var e;n.displayName&&n.displayName!==(null===(e=N.userStore.user)||void 0===e?void 0:e.displayName)&&N.userStore.setDisplayName(n.displayName),t.profile=Object(I.a)(Object(I.a)({},t.profile),n),t.loading=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(O.h)((function(){return t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),this.uploadPhoto=function(){var e=Object(b.a)(p.a.mark((function e(n){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.uploading=!0,e.prev=1,e.next=4,C.Profiles.uploadPhoto(n);case 4:r=e.sent,a=r.data,Object(O.h)((function(){var e;t.profile&&(null===(e=t.profile.photos)||void 0===e||e.push(a),a.isMain&&N.userStore.user&&(N.userStore.setImage(a.url),t.profile.image=a.url));t.uploading=!1})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),Object(O.h)((function(){return t.uploading=!1}));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),this.setMainPhoto=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,C.Profiles.setMainPhoto(n.id);case 4:N.userStore.setImage(n.url),Object(O.h)((function(){t.profile&&t.profile.photos&&(t.profile.photos.find((function(e){return e.isMain})).isMain=!1,t.profile.photos.find((function(e){return e.id===n.id})).isMain=!0,t.profile.image=n.url,t.loading=!1)})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),Object(O.h)((function(){return t.loading=!1})),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.deletePhoto=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,C.Profiles.deletePhoto(n.id);case 4:Object(O.h)((function(){var e;t.profile&&(t.profile.photos=null===(e=t.profile.photos)||void 0===e?void 0:e.filter((function(e){return e.id!==n.id})),t.loading=!1)})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),Object(O.h)((function(){return t.loading=!1})),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Object(O.d)(this)}return Object(f.a)(e,[{key:"isCurrentUser",get:function(){return!(!N.userStore.user||!this.profile)&&N.userStore.user.userName===this.profile.userName}}]),e}(),L=function(){function e(){var t=this;Object(h.a)(this,e),this.user=null,this.login=function(){var e=Object(b.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Account.login(n);case 3:r=e.sent,N.commonStore.setToken(r.token),Object(O.h)((function(){t.user=r,Ue.push("/apps"),N.modalStore.closeModal()})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.logout=function(){N.commonStore.setToken(null),window.localStorage.removeItem("jwt"),t.user=null,Ue.push("/")},this.getUser=Object(b.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Account.current();case 3:n=e.sent,Object(O.h)((function(){t.user=n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.register=function(){var e=Object(b.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Account.register(n);case 3:r=e.sent,N.commonStore.setToken(r.token),Object(O.h)((function(){t.user=r,Ue.push("/apps"),N.modalStore.closeModal()})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.setImage=function(e){t.user&&(t.user.image=e)},this.setDisplayName=function(e){t.user&&(t.user.displayName=e)},Object(O.d)(this)}return Object(f.a)(e,[{key:"isLoggedIn",get:function(){return!!this.user}}]),e}(),N={appStore:new P,commonStore:new function e(){var t=this;Object(h.a)(this,e),this.error=null,this.token=window.localStorage.getItem("jwt"),this.appLoaded=!1,this.setServerError=function(e){t.error=e},this.setToken=function(e){return t.token=e},this.setAppLoaded=function(){return t.appLoaded=!0},Object(O.d)(this),Object(O.g)((function(){return t.token}),(function(e){e?window.localStorage.setItem("jwt",e):window.localStorage.removeItem("jwt")}))},userStore:new L,modalStore:new function e(){var t=this;Object(h.a)(this,e),this.modal={open:!1,body:null},this.openModal=function(e){t.modal.open=!0,t.modal.body=e},this.closeModal=function(){t.modal.open=!1,t.modal.body=null},Object(O.d)(this)},profileStore:new A},M=Object(r.createContext)(N);function E(){return Object(r.useContext)(M)}var F=n(1),R=Object(i.a)((function(){var e=E().userStore,t=e.user,n=e.logout;return Object(F.jsx)(l.a,{inverted:!0,fixed:"top",children:Object(F.jsxs)(c.a,{children:[Object(F.jsxs)(l.a.Item,{as:s.b,exact:!0,to:"/",header:!0,children:[Object(F.jsx)("img",{src:"/assets/logo.jpg",alt:"logo",style:{marginRight:"10px"}}),"Link4Vets"]}),Object(F.jsx)(l.a.Item,{as:s.b,to:"/apps",name:"Apps"}),Object(F.jsx)(l.a.Item,{as:s.b,to:"/errors",name:"Errors"}),Object(F.jsx)(l.a.Item,{as:s.b,to:"/feedback",name:"Feedback"}),Object(F.jsxs)(l.a.Item,{position:"right",children:[Object(F.jsx)(u.a,{src:(null===t||void 0===t?void 0:t.image)||"/assets/user.png",avatar:!0,spaced:"right"}),Object(F.jsx)(j.a,{pointing:"top left",text:null===t||void 0===t?void 0:t.displayName,children:Object(F.jsxs)(j.a.Menu,{children:[Object(F.jsx)(j.a.Item,{as:s.a,to:"/profiles/".concat(null===t||void 0===t?void 0:t.userName),text:"My Profile",icon:"user"}),Object(F.jsx)(j.a.Item,{onClick:n,text:"Logout",icon:"power"})]})})]})]})})})),U=n(227),q=n(391),T=n(383);function z(e){var t=e.inverted,n=void 0===t||t,r=e.content,a=void 0===r?"Loading...":r;return Object(F.jsx)(q.a,{active:!0,inverted:n,children:Object(F.jsx)(T.a,{content:a})})}var D=n(12),V=n(388),G=Object(i.a)((function(){var e=E().appStore,t=e.selectedApp,n=e.loadApp,a=e.loadingInitial,o=Object(D.h)().id;return Object(r.useEffect)((function(){o&&n(o)}),[o,n]),a||!t?Object(F.jsx)(z,{}):Object(F.jsxs)(V.a,{fluid:!0,children:[Object(F.jsx)(u.a,{src:"/assets/categoryImages/".concat(t.category.toLowerCase(),".jpg")}),Object(F.jsxs)(V.a.Content,{children:[Object(F.jsx)(V.a.Header,{children:t.displayName}),Object(F.jsx)(V.a.Description,{children:t.description})]}),Object(F.jsx)(V.a.Content,{extra:!0,children:Object(F.jsx)("span",{children:t.category})})]})})),B=n(176),H=n(386),J=n(154),W=n(390);function $(e){var t=e.app,n=E().appStore.setSelectedapp;return Object(F.jsxs)(B.a.Group,{children:[Object(F.jsx)(B.a,{children:Object(F.jsx)(H.a.Group,{children:Object(F.jsxs)(H.a,{children:[t.isExternal&&Object(F.jsx)(J.a,{style:{position:"absolute",marginLeft:"-12px"},color:"orange",ribbon:"right",children:"External"}),Object(F.jsx)(H.a.Image,{size:"tiny",avatar:!0,src:"/assets/categoryImages/".concat(t.category.toLowerCase(),".jpg")}),Object(F.jsxs)(H.a.Content,{children:[Object(F.jsx)(H.a.Header,{as:s.a,to:"/apps/".concat(t.id),children:t.displayName}),Object(F.jsx)(H.a.Description,{children:t.category})]})]})})}),Object(F.jsxs)(B.a,{clearing:!0,children:[Object(F.jsx)("span",{children:t.description}),Object(F.jsxs)(W.a.Group,{floated:"right",children:[Object(F.jsx)(W.a,{onClick:function(){return n(t)},floated:"right",content:"Details",color:"green"}),Object(F.jsx)(W.a,{as:s.a,target:"_blank",to:{pathname:t.baseUrl},color:"blue",floated:"right",content:"Go"})]})]}),Object(F.jsx)(B.a,{secondary:!0,children:Object(F.jsx)("span",{children:"23 Likes"})})]})}var _=Object(i.a)((function(){var e=E().appStore.apps;return Object(F.jsx)(F.Fragment,{children:e.map((function(e){return Object(F.jsx)($,{app:e},e.id)}))})})),K=Object(i.a)((function(){var e=E().appStore,t=e.selectedApp;return Object(r.useEffect)((function(){e.loadApps()}),[e]),e.loadingInitial?Object(F.jsx)(z,{content:"Loading Applications..."}):Object(F.jsxs)(U.a,{children:[Object(F.jsx)(U.a.Column,{width:"10",children:Object(F.jsx)(_,{})}),Object(F.jsx)(U.a.Column,{width:"6",children:t&&Object(F.jsx)(G,{})})]})})),Q=n(393),X=n(34),Y=n(19),Z=n(385);function ee(e){var t=Object(X.d)(e.name),n=Object(Y.a)(t,2),r=n[0],a=n[1];return Object(F.jsxs)(Z.a.Field,{error:a.touched&&!!a.error,children:[Object(F.jsx)("label",{children:e.label}),Object(F.jsx)("input",Object(I.a)(Object(I.a)({},r),e)),a.touched&&a.error?Object(F.jsx)(J.a,{basic:!0,color:"red",children:a.error}):null]})}var te=Object(i.a)((function(){var e=E().userStore;return Object(F.jsx)(X.c,{initialValues:{email:"",password:"",error:null},onSubmit:function(t,n){var r=n.setErrors;return e.login(t).catch((function(e){return r({error:"Invalid email or password"})}))},children:function(e){var t=e.handleSubmit,n=e.isSubmitting,r=e.errors;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(X.b,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(F.jsx)(Q.a,{as:"h2",content:"Login to Link4Vets",color:"teal",textAlign:"center"}),Object(F.jsx)(ee,{name:"email",placeholder:"Email"}),Object(F.jsx)(ee,{name:"password",placeholder:"Password",type:"password"}),Object(F.jsx)(X.a,{name:"error",render:function(){return Object(F.jsx)(J.a,{style:{marginBottom:10},basic:!0,color:"red",content:r.error})}}),Object(F.jsx)(W.a,{loading:n,positive:!0,content:"Login",type:"submit",fluid:!0})]}),Object(F.jsx)("span",{children:Object(F.jsx)(s.a,{to:"#",children:"forgot your password?"})})]})}})})),ne=n(54),re=n(389);function ae(e){var t=e.errors;return Object(F.jsx)(re.a,{error:!0,children:t&&Object(F.jsx)(re.a.List,{children:t.map((function(e,t){return Object(F.jsx)(re.a.Item,{children:e},t)}))})})}var oe=Object(i.a)((function(){var e=E().userStore;return Object(F.jsx)(X.c,{initialValues:{email:"",password:"",displayName:"",userName:"",UniqueId:"",error:null},onSubmit:function(t,n){var r=n.setErrors;return e.register(t).catch((function(e){return r({error:e})}))},validationSchema:ne.a({displayName:ne.b().required(),userName:ne.b().required(),email:ne.b().required().email(),uniqueId:ne.b().required().matches(/^[FN]\d{4,5}$/,"Unique Id is of the form F1234[5] or N1234[5]"),password:ne.b().required()}),children:function(e){var t=e.handleSubmit,n=e.isSubmitting,r=e.errors,a=e.isValid,o=e.dirty;return Object(F.jsxs)(X.b,{className:"ui form error",onSubmit:t,autoComplete:"off",children:[Object(F.jsx)(Q.a,{as:"h2",content:"Sign up to Link4Vets",color:"teal",textAlign:"center"}),Object(F.jsx)(ee,{name:"email",placeholder:"Email"}),Object(F.jsx)(ee,{name:"displayName",placeholder:"Display Name"}),Object(F.jsx)(ee,{name:"userName",placeholder:"User Name"}),Object(F.jsx)(ee,{name:"uniqueId",placeholder:"Unique Id"}),Object(F.jsx)(ee,{name:"password",placeholder:"Password",type:"password"}),Object(F.jsx)(X.a,{name:"error",render:function(){return Object(F.jsx)(ae,{errors:r.error})}}),Object(F.jsx)(W.a,{disabled:!a||!o||n,loading:n,positive:!0,content:"Sign up",type:"submit",fluid:!0})]})}})})),ce=Object(i.a)((function(){var e=E(),t=e.userStore,n=e.modalStore;return Object(F.jsx)(B.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(F.jsxs)(c.a,{text:!0,children:[Object(F.jsxs)(Q.a,{as:"h1",inverted:!0,children:[Object(F.jsx)(u.a,{size:"massive",src:"assets/logo.jpg",alt:"logo",style:{marginBottom:12}}),"Link4Vets"]}),t.isLoggedIn?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Q.a,{as:"h2",inverted:!0,content:"Welcome to Link4Vets"}),Object(F.jsx)(W.a,{as:s.a,to:"/apps",size:"huge",inverted:!0,children:"Dashboard"})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(W.a,{onClick:function(){return n.openModal(Object(F.jsx)(te,{}))},size:"huge",inverted:!0,children:"Login"}),Object(F.jsx)(W.a,{onClick:function(){return n.openModal(Object(F.jsx)(oe,{}))},size:"huge",inverted:!0,children:"Register"})]})]})})}));function ie(){var e=Object(r.useState)(null),t=Object(Y.a)(e,2),n=t[0],a=t[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Q.a,{as:"h1",content:"Test Error component"}),Object(F.jsx)(B.a,{children:Object(F.jsxs)(W.a.Group,{widths:"7",children:[Object(F.jsx)(W.a,{onClick:function(){m.a.get("/apibuggy/not-found").catch((function(e){return console.log(e.response)}))},content:"Not Found",basic:!0,primary:!0}),Object(F.jsx)(W.a,{onClick:function(){m.a.get("/apibuggy/bad-request").catch((function(e){return console.log(e.response)}))},content:"Bad Request",basic:!0,primary:!0}),Object(F.jsx)(W.a,{onClick:function(){m.a.post("/apiapps",{}).catch((function(e){return a(e)}))},content:"Validation Error",basic:!0,primary:!0}),Object(F.jsx)(W.a,{onClick:function(){m.a.get("/apibuggy/server-error").catch((function(e){return console.log(e.response)}))},content:"Server Error",basic:!0,primary:!0}),Object(F.jsx)(W.a,{onClick:function(){m.a.get("/apibuggy/unauthorised").catch((function(e){return console.log(e.response)}))},content:"Unauthorised",basic:!0,primary:!0}),Object(F.jsx)(W.a,{onClick:function(){m.a.get("/apiapps/notaguid").catch((function(e){return console.log(e)}))},content:"Bad Guid",basic:!0,primary:!0})]})}),n&&Object(F.jsx)(ae,{errors:n})]})}var se=n(109);function le(){return Object(F.jsxs)(B.a,{placeholder:!0,children:[Object(F.jsxs)(Q.a,{icon:!0,children:[Object(F.jsx)(se.a,{name:"search"}),"Oops - we've looked everywhere but could not find this."]}),Object(F.jsx)(B.a.Inline,{children:Object(F.jsx)(W.a,{as:s.a,to:"/apps",primary:!0,children:"Return to Apps dashboard"})})]})}var ue=Object(i.a)((function(){var e,t,n=E().commonStore;return Object(F.jsxs)(c.a,{children:[Object(F.jsx)(Q.a,{as:"h1",content:"Server Error"}),Object(F.jsx)(Q.a,{sub:!0,as:"h5",color:"red",content:null===(e=n.error)||void 0===e?void 0:e.message}),(null===(t=n.error)||void 0===t?void 0:t.details)&&Object(F.jsxs)(B.a,{children:[Object(F.jsx)(Q.a,{as:"h4",content:"Stack trace",color:"teal"}),Object(F.jsx)("code",{style:{marginTop:"10px"},children:n.error.details})]})]})}));function je(){console.log("something")}function de(e){var t=e.target;t.name,t.value}function pe(){var e=Object(r.useState)({category:"general",message:""}),t=Object(Y.a)(e,2);t[0],t[1];return Object(F.jsx)(B.a,{clearing:!0,children:Object(F.jsxs)(Z.a,{onSubmit:je,autoComplete:"off",children:[Object(F.jsx)(Z.a.Input,{placeholder:"Category",name:"category",onChange:de}),Object(F.jsx)(Z.a.TextArea,{placeholder:"Message",name:"body",onChange:de})]})})}var be=n(387),he=Object(i.a)((function(){var e=E().modalStore;return Object(F.jsx)(be.a,{open:e.modal.open,onClose:e.closeModal,size:"mini",children:Object(F.jsx)(be.a.Content,{children:e.modal.body})})})),fe=n(395);function Oe(e){var t=Object(X.d)(e.name),n=Object(Y.a)(t,2),r=n[0],a=n[1];return Object(F.jsxs)(Z.a.Field,{error:a.touched&&!!a.error,children:[Object(F.jsx)("label",{children:e.label}),Object(F.jsx)("textarea",Object(I.a)(Object(I.a)({},r),e)),a.touched&&a.error?Object(F.jsx)(J.a,{basic:!0,color:"red",children:a.error}):null]})}function xe(e){var t=e.setEditMode,n=E().profileStore,r=n.profile,a=n.updateProfile,o=ne.a({displayName:ne.b().required("The displayName is required")});return Object(F.jsx)(B.a,{clearing:!0,children:Object(F.jsx)(X.c,{enableReinitialize:!0,validationSchema:o,initialValues:{displayName:null===r||void 0===r?void 0:r.displayName,bio:null===r||void 0===r?void 0:r.bio},onSubmit:function(e){a(e).then((function(){return t(!1)}))},children:function(e){var t=e.handleSubmit,n=e.isValid,r=e.isSubmitting,a=e.dirty;return Object(F.jsxs)(X.b,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(F.jsx)(ee,{name:"displayName",placeholder:"Display Name"}),Object(F.jsx)(Oe,{name:"bio",placeholder:"",rows:3}),Object(F.jsx)(W.a,{disabled:r||!a||!n,loading:r,floated:"right",positive:!0,type:"submit",content:"Update Profile"})]})}})})}var me=Object(i.a)((function(){var e=Object(r.useState)(!1),t=Object(Y.a)(e,2),n=t[0],a=t[1],o=E().profileStore,c=o.isCurrentUser,i=o.profile;return Object(F.jsx)(fe.a.Pane,{children:Object(F.jsxs)(U.a,{children:[Object(F.jsxs)(U.a.Column,{width:16,children:[Object(F.jsx)(Q.a,{floated:"left",icon:"user",content:"About ".concat(i.displayName)}),c&&Object(F.jsx)(W.a,{floated:"right",basic:!0,content:n?"Cancel":"Edit Profile",onClick:function(){return a(!n)}})]}),Object(F.jsx)(U.a.Column,{width:16,children:n?Object(F.jsx)(xe,{setEditMode:a}):Object(F.jsx)("span",{style:{whiteSpace:"pre-wrap"},children:i.bio})})]})})})),ge=n(220);n(370);function ve(e){var t=e.imagePreview,n=e.setCropper;return Object(F.jsx)(ge.a,{src:t,style:{height:200,width:"100%"},initialAspectRatio:1,aspectRatio:1,preview:".img-preview",guides:!1,viewMode:1,autoCropArea:1,background:!1,onInitialized:function(e){return n(e)}})}var we=n(224);function ye(e){var t=e.setFiles,n={border:"dashed 3px #eee",borderColor:"#eee",borderRadius:"5px",paddingTop:"30px",textAlign:"center",height:200},a=Object(r.useCallback)((function(e){t(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[t]),o=Object(we.a)({onDrop:a}),c=o.getRootProps,i=o.getInputProps,s=o.isDragActive;return Object(F.jsxs)("div",Object(I.a)(Object(I.a)({},c()),{},{style:s?Object(I.a)(Object(I.a)({},n),{borderColor:"green"}):n,children:[Object(F.jsx)("input",Object(I.a)({},i())),Object(F.jsx)(se.a,{name:"upload",size:"huge"}),Object(F.jsx)(Q.a,{content:"Drop image here"})]}))}function Se(e){var t=e.loading,n=e.uploadPhoto,a=Object(r.useState)([]),o=Object(Y.a)(a,2),c=o[0],i=o[1],s=Object(r.useState)(),l=Object(Y.a)(s,2),u=l[0],j=l[1];return Object(r.useEffect)((function(){return function(){c.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[c]),Object(F.jsxs)(U.a,{children:[Object(F.jsxs)(U.a.Column,{width:4,children:[Object(F.jsx)(Q.a,{sub:!0,color:"teal",content:"Step 1 - Add Photo"}),Object(F.jsx)(ye,{setFiles:i})]}),Object(F.jsx)(U.a.Column,{width:1}),Object(F.jsxs)(U.a.Column,{width:4,children:[Object(F.jsx)(Q.a,{sub:!0,color:"teal",content:"Step 2 - Resize image"}),c&&c.length>0&&Object(F.jsx)(ve,{setCropper:j,imagePreview:c[0].preview})]}),Object(F.jsx)(U.a.Column,{width:1}),Object(F.jsxs)(U.a.Column,{width:4,children:[Object(F.jsx)(Q.a,{sub:!0,color:"teal",content:"Step 3 - Preview & Upload"}),c&&c.length>0&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"img-preview",style:{minHeight:200,overflow:"hidden"}}),Object(F.jsxs)(W.a.Group,{widths:2,children:[Object(F.jsx)(W.a,{loading:t,onClick:function(){u&&u.getCroppedCanvas().toBlob((function(e){return n(e)}))},positive:!0,icon:"check"}),Object(F.jsx)(W.a,{disabled:t,onClick:function(){return i([])},icon:"close"})]})]})]})]})}var ke=Object(i.a)((function(e){var t,n=e.profile,a=E().profileStore,o=a.isCurrentUser,c=a.uploadPhoto,i=a.uploading,s=a.loading,l=a.setMainPhoto,j=a.deletePhoto,d=Object(r.useState)(!1),p=Object(Y.a)(d,2),b=p[0],h=p[1],f=Object(r.useState)(""),O=Object(Y.a)(f,2),x=O[0],m=O[1];return Object(F.jsx)(fe.a.Pane,{children:Object(F.jsxs)(U.a,{children:[Object(F.jsxs)(U.a.Column,{width:16,children:[Object(F.jsx)(Q.a,{floated:"left",icon:"image",content:"Photos"}),o&&Object(F.jsx)(W.a,{floated:"right",basic:!0,content:b?"Cancel":"Add Photo",onClick:function(){return h(!b)}})]}),Object(F.jsx)(U.a.Column,{width:16,children:b?Object(F.jsx)(Se,{uploadPhoto:function(e){c(e).then((function(){return h(!1)}))},loading:i}):Object(F.jsx)(V.a.Group,{itemsPerRow:5,children:null===(t=n.photos)||void 0===t?void 0:t.map((function(e){return Object(F.jsxs)(V.a,{children:[Object(F.jsx)(u.a,{src:e.url}),o&&Object(F.jsxs)(W.a.Group,{fluid:!0,widths:2,children:[Object(F.jsx)(W.a,{basic:!0,color:"green",content:"Main",name:"main"+e.id,disabled:e.isMain,loading:x==="main"+e.id&&s,onClick:function(t){return function(e,t){m(t.currentTarget.name),l(e)}(e,t)}}),Object(F.jsx)(W.a,{basic:!0,color:"red",icon:"trash",loading:x===e.id&&s,onClick:function(t){return function(e,t){m(t.currentTarget.name),j(e)}(e,t)},disabled:e.isMain,name:e.id})]})]},e.id)}))})})]})})})),Ce=Object(i.a)((function(e){var t=e.profile,n=[{menuItem:"About",render:function(){return Object(F.jsx)(fe.a.Pane,{children:Object(F.jsx)(me,{})})}},{menuItem:"Photos",render:function(){return Object(F.jsx)(ke,{profile:t})}},{menuItem:"Settings",render:function(){return Object(F.jsx)(fe.a.Pane,{children:"Settings Content"})}}];return Object(F.jsx)(fe.a,{menu:{fluid:!0,vertical:!0},menuPosition:"right",panes:n})})),Pe=Object(i.a)((function(e){var t=e.profile;return Object(F.jsx)(B.a,{children:Object(F.jsx)(U.a,{children:Object(F.jsx)(U.a.Column,{width:16,children:Object(F.jsx)(H.a.Group,{children:Object(F.jsxs)(H.a,{children:[Object(F.jsx)(H.a.Image,{avatar:!0,size:"small",src:t.image||"/assets/user.png"}),Object(F.jsx)(H.a.Content,{verticalAlign:"middle",children:Object(F.jsx)(Q.a,{as:"h1",content:t.displayName})})]})})})})})})),Ie=Object(i.a)((function(){var e=Object(D.h)().userName,t=E().profileStore,n=t.loadingProfile,a=t.loadProfile,o=t.profile;return Object(r.useEffect)((function(){a(e)}),[a,e]),n?Object(F.jsx)(z,{content:"Loading profile..."}):Object(F.jsx)(U.a,{children:Object(F.jsx)(U.a.Column,{width:16,children:o&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Pe,{profile:o}),Object(F.jsx)(Ce,{profile:o})]})})})})),Ae=n(225),Le=["component"];function Ne(e){var t=e.component,n=Object(Ae.a)(e,Le),r=E().userStore.isLoggedIn;return Object(F.jsx)(D.b,Object(I.a)(Object(I.a)({},n),{},{render:function(e){return r?Object(F.jsx)(t,Object(I.a)({},e)):Object(F.jsx)(D.a,{to:"/"})}}))}var Me=Object(i.a)((function(){var e=E(),t=e.commonStore,n=e.userStore;return Object(r.useEffect)((function(){t.token?n.getUser().finally((function(){return t.setAppLoaded()})):t.setAppLoaded()}),[t,n]),t.appLoaded?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(g.a,{position:"bottom-right",hideProgressBar:!0}),Object(F.jsx)(he,{}),Object(F.jsx)(D.b,{exact:!0,path:"/",component:ce}),Object(F.jsx)(D.b,{path:"/(.+)",render:function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(R,{}),Object(F.jsx)(c.a,{style:{marginTop:"7em"},children:Object(F.jsxs)(D.d,{children:[Object(F.jsx)(Ne,{exact:!0,path:"/apps",component:K}),Object(F.jsx)(Ne,{path:"/apps/:id",component:G}),Object(F.jsx)(Ne,{path:"/profiles/:userName",component:Ie}),Object(F.jsx)(Ne,{path:"/feedback",component:pe}),Object(F.jsx)(Ne,{path:"/errors",component:ie}),Object(F.jsx)(D.b,{path:"/server-error",component:ue}),Object(F.jsx)(D.b,{component:le})]})})]})}})]}):Object(F.jsx)(z,{content:"Loading app..."})})),Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,396)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},Fe=n(30);function Re(){var e=Object(D.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Ue=Object(Fe.a)();o.a.render(Object(F.jsx)(M.Provider,{value:N,children:Object(F.jsxs)(D.c,{history:Ue,children:[Object(F.jsx)(Re,{}),Object(F.jsx)(Me,{})]})}),document.getElementById("root")),Ee()}},[[371,1,2]]]);
//# sourceMappingURL=main.5ef42783.chunk.js.map