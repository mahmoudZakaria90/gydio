(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Gydio/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"029b":function(e,t,a){},"0a6f":function(e,t,a){"use strict";var r=a("029b"),s=a.n(r);s.a},"1a63":function(e,t,a){"use strict";var r=a("9bf4"),s=a.n(r);s.a},"1ddf":function(e,t,a){"use strict";var r=a("a8bd"),s=a.n(r);s.a},"29c0":function(e,t,a){},"2f9c":function(e,t,a){"use strict";var r=a("5c9d"),s=a.n(r);s.a},4554:function(e,t,a){},"49e7":function(e,t,a){"use strict";var r=a("907b"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},n=[],o={},i=o,c=a("2877"),l=Object(c["a"])(i,s,n,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{scopedSlots:e._u([{key:"nav-left",fn:function(){return[a("router-link",{attrs:{to:"/explore"}},[e._v("Explore")])]},proxy:!0}])}),a("div",{staticClass:"uploader container"},[e._m(0),a("h2",{staticClass:"uploader-title"},[e._v("Upload your fav track.")]),a("div",{staticClass:"uploader-placeholder"},[a("input",{attrs:{id:"file_uploader",type:"file",disabled:e.database.externalLink||e.storage.isProgress,hidden:""},on:{change:e.handleFile}}),a("label",{staticClass:"uploader-placeholder-btn",attrs:{for:"file_uploader"}},[e._v(" Choose file "),a("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}})],1),a("span",[e._v(e._s(e.storage.fileName))]),a("p",[e._v("Or")])]),a("div",{staticClass:"external-link"},[a("div",{staticClass:"external-link-inner"},[a("label",{attrs:{for:""}},[e._v("Copy/paste an external link e.g. youtube")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.database.externalLink,expression:"database.externalLink"}],attrs:{type:"text",disabled:e.storage.blob},domProps:{value:e.database.externalLink},on:{change:e.validateURL,input:function(t){t.target.composing||e.$set(e.database,"externalLink",t.target.value)}}}),e.database.isValid?a("font-awesome-icon",{style:{color:"lightgreen"},attrs:{icon:["fas","check-circle"]}}):e._e(),e.database.isError?a("p",{staticClass:"error"},[e._v(e._s(e.database.errorMsg))]):e._e()],1)]),e.storage.isProgress?a("div",{staticClass:"progress-outer"},[a("ProgressState",{attrs:{progressState:e.storage.progressState,isSuccess:e.storage.isSuccess,isCancelled:e.storage.isCancelled}}),a("div",{staticClass:"progress"},[a("span",[e._v(e._s(e.storage.progress)+"%")]),a("span",{staticClass:"progress-inner",style:{width:e.storage.progress+"%"}}),a("span",{ref:"cancelUploadEl"},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]),a("p",{domProps:{innerHTML:e._s(e.storage.bytesTransferred/1e6+"/"+e.storage.totalBytes/1e6+" MB")}})],1):e._e(),a("div",{staticClass:"uploader-btn-wrap"},[a("button",e._g({staticClass:"uploader-btn",attrs:{disabled:!e.storage.blob&&!e.database.externalLink||e.database.isError||e.storage.isProgress}},{click:e.storage.blob?e.upload_storage:e.upload_database}),[e._v(" Upload "),a("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"]}})],1),e.database.isSuccess?a("ProgressState",{attrs:{progressState:e.database.progressState,isSuccess:e.database.isSuccess}}):e._e()],1)])],1)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("h1",[e._v("Gydio")]),a("p",[e._v("Your favorite place for Music, themes and soundtracks of Gaming.")])])}],m=(a("4160"),a("b0c0"),a("ac1f"),a("466d"),a("1276"),a("159b"),a("3835")),b=(a("96cf"),a("1da1")),g=a("59ca"),v=a.n(g),h=(a("66ce"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{class:{isCancelled:e.isCancelled}},[e._v(" "+e._s(e.progressState)+" "),e.isSuccess?a("font-awesome-icon",{style:{color:"lightgreen"},attrs:{icon:["fas","check-circle"]}}):e._e()],1)}),w=[],_={props:{progressState:String,isSuccess:Boolean,isCancelled:Boolean}},x=_,y=(a("1a63"),Object(c["a"])(x,h,w,!1,null,"38c1cc64",null)),k=y.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",{staticClass:"nav"},[e._t("nav-left"),a("ul",{staticClass:"nav-right"},[e._m(0),a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],2)])])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:""}},[e._v("Login")])])}],C={},E=C,T=(a("2f9c"),Object(c["a"])(E,S,P,!1,null,"35596105",null)),j=T.exports,O={name:"Uploader",components:{ProgressState:k,Header:j},data:function(){return{storage:{blob:null,progress:0,bytesTransferred:0,totalBytes:0,progressState:null,fileName:null,isProgress:!1,isSuccess:!1,storage:!1},database:{externalLink:null,progressState:null,isSuccess:!1,isError:!1,isValid:!1,errorMsg:"You need to input a vaild youtube video URL.",pattern:/https:\/\/www.youtube.com\/watch\?v=\w+/g}}},methods:{handleFile:function(e){var t,a=e.target;if(a.files.length){t=a.files[0];var r=t,s=r.name;this.storage.blob=t,this.storage.fileName=s}},upload_storage:function(){var e=this;this.database.progressState=null,this.database.isSuccess=!1;var t=this.storage.blob.name,a=v.a.storage().ref("music/"+t),r=a.put(this.storage.blob);this.cancelUpload=function(){e.$refs.cancelUploadEl&&e.$refs.cancelUploadEl.addEventListener("click",(function(){return r.cancel()}))},r.on("state_changed",(function(a){var r=a.bytesTransferred,s=a.totalBytes,n=a.state;if("running"===n){var o=Math.floor(r/s*100);e.storage.progressState="Uploading ".concat(t," to Firebase storage..."),e.storage.progress=o,e.storage.bytesTransferred=r,e.storage.totalBytes=s,e.storage.isProgress=!0}}),(function(t){e.storage.isCancelled=!0,e.storage.progressState=t.message,e.resetState("storage",[{key:"isProgress",value:!1}],2e3)}),(function(){e.storage.progressState="Uploading is done successfully",e.storage.isSuccess=!0,e.resetState("storage",[{key:"blob",value:null},{key:"isProgress",value:!1},{key:"fileName",value:null}],2e3)}))},upload_database:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.storage.isProgress=!1,e.storage.progressState=null,e.storage.isSuccess=!1,a=e.database.externalLink.match(e.database.pattern),r=Object(m["a"])(a,1),s=r[0],n=s.split("watch?v="),o=Object(m["a"])(n,2),i=o[1],c=e.database.externalLink.match(e.database.pattern),l=Object(m["a"])(c,1),u=l[0],t.next=8,v.a.database().ref("music/"+i).set({videoURL:u});case 8:e.database.progressState="Video url uploaded successfully!",e.database.isSuccess=!0,e.resetState("database",[{key:"isError",value:!1},{key:"isValid",value:!1},{key:"isSuccess",value:!1},{key:"externalLink",value:""}],2e3);case 11:case"end":return t.stop()}}),t)})))()},cancelUpload:function(){},resetState:function(e,t,a){var r=this;t.forEach((function(t){setTimeout((function(){r[e][t.key]=t.value}),a)}))},validateURL:function(){if(!this.database.pattern.test(this.database.externalLink))return this.database.externalLink?(this.database.isError=!0,void(this.database.isValid=!1)):void(this.database.isError=!1);this.database.isError=!1,this.database.isValid=!0}},updated:function(){this.cancelUpload()}},V=O,L=(a("8c51"),Object(c["a"])(V,p,f,!1,null,"e26d09f6",null)),U=L.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{scopedSlots:e._u([{key:"nav-left",fn:function(){return[a("router-link",{attrs:{to:"/"}},[e._v("Back")])]},proxy:!0}])}),a("div",{staticClass:"container"},[e.tracks||e.externalTracks?e._e():a("p",[e._v("No tracks to show please upload some!")]),e.tracks?a("h1",[e._v("Explore")]):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-4"}},e._l(e.tracks,(function(t){return a("Track",{key:t,attrs:{name:t,callback:e.changeSelectedTrack}})})),1)],1),a("div",{staticClass:"container"},[e.externalTracks?a("h1",[e._v("External videos 'Youtube'")]):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-6"}},e._l(e.externalTracks,(function(e){return a("ExternalTrack",{key:e.id,attrs:{videoURL:e.videoURL}})})),1)],1),a("audio",{attrs:{src:e.selectedTrack,autoplay:"",controls:"",controlslist:"nodownload"}})],1)},$=[],M=(a("d81d"),a("4fad"),a("d3b7"),a("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrapper",class:[e.basis,{container:e.container}],style:e.container&&{"max-width":e.container+"px"}},[e.row?a("div",{staticClass:"row"},[e._t("default")],2):e._t("default")],2)}),B=[],A=(a("a9e3"),{props:{basis:String,row:Boolean,container:Number}}),N=A,I=(a("843b"),Object(c["a"])(N,M,B,!1,null,"5bac3893",null)),H=I.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track col",on:{click:function(){return e.callback(e.name)}}},[a("div",{staticClass:"track-placeholder"},[a("img",{attrs:{src:e.img||e.placeholder,alt:""}})]),a("div",{staticClass:"track-name",attrs:{title:e.name}},[e._v(e._s(e.name))])])},D=[],W=a("ab9f"),z=a.n(W),F={props:{name:String,img:String,callback:Function},data:function(){return{placeholder:z.a}}},G=F,Y=(a("1ddf"),Object(c["a"])(G,q,D,!1,null,"008e8575",null)),Z=Y.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("iframe",{staticClass:"col",attrs:{height:"315","same-origin":"",src:e.videoURL,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})},K=[],Q={props:{videoURL:String}},X=Q,ee=Object(c["a"])(X,J,K,!1,null,null,null),te=ee.exports,ae={name:"Explore",components:{Header:j,Track:Z,TrackWrapper:H,ExternalTrack:te},data:function(){return{tracks:null,selectedTrack:null,externalTracks:null}},methods:{changeSelectedTrack:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=v.a.storage().ref("music/"+e),a.next=3,r.getDownloadURL();case 3:t.selectedTrack=a.sent;case 4:case"end":return a.stop()}}),a)})))()}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=v.a.storage().ref("music"),t.next=3,a.listAll();case 3:return r=t.sent,s=r.items,e.tracks=s&&s.map((function(e){return e.name})),t.next=8,fetch("https://musicstream-cb9d3.firebaseio.com/music.json");case 8:return n=t.sent,t.next=11,n.json();case 11:o=t.sent,e.externalTracks=o&&Object.entries(o).map((function(e){var t=Object(m["a"])(e,2),a=t[0],r=t[1].videoURL,s=r.replace("watch?v=","embed/");return{id:a,videoURL:s}}));case 13:case"end":return t.stop()}}),t)})))()}},re=ae,se=(a("0a6f"),Object(c["a"])(re,R,$,!1,null,"2db8602e",null)),ne=se.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Register")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("TextInput",{attrs:{label:"Email",isValid:e.isEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e.isSubmitted&&!Boolean(e.email)?a("Message",{attrs:{color:"red",text:"Please enter your email address.",icon:["far","times-circle"]}}):e._e(),a("TextInput",{attrs:{label:"Password",inputType:"password",isValid:e.matchPassword},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.isSubmitted&&!e.password?a("Message",{attrs:{color:"red",text:"Please enter your password.",icon:["far","times-circle"]}}):e._e(),a("TextInput",{attrs:{label:"Confirm password",inputType:"password",isValid:e.matchPassword},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),e.isSubmitted&&!e.matchPassword?a("Message",{attrs:{color:"red",text:"Please match your passwords.",icon:["far","times-circle"]}}):e._e(),a("div",{staticStyle:{"text-align":"center"}},[a("button",{on:{click:e.handleSubmit}},[e._v("Submit")])]),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been created successfully"}}):e._e(),e.error?a("Message",{attrs:{color:"red",text:e.error.message}}):e._e()]},proxy:!0}])})},ie=[],ce=(a("ea7b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog-outer"},[a("div",{staticClass:"dialog-inner"},[a("h1",{staticClass:"dialog-title"},[e._t("dialog-title")],2),a("div",{staticClass:"dialog-body"},[e._t("dialog-body")],2)])])}),le=[],ue={},de=ue,pe=(a("49e7"),Object(c["a"])(de,ce,le,!1,null,"7fa13743",null)),fe=pe.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{style:{color:e.color}},[a("span",[e._v(e._s(e.text))]),e.icon?a("font-awesome-icon",{attrs:{icon:e.icon}}):e._e()],1)},be=[],ge={props:{text:String,color:String,icon:Array}},ve=ge,he=Object(c["a"])(ve,me,be,!1,null,null,null),we=he.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{staticClass:"text-input-label"},[e._v(e._s(e.label))]),e.isValid?a("font-awesome-icon",{attrs:{icon:["fas","check-circle"]}}):e._e(),"checkbox"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVal,expression:"newVal"}],staticClass:"text-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.newVal)?e._i(e.newVal,null)>-1:e.newVal},on:{change:function(t){var a=e.newVal,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);r.checked?o<0&&(e.newVal=a.concat([n])):o>-1&&(e.newVal=a.slice(0,o).concat(a.slice(o+1)))}else e.newVal=s}}}):"radio"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVal,expression:"newVal"}],staticClass:"text-input",attrs:{type:"radio"},domProps:{checked:e._q(e.newVal,null)},on:{change:function(t){e.newVal=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVal,expression:"newVal"}],staticClass:"text-input",attrs:{type:e.inputType||"text"},domProps:{value:e.newVal},on:{input:function(t){t.target.composing||(e.newVal=t.target.value)}}})],1)},xe=[],ye={props:{label:{type:String,required:!0},inputType:{type:String,required:!1},value:{type:String,required:!0},isValid:{type:Boolean,required:!0}},data:function(){return{newVal:this.value}},watch:{newVal:function(){this.$emit("input",this.newVal)}}},ke=ye,Se=(a("f1c3"),Object(c["a"])(ke,_e,xe,!1,null,"3dd7c4ee",null)),Pe=Se.exports,Ce={name:"Register",components:{Dialog:fe,Message:we,TextInput:Pe},data:function(){return{email:"",password:"",confirmPassword:"",isSubmitted:null,isSuccess:null,error:""}},computed:{isEmail:function(){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Boolean(this.email)&&e.test(this.email)},matchPassword:function(){return Boolean(this.password)&&Boolean(this.confirmPassword)&&this.password===this.confirmPassword}},methods:{handleSubmit:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,!e.isEmail||!e.matchPassword){t.next=13;break}return t.prev=2,t.next=5,v.a.auth().createUserWithEmailAndPassword(e.email,e.password);case 5:e.isSuccess=!0,setTimeout((function(){e.$router.push("/")}),3e3),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),e.isSuccess=!1,e.error=t.t0;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()}}},Ee=Ce,Te=Object(c["a"])(Ee,oe,ie,!1,null,null,null),je=Te.exports;r["a"].use(d["a"]);var Oe=[{path:"/",component:U},{path:"/explore",component:ne},{path:"/register",component:je}],Ve=new d["a"]({routes:Oe}),Le=(a("588e"),a("ecee")),Ue=a("c074"),Re=a("b702"),$e=a("ad3d");a("a058");Le["c"].add(Ue["c"],Ue["b"],Ue["a"],Re["a"]),r["a"].component("font-awesome-icon",$e["a"]);var Me={apiKey:"AIzaSyBcgNUdZo31IDTvypMjfHvPPms3EPWAycM",authDomain:"musicstream-cb9d3.firebaseapp.com",databaseURL:"https://musicstream-cb9d3.firebaseio.com",projectId:"musicstream-cb9d3",storageBucket:"musicstream-cb9d3.appspot.com",messagingSenderId:"801591518704",appId:"1:801591518704:web:fe152ffb22de13e8fc2935"};v.a.initializeApp(Me),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)},router:Ve}).$mount("#app")},"5c9d":function(e,t,a){},"843b":function(e,t,a){"use strict";var r=a("4554"),s=a.n(r);s.a},"8c51":function(e,t,a){"use strict";var r=a("c307"),s=a.n(r);s.a},"907b":function(e,t,a){},"9bf4":function(e,t,a){},a058:function(e,t,a){},a8bd:function(e,t,a){},ab9f:function(e,t,a){e.exports=a.p+"img/Placeholder.ce8c463a.svg"},c307:function(e,t,a){},f1c3:function(e,t,a){"use strict";var r=a("29c0"),s=a.n(r);s.a}});
//# sourceMappingURL=app.4aa0e60c.js.map